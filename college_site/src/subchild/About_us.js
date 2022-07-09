import React, { useEffect, useState } from 'react';
import './About_us.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { getDatabase, onValue, ref, set } from "firebase/database";
import app from "../firebase.js"
import { async } from '@firebase/util';


const About_us = () =>{

    const db = getDatabase(app)
    const read = ref(db,'About_US/');
    let Heading= ""
    let description = ""

    const [heading , setTodo] =  useState("About Us");
    const [desc , setTodos] = useState("Info about GCET Jammu")
     
    useEffect (()=>{
      onValue(read,(snapshot)=>{
        const data = snapshot.val()
        console.log(data.Description)
        console.log(data.Heading)
        setTodos(data.Description)
        setTodo(data.Heading)
      })
    },[]);
    

  return (
    <div className='About_us'>
      <>

      </>
      <div className="Introduction">
 
        <h1>{heading}</h1>
        <p>{desc}</p>

      </div>
			</div>
		
    
  );
}
export default About_us;
