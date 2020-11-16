import React , { Component } from "react";
import './style.css'
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import {withGetScreen} from 'react-getscreen'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CheckIt:true,
    };
  }
  render(){
    AOS.init({duration:1200});

    if (this.props.isMobile()){
      var CheckIt = false
      var mr3 = ""
  }

  if (this.props.isDesktop()){
    var CheckIt = true
    var mr3 = "mr-3"
}
  return (
    <div className="footer-distributed">
          <div  className="footer-left">
            <h3>Danylo<span>Shyshkovskyi</span></h3>
            <p className="footer-links">
              <a href="#">Home</a>
              ·
              <a href="#">Blog</a>
              ·
              <a href="#">Pricing</a>
              ·
              <a href="#">About</a>
              ·
              <a href="#">Faq</a>
              ·
              <a href="#">Contact</a>
            </p>
            <p className="footer-company-name">webdevtrick © 2019</p>
          </div>
          
          {CheckIt && <div className="footer-center">
            <div>
            <RoomIcon style={{ fontSize: 30 , color:"white" , marginRight:10}}/>
              <p>Wroclaw, Poland</p>
            </div>
            <div>
            <PhoneIcon style={{ fontSize: 30 , color:"white", marginRight:10}}/>
              <p>+575299893</p>
            </div>
            <div>
            <EmailIcon style={{ fontSize: 30 , color:"white", marginRight:10}}/>
              <p><a href="mailto:support@company.com">danyloshyshkovskyi@gmail.com</a></p>
            </div>
          </div>}
          <div className="footer-right">
            <p className="footer-company-about">
              <span>About the company</span>
              Web Dev Trick is a blog for web designers, graphic designers, web developers &amp; SEO Learner.
            </p>
            <div className="footer-icons">
              <a href="#"><FacebookIcon/></a>
              <a href="#"><PinterestIcon/></a>
              <a href="#"><InstagramIcon/></a>
              <a href="#"><TwitterIcon/></a>
            </div>
          </div>
      </div>
  );
}
}


const c3Style = {
  background: "black",
  color: "white",
  padding: "1.5rem 1.5rem 5rem 1.5rem"
};


export default withGetScreen(Footer);