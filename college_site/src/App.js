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


import 'bootstrap/dist/css/bootstrap.min.css';

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
        <img  className = "class_logo" src={Logo_Src} alt="Image Failed to Load"/>
        <h1 className='class_heading'>
          Government College of Engineering and Technology Jammu
        </h1>
        
        
        <Navbar sticky='top' className='navbar' color="light"  light expand="md">
                <NavbarBrand href="/">GCET</NavbarBrand>
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                              <NavLink href="/about_us">About Us</NavLink>
                              <NavLink href="/about_us">About College</NavLink>
                              <NavLink href="/about_us">Organisation Chart</NavLink>
                              <NavLink href="/about_us">Administrative Setup</NavLink>
                              <NavLink href="/about_us">Administrative Staff</NavLink>
                              <NavLink href="/about_us">CLUBS/Societies</NavLink>
                              <NavLink href="/about_us">SRO/Orders</NavLink>
                              <NavLink href="/about_us">Audit Report</NavLink>
                        </NavItem>
                        <NavItem>
                                <NavLink href="/department">Department</NavLink>
                                <NavLink href="/department">Civil Engineering</NavLink>
                                <NavLink href="/department">Electronics and Communication Engineering</NavLink>
                                <NavLink href="/department">Electrical Engineering</NavLink>
                                <NavLink href="/department">Mechanical Engineering</NavLink>
                                <NavLink href="/department">Humanities</NavLink>
                                <NavLink href="/department">Applied Physics</NavLink>
                                <NavLink href="/department">Applied Chemistry</NavLink>
                                <NavLink href="/department">Applied Mathematics</NavLink>
                        </NavItem>
                        <NavItem>
                                  <NavLink href="/">Academics</NavLink>
                                  <NavLink href="/">Results</NavLink>
                                  <NavLink href="/">BE syllabus</NavLink>
                                  <NavLink href="/">Academics</NavLink>
                                  <NavLink href="/">Academics</NavLink>
                                  <NavLink href="/">Academics</NavLink>
                                  <NavLink href="/">Academics</NavLink>
                                  <NavLink href="/">Academics</NavLink>
                            
                        </NavItem>
                        <NavItem>
                                    <NavLink href="/">Admissions</NavLink>
                                    <NavLink href="/">Selection Procedure</NavLink>
                                    <NavLink href="/">Documents Required</NavLink>
                                    <NavLink href="/">TFW Form</NavLink>
                                    <NavLink href="/">Admission Form</NavLink>
                                    <NavLink href="/">Hostel Admission Form</NavLink>
                                    <NavLink href="/">Branch Upgradation Form</NavLink>
                                    <NavLink href="/">Intake Capacity</NavLink>
                                    <NavLink href="/">BE Fee Structure</NavLink>
                                    <NavLink href="/">Mtech Fee Structure</NavLink>
                                    <NavLink href="/">Rules</NavLink>
                                    <NavLink href="/">University Statue</NavLink>                            
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">Tenders</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">TEQIP</NavLink>
                        </NavItem>
                        <NavItem>
                              <NavLink href="/">Download</NavLink>
                              <NavLink href="/">Document List</NavLink>
                              <NavLink href="/">Admission Form</NavLink>
                              <NavLink href="/">Employee Noc Form</NavLink>
                              <NavLink href="/">Student Noc Form</NavLink>
                              <NavLink href="/">Student Undertaking</NavLink>
                              <NavLink href="/">GCET AA ASST PROF Form</NavLink>
                              <NavLink href="/">SOA AA ASST PROF Form</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">MOU's</NavLink>
                        </NavItem>
                        <NavItem>
                              <NavLink href="/">NIRF</NavLink>
                              <NavLink href="/">Uploaded Data</NavLink>
                              <NavLink href="/">Formats</NavLink>
                            
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">AICTE EOA</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">Contact us</NavLink>
                        </NavItem>
                        <Form className="d-flex">
                        <label>
                          Search
                          <input  placeholder='search' type="search" label="search"  className="me-2" />
                          </label>
                        <Button >Search</Button>
                      </Form>
                    </Nav>

                </Collapse>
            </Navbar>
            
            </div>
            
               

      </header>
    </div>
  );
}

export default App;
