import React from 'react';

import './SpecialMenu.css';

import { SubHeading,MenuItem } from '../../components';
import { images,data } from '../../constants';

const SpecialMenu = () => (
  
  <div className="app__specialMenu 
                  flex__center
                  section__padding" id="menu">


    <div className="app__specialMenu-title ">
      <SubHeading title="Menu that fits you Palatte" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>

    <div className="app__specialMenu-menu">

      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">Coffee</p>
        <div className="app__specialMenu_menu_items">
          {data.coffee.map((coffee,index)=>(
            <MenuItem key={coffee.nama + index} title={coffee.nama} price={coffee.price} tags={coffee.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu img" />
      </div>

      <div className="app__specialMenu-menu_cocktails flex__center">
        <p className="app__specialMenu-menu_heading">Other Drinks</p>
        <div className="app__specialMenu_menu_items">
          {data.other.map((other,index)=>(
           <MenuItem key={other.nama + index} title={other.nama} price={other.price} tags={other.tags} />
          ))}
        </div>
      </div>

    </div>

    <div style={{marginTop: '15px'}}>
        <button type="button" className="custom__button">View More</button>
    </div>

  </div>
);

export default SpecialMenu;
