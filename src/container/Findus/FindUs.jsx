import React from 'react';

import { images } from '../../constants';
import { SubHeading } from '../../components';


const FindUs = () => (

  <div className="app__bg app__wrapper section__padding" id="contact">

    <div className="app__wrapper_info">

      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{marginBottom:'3rem'}}>Find Us</h1>
      

      <div>
        <p className="p__opensans"> Ruko alicante, Jl. Jenderal Gatot Subroto blok A no.6, Medang, Pagedangan, Tangerang Regency, Banten 15334</p>
        <h3 className="p__cormorant" style={{color:"#DCCA87",margin:'2rem 0'}}>Opening Hours</h3>
        <p className="p__opensans">Mon - Fri: 08:00 am - 17:00 pm</p>
        <p className="p__opensans">Sat - Sun: 08:00 am - 17:00 pm</p>
        
      </div>

      <button type="button" className="custom__button" style={{marginTop:'2rem'}}>Visit Us</button>

    </div>

    <div className="app__wrapper_img">
      <img src={images.place} alt="findUs" />
    </div>

  </div>
);

export default FindUs;
