import React, {Suspense} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CircularProgress from '@material-ui/core/CircularProgress';
import "./style.css"
import {withGetScreen} from 'react-getscreen'
import Database from "./Database"

class Gender extends React.Component {
  render(){

    if(this.props.sex == "women"){
      var text={
          textAlign:"right"
      }
  }

    var settings = {
    autoplaySpeed: 2000,
    autoplay: true,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 550,
    slidesToShow: 5,
    swipeToSlide: true,
    rows: 2,
  };

  if (this.props.isMobile()) var settings = {
    autoplaySpeed: 2000,
    autoplay: true,
    infinite: true,
    arrows: true,
    speed: 550,
    slidesToShow: 1,
    swipeToSlide: true,

  };

  return (
    <div >
      <p to='/' style={text} className="title"> {this.props.sex} </p>   
       <Database sex={this.props.sex} setting={settings}/>      
    </div>
  );
}}

export default withGetScreen(Gender);
