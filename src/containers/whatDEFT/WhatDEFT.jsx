import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatDEFT.css';

const WhatDEFT = () => (
  <div className="deft__whatdeft section__margin" id="deft">
    <div className="deft__whatdeft-feature">
      <Feature title="Why trust on DEFT" text="

We implement Microsoft solutions tailored to our customers' industries. Each industry has its own characteristics and faces specific challenges. Our consulting team is made up of professionals specialised in different sectors who understand your business and will help you to digitise it successfully." />
    </div>
    <div className="deft__whatdeft-heading">
      <h1 className="gradient__text">Take advantage of our team's more than 20 years of experience in implementing management solutions.</h1>
    </div>
    <div className="deft__whatdeft-container">
      <Feature title="Microsoft GOLD Partner" text="First Official Microsoft Online Solutions Partner" />
      <Feature title="20 + Senior Team" text="Consultants and senior technicians to ensure the success of projects" />
      <Feature title="Security and Scalability" text="Data security, up-to-date software tailored to your company's needs" />
    </div>
  </div>
);

export default WhatDEFT;
