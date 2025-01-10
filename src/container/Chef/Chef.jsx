import React from 'react';

import { images } from '../../constants';
import { SubHeading } from '../../components';

import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">

    <div className="app__wrapper_img app__wrapper__img-reverse">
      <img src={images.evander} alt="chef" />
    </div>

    <div className="app__wrapper_info">

      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>

      <div className="app__chef-content">

        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita  error impedit
          </p>
          
        </div>

        <p className="p__opensans">
        deleniti laudantium reprehenderit error impedit ea at accusantium ab, nihil saepe aliquid ipsam odit provident, eveniet aliquam placeat officiis.
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Evander Nikolai</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.signEvan} alt="" />
      </div>

    </div>

  </div>
);

export default Chef;
