import React, { useState, useEffect } from 'react';

import { page3Data } from '../../helpers/slideData';
import {stp} from '../../helpers/slideData';
import ModalPane from '../Modal/ModalPane';
import StpItem from './elements/StpItem';
import Logo from '../common/Logo';

const Page3 = ({handleChange, setIsModal, isModal}) => {
  const [slideIdx, setSlideIdx] = useState(0);

  const handleNextIndex = (idx) => {
    let nextIdx = idx;
    if(idx > stp.length - 1) {
      nextIdx = 0;
    }
    setSlideIdx(nextIdx);
  }

  const handlePrevIndex = (idx) => {
    let nextIdx = idx;
    if(nextIdx < 0) {
      nextIdx = stp.length - 1;
    }
    setSlideIdx(nextIdx);
  }

  const handleClick = (e) => {
    switch (e.key) {
      case "1":
          setSlideIdx(+e.key - 1);
          if(!isModal) {
            setIsModal(prev => true);
          }
        break;
      case "2":
        setSlideIdx(+e.key - 1);
        if(!isModal) {
          setIsModal(prev => true);
        }
        break;
      case "3":
        setSlideIdx(+e.key - 1);
        if(!isModal) {
          setIsModal(prev => true);
        }
        break;
      case "4":
        setSlideIdx(+e.key - 1);
        if(!isModal) {
          setIsModal(prev => true);
        }
        break;
      case "5":
        setSlideIdx(+e.key - 1);
        if(!isModal) {
          setIsModal(prev => true);
        }
        break;
      case "Escape":
        if(isModal) {
          setIsModal(prev => false);
        }
        break;
      case "ArrowRight":
        handleNextIndex(slideIdx + 1);
        break;
      case "ArrowLeft":
        handlePrevIndex(slideIdx - 1);
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    window.addEventListener('keyup', handleClick)
    return () => {
      window.removeEventListener('keyup', handleClick)
    }
  }, [handleClick])

  return (
  <>
    {isModal ? <ModalPane handlePrevIndex={handlePrevIndex} handleNextIndex={handleNextIndex} slideIdx={slideIdx} setSlideIdx={setSlideIdx} setIsModal={setIsModal} stp={true} item={stp[slideIdx]} /> : null}
    <div id="page_3" className="page active">
      <div className="sidebar">
        <Logo handleChange={handleChange} isActiveTop={true} />
        <div className="sidebar_textbox">
          <div className="sidebar_textbox__header">
            <span className="sidebar_textbox__title">Multispectral Protection</span>
          </div> 
          <div className="sidebar_textbox__main">
            <div className="sidebar_textbox__body">
              <p className="sidebar_textbox__paragraph">
                Barracuda multispectral camouflage covers the hangar and maintenance containers and offers superior sensor threat protection for increased survivability.
              </p> 
              <p className="sidebar_textbox__subtitle">Total protection</p> 
              <p className="sidebar_textbox__paragraph">
                <ul>
                  <li>
                    The solution provides protection for personnel, vehicles and infrastructure against hostile sensors and enemy target acquisition
                  </li> 
                  <li>
                    Multispectral camouflage also limits the effect of sun radiation, contributing to reduced internal temperature in the covered objects
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div> 
        <div className="sidebar_footer">
          <a href="https://www.saab.com/dam" target="_blank" rel="noreferrer">saab.com/dam</a>
        </div>
      </div> 
      <div className="scene_wrap">
        <div className="scene_wrap__inner">
          <div className="stp_menu">
            <div className="stp_menu__grid">
              {page3Data.map((item, i) => <StpItem setIsModal={setIsModal} setSlideIdx={setSlideIdx} idx={i} key={i} item={item} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Page3;