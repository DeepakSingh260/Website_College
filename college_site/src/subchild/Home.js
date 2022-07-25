import React from 'react';
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


const Home = () => {
  return (
    <div className='container-fluid'>
      <div className='Home'>
        <div className='col-lg-12 text-center' >
      <TextAnim/>
          <Imageslider href={[gcet_1, gcet_2, gcet_3, gcet_4, Department_Image, CLUB_LOGO]}/>
        </div>
      </div>
    <div className='container '>
      <div className='row justify-content-center'>
        <div className='col-lg-6 notification'>

        <Noticeboard/>
        </div>
      </div>
      <div className='row cards'>

        <Card name='Annual Report' href={Department_Image}/>
        <Card name='Notifications / Orders'  />
        <Card name="HOD's List" />
        <Card name='Grievance Cell' />
        <Card name='AntiRagging' />
        <Card name='Anti-Ragging Committee' />
        <Card name='Disciplinary Committee' />
        <Card name='Sexual Harassment/Eve-Teasing Committee' />
        <Card name='Student Feedback' />

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

