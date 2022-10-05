import React, { useState, useEffect } from "react";

import app from './firebase'
import { getDatabase, onValue, ref, set } from "firebase/database";
import { useLocation } from "react-router-dom";
import "./Dashboard.css"


const Noti = (props) => {

    const prop = useLocation()

    console.log(prop.state)

    return (
        <div>
            <div className="container">
                {/* <h1>Notification</h1> */}
                <div className="create-notification-container">

                    <h2 className="heading">{prop.state.Title}</h2>
                    <h2 className="p_text">{prop.state.Body}</h2>
                    <a className="btn btn-danger" href={prop.state.PdfLink} target='_blank' style={{width:'fit-content'}}>Download Link</a>
                    <iframe className="pdf" src={prop.state.PdfLink} width="100%" ></iframe>
                </div>
            </div>
        </div>
    )
}

export default Noti;