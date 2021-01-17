import { useState, useEffect } from 'react';

import Logo from '../common/Logo';
import { hideActiveElems } from '../../helpers/helpers';

const Page1 = ({handleChange}) => {
  const [replayCounter, setReplayCounter] = useState(0);

  const handleReplay = () => {
    setReplayCounter(prev => prev + 1);
  }
  const handleKeyUp = (event) => {
    if (event.keyCode === 82) {
      setReplayCounter(prev => prev + 1);
    }
  }

  useEffect(() => {
    let timers = [];
    let animFrames = [];
    const loader = document.querySelector('.sidebar_loader--inner');
    const textFrames = document.querySelectorAll('.step_anim_overlay_text > div');
    let timeout = 0;
    const setAnim = () => {
      animFrames = [...document.querySelectorAll('.step_anim_frame')].slice(1);
      // setAnimFrames(animFrames);
      loader.classList.remove('anim_2');
      animFrames.forEach((anim, idx) => {
        anim.classList.remove('active');
        timeout += 2442;
        const timer = setTimeout(() => {
          if(idx === 1) {
            hideActiveElems(textFrames);
            textFrames[1].classList.add('active');
          }
          if(idx === 3) {
            hideActiveElems(textFrames);
            textFrames[2].classList.add('active');
          }
          if(idx === 5) {
            hideActiveElems(textFrames);
            textFrames[3].classList.add('active');
          }
          anim.classList.add('active')
        }, timeout);
        timers.push(timer);
      })
      setTimeout(() => {
        loader.classList.add('anim_2');
      }, 100)
    }
    setAnim();

    window.addEventListener('keyup', handleKeyUp);
    return () => {
      timers.forEach((timer) => clearTimeout(timer));
      window.removeEventListener('keyup', handleKeyUp);
    }
  }, [replayCounter])

  return (
    <div id="page_1_1" className="page active">
      <div className="sidebar">
        <Logo handleChange={handleChange} isActiveTop={true} />
        <div className="sidebar_textbox">
          <div className="sidebar_textbox__header">
            <span className="sidebar_textbox__title">Rapid deployment</span>
          </div> 
          <div className="sidebar_textbox__main">
            <div className="sidebar_textbox__body">
              <p className="sidebar_textbox__paragraph">
                Due to its minimal logistic footprint and flexible means of transportation, the Deployable Aircraft Maintenance (DAM) facility can be rapidly installed.
              </p> 
              <p className="sidebar_textbox__subtitle">Transportation</p> 
              <p className="sidebar_textbox__paragraph">
                Transported by air, land or sea: for example, on a C-130 Hercules or lorries
              </p>
            </div>
          </div>
        </div> 
        <div className="sidebar-replay_button" onClick={handleReplay}>
          <svg id="replay_icon" width="24" height="24" viewBox="0 0 24 24">
            <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"></path>
          </svg> 
          <span>Replay animation</span>
        </div> 
        <div className="sidebar_footer">
          <a href="https://www.saab.com/dam" target="_blank" rel="noreferrer">saab.com/dam</a>
        </div>
      </div> 
      <div className="scene_wrap">
        <div className="step_anim_wrap">
          <div className="step_anim_overlay_text">
            <div className="active">Hangar transported by air if urgent</div> 
            <div className="">Facility rapidly deployed and assembled</div> 
            <div className="">Containers transported on lorries</div> 
            <div className="">Camouflage covers the hangar and containers</div>
          </div> 
          <div id="page_1_1__frame_1" className="step_anim_frame base"></div> 
          <div id="page_1_1__frame_2" className="step_anim_frame"></div> 
          <div id="page_1_1__frame_3" className="step_anim_frame"></div> 
          <div id="page_1_1__frame_4" className="step_anim_frame"></div> 
          <div id="page_1_1__frame_5" className="step_anim_frame"></div> 
          <div id="page_1_1__frame_6" className="step_anim_frame"></div> 
          <div id="page_1_1__frame_7" className="step_anim_frame"></div> 
          <div id="page_1_1__frame_8" className="step_anim_frame"></div>
        </div> 
        <div className="sidebar_loader">
          <div className="sidebar_loader--inner" style={{
            animationDuration: '17100ms'
          }}></div>
        </div>
      </div>
    </div>
  )
}

export default Page1;