import React from 'react';
import Department_Image from '../Assets/GCET_BUILD.jpg';
import CLUB_LOGO from '../Assets/clubs.jpg'
import './Home.css';

const Home = () =>{
  return (
    <div className='Home'>
      <>
      <h3>Home!!</h3>
      <T_P/>
      <CLUBS_CLASS />
      </>
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
        <CardHeader image={Department_Image}/>
        <CardBody title={'T&P'} />
      </article>
    )
  }
}

class CLUBS_CLASS extends React.Component {
  
  render() {
    const image= CLUB_LOGO;
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

