import React, { useEffect, useState } from 'react';
import './About_us.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { getDatabase, onValue, ref, set } from "firebase/database";
import app from "../firebase.js"
import { async } from '@firebase/util';


const tp_placements = () =>{

  return (
    <div className='About_us'>
      <>

      </>
      <div className="Introduction">
 
        <h1>T&P Placements</h1>
        

      </div>
      <p></p>
			</div>
		
    
  );
}
export default tp_placements;

