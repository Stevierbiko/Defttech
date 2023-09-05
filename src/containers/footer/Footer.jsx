import React from 'react';
import Logo from '../../assets/logo.png';
import './footer.css';

const Footer = () => (
  <div className="deft__footer section__padding">
    <div className="deft__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="deft__footer-btn">
      <a href="mailto:info@defttech.co.ke">How can we help you?</a>
    </div>

    <div className="deft__footer-links">
      <div className="deft__footer-links_logo">
        <img src={Logo} alt="deft_logo" />
      </div>
      <div className="deft__footer-links_div">
        <h4>Follow Us on Social Media</h4>
        <p><a href="https://www.facebook.com/profile.php?id=100088684771152" target='_blank'>Facebook</a></p>
        <p><a href="https://twitter.com/deft_solutions?t=jOvtbSyv6OMKUXYGnYyxbw&s=08" target='_blank'>Twitter</a></p>
        <p><a href="https://www.instagram.com/defttechnologies/" target='_blank'>Instagram</a></p>
      </div>
      <div className="deft__footer-links_div">
        <h4>Company</h4>
        <p> <a href="https://defttechcoke-my.sharepoint.com/personal/info_defttech_co_ke/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Finfo%5Fdefttech%5Fco%5Fke%2FDocuments%2FPolicy%20Statements%20with%20bg%20logo%2Epdf&parent=%2Fpersonal%2Finfo%5Fdefttech%5Fco%5Fke%2FDocuments&ga=1" target='blank'></a>Policy Statements</p>
        <p>Privacy Policy</p>
        <p>Terms & Conditions</p>
      </div>
      <div className="deft__footer-links_div">
        <h4>Get in touch</h4>
        <p>1st Floor, Sakina Place, <br /> Church Road, Westlands P.O. BOX 21656-0010</p>
        <p><a href="tel:+254 728 281 044">+254728281044</a></p>
        <p>info@defttech.co.ke</p>
      </div>
    </div>

    <div className="deft__footer-copyright">
      <p>Created by <span><a href="http://wa.me/+254715553413" target='_blank'>Steve Biko</a></span>  @ 2023 DEFT-Technologies. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
