import React,{useState} from 'react';

import './Navbar.css';

import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';

import './Navbar.css';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return(
    <nav class = "app__navbar">

      <div className="app__navbar-logo">
        <img src={images.gericht} alt="ini logo" />
      </div>
  
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#About">About</a></li>
        <li className="p__opensans"><a href="#Menu">Menu</a></li>
        <li className="p__opensans"><a href="#Awards">Awards</a></li>
      </ul>
  
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Log In / Register</a>
        <div />
        <a href="#book" className="p__opensans">Book a Table</a>
      </div>
  
  

  
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu  fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen-links">
              <li className="p__opensans"><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li className="p__opensans"><a href="#About" onClick={() => setToggleMenu(false)}>About</a></li>
              <li className="p__opensans"><a href="#Menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li className="p__opensans"><a href="#Awards" onClick={() => {
                setToggleMenu(false);
                console.log("Close For Award")
              }}>Awards</a></li>
            </ul>
          </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar;
