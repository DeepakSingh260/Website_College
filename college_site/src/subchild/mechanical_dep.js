import React, { useEffect, useState } from 'react';
import './mechanical_dep.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { getDatabase, onValue, ref, set } from "firebase/database";
import app from "../firebase.js"
import { async } from '@firebase/util';


const Mech_dep = () =>{

    const db = getDatabase(app)
    const read = ref(db,'Departments/Mechanical/');
    let Heading= ""
    let description = ""

    const [heading , setTodo] =  useState("Mechanical");
    const [desc , setTodos] = useState("department")
     
    useEffect (()=>{
      onValue(read,(snapshot)=>{
        const data = snapshot.val()

        setTodos(data.Description)
        setTodo(data.Heading)
      })
    },[]);
    

  return (
    <div className='mech_dep'>
      
      <div>
 
        <h1  className="Introduction">{heading}</h1>
        <p className='desc'>{desc}</p>

      </div>
			</div>
		
    
  );
}
export default Mech_dep;

