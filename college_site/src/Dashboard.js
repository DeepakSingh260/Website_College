import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { auth, db, logout ,app} from "./firebase";
import { getDatabase, onValue, push, ref, set } from "firebase/database";
import { query, collection, getDocs, where } from "firebase/firestore";



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
    text:""
  };
  const handleInput = event => {
    state.text = event.target.value
  };

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

  return (
    <div >
      <h1>Notification Update</h1>
      <form className="update_form">
        <label>
          Update:
          <input type="text" onChange={handleInput} name="Update" />
        </label>
       
      </form>
      <button onClick={(e) => {
      update(e, state.text);
   }}>Push</button>

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
