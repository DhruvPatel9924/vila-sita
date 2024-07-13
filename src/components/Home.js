import React, { useState } from "react";
import "./Home.css";
import my from "./my.jpeg";
import smirati from "./smriti.png"; // Import your new image here
import line from "./line2-1 copy.jpg";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="home">
      <div className="mycolor">
        <p><br></br></p>
        <p className="intro-text">
          Whether it's hopping on a [virtual] velvet sofa together to chat about your vision or handing over the reins completely, we're passionate about meeting your design needs!
        </p>
      </div>
      <div className="intro">
        <div className="parallax-container">
          <img src={line} alt="line" className="parallax-image" />
        </div>
        <p className="intro-we">
          <h3>We are here for you . . .</h3>
        </p>
      </div>

      <div className="sections">
        <div className="section odd">
          <div className="section-content1">
            <div className="image-container">
              <img
                src={isHovered ? smirati : my}
                alt="Description1"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="main-image"
              />
              <div className="image-number">01</div>
            </div>
            <div className="title-and-paragraph">
              <h2 className="cursive-title">Design à la carte</h2>
              <p>
                Wish you could just pick your designer's brain for an hour without fear of commitment? Not even sure where to begin in your home? Receive design solutions, styling tips, & more through our in-home or online consultations!
              </p>
             <br></br>
              
              <p> starting at: $400/hour</p>
              
              
            </div>
          </div>
        </div>
        <div className="section even">
          <div className="section-content">
            <p>
              Ready to finally make your space Pinterest-worthy with the help of a design professional? Choose between a virtual 3D makeover to jumpstart your DIY project or kick up your feet with our effortless start-to-finish makeovers!
            </p>
            <img src={my} alt="Description1" />
          </div>
        </div>
        <div className="section odd">
          <div className="section-content">
            <img src={my} alt="Description1" />
            <p>
              On the hunt for that perfect kitchen backsplash? Going crazy staring at all those paint swatches on the wall? Be a little picky with your design needs thanks to our à la carte package before making costly mistakes in your home!
            </p>
          </div>
        </div>
        <div className="section even">
          <div className="section-content">
            <p>
              On the hunt for that perfect kitchen backsplash? Going crazy staring at all those paint swatches on the wall? Be a little picky with your design needs thanks to our à la carte package before making costly mistakes in your home!
            </p>
            <img src={my} alt="Description1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
