import React, { Component, useRef } from "react";
import * as Scroll from 'react-scroll';
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../img/img5.jpg";
import img2 from "../img/img4.jpg";
import img3 from "../img/img6.jpg";
import Menu from "./Menu"
import {Link,animateScroll as scroll} from 'react-scroll'
import Akk from "./demo/App"


import './style.css'




export default class Header extends Component {
  render() {

    
    return (
        <header>
        <section className="intro">
          <Akk/>
          <div className="dolzno">
          <Menu/>
        <p className="intro-text">Welcome to DS Shop</p>
        <p className="intro-podtext">Your Favorite Create Agency Template</p>
        <Link 
        activeClass="active"
        to="main"
        offset={1}
        spy={true}
        smooth={true}
        duration={1000}
        className="intro-button">Get started</Link>
        </div>
      </section>
      </header>
    );
  }
}
