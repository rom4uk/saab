import React, { useState, useEffect } from 'react';

import Logo from '../common/Logo';
import Video from '../common/Video';
import calendarBlank from '../../icons/calendar/calendar_blank_page.svg';
import calendarOne from '../../icons/calendar/calendar_one_page.svg';
import calendarTwo from '../../icons/calendar/calendar_two_page.svg';
import calendarThree from '../../icons/calendar/calendar_three_page.svg';
import hands from '../../icons/maintenance_hands.svg';
import rain from '../../video/rain_video.mp4'
import wind from '../../video/wind_video.mp4'
import snow from '../../video/snow_video.mp4'

const Page4 = ({handleChange}) => {
  const [toggledItems, setToggledItems] = useState({
    0: true,
    1: false,
    2: false,
    3: false,
  });
  const classes = {
    0: toggledItems["0"] ? 'weather_scene active' : 'weather_scene',
    1: toggledItems["1"] ? 'weather_scene active' : 'weather_scene',
    2: toggledItems["2"] ? 'weather_scene active' : 'weather_scene',
    3: toggledItems["3"] ? 'weather_scene active' : 'weather_scene'
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
        <Logo handleChange={handleChange} isActiveTop={true} />
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
              <p className="sidebar_textbox__paragraph">
                <ul>
                  <li>No compromise – equal strength to a fixed building</li> 
                  <li>
                    Robust – lightweight, aluminium frame covered with high-strength PVC fabric
                  </li> 
                  <li>ISO 20-foot containers</li>
                </ul>
              </p>
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
            <div onClick={() => toggleItems(0)} className={toggledItems['0'] ? "hotswap_button radio active" : "hotswap_button radio"}>
              <svg viewBox="0 0 200 200" id="sunshine" className="hotswap_button__icon">
                <path d="M176.73,92.7c.23,2.42.36,4.85.36,7.31s-.13,4.88-.36,7.29L195,100Zm-4.48,34a76,76,0,0,1-6.35,13.16l19.71,1.39Zm-18.71,28.72a78.42,78.42,0,0,1-11.41,9.12l17.11,9.73Zm-29.37,17.76a75.57,75.57,0,0,1-14.23,3.21l11.19,16.26Zm-34.12,3.21a75.92,75.92,0,0,1-14.23-3.21l3,19.47Zm-43.58-21-5.71,18.86,17.11-9.75a78.4,78.4,0,0,1-11.4-9.11M27.74,126.7,14.39,141.25l19.7-1.39a76.77,76.77,0,0,1-6.35-13.16m-4.47-34L5,100l18.27,7.29c-.22-2.41-.37-4.83-.37-7.29s.15-4.89.37-7.31m4.47-19.4a77,77,0,0,1,6.35-13.15l-19.7-1.39ZM46.45,44.58a79,79,0,0,1,11.42-9.1L40.74,25.74ZM75.82,26.82a76.7,76.7,0,0,1,14.23-3.2L78.86,7.36ZM100,32.54A67.47,67.47,0,1,0,167.46,100,67.47,67.47,0,0,0,100,32.54m9.94-8.92a75.57,75.57,0,0,1,14.23,3.21l-3-19.47Zm43.6,21,5.7-18.85-17.11,9.75a79,79,0,0,1,11.41,9.1m18.71,28.73,13.36-14.55L165.9,60.15a76.75,76.75,0,0,1,6.35,13.16" className="cls-2">
                </path>
              </svg>
                  Sunshine
            </div> 
            <div onClick={() => toggleItems(1)} className={toggledItems['1'] ? "hotswap_button radio active" : "hotswap_button radio"}>
              <svg viewBox="0 0 200 200" id="heavy_rain" className="hotswap_button__icon">
                <path d="M157.23,138.76l16.22,18.79a3.68,3.68,0,0,0,5.59-4.8l-16.22-18.81a3.69,3.69,0,0,0-5.59,4.82m-27.31,0,30.7,35.61a3.68,3.68,0,0,0,5.58-4.81l-30.71-35.62a3.68,3.68,0,1,0-5.57,4.82m3.38,35.61a3.69,3.69,0,0,0,5.59-4.81l-30.71-35.62a3.69,3.69,0,1,0-5.59,4.82Zm-12.75,3.81a3.69,3.69,0,0,0-.39,5.19l8.93,10.35a3.7,3.7,0,0,0,2.8,1.29,3.61,3.61,0,0,0,2.39-.9,3.67,3.67,0,0,0,.39-5.19l-8.92-10.36a3.69,3.69,0,0,0-5.2-.38M75.28,138.76,106,174.37a3.67,3.67,0,0,0,5.19.38,3.68,3.68,0,0,0,.38-5.19l-30.7-35.62a3.69,3.69,0,1,0-5.58,4.82m-26.6-5.21a3.7,3.7,0,0,0-.38,5.21L79,174.37a3.69,3.69,0,0,0,5.59-4.81l-30.7-35.62a3.69,3.69,0,0,0-5.21-.39M191.2,92a29.62,29.62,0,0,0-29.61-29.63h-8.94A47.94,47.94,0,1,0,57.94,48.19a37.57,37.57,0,0,0-36.77,63.62,29.51,29.51,0,0,0,21.95,9.79H161.59A29.63,29.63,0,0,0,191.2,92" className="cls-2">
                </path>
              </svg>
                  Heavy rain
            </div> 
            <div onClick={() => toggleItems(2)} className={toggledItems['2'] ? "hotswap_button radio active" : "hotswap_button radio"}>
              <svg viewBox="0 0 200 200" id="snow" className="hotswap_button__icon">
                <path d="M7.17,114.84A7.7,7.7,0,0,1,16.39,109l38,8.44L84.54,100,54.39,82.59,16.39,91a8,8,0,0,1-1.68.18,7.73,7.73,0,0,1-1.66-15.27l21.53-4.78-14-8.09a7.73,7.73,0,0,1,7.73-13.4l14,8.1-6.63-21a7.73,7.73,0,0,1,14.75-4.65l11.7,37.13L92.27,86.62V51.82L66,23.11a7.73,7.73,0,0,1,11.4-10.45L92.27,28.93V12.73a7.73,7.73,0,1,1,15.45,0v16.2l14.92-16.27A7.73,7.73,0,0,1,134,23.11L107.72,51.82v34.8l30.16-17.41,11.7-37.13a7.72,7.72,0,1,1,14.73,4.65l-6.63,21,14-8.1a7.74,7.74,0,0,1,7.74,13.4l-14,8.1L187,75.94a7.73,7.73,0,0,1-1.67,15.27,8.07,8.07,0,0,1-1.68-.18l-38-8.44L115.46,100l30.14,17.41,38-8.44A7.73,7.73,0,0,1,187,124.06l-21.54,4.79,14,8.1a7.73,7.73,0,0,1-3.89,14.42,7.61,7.61,0,0,1-3.85-1l-14-8.1,6.63,21a7.76,7.76,0,0,1-5,9.71,8.19,8.19,0,0,1-2.33.36,7.71,7.71,0,0,1-7.36-5.42l-11.7-37.13L107.72,113.4v34.8L134,176.89a7.73,7.73,0,0,1-5.7,13,7.66,7.66,0,0,1-5.69-2.51l-14.92-16.26v16.19a7.73,7.73,0,1,1-15.45,0V171.06L77.36,187.34a7.7,7.7,0,0,1-5.7,2.51,7.73,7.73,0,0,1-5.7-13l26.31-28.71V113.4L62.12,130.8,50.43,167.92a7.74,7.74,0,0,1-7.37,5.42,8.19,8.19,0,0,1-2.33-.36,7.75,7.75,0,0,1-5-9.71l6.63-21-14,8.1a7.57,7.57,0,0,1-3.86,1A7.73,7.73,0,0,1,20.55,137l14.05-8.1L13,124.06a7.73,7.73,0,0,1-5.87-9.22" className="cls-2">
                </path>
              </svg>
                  Snow
            </div> 
            <div onClick={() => toggleItems(3)} className={toggledItems['3'] ? "hotswap_button radio active" : "hotswap_button radio"}>
              <svg viewBox="0 0 200 200" id="strong_winds" className="hotswap_button__icon">
                <path d="M83,145.53A21.09,21.09,0,0,0,104,166.61a5.55,5.55,0,1,0,0-11.1,10,10,0,0,1,0-20h85.42a5.55,5.55,0,1,0,0-11.09H104A21.09,21.09,0,0,0,83,145.53m-5.3-24.85c-.54-.07-1,.23-1.56.19,2.18.32,4.39.21,6.46,1.13a21.73,21.73,0,0,0-4.9-1.32M36.31,142.3c-3.42,23,15.53,36.09,15.53,36.09-4.32-10.85,15.79-19.25,17.65-31.55a17.26,17.26,0,0,0,.16-3.28c0-.36-.12-.68-.16-1a16.74,16.74,0,0,0-.34-2.14c-.1-.4-.27-.78-.4-1.16-.21-.61-.41-1.22-.66-1.79-.2-.39-.44-.76-.67-1.14a14.32,14.32,0,0,0-.93-1.52,13,13,0,0,0-.88-1.06c-.38-.44-.77-.88-1.19-1.29s-.71-.6-1.06-.89-.93-.71-1.44-1-.8-.48-1.21-.69a15.7,15.7,0,0,0-1.62-.75,13,13,0,0,0-1.37-.47c-.3-.09-.58-.23-.88-.3a25,25,0,0,1,19.25-7.43c-5.81-.87-11.71-.37-16.76,2.72a32.31,32.31,0,0,0-4.76,4.34h0c-.08.09-.16.19-.24.27s-.31.4-.48.6c-.54.64-1.06,1.3-1.57,2l-.67.94c-.07.1-.14.22-.21.34-.2.28-.37.59-.57.89s-.35.52-.52.81-.36.58-.53.89c-.45.81-.88,1.66-1.27,2.52-.09.17-.19.34-.27.52s-.2.5-.31.75c-.37.85-.71,1.72-1,2.6l-.39,1.16q-.06.23-.12.48-.21.66-.39,1.35c-.07.22-.14.45-.19.68s-.2.73-.29,1.11c-.27,1.21-.52,2.46-.69,3.72s-.27,2.52-.33,3.75c0,.37,0,.75,0,1.13a2.81,2.81,0,0,0,0,.29c0,.22,0,.45,0,.68.22,2.09,0,4.33.42,6.33.21.89.29,1.84.53,2.72a38.43,38.43,0,0,0,2.11,6.64c-.08-.17-.11-.37-.18-.54-.16-.36-.33-.72-.47-1.12s-.22-.62-.34-.94c-.21-.63-.39-1.28-.59-1.95a5.34,5.34,0,0,0-.16-.53c-.07-.29-.15-.56-.22-.84s-.09-.48-.15-.72c-.19-.88-.39-1.76-.52-2.66,0,0,0-.05,0-.06,0-.2,0-.38-.06-.58s-.06-.6-.1-.91c-.07-.66-.16-1.33-.2-2,0-.4,0-.79-.06-1.19v-1.64c-.25-2.57-.89-5-.51-7.75a41,41,0,0,1,8.19-19.78A16.85,16.85,0,0,0,36.31,142.3M17.7,109c-5.11,1.16-8,9.87-12.71,8.4,0,0,6.1,7.55,15.66,5.38a7.11,7.11,0,0,0,5.56-7.08,17.29,17.29,0,0,1-8,4.06,17.24,17.24,0,0,1-10-.76,17.29,17.29,0,0,0,9.12.45,17,17,0,0,0,8.77-4.76,2.51,2.51,0,0,0,0-.27A7,7,0,0,0,17.7,109M71,63.81c1.29-5.73,1.25-11.66-1.46-16.92a32.67,32.67,0,0,0-4-5.08v0a3.13,3.13,0,0,0-.26-.25c-.18-.19-.36-.36-.55-.54-.61-.58-1.22-1.16-1.87-1.72-.28-.24-.56-.48-.88-.72l-.31-.24c-.28-.23-.56-.43-.86-.64s-.5-.39-.77-.58l-.83-.59c-.8-.51-1.63-1-2.47-1.49l-.45-.27h0c-.24-.14-.5-.24-.74-.37-.82-.42-1.65-.83-2.5-1.22L52,32.7c-.15-.07-.31-.11-.45-.17-.44-.17-.86-.33-1.32-.48l-.68-.26c-.35-.12-.72-.25-1.09-.36-1.19-.36-2.41-.7-3.65-1s-2.48-.45-3.71-.61l-1.14-.11-.31,0-.59,0c-2.13.06-4.37-.36-6.41,0-.9.12-1.84.14-2.73.32a38.56,38.56,0,0,0-6.8,1.6c.17-.05.37-.08.54-.14.38-.13.76-.27,1.16-.38s.64-.19,1-.27c.65-.16,1.31-.3,2-.43.2,0,.38-.09.58-.12s.55-.12.85-.17.5-.06.74-.09c.89-.14,1.78-.25,2.69-.32h0c.2,0,.4,0,.61,0s.54,0,.81,0c.69,0,1.39-.06,2.1,0l1.19,0c.32,0,.65,0,1,.07l.74,0c2.56-.06,5-.51,7.72.07a40.91,40.91,0,0,1,19.1,9.65A16.86,16.86,0,0,0,52.62,22.54c-22.71-5.14-37.16,12.8-37.16,12.8,11.14-3.5,18,17.19,30.15,19.95a17.57,17.57,0,0,0,3.27.39c.34,0,.68,0,1-.06a16.84,16.84,0,0,0,2.15-.2c.41-.07.79-.2,1.21-.31a17.19,17.19,0,0,0,1.82-.54c.41-.15.78-.37,1.19-.55s1.08-.52,1.59-.84.75-.52,1.12-.79.93-.69,1.37-1.09a13.33,13.33,0,0,0,1-1A14.42,14.42,0,0,0,62.45,49a10.42,10.42,0,0,0,.79-1.17c.31-.5.61-1,.88-1.55s.38-.88.55-1.33a7.19,7.19,0,0,0,.37-.86,25,25,0,0,1,6,19.76m.07,1.56c.11-.53-.14-1-.07-1.56-.48,2.14-.53,4.36-1.6,6.34a21,21,0,0,0,1.67-4.78M195,80.31a5.54,5.54,0,0,0-5.55-5.55H104a10,10,0,0,1,0-20,5.55,5.55,0,1,0,0-11.09,21.08,21.08,0,0,0,0,42.16h85.42A5.54,5.54,0,0,0,195,80.31m0,24.85a5.55,5.55,0,0,0-5.55-5.56h-132a10,10,0,0,1,0-20,5.55,5.55,0,1,0,0-11.09,21.08,21.08,0,0,0,0,42.16h132a5.54,5.54,0,0,0,5.55-5.55" className="cls-2">
                </path>
              </svg>
                  Strong winds
            </div>
          </div>
        </div> 
        <div className="sidebar_footer">
          <a href="https://www.saab.com/dam" target="_blank">saab.com/dam</a>
        </div>
      </div> 
      <div className="scene_wrap">
        <div className="scene_icon_wrap clearfix">
          <div className="scene_icon_wrap__part">
            <img src={calendarBlank} className="scene_icon_svg calendar shadow_img" /> 
            <img src={calendarBlank} className="scene_icon_svg calendar blank" /> 
            <img src={calendarOne} className="scene_icon_svg calendar blank" /> 
            <img src={calendarOne} className="scene_icon_svg calendar one" /> 
            <img src={calendarTwo} className="scene_icon_svg calendar two" /> 
            <img src={calendarThree} className="scene_icon_svg calendar three" /> 
          <div className="scene_icon_text">Over a 3-year period or 10&nbsp;assemblies</div>
        </div> 
        <div className="scene_icon_wrap__part">
          <img id="maintenance_hands" src={hands} className="scene_icon_svg" /> 
        <div className="scene_icon_text">Long-term deployment with&nbsp;minimal maintenance</div>
      </div>
    </div> 
      <div className="weather_wrap wider">
        <div id="page_4_page_4_sun" className={toggledItems["0"] ? 'weather_scene active' : 'weather_scene'}></div> 
        {videos.map((item, i) => <Video className={classes[i+1]} key={i}  src={item} />)}
      </div>
      </div>
    </div>
  )
}

export default Page4;