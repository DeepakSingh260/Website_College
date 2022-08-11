import React, { useEffect, useState ,useRef} from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { auth, db, logout ,app} from "./firebase";
import { getDatabase, onValue, push, ref, set } from "firebase/database";
import { query, collection, getDocs, where } from "firebase/firestore";

import { getDownloadURL, getStorage, ref as refer, uploadBytes, uploadBytesResumable } from "firebase/storage";

const storage = getStorage(app);


function update(event, text , bod , lk){
  event.preventDefault()
  const database = getDatabase(app)
   const reference = ref(database , "Notifications/")
   const new_update = {
    Title:String(text),
    Body:String(bod),
    PdfLink:String(lk)
   }
   alert(text)
   push(reference,new_update).then((val)=>{
    console.log("finish")
   })
  
  
}

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  let state = {
    title:"",
    body:"",
    pdf:null,
    pdfLink : "",
    selectedFile:null
  };
  const handleInput = event => {
    state.title = event.target.value
  };
  const handleBody=event=>{
    state.body = event.target.value
  }
  const handlePDF = event=>{
    state.pdf = event.target.files[0]
    console.log(state.pdf.name)
  }

  const fileChanged = event=>{
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
    getDownloadURL(storageRef).then((val)=>{
      state.pdfLink = val
      console.log("link gotten")
    })
    console.log('Uploaded the pdf file!');
  });
  
}

  return (
    <div >
      <h1>Notification Update</h1>
      <form className="update_form">
        <label>
          Title : 
          <input type="text" onChange={handleInput} name="Update" />
        </label>
        <label>
          Body : 
          <input type="text" onChange={handleBody} name="Update" />
        </label>

        <h3>Upload PDF</h3>
        <input style={{float:"initial-end"}} type="file"  ref={fileInput} onChange={handlePDF} />
            <button style={{float:"initail-start"}} onClick={(e)=>{updateFile(e);}} className='btn btn-primary' >
                
                <span className='ms-2' >Upload</span>
            </button>
        <br/>
        <br/>
        <button style={{float:"left"}}onClick={(e) => {
      update(e, state.title,state.body,state.pdfLink);
   }}  className="btn btn-primary">Push</button>
       
      </form>
      <div>
            <h2 className="tp_class">Upload Placement List</h2>
            
            <input type="file"  ref={fileInput} onChange={fileChanged} />
            <button onClick={selectFile} className='btn btn-primary' >
                
                <span className='ms-2' >Upload</span>
            </button>

      </div>

    <div className="dashboard">
      <div className="dashboard__container">
        Logged in as
        <div>{name}</div>
        <div>{user?.email}</div>
        <button className="dashboard__btn" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
    </div>
  );
}

export default Dashboard;
