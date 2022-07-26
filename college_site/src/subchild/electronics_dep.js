import React, { useEffect, useState } from 'react';
import './electronics_dep.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { getDatabase, onValue, ref, set } from "firebase/database";
import app from "../firebase.js"
import { async } from '@firebase/util';
import gcet_1 from '../Assets/Garden.jpg';
import gcet_2 from '../Assets/Lab1.jpg';
import gcet_3 from '../Assets/gcet_3.jpg';
import gcet_4 from '../Assets/Mechanical1.jpg';
import Department_Image from '../Assets/civil_dep.jpg';
import CLUB_LOGO from '../Assets/gcet_6.jpg';
import Imageslider from '../components/imageSlider';
import TextAnim from '../components/fade_in_text_anim_home';



const E_C_dep = () =>{

    const db = getDatabase(app)
    const read = ref(db,'Departments/Electronics/');
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
    <div className='e_c_dep'>
      <div className='comp_slider'>
        <div className='col-lg-12 text-center' >
      <TextAnim/>
          <Imageslider href={[gcet_1, gcet_2, gcet_3, gcet_4, Department_Image, CLUB_LOGO]}/>
        </div>
      </div>
      
      <div>
 
        <h1  className="Introduction">{heading}</h1>
        <p className='desc'>{desc}</p>

      </div>
			</div>
		
    
  );
}
export default E_C_dep;

