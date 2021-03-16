import { useEffect, useRef } from 'react';

import { hideActiveElems } from '../../helpers/helpers';
import {progressButtons} from '../../helpers/slideData';
import Logo from '../common/Logo';
import ProgressButton from './elements/ProgressButton';

import static48 from '../../icons/48hr_loader_static2d.svg'

const Page2 = ({changePages}) => {
  const buttonRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)/* , useRef(null) */]
  const imageRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)/* , useRef(null) */]

  let timers = [];

  const handleChangeOnButton = (idx, idxFromEvent) => {
    if(timers.length) {
      timers.forEach((timer) => clearTimeout(timer));
    }
    hideActiveElems(buttonRefs, true);
    hideActiveElems(imageRefs, true);
    const countIndex = idxFromEvent || idx;
    for (let index = 0; index < buttonRefs.length; index++) {
      if(index <= countIndex) {
        buttonRefs[index].current.classList.add('active');
        imageRefs[index].current.classList.add('active');
        imageRefs[index].current.classList.add('delayed');
      }
    }
  }

  const handleChangeOnButtonFromKyeUp = (e) => {
    const key = +e.key;
    switch (key) {
      case 1:
        handleChangeOnButton(null, key - 1);
        break;
      case 2:
        handleChangeOnButton(null, key - 1);
        break;
      case 3:
        handleChangeOnButton(null, key - 1);
        break;
      case 4:
        handleChangeOnButton(null, key - 1);
        break;
      case 5:
        handleChangeOnButton(null, key - 1);
        break;
      case 6:
        handleChangeOnButton(null, key - 1);
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    let timeout = 500;
    const buttonsNode = document.querySelectorAll('.progress_button');
    const imagesNode = document.querySelectorAll('.progress_anim_frame:not(.base)');

    const setAnim = (timers, timeout) => {
      for (let idx = 0; idx < buttonsNode.length; idx++) {
        buttonsNode[idx].classList.remove('active');
        imagesNode[idx].classList.remove('active');
        timeout += 840;
        const timer = setTimeout(() => {
          if(idx !== imagesNode.length - 1) {
            buttonsNode[idx].classList.add('active');
            imagesNode[idx].classList.add('active');
            imagesNode[idx].classList.add('delayed');
          }
          if(idx === imagesNode.length - 1) {
            buttonsNode[idx].classList.add('active');
            imagesNode[idx].classList.add('active');
          }
        }, timeout);
        timers.push(timer);
      }
    }

    setAnim(timers, timeout);
    window.addEventListener('keyup', handleChangeOnButtonFromKyeUp);

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
      window.removeEventListener('keyup', handleChangeOnButtonFromKyeUp);
    }
  }, [])

  return (
    <div id="page_1_4" className="page active">
      <div className="sidebar">
        <Logo handleChange={changePages} isActiveTop={true} />
        <div className="sidebar_textbox">
          <div className="sidebar_textbox__header">
            <span className="sidebar_textbox__title">Assembly</span>
          </div> 
          <div className="sidebar_textbox__main">
            <div className="sidebar_textbox__body">
              <p className="sidebar_textbox__paragraph">
                The DAM is rapidly assembled to ensure maximum operational availability and minimum maintenance cost.
              </p> 
              <p className="sidebar_textbox__subtitle"></p> 
              <p className="sidebar_textbox__paragraph">
                The DAM can be assembled in approximately 48&nbsp;hours, using 11&nbsp;workers and 1&nbsp;supervisor.
              </p>
            </div>
          </div>
        </div> 
        <svg id="loader_48hr" x="0px" y="0px" viewBox="0 0 240 240" /* xml:space="preserve" */>
          <circle id="rear" cx="120" cy="120" r="90"></circle> 
          <path id="front" d="M120,30c49.7,0,90,40.3,90,90s-40.3,90-90,90s-90-40.3-90-90S70.3,30,120,30z" style={{animationDuration: '4000ms'}}></path> 
          <text transform="matrix(1 0 0 1 72.6572 136.0178)" id="value">48</text> 
          <text transform="matrix(1 0 0 1 94.9658 166.4473)" id="hours">hrs</text>
        </svg> 
        <img id="loader_48hr_static" src={static48} alt="" /> 
        <div className="scene_toggle_menu scene_toggle_menu--overlays">
          <div className="scene_toggle_menu__title">
            <svg width="24" height="24" viewBox="0 0 24 24" className="filter_icon">
              <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"></path>
            </svg> 
            <div className="scene_toggle_menu__title_label">View assembly stage</div>
          </div> 
          <div className="scene_toggle_menu__buttons">
            {progressButtons.map((button, i) => <ProgressButton key={i} refTo={buttonRefs[i]} title={button} idx={i} handleChangeOnButton={handleChangeOnButton} />)}
          </div>
        </div> 
        {/* <div className="sidebar_footer">
          <a href="https://www.saab.com/dam" target="_blank" rel="noreferrer">saab.com/dam</a>
        </div> */}
      </div> 
      <div className="scene_wrap">
        <div className="progress_anim_wrap">
          <div id="page_1_4_page_1_4_none" className="progress_anim_frame base"></div> 
          <div id="page_1_4_page_1_4_frame" ref={imageRefs[0]} className="progress_anim_frame">
          </div> 
          <div id="page_1_4_page_1_4_shell_clam" ref={imageRefs[1]} className="progress_anim_frame">
          </div> 
          <div id="page_1_4_page_1_4_entrances" ref={imageRefs[2]} className="progress_anim_frame">
          </div> 
          <div id="page_1_4_page_1_4_containers" ref={imageRefs[3]} className="progress_anim_frame">
          </div> 
          <div id="page_1_4_page_1_4_camo" ref={imageRefs[4]} className="progress_anim_frame"></div> 
          {/* <div id="page_1_4_page_1_4_camo_closed" ref={imageRefs[5]} className="progress_anim_frame "></div> */}
        </div>
      </div>
    </div>
  )
}

export default Page2;