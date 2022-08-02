
import React from 'react';



import img01 from "../Assets/images/flags/img-01.jpg";
import img02 from "../Assets/images/flags/img-02.jpg";
import img03 from "../Assets/images/flags/img-03.jpg";
import themepost_img01 from "../Assets/images/themepost/img-01.jpg"
import themepost_img02 from "../Assets/images/themepost/img-02.jpg"
import themepost_img03 from "../Assets/images/themepost/img-03.jpg"
import themepost_img04 from "../Assets/images/themepost/img-04.jpg"
import GCET_Jammu1 from "../Assets/images/GCET_Jammu1.jpg";
import logo_gcet from "../Assets/images/logo_gcet.png";



const navbar = () => {
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
						<div class="tg-navigationarea">
							<nav id="tg-nav" class="tg-nav">
								<div class="navbar-header">
									<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#tg-navigation" aria-expanded="false">
										<span class="sr-only">Toggle navigation</span>
										<span class="icon-bar"></span>
										<span class="icon-bar"></span>
										<span class="icon-bar"></span>
									</button>
								</div>
								<div id="tg-navigation" class="collapse navbar-collapse tg-navigation">
									<ul>
										<li><a href="/">Home</a></li>

										<li class="menu-item-has-children">
											<a class='dropdown-toggle' data-toggle='dropdown' aria-expanded="false" id="navbarDropdownMenuLinkDepts" href="javascript:void(0);">Departments</a>
											<ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLinkDepts">
												<li><a class='dropdown-item' href="/civil_department">Civil Department</a></li>
												<li><a class='dropdown-item' href="/computer_department">Computer Department</a></li>
												<li><a class='dropdown-item' href="/electricl_department">Electrical Department</a></li>
												<li><a class='dropdown-item' href="/e_c_department">E&C Department</a></li>
												<li><a class='dropdown-item' href="/mechanical_department">Mechanical Department</a></li>

											</ul>
										</li>
										<li><a href="https://www.coeju.com/">Results</a></li>
										<li class="menu-item-has-children">
											<a class='dropdown-toggle' data-toggle='dropdown' aria-expanded="false" id="navbarDropdownMenuLinkAdm" href="javascript:void(0);">Admissions</a>
											<ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLinkAdm">
												<li><a class='dropdown-item' href="/admissions">Admissions</a></li>
												<li><a class='dropdown-item' href="admissionsdetail.html">Admission Detail</a></li>
											</ul>

										</li>
										<li class="menu-item-has-children">
											<a class='dropdown-toggle' data-toggle='dropdown' aria-expanded="false" id="navbarDropdownMenuLinkClb" href="javascript:void(0);">Clubs & Council</a>
											<ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLinkClb">
												<li><a class='dropdown-item' href="/student_council">Student Council</a></li>

											</ul>
										</li>
										<li><a href="/administration">Administration</a></li>
										<li>
											<a href="/about_us">About Us</a>

										</li>
										<li>
											<a href="/log_in">Log In</a>

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



export default navbar;

