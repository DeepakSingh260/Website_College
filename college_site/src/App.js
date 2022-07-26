import './App.css';
import {BrowserRouter ,Route,Routes} from "react-router-dom"
import About_us from './subchild/About_us';
import Departments from './subchild/Department';
import Academics from './subchild/Academics';
import Home from './subchild/Home';
import React from 'react'
import MyNavBar from './components/navbar';


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

import Footer from './components/Footer';



import "react-image-gallery/styles/css/image-gallery.css";
import BasicRows from './components/Gallery';
import Civil_dep from './subchild/civil_dep';
import Comp_dep from './subchild/comp_dep';
import Elec_dep from './subchild/electrical_dep';
import E_C_dep from './subchild/electronics_dep';
import Mech_dep from './subchild/mechanical_dep';

import Login from "./Login";
import Register from "./Register";
import Reset from "./Reset";
import Dashboard from "./Dashboard";
import Council from './subchild/student_council';

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
      <header className="App-header">
        <div className='draw_box' >
          <MyNavBar/>
        
        </div>
            
      </header>
              
              <Routes>
                <Route path="/" element={<Home />}/>
                <Route path='/gallery' element={<BasicRows/>}/>
                <Route path="/about_us" element={<About_us />} />
                <Route path="/administration" element={<Departments />} />
                <Route path="*" element={<Academics />}/>
                <Route path="/Admissions" element = {<Admissions/>} />
                <Route path="/civil_department" element = {<Civil_dep/>} />
                <Route path='/computer_department' element = {<Comp_dep/>} />
                <Route path='/electricl_department' element = {<Elec_dep/>} />
                <Route path='/e_c_department' element = {<E_C_dep/>} />
                <Route path='/mechanical_department' element = {<Mech_dep/>} />
                <Route path='/login' element={<Login />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/reset" element={<Reset />} />
                <Route exact path="/dashboard" element={<Dashboard />} />
                <Route exact path="/student_council" element={<Council />} />
              </Routes>

              <Footer />
           
      

      
    </div>
    
  );
}

export default App;
