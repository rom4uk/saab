import React, { useState, useEffect } from 'react';

import Logo from '../common/Logo';
import Video from '../common/Video';
import HotswapButton from './elements/HotswapButton';
import calendarBlank from '../../icons/calendar/calendar_blank_page.svg';
import calendarOne from '../../icons/calendar/calendar_one_page.svg';
import calendarTwo from '../../icons/calendar/calendar_two_page.svg';
import calendarThree from '../../icons/calendar/calendar_three_page.svg';
import hands from '../../icons/maintenance_hands.svg';

import { page6ButtonsConfig } from './elements/buttonsConfig';

import rain from '../../video/rain_video.mp4'
import wind from '../../video/wind_video.mp4'
import snow from '../../video/snow_video.mp4'

const Page6 = ({changePages}) => {
  const [toggledItems, setToggledItems] = useState({
    0: true,
    1: false,
    2: false,
    3: false,
  });

  const buttonClasses = {
    Sunshine: `${toggledItems["0"] ? 'hotswap_button radio active' : 'hotswap_button radio'}`,
    Rain: `${toggledItems["1"] ? 'hotswap_button radio active' : 'hotswap_button radio'}`,
    Snow: `${toggledItems["2"] ? 'hotswap_button radio active' : 'hotswap_button radio'}`,
    Winds: `${toggledItems["3"] ? 'hotswap_button radio active' : 'hotswap_button radio'}`
  }

  const videoClasses = {
    0: toggledItems["1"] ? 'weather_scene active' : 'weather_scene',
    1: toggledItems["2"] ? 'weather_scene active' : 'weather_scene',
    2: toggledItems["3"] ? 'weather_scene active' : 'weather_scene'
  }
  const videos = [rain, snow, wind];

  const toggleItems = (idx) => {
    if(toggledItems[`${idx}`]) {
      return;
    }
    const newItems = {...toggledItems};
    for (const key in newItems) {
      if (Object.hasOwnProperty.call(newItems, key)) {
        if(+key === idx) {
          newItems[key] = !newItems[key];
        } else {
          newItems[key] = false;
        }
      }
    }
    setToggledItems(newItems);
  }

  const handlingExpanded = (e) => {
    switch (+e.key) {
      case 1:
        toggleItems(0);
        break;
      case 2:
        toggleItems(1);
        break;
      case 3:
        toggleItems(2);
        break;
      case 4:
        toggleItems(3);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener('keyup', handlingExpanded)
    return () => {
      window.removeEventListener('keyup', handlingExpanded)
    }
  }, [handlingExpanded])

  return (
    <div id="page_4" className="page active">
      <div className="sidebar">
        <Logo handleChange={changePages} isActiveTop={true} />
        <div className="sidebar_textbox">
          <div className="sidebar_textbox__header">
            <span className="sidebar_textbox__title">A System for All&nbsp;Conditions</span>
          </div> 
          <div className="sidebar_textbox__main">
            <div className="sidebar_textbox__body">
              <p className="sidebar_textbox__paragraph">
                Rigid design and compliant with NATO environmental standards, facilitating operation in the toughest of climates.
              </p> 
              <p className="sidebar_textbox__subtitle">System durability</p> 
              <div className="sidebar_textbox__paragraph">
                <ul>
                  <li>No compromise – equal strength to a fixed building</li> 
                  <li>
                    Robust – lightweight, aluminium frame covered with high-strength PVC fabric
                  </li> 
                  <li>ISO 20-foot containers</li>
                </ul>
              </div>
            </div>
          </div>
        </div> 
        <div className="scene_toggle_menu scene_toggle_menu--weather">
          <div className="scene_toggle_menu__title">
            <svg width="24" height="24" viewBox="0 0 24 24" className="filter_icon">
              <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"></path>
            </svg> 
            <div className="scene_toggle_menu__title_label">View weather types</div>
          </div> 
          <div className="scene_toggle_menu__buttons">
            {page6ButtonsConfig.map((button, i) => <HotswapButton Elem={button.icon} title={button.title} className={buttonClasses[button.classname]} handler={toggleItems} idx={i} key={i} />)}
          </div>
        </div> 
        <div className="sidebar_footer">
          <a href="https://www.saab.com/dam" target="_blank" rel="noreferrer">saab.com/dam</a>
        </div>
      </div> 
      <div className="scene_wrap">
        <div className="scene_icon_wrap clearfix">
          <div className="scene_icon_wrap__part">
            <img src={calendarBlank} className="scene_icon_svg calendar shadow_img" alt=""/> 
            <img src={calendarBlank} className="scene_icon_svg calendar blank" alt=""/> 
            <img src={calendarOne} className="scene_icon_svg calendar blank" alt=""/> 
            <img src={calendarOne} className="scene_icon_svg calendar one" alt=""/> 
            <img src={calendarTwo} className="scene_icon_svg calendar two" alt=""/> 
            <img src={calendarThree} className="scene_icon_svg calendar three" alt=""/> 
          <div className="scene_icon_text">Over a 3-year period or 10&nbsp;assemblies</div>
        </div> 
        <div className="scene_icon_wrap__part">
          <img id="maintenance_hands" src={hands} className="scene_icon_svg" alt=""/> 
        <div className="scene_icon_text">Long-term deployment with&nbsp;minimal maintenance</div>
      </div>
    </div> 
      <div className="weather_wrap wider">
        <div id="page_4_page_4_sun" className={toggledItems["0"] ? 'weather_scene active' : 'weather_scene'}></div> 
        {videos.map((item, i) => <Video className={videoClasses[i]} key={i} src={item} />)}
      </div>
      </div>
    </div>
  )
}

export default Page6;