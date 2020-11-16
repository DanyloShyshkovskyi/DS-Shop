import React, { Component } from "react";
import {withGetScreen} from 'react-getscreen'
import "./style.css";
import "../catto.css"
import "../catto.min.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

class Index extends Component {

 
    render() {

        AOS.init({duration:1200});

        if (this.props.isMobile()){
            var CheckIt = true
            var mr3 = ""
        }
        if (this.props.isDesktop()){
          var CheckIt = false
          var mr3 = "mr-3"
      }
      return (
          <>
          <hr/>
        <div className="all-section">
        <div className="about-section">
        <div data-aos="slide-left" className="inner-container">
            <h1>About Us</h1>
            <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit ducimus, enim inventore earum, eligendi nostrum pariatur necessitatibus eius dicta a voluptates sit deleniti autem error eos totam nisi neque voluptates sit deleniti autem error eos totam nisi neque.
            </p>
            <div className="skills">
                <span>Web Design</span>
                <span>Photoshop  Illustrator</span>
                <span>Coding</span>
            </div>
        </div>
    </div>
    </div>
    {CheckIt && <hr/>}
    </>
      );
    }
  }
  
  export default withGetScreen(Index);