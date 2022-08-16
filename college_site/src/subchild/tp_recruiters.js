import React, { useEffect, useState } from 'react';
import './About_us.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../components/card'
import nss from '../Assets/card_imgs/nsslogo.png'
import './civil_dep.css';
import maroon from '../Assets/card_imgs/maroon.png'
import yellow from '../Assets/card_imgs/yellow.png'
import green from '../Assets/card_imgs/green.png'
import violet from '../Assets/card_imgs/violet.png'


import { getDatabase, onValue, ref, set } from "firebase/database";
import app from "../firebase.js"
import { async } from '@firebase/util';


const Tp_recruiters = () => {

  return (
    <div className='About_us container'>
      <>

      </>
      <div className="heading text-center Introduction">

        <h1>Our Recruiters</h1>

      </div>
      <div className='row justify-content-center cards'>

        <Card id='card_img_no_link noborder' name='HINDUSTAN CONSTRUCTION CO.' href={maroon} external='False' />
        <Card id='card_img_no_link noborder' name='TATA TELE SERVICES' href={green} external='False' />
        <Card id='card_img_no_link noborder' name='SATYAM COMPUTERS, HYDERABAD' href={violet} external='False' />
        <Card id='card_img_no_link noborder' name='TATA CONSULTANCY SERVICES' href={yellow} external='False' />
        <Card id='card_img_no_link noborder' name='PUNJ LLOYD, DELHI' href={violet} external='False' />
        <Card id='card_img_no_link noborder' name='MAHINDRA & MAHINDRA' href={maroon} external='False' />
        <Card id='card_img_no_link noborder' name='MOBERA SYSTEMS CHANDIGARH' href={yellow} external='False' />
        <Card id='card_img_no_link noborder' name='ZTE BANGALORE' href={maroon} external='False' />
        <Card id='card_img_no_link noborder' name='POWER GRID CORPORATION OF INDIA' href={green} external='False' />
        <Card id='card_img_no_link noborder' name='CANON, GURGAON' href={violet} external='False' />
        <Card id='card_img_no_link noborder' name='MAYTAS BOMBAY' href={yellow} external='False' />
        <Card id='card_img_no_link noborder' name='SIMPLEX INFRASTRURCTURES' href={green} external='False' />

      </div>


    </div>
  );
}
export default Tp_recruiters;

