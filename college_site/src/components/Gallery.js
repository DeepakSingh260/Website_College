import Gallery from "react-photo-gallery";
import { renderMatches } from "react-router-dom";
import React from "react";
import gcet_1 from '../Assets/gcet_1.jpg'
import gcet_2 from '../Assets/gcet_2.jpg'
import gcet_3 from '../Assets/gcet_3.jpg'
import gcet_4 from '../Assets/gcet_4.jpg'
import gcet_5 from '../Assets/gcet_5.jpg'
import gcet_6 from '../Assets/gcet_6.jpg'
import { render } from "react-dom";
import "../Assets/css/bootstrap.min.css";

const BasicRows = () =>{ return(
  <div class="container-fluid">
    <div class = "row mt-4">
    <div class="item col-sm-6 col-md-4 mb-3">
      <a  class="Fancybox" data-fancybox = "gallery1">
        <img src={gcet_1}/> 
      </a>
      <a  class="Fancybox" data-fancybox = "gallery1">
        <img src={gcet_2}/>
      </a>
      <a  class="Fancybox" data-fancybox = "gallery1">
        <img src={gcet_3}/> 
      </a>
      <a  class="Fancybox" data-fancybox = "gallery1">
        <img src={gcet_4}/> 
      </a>
      <a  class="Fancybox" data-fancybox = "gallery1">
        <img src={gcet_5}/>
      </a>
    </div>
    <a class="Fancybox" data-fancybox = "gallery1">
        <img src={gcet_6}/> 
      </a>
    </div>

  </div>
)};



export default BasicRows;
