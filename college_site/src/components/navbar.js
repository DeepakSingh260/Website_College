
import React from 'react';

import logo_gcet from "../Assets/images/logo_gcet.png";

import { ref as refer, getStorage, getDownloadURL } from "firebase/storage"
import app from '../firebase';
import { useEffect, useState } from "react";


const Navbar = () => {
	const storage = getStorage(app)
	const admin_reference = refer(storage, "Downloads/admission_form.doc")

	const [admin, setAdmin] = useState("/")
	useEffect(() => {
		getDownloadURL(admin_reference).then((value) => {
			setAdmin(value)
		})
	})
	const emp_reference = refer(storage, "Downloads/emp_form.doc")

	const [emp, setEmp] = useState("/")
	useEffect(() => {
		getDownloadURL(emp_reference).then((value) => {
			setEmp(value)
		})
	})
	const noc_reference = refer(storage, "Downloads/stud_form.doc")

	const [noc, setNoc] = useState("/")
	useEffect(() => {
		getDownloadURL(noc_reference).then((value) => {
			setNoc(value)
		})
	})
	return (

		<header id="tg-header" class="tg-header tg-haslayout">

			<div class="container">
				<div class="row">
					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<div class="tg-logoandnoticeboard">
							<strong class="tg-logo row align-items-center ">
								<div className='col-sm-2'>
									<img src={logo_gcet} alt="GCET Jammu" />

								</div>
								<div className='col-sm-10'>
									<h2>Government College of Engineering & Technology</h2>

								</div>
							</strong>

						</div>
						<div>
							<nav class="navbar navbar-expand-lg navbar-light bg-light">
								<button class="navbar-toggler col-xs-12" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
									<span class="fas fa-bars"></span>
								</button>
								<div id="navbarNavDropdown" class="collapse navbar-collapse tg-navigation">
									<ul className='navbar-nav'>
										<li className='nav-item'><a className='nav-link' href="/">Home</a></li>

										<li class="nav-item dropdown">
											<a class='nav-link dropdown-toggle' data-toggle='dropdown' aria-expanded="false" id="navbarDropdownMenuLinkDepts" href="javascript:void(0);">Departments</a>
											<ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLinkDepts">
												<li><a class='dropdown-item' href="/civil_department">Civil Department</a></li>
												<li><a class='dropdown-item' href="/computer_department">Computer Department</a></li>
												<li><a class='dropdown-item' href="/electricl_department">Electrical Department</a></li>
												<li><a class='dropdown-item' href="/e_c_department">E&C Department</a></li>
												<li><a class='dropdown-item' href="/mechanical_department">Mechanical Department</a></li>

											</ul>
										</li>
										<li className='nav-item'><a className='nav-link' href="https://www.coeju.com/">Results</a></li>
										<li class="nav-item dropdown">
											<a class='nav-link dropdown-toggle' data-toggle='dropdown' aria-expanded="false" id="navbarDropdownMenuLinkAdm" href="javascript:void(0);">Admissions</a>
											<ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLinkAdm">
												<li><a class='dropdown-item' href="/admissions">Admissions</a></li>
												<li><a class='dropdown-item' href="admissionsdetail.html">Admission Detail</a></li>
											</ul>

										</li>
										<li class="nav-item dropdown">
											<a class='nav-link dropdown-toggle' data-toggle='dropdown' aria-expanded="false" id="navbarDropdownMenuLinkClb" href="javascript:void(0);">Clubs & Council</a>
											<ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLinkClb">
												<li><a class='dropdown-item' href="/student_council">Student Council</a></li>

											</ul>
										</li>
										<li class="nav-item dropdown">
											<a class='nav-link dropdown-toggle' data-toggle='dropdown' aria-expanded="false" id="navbarDropdownMenuLinkClb" href="javascript:void(0);">Download</a>
											<ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLinkClb">
												<li><a class='dropdown-item' href={admin}>Admission Form</a></li>
												<li><a class='dropdown-item' href={emp}>EMPLOYEE NOC Form</a></li>
												<li><a class='dropdown-item' href={noc}>STUDENT NOC FORM</a></li>
											</ul>
										</li>
										<li className='nav-item'><a className='nav-link' href="/administration">Administration</a></li>
										<li className='nav-item'>
											<a className='nav-link' href="/about_us">About Us</a>

										</li>
										<li className='nav-item'>
											<a className='nav-link' href="/log_in">Log In</a>

										</li>


									</ul>
								</div>
							</nav>
							{/* <div class="tg-searchbox">
								<a id="tg-btnsearch" class="tg-btnsearch" href="javascript:void(0);"><i class="icon-magnifier"></i></a>
								<form class="tg-formtheme tg-formsearch">
									<fieldset><input type="search" name="search" class="form-control" placeholder="Start Your Search Here"/></fieldset>
								</form>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</header>
	);

}



export default Navbar;

