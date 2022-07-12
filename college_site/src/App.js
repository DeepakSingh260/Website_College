import './App.css';
import {BrowserRouter ,Route,Routes} from "react-router-dom"
import About_us from './subchild/About_us';
import Departments from './subchild/Department';
import Academics from './subchild/Academics';
import Home from './subchild/Home';
import Logo_Src from './Assets/gcet_logo.jpg';
import styled from 'styled-components'
import Example from './navbar';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,Form , FormText ,Button, FormGroup } from 'reactstrap';
import React from 'react'
import MyNavBar from './components/navbar';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'jquery'


// import 'jquery'
// import 'popper.js'
// import 'react-bootstrap'
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


function App() {
  const [isOpen, setIsOpen] = React.useState(false)
  
  
  return (
    
    <div className="App">
      
              <Routes>
                <Route path="/" element={<Home />}/>
                
                <Route path="/about_us" element={<About_us />} />
                <Route path="/department" element={<Departments />} />
                <Route path="*" element={<Academics />} />
              
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
