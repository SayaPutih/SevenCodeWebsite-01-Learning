import React from 'react';

import './Header.css';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const Header = () => (
  <div className ="app__header app__wrapper section__padding" id="home">

      <div className="app__wrapper_info">
        <SubHeading title="Chase the new Flavour" />
        <h1 className="app__header-h1">Rumah Kopi Benteng</h1>
        <p className="p__opensans" style={{margin : '2rem'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec purus nec nisl scelerisque bibendum. Nullam ut arcu ut lect</p>
        <button type="button" className="custom__button">Explore Menu</button>
      </div>

      <div className="app__wrapper_img app__header-img">
        <img src={images.Welcome} alt="Pasta img" />
      </div>

  </div>
);

export default Header;
