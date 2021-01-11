import React, { Component } from "react";
import { withGetScreen } from "react-getscreen";
import "./style.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

class Index extends Component {
  render() {
    AOS.init({
      duration: 2000,
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 1200, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });

    if (this.props.isMobile()) {
      var CheckIt = true;
      var mr3 = "";
    }
    if (this.props.isDesktop()) {
      var CheckIt = false;
      var mr3 = "mr-3";
    }
    return (
      <>
        <hr />
        <div className="all-section">
          <div className="about-section">
            <div data-aos="slide-left" className="inner-container">
              <h1>About Us</h1>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus velit ducimus, enim inventore earum, eligendi nostrum
                pariatur necessitatibus eius dicta a voluptates sit deleniti
                autem error eos totam nisi neque voluptates sit deleniti autem
                error eos totam nisi neque.
              </p>
              <div className="skills">
                <span>Web Design</span>
                <span>Photoshop Illustrator</span>
                <span>Coding</span>
              </div>
            </div>
          </div>
        </div>
        {CheckIt && <hr />}
      </>
    );
  }
}

export default withGetScreen(Index);
