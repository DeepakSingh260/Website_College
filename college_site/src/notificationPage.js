import React , {useState , useEffect} from "react";

import app from './firebase'
import { getDatabase, onValue, ref, set } from "firebase/database";
import { useLocation } from "react-router-dom";


const Noti = (props)=>{
   
    const prop= useLocation()

    console.log(prop.state)
  
    return(
        <div>
            <h1>Notifications</h1>
            <h2>{prop.state.Title}</h2>
            <p>{prop.state.Body}</p>
            <a href={prop.state.PdfLink}>Link</a>
        </div>
    )
}

export default Noti;