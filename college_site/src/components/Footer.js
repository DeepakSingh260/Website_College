import React from "react";
import { MDBFooter } from 'mdb-react-ui-kit';

const Footer =()=>{
    return(
        <div className="footer" style={{float :"left" ,width:"100%"}}>
               < MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      

      <section className=''>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <i className='fas fa-gem me-3'></i>Government College of Engineering and Technology
              </h6>
              <p>
            

                Govt. College of Engineering & Technology (GCET), 
                Jammu was established with the approval of All India Council of Technical Education (AICTE) 
                vide Notification No. : F-18-1/93-AICTE/910 dated: April 30, 1993 and is affiliated to the University of Jammu.
              </p>
            </div>

           
            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='/admissions' className='text-reset'>
                  Admissions
                </a>
              </p>
              <p>
                <a href='/about_us' className='text-reset'>
                  About us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Grievance
                </a>
              </p>
              <p>
                <a href='/administration' className='text-reset'>
                  Departments
                </a>
              </p>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <i className='fas fa-home me-3'></i> G.C.E.T Chak Bhalwal , Jammu and Kashmir 181122
              </p>
              <p>
                <i className='fas fa-envelope me-3'></i>
                gcet_jammu1994@rediffmail.com
              </p>
              <p>
                <i className='fas fa-phone me-3'></i> 9419724322
              </p>
              <p>
                <i className='fas fa-print me-3'></i> 0191-2958077
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright:
        <a className='text-reset fw-bold' href='https://www.gcetjammu.org.in'>
          GCET Jammu
        </a>
      </div>
    </MDBFooter>
        </div>
    )
}

export default Footer;