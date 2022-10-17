import React,{ useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { getDatabase, onValue, ref, set } from "firebase/database";
import app from "../firebase.js"
import { async } from '@firebase/util';

import gcet_1 from '../Assets/Garden.jpg';
import gcet_2 from '../Assets/Lab1.jpg';
import gcet_3 from '../Assets/gcet_3.jpg';
import gcet_4 from '../Assets/Mechanical1.jpg';
// import Department_Image from '../Assets/Comp_dep.jpg';
import CLUB_LOGO from '../Assets/gcet_6.jpg';
import Imageslider from '../components/imageSlider';
const Human =()=>{
    const db = getDatabase(app)
    const read = ref(db,'Departments/Humanities/');
    let Heading= ""
    let description = ""

    const [heading , setTodo] =  useState("Humanities Department");
    const [desc , setTodos] = useState("department")
     
    useEffect (()=>{
      onValue(read,(snapshot)=>{
        const data = snapshot.val()

        setTodos(data.Description)
        setTodo(data.Heading)
      })
    },[]);
    return(
      <div className="container">
      <div>
        <div className='col-lg-6 text-center' >
          <Imageslider href={[gcet_1, gcet_2, gcet_3, gcet_4, CLUB_LOGO]} />
        </div>
      </div>
      <div>

        <div className="heading text-center">

          <h1>{heading}</h1>
        </div>
        <div className="text_body text-center">

        <p className=''><b>
            {desc}
            </b>
            </p>        </div>
      </div>
        </div>
    )
}

export default Human;