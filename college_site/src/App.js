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
                        </NavItem>
                        <NavItem>
                            <NavLink href="/department">Department</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">Academics</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">Admissions</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">Tenders</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">TEQIP</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">Download</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">MOU's</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">NIRF</NavLink>
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