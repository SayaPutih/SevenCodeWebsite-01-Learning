import React from 'react';

import './Footer.css';

import { images } from '../../constants';
import { FooterOverlay,Newsletter } from '../../components';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">

      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Ruko alicante, Jl. Jenderal Gatot Subroto blok A no.6, Medang, Pagedangan, Tangerang Regency, Banten 15334</p>
        <p className="p__opensans">+62 0813-1915-0707</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="" />
        <p className="p__opensans">"The Future depends on what you do Today"</p>
        <img src={images.spoon} alt="spoon" className="spoon__img" style={{marginTop: 15}} />

        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiInstagram />
          <FiTwitter />
        </div>

      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 17:00 pm</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">08:00 am - 17:00 pm</p>
      </div>

    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2025 Evander. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
