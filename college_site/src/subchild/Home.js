import React, { Component, Fragment, useEffect, useState } from 'react';
import Department_Image from '../Assets/civil_dep.jpg';
import CLUB_LOGO from '../Assets/gcet_6.jpg';
import './Home.css';
import './home_message.css';
import '../components/fade_in_text_anim.css'

import './civil_dep.css'

import Gallery from '../components/Gallery';
import Noticeboard from '../components/noticeboard';
import Imageslider from '../components/imageSlider';
import Card from '../components/card';
import Message from '../components/message';
import TextAnim from '../components/fade_in_text_anim_home';
import gcet_1 from '../Assets/Garden.jpg';
import gcet_2 from '../Assets/Lab1.jpg';
import gcet_3 from '../Assets/gcet_3.jpg';
import gcet_4 from '../Assets/Mechanical1.jpg';

import annual_report_img from '../Assets/card_imgs/card1.jpg'
import annual_report2_img from '../Assets/card_imgs/card2.jpg'
import antiragging_img from '../Assets/card_imgs/card3.jpg'
import discipline_img from '../Assets/card_imgs/card4.jpg'
import grievance_cell_img from '../Assets/card_imgs/card5.jpg'
import harrassment_img from '../Assets/card_imgs/card3.jpg'
import student_feedback_img from '../Assets/card_imgs/card4.jpg'

import nss from '../Assets/card_imgs/nsslogo.png'
import khidmat from '../Assets/card_imgs/khidmat.jpg'
import mech from '../Assets/card_imgs/mech.jpeg'
import mech_iq from '../Assets/card_imgs/mech_iq.jpeg'
import startup from '../Assets/card_imgs/startup.jpg'
import red_ribbon from '../Assets/card_imgs/red_ribbon.jpeg'
import ieee from '../Assets/IEEE.jpg'
import nsp from '../Assets/NSP.jpg'
import p_m from '../Assets/p_m_pic.jpg'
import t_p from '../Assets/card_imgs/t&p.jpg'
import road from '../Assets/card_imgs/road.jpg'

import { ref as refer, getStorage, getDownloadURL } from "firebase/storage"
import app from '../firebase';
import Tp_intro from './tp_intro';


const Home = () => {
  const storage = getStorage(app)
  const reference = refer(storage, "clubs.jpg")
  console.log(getDownloadURL(reference))

  const [heading, setTodo] = useState("/");
  useEffect(() => {
    getDownloadURL(reference).then((value) => {
      setTodo(value)
    })
  }, []);

  return (
    <Fragment >
      <div className='container'>
        <div className='Home'>
          <TextAnim />
          <div className='row justify-content-center align-items-start'>
            <div className='col-lg-8 col-sm-12' >
              <Imageslider href={[gcet_1, gcet_2, gcet_3, gcet_4]} />
            </div>

            <div className='col-lg-4 col-sm-12 notification'>
              <Noticeboard />
            </div>
          </div>

        </div>
      </div>

      <div className='container mb-5'>
        <div className="heading text-center">

          <h1>Vision</h1>
        </div>
        <div className="text_body text-center">
          <p className=''>
            To emerge as a pioneer centre of research & technology imparting a greater contribution in “Nation-building” by including the intellectual potential, moral character and professional ethics among the aspiring young engineers so as to fulfil the vision of India as a “Developed Nation”
          </p>
          <p className=''>
            <b>
              Our Mission<br></br>
              * To provide an atmosphere that facilitates personal commitment to the educational success of students in an environment that values diversity and community<br></br><br></br>
              * To produce quality manpower equipped with excellent technical skills, human & social values, leadership, creativity and innovation for the sustainable growth and benefits of mankind.<br></br><br></br>
              * To inculcate entrepreneurial attitude and values amongst learners.<br></br>
            </b>
          </p>
        </div>
      </div>
      <div className='container '>
        <div className='row justify-content-center cards'>

          <Card id='card_img_no_link' name='NSS' href={nss} link="nss" external='False' />
          <Card id='card_img_no_link' name='Startup Cell' href={startup} link="startup_cell" external='False' />
          <Card id='card_img_link' name='Training & Placement ' href={t_p} link={Tp_intro} external='True' />
          <Card id='card_img_no_link' name="IEEE Digital" href={ieee} link="https://ieeexplore.ieee.org/Xplore/home.jsp" external='True' />
          <Card id='card_img_no_link' name='Scholarship Portal' href={nsp} link="https://scholarships.gov.in/" external='True' />
          <Card id='card_img_no_link' name='Principal Message' href={p_m} link="/principal_msg" external='False' />
        </div>
      </div>
    </Fragment>
  );
}


class CardBody extends React.Component {
  render() {
    return (
      <div className="card-body">
        <h2>{this.props.title}</h2>

        <p className="body-content">{this.props.text}</p>

      </div>
    )
  }
}

class CardHeader extends React.Component {
  render() {
    const { image } = this.props;
    var style = {
      backgroundImage: 'url(' + image + ')',
    };
    return (
      <header style={style} id={image} className="card-header">

      </header>
    )
  }
}

class T_P extends React.Component {
  render() {
    return (
      <article className="card">
        <CardHeader image={Department_Image} />
        <CardBody title={'T&P'} />
      </article>
    )
  }
}

class CLUBS_CLASS extends React.Component {

  render() {
    const image = CLUB_LOGO;
    var style = {
      backgroundImage: 'url(' + image + ')'
    };
    return (
      <div className="club_class">

        <header style={style} id={image} className="card-header" />

        <div >
          <h2 className="club_heading">CLUBS</h2>
        </div>
      </div>
    )
  }
}

export default Home;

