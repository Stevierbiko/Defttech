import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="deft__possibility section__padding" id="possibility">
    <div className="deft__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="deft__possibility-content">
      <h4><a href="mailto:info@defttech.co.ke">Request Demo to Get Started</a></h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>We respond to your company's requirements with a set of interconnected solutions that improve business processes by automating actions and offering a global vision.</p>
      <h4><a href="mailto:info@defttech.co.ke">Where do we start?</a></h4>
    </div>
  </div>
);

export default Possibility;
