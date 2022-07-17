import React, { useEffect, useState } from 'react';
import './comp_dep.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { getDatabase, onValue, ref, set } from "firebase/database";
import app from "../firebase.js"
import { async } from '@firebase/util';


const Comp_dep = () =>{

    const db = getDatabase(app)
    const read = ref(db,'Departments/Computer/');
    let Heading= ""
    let description = ""

    const [heading , setTodo] =  useState("Computer");
    const [desc , setTodos] = useState("department")
     
    useEffect (()=>{
      onValue(read,(snapshot)=>{
        const data = snapshot.val()

        setTodos(data.Description)
        setTodo(data.Heading)
      })
    },[]);
    

  return (
    <div className='comp_dep'>
      <>

      </>
      <div>
 
        <h1  className="Introduction">{heading}</h1>
        <p className='desc'>{desc}</p>

      </div>
			</div>
		
    
  );
}
export default Comp_dep;

