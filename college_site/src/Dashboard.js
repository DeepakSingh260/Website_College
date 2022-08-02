import React, { useEffect, useState ,useRef} from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { auth, db, logout ,app} from "./firebase";
import { getDatabase, onValue, push, ref, set } from "firebase/database";
import { query, collection, getDocs, where } from "firebase/firestore";

import { getStorage, ref as refer, uploadBytes, uploadBytesResumable } from "firebase/storage";

const storage = getStorage(app);


function update(event,text){
  const database = getDatabase(app)
   const reference = ref(database , "Notifications/")
   const new_update = {
    Title:text
   }
   push(reference,new_update)
  
  alert(text)
}

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  let state = {
    text:"",
    selectedFile:null
  };
  const handleInput = event => {
    state.text = event.target.value
  };

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
    const storageRef = refer(storage, String(state.selectedFile.name));
    uploadBytes(storageRef, state.selectedFile).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    });
    
}

  return (
    <div >
      <h1>Notification Update</h1>
      <form className="update_form">
        <label>
          Update:
          <input type="text" onChange={handleInput} name="Update" />
        </label>
        <button onClick={(e) => {
      update(e, state.text);
   }}  style={{float:"left"}}>Push</button>
       
      </form>
      

<input type="file"  ref={fileInput} onChange={fileChanged} />
            <button onClick={selectFile} className='btn btn-primary' >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cloud-upload m-1" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z" />
                    <path fill-rule="evenodd" d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z" />
                </svg>
                <span className='ms-2' >Upload</span>
            </button>

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
