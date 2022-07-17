import React, { useEffect, useState } from 'react';
import './civil_dep.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { getDatabase, onValue, ref, set } from "firebase/database";
import app from "../firebase.js"
import { async } from '@firebase/util';


const Civil_dep = () =>{

    const db = getDatabase(app)
    const read = ref(db,'Departments/Civil/');
    let Heading= ""
    let description = ""

    const [heading , setTodo] =  useState("Civil");
    const [desc , setTodos] = useState("Idepartment")
     
    useEffect (()=>{
      onValue(read,(snapshot)=>{
        const data = snapshot.val()

        setTodos(data.Description)
        setTodo(data.Heading)
      })
    },[]);
    

  return (
    <div className='civil_dep'>
      <>

      </>
      <div >
 
        <h1 className="Introduction">{heading}</h1>
        <p className='desc'>{desc}</p>

      </div>
			</div>
		
    
  );
}
export default Civil_dep;

