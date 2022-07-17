import React, { useEffect, useState } from 'react';
import './electrical_dep.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { getDatabase, onValue, ref, set } from "firebase/database";
import app from "../firebase.js"
import { async } from '@firebase/util';


const Elec_dep = () =>{

    const db = getDatabase(app)
    const read = ref(db,'Departments/Electrical/');
    let Heading= ""
    let description = ""

    const [heading , setTodo] =  useState("Electrical");
    const [desc , setTodos] = useState("department")
     
    useEffect (()=>{
      onValue(read,(snapshot)=>{
        const data = snapshot.val()

        setTodos(data.Description)
        setTodo(data.Heading)
      })
    },[]);
    

  return (
    <div className='elec_dep'>
      
      <div>
 
        <h1  className="Introduction">{heading}</h1>
        <p className='desc'>{desc}</p>

      </div>
			</div>
		
    
  );
}
export default Elec_dep;

