import React, { useEffect, useState, useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { auth, db, logout, app } from "./firebase";
import { getDatabase, onValue, push, ref, set } from "firebase/database";
import { query, collection, getDocs, where } from "firebase/firestore";

import { getDownloadURL, getStorage, ref as refer, uploadBytes, uploadBytesResumable } from "firebase/storage";

import Notifications from "./components/list_notifications";
import { get, nodeName } from "jquery";

const storage = getStorage(app);


function update(event, text, bod, lk) {
  event.preventDefault()
  const database = getDatabase(app)
  
  const date = new Date()
  const current_date = date.getDate().toString()+"-"+(date.getMonth()+1).toString()+"-"+date.getFullYear().toString()
  console.log("Date Today"+current_date)
  const reference = ref(database, "Notifications/"+current_date)
  const new_update = {
    Title: String(text),
    Body: String(bod),
    PdfLink: String(lk)
  }
  alert(text)
  push(reference, new_update).then((val) => {
    console.log("finish")
  })


}

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  let state = {
    title: "",
    body: "",
    pdf: null,
    pdfLink: "",
    selectedFile: null
  };
  const handleInput = event => {
    state.title = event.target.value
  };
  const handleBody = event => {
    state.body = event.target.value
  }
  const handlePDF = event => {
    state.pdf = event.target.files[0]
    console.log(state.pdf.name)
  }

  const fileChanged = event => {
    state.selectedFile = event.target.files[0]
    console.log(state.selectedFile.name)
  }

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");

    fetchUserName();
  }, [user, loading]);
  const fileInput = useRef();
  const selectFile = () => {
    const storageRef = refer(storage, String("placement_list.pdf"));
    uploadBytes(storageRef, state.selectedFile).then((snapshot) => {
      console.log('Uploaded the pdf file!');
    });

  }
  const updateFile = (e) => {
    e.preventDefault()
    const storageRef = refer(storage, state.pdf.name);
    uploadBytes(storageRef, state.pdf).then((snapshot) => {
      getDownloadURL(storageRef).then((val) => {
        state.pdfLink = val
        console.log("link gotten")
      })
      console.log('Uploaded the pdf file!');
    });

  }

  return (
    <div className="container">
      <div className="create-notification-container">

        <h2 className="heading">Create a Notification</h2>
        <form className="update_form">
          <div className="row">

            <div className="col-lg-5 col-md-12">

              <input className="input_" type="text" placeholder="Title" onChange={handleInput} name="Update" />
              <textarea className="textarea_" cols='40' rows='50' type="text" placeholder="Body" onChange={handleBody} name="Update" />
            </div>
            <div className="col-lg-5 col-md-12">

              <h2 className="sub_heading">Upload PDF</h2  >
              <input className="file_input" type="file" ref={fileInput} onChange={handlePDF} />
              <button onClick={(e) => { updateFile(e); }} className='btn btn-danger' >
                <span className='ms-2' >Upload</span>
              </button>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 ">

              <button onClick={(e) => {
                update(e, state.title, state.body, state.pdfLink);
              }} className="btn btn-danger">Push Notification</button>
            </div>
          </div>

        </form>
      </div>

      <div className="create-notification-container">
        <h2 className="heading">Upload Placement List</h2>

        <input className="file_input" type="file" ref={fileInput} onChange={fileChanged} />
        <button onClick={selectFile} className='btn btn-danger' >

          <span>Upload</span>
        </button>

      </div>
      <div className="create-notification-container">
        <h2 className="heading">Previous Notifications</h2>
        <Notifications></Notifications>

        {/* <input className="file_input" type="file" ref={fileInput} onChange={fileChanged} />
        <button onClick={selectFile} className='btn btn-danger' >

          <span>Upload</span>
        </button> */}

      </div>

      <div className="dashboard">
        <div className="dashboard__container">
          <h2 className="user_">
            <span className="fa fa-user"></span>
          </h2>
          <h3 >{name}</h3>
          <h5 className="label_">{user?.email}</h5>
          <button className="btn btn-secondary" onClick={logout}>
            Logout
          </button>
        </div>
      </div>

    </div >
  );
}

export default Dashboard;
