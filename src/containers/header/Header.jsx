import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/hero.png";
import "./header.css";

const Header = () => (
  <div className="deft__header section__padding" id="home">
    <div className="deft__header-content">
      <h1 className="gradient__text">Welcome to Deft Technologies</h1>
      <p>
        A single integrated and secure platform for your business. At Deft we
        guarantee Security, flexibility and adaptability from the largest
        software manufacturer; Microsoft solutions a market-leading software
        that adapts to your needs.
      </p>

      <div className="deft__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button"><a href="#wgpt3">Get Started</a></button>
      </div>

      <div className="deft__header-content__people">
        <img src={people} />
        <p>16 people requested demo access in last 12 hours</p>
      </div>
    </div>

    <div className="deft__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
