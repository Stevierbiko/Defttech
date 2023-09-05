import React, { useState } from "react";
import people from "../../assets/people.png";
import ai from "../../assets/hero.png";
import "./header.css";

const Header = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    // Send the email to your server for processing
    fetch("http://localhost:3000/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
    .then((response) => {
      if (!response.ok) {
        console.error('Server response status:', response.status);
        console.error('Server response text:', response.statusText);
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
      .then((data) => {
        // Handle the response from your server (e.g., show a success message)
        console.log(data);
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });
  };
  

  return (
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
          <input
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={handleEmailChange}
          />
          <button type="button" onClick={handleSubmit}>
            Get Started
          </button>
        </div>

        <div className="deft__header-content__people">
          <img src={people} alt="People" />
          <p>16 people requested demo access in the last 12 hours</p>
        </div>
      </div>

      <div className="deft__header-image">
        <img src={ai} alt="AI" />
      </div>
    </div>
  );
};

export default Header;
