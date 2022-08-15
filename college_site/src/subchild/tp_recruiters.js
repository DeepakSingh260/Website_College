import React, { useEffect, useState } from 'react';
import './About_us.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { getDatabase, onValue, ref, set } from "firebase/database";
import app from "../firebase.js"
import { async } from '@firebase/util';


const Tp_recruiters = () =>{

  return (
    <div className='About_us' style={{marginLeft:"8%" }}>
      <>

      </>
      <div className="Introduction">
 
        <h1>Our Recruiters</h1>
        

      </div>
      <p style={{marginTop:"2%" , fontSize:"1.3em" }}>HINDUSTAN CONSTRUCTION CO.<br/><br/>

TATA TELE SERVICES<br/><br/>

SATYAM COMPUTERS, HYDERABAD<br/><br/>

TATA CONSULTANCY SERVICES<br/><br/>

PUNJ LLOYD, DELHI<br/><br/>

MAHINDRA & MAHINDRA<br/><br/>

MOBERA SYSTEMS CHANDIGARH<br/><br/>

ZTE BANGALORE<br/><br/>

POWER GRID CORPORATION OF INDIA<br/><br/>

CANON, GURGAON<br/><br/>

MAYTAS BOMBAY<br/><br/>

SIMPLEX INFRASTRURCTURES<br/>


</p>
			</div>
		
    
  );
}
export default Tp_recruiters;

