import './App.css';
import {BrowserRouter ,Route,Routes} from "react-router-dom"
import About_us from './subchild/About_us';
import Departments from './subchild/Department';
import Academics from './subchild/Academics';
import Home from './subchild/Home';
import civil_dep from './subchild/civil_dep';
import Logo_Src from './Assets/gcet_logo.jpg';
import styled from 'styled-components'
import Example from './navbar';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,Form , FormText ,Button, FormGroup } from 'reactstrap';
import React from 'react'
import MyNavBar from './components/navbar';

import 'bootstrap/dist/css/bootstrap.min.css';

import "./Assets/css/bootstrap.min.css";
import "./Assets/css/normalize.css";
import "./Assets/css/font-awesome.min.css";
import "./Assets/css/icomoon.css";
import "./Assets/css/animate.css";
import "./Assets/css/prettyPhoto.css";
import "./Assets/css/owl.carousel.css";
import "./Assets/css/owl.theme.default.css";
import "./Assets/css/transitions.css";
import "./Assets/css/main.css";
import "./Assets/css/color.css";
import "./Assets/css/responsive.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Admissions from './subchild/Admissions';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEqfyY-4K9BiOK_b2q_MRlzpyUGPMOFBU",
  authDomain: "college-website-52b15.firebaseapp.com",
  databaseURL: "https://college-website-52b15-default-rtdb.firebaseio.com",
  projectId: "college-website-52b15",
  storageBucket: "college-website-52b15.appspot.com",
  messagingSenderId: "601211411642",
  appId: "1:601211411642:web:1bb9f6ec8f0f5e8785b683",
  measurementId: "G-XSZQHCY1FX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  const [isOpen, setIsOpen] = React.useState(false)
  
  return (
    
    <div className="App">
              
              <Routes>
                <Route path="/" element={<Home />}/>
                
                <Route path="/about_us" element={<About_us />} />
                <Route path="/department" element={<Departments />} />
                <Route path="*" element={<Academics />}/>
                <Route path="/Admissions" element = {<Admissions/>} />
                <Route path='/civil_department' element = {<civil_dep/>} />
              </Routes>
           
      <header className="App-header">
        <div className='draw_box' >
        <MyNavBar/>
      
           
            
        </div>
            
               

      </header>
    </div>
  );
}

export default App;
