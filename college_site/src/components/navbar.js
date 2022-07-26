
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



const navbar = () =>{
  return (
	
    <header id="tg-header" class="tg-header tg-haslayout">
			
			<div class="container">
				<div class="row">
					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<div class="tg-logoandnoticeboard">
								<strong class="tg-logo row align-items-center ">
									<div className='col-sm-2'>
									<img src={logo_gcet} alt="GCET Jammu"/>

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
									<li><a  href="/">Home</a></li>
										
										<li class="menu-item-has-children">
											<a href="javascript:void(0);">Subjects</a>
											<ul class="sub-menu">
												<li><a href="/civil_department">Civil Department</a></li>
												<li><a href="/computer_department">Computer Department</a></li>
												<li><a href="/electricl_department">Electrical Department</a></li>
												<li><a href="/e_c_department">E&C Department</a></li>
												<li><a href="/mechanical_department">Mechanical Department</a></li>
												
											</ul>
										</li>
										<li><a href="https://www.coeju.com/">Results</a></li>
										<li class="menu-item-has-children">
											<a href="javascript:void(0);">Admissions</a>
											<ul class="sub-menu">
												<li><a href="/admissions">Admissions</a></li>
												<li><a href="admissionsdetail.html">Admission Detail</a></li>
											</ul>
										</li>
										<li class="menu-item-has-children">
											<a href="javascript:void(0);">Depts</a>
											<ul class="sub-menu">
												<li><a href="/department">Departments</a></li>
												<li><a href="departmentdetail.html">Department Detail</a></li>
											</ul>
										</li>
										<li><a href="campuses.html">Campuses</a></li>
										<li class="menu-item-has-children">
											<a href="javascript:void(0);">Contact us</a>
											<ul class="sub-menu">
												<li><a href="contactusvone.html">Contact us V-one</a></li>
												<li><a href="contactusvtwo.html">Contact us V-two</a></li>
											</ul>
										</li>
										<li class="menu-item-has-children">
											<a href="javascript:void(0);">Pages</a>
											<ul class="sub-menu">
												<li class="menu-item-has-children">
													<a href="javascript:void(0);">About University</a>
													<ul class="sub-menu">
														<li><a href="aboutcampuslife.html">Our Campus Life</a></li>
														<li><a href="abouthonorsawards.html">Our Honor &amp; Awards</a></li>
														<li><a href="aboutleadership.html">Our Leadership</a></li>
														<li><a href="aboutobjectives.html">OurObjectives</a></li>
														<li><a href="aboutouridentity.html">Our Identity</a></li>
														<li><a href="aboutrectormessage.html">Rector Message</a></li>
														<li><a href="aboutvisionmission.html">Our Missions</a></li>
													</ul>
												</li>
												<li class="menu-item-has-children">
													<a href="javascript:void(0);">News</a>
													<ul class="sub-menu">
														<li><a href="newslist.html">News List</a></li>
														<li><a href="newsgrid.html">News Grid</a></li>
														<li><a href="newsgridsidebar.html">News Grid Sidebar</a></li>
														<li><a href="newsdetail.html">News Detail</a></li>
													</ul>
												</li>
												<li class="menu-item-has-children">
													<a href="javascript:void(0);">Our Jobs</a>
													<ul class="sub-menu">
														<li><a href="jobs.html">Jobs</a></li>
														<li><a href="jobdetail.html">Job Detail</a></li>
													</ul>
												</li>
												<li class="menu-item-has-children">
													<a href="javascript:void(0);">Others</a>
													<ul class="sub-menu">
														<li><a href="gallery.html">gallary</a></li>
														<li><a href="faqs.html">FAQ</a></li>
														<li><a href="404error.html">404 Error</a></li>
														<li><a href="comingsoon.html">coming soon</a></li>
													</ul>
												</li>
											</ul>
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

