import React from 'react';

import './AboutUs.css';

import { images } from '../../constants';
import { SubHeading } from '../../components';

const AboutUs = () => (

  <div className="app__aboutus app__bg flex__center
                  section__padding" id="About">
    
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G" />
    </div>

    <div className="app__aboutus-content flex__center">

      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">about us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img"/>
        <p className="p__opensans">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto recusandae optio quasi sapiente et reiciendis</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__about-content_knife">
        <img src={images.knife} alt="Knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img"/>
        <p className="p__opensans">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto recusandae optio quasi sapiente et reiciendis</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

    </div>

  </div>
);

export default AboutUs;
