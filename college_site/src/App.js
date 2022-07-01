import './App.css';
import {BrowserRouter ,Route,Routes} from "react-router-dom"
import About_us from './subchild/About_us';
import Departments from './subchild/Department';
import Academics from './subchild/Academics';
import Home from './subchild/Home';
import Logo_Src from './Assets/gcet_logo.jpg';
import styled from 'styled-components'
import Example from './navbar';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import React from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <div className="App">
      
      <header className="App-header">
        <div className='draw_box'>
        <img  className = "class_logo" src={Logo_Src} alt="Image Failed to Load"/>
        <h1 className='class_heading'>
          Government College of Engineering and Technology
        </h1>
        </div>
      
        <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Brand</NavbarBrand>
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="#">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href = "./subchild/About_us">About Us</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/subchild/Department">Department</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
      </header>
    </div>
  );
}

export default App;