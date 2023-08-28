import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Sales',
    text: 'Standard Microsoft Dynamics 365 solutions for sales departments and the sales force with the ability to integrate/engage reps and distributors.',
  },
  {
    title: 'Finances',
    text: 'With Microsoft Dynamics solutions (NAVISION and BUSINESS CENTRAL), in addition to the annexed solutions that enrich the platform for financial departments such as the digitalisation of documents, the management of the SII, IRPF, etc., it is possible',
  },
  {
    title: 'Digital Marketing',
    text: 'you need an analytical marketing tool that allows you to centralise all the data from different sources (customer interactions, social media, events...) and draw the necessary conclusions to set realistic targets .',
  },
  {
    title: 'Operations/ Project Management',
    text: 'With Microsoft Dynamics solutions (NAVISION and BUSINESS CENTRAL), in addition to the annexed solutions that enrich the platform for financial departments such as the digitalisation of documents, the management of the SII, IRPF, etc., it is possible:'
  },
  {
    title: 'Human Resources',
    text: 'Microsoft offers you tools that digitally transform the human resources department and facilitate its functions .',
  },
  {
    title: 'IT And Productivity',
    text:  'Businesses need a single, integrated and secure platform, and with Microsoft we offer enterprise IT the secure and scalable deployment of all business technology needs.',
  },
  {
    title: 'Customer Service',
    text: 'Microsoft offers different solutions aimed at improving customer service. They cover a wide range of functionalities, from multi-channel after-sales service to optimised field operations service.',
  },
];

const Features = () => (
  <div className="deft__features section__padding" id="features">
    <div className="deft__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="deft__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
