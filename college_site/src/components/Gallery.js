import Gallery from "react-photo-gallery";
import { renderMatches, Route, Routes } from "react-router-dom";
import React ,{ useEffect }  from "react";
import gcet_1 from '../Assets/gcet_1.jpg'
import gcet_2 from '../Assets/gcet_2.jpg'
import gcet_3 from '../Assets/gcet_3.jpg'
import gcet_4 from '../Assets/gcet_4.jpg'
import gcet_5 from '../Assets/gcet_5.jpg'
import gcet_6 from '../Assets/gcet_6.jpg'
import { render } from "react-dom";
import  "../Assets/css/bootstrap.min.css";
import './gallery.css'
import $ from 'jquery';
import Popper from 'popper.js';
import { Fancybox as NativeFancybox } from "@fancyapps/ui/dist/fancybox.esm.js";
import "@fancyapps/ui/dist/fancybox.css";

function Fancybox(props) {
  const delegate = props.delegate || "[data-fancybox]";

  useEffect(() => {
    const opts = props.options || {};

    NativeFancybox.bind(delegate, opts);

    return () => {
      NativeFancybox.destroy();
    };
  }, []);

  return <>{props.children}</>;
}

const BasicRows = () =>{ return(
  <div className="wrapper">
    <Fancybox options={{ infinite: false }}>
      <div className="row mt-4">
    <div className="item col-sm-6 col-md-4 mb-3">
    <a
      data-fancybox="gallery"
      data-src={gcet_1}
      
    >
      <img src={gcet_1} />
    </a>
    </div>
    <div className="item col-sm-6 col-md-4 mb-3">
    <a
      data-fancybox="gallery"
      data-src = {gcet_2}
      className="button button--secondary"
    >
      <img src={gcet_2} />
    </a>
    </div>
    
    <div className="item col-sm-6 col-md-4 mb-3">
    <a
      data-fancybox="gallery"
      data-src = {gcet_3}
      className="button button--secondary"
    >
      <img src={gcet_3} />
    </a>
    </div>
    <div className="item col-sm-6 col-md-4 mb-3">
    <a
      data-fancybox="gallery"
      data-src = {gcet_4}
      className="button button--secondary"
    >
      <img src={gcet_4} />
    </a>
    </div>
    <div className="item col-sm-6 col-md-4 mb-3">
    <a
      data-fancybox="gallery"
      data-src = {gcet_5}
      className="button button--secondary"
    >
      <img src={gcet_5} />
    </a>
    </div>
    <div className="item col-sm-6 col-md-4 mb-3">
    <a
      data-fancybox="gallery"
      data-src = {gcet_6}
      className="button button--secondary"
    >
      <img src={gcet_6} />
    </a>
    </div>
    </div>
</Fancybox>
  

  </div>
)};



export default BasicRows;
