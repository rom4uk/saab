import React, { useState, useEffect } from 'react';

import Logo from '../common/Logo';
import ModalPane from '../Modal/ModalPane';
import {container} from '../../helpers/slideData';
import ContainerItem from './elements/ContainerItem';

const Page4 = ({handleChange, setIsModal, isModal}) => {
  const [slideIdx, setSlideIdx] = useState(0);

  const handleNextIndex = (idx) => {
    let nextIdx = idx;
    if(idx > container.length - 1) {
      nextIdx = 0;
    }
    setSlideIdx(prev => nextIdx);
  }

  const handlePrevIndex = (idx) => {
    let prevIdx = idx;
    if(prevIdx < 0) {
      prevIdx = container.length - 1;
    }
    setSlideIdx(prev => prevIdx);
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
      case "6":
        setSlideIdx(+e.key - 1);
        if(!isModal) {
          setIsModal(prev => true);
        }
        break;
      case "7":
        setSlideIdx(+e.key - 1);
        if(!isModal) {
          setIsModal(prev => true);
        }
        break;
      case "8":
        setSlideIdx(+e.key - 1);
        if(!isModal) {
          setIsModal(prev => true);
        }
        break;
      case "9":
        setSlideIdx(+e.key - 1);
        if(!isModal) {
          setIsModal(prev => true);
        }
        break;
      case "0":
        setSlideIdx(9);
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
      {isModal ? <ModalPane handlePrevIndex={handlePrevIndex} handleNextIndex={handleNextIndex} slideIdx={slideIdx} setSlideIdx={setSlideIdx} setIsModal={setIsModal} item={container[slideIdx]} /> : null}
      <div id="page_2" className="page active">
        <div className="sidebar">
          <div className="saab_logo">
          <Logo handleChange={handleChange} isActiveTop={true} />
          </div> 
          <div className="sidebar_textbox">
            <div className="sidebar_textbox__header">
              <span className="sidebar_textbox__title">Maintenance Containers</span>
            </div> 
            <div className="sidebar_textbox__main">
              <div className="sidebar_textbox__body">
                <p className="sidebar_textbox__paragraph">
                  The maintenance container system provides workshop capacity equal to the main base in mobile format.
                </p> 
                <p className="sidebar_textbox__subtitle">Flexibility</p> 
                <div className="sidebar_textbox__paragraph">
                  <ul>
                    <li>A scalable and modular system, offering various types of services</li> <li>Enhanced workshop capacity</li> 
                    <li>
                      Interior container furnishing can be adapted as required by the customer
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> 
          <div className="sidebar_footer">
            <a href="https://www.saab.com/dam" target="_blank" rel="noreferrer">saab.com/dam</a>
          </div>
        </div> 
        <div className="scene_wrap">
          <div className="scene_wrap__inner">
            <div className="container_menu">
              <div className="container_menu__grid">
                {container.map((item, i) => <ContainerItem setIsModal={setIsModal} setSlideIdx={setSlideIdx} idx={i} key={i} item={item} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page4;