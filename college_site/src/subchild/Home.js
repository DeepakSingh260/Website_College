import React, { useEffect,useState } from 'react';
import Department_Image from '../Assets/civil_dep.jpg';
import CLUB_LOGO from '../Assets/gcet_6.jpg';
import './Home.css';
import './home_message.css';
import '../components/fade_in_text_anim.css'

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

import {ref as refer, getStorage, getDownloadURL} from "firebase/storage"
import app from '../firebase';


const Home = () => {
  const storage = getStorage(app)
  const reference = refer(storage,"clubs.jpg")
  console.log(getDownloadURL(reference))
  
  const [heading , setTodo] =  useState("/");
  useEffect (()=>{
    getDownloadURL(reference).then((value)=>{
      setTodo(value)
    })
  },[]);

  return (
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
      <div className='container '>
        <div className='row justify-content-center cards'>

          <Card name='NSS' href={annual_report_img} />
          <Card name='Training & Placement ' href={annual_report2_img} />
          <Card name="Red Ribbon Club" href={discipline_img} />
          <Card name='Khidmat Club' href={grievance_cell_img} />
          <Card name='Mechanical IQ Cell' href={student_feedback_img} />
          <Card name='Road Safety Club' href={antiragging_img} />
          <Card name='Royal Mechnocrats' href={discipline_img} />
          <Card name='Sexual Harassment/Eve-Teasing Committee' href={harrassment_img} />
          <Card name='Student Feedback' href={student_feedback_img} />

        </div>
      </div>
    </div>
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

