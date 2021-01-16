import React, { useState, useEffect, useRef } from 'react';

import ModalStp from './ModalStp';
import ModalContainers from './ModalContainers';


const ModalPane = ({item, stp, setIsModal, handleNextIndex, handlePrevIndex, slideIdx}) => {
  const [activeClass, setactiveClass] = useState(false);
  const arrowsTrigger = useRef(null);

  const closeModal = (e) => {
    if(e.target.classList.contains('modal_backdrop')) {
      setactiveClass(prev => false);
      setIsModal(false)
    }
  }

  const handleNextArrow = () => {
    arrowsTrigger.current.classList.add('nextClick');
    const timer = setTimeout(() => {
      arrowsTrigger.current.classList.remove('nextClick');
      clearTimeout(timer)
    }, 400)
  }
  
  const handlePrevArrow = () => {
    arrowsTrigger.current.classList.add('prevClick');
    const timer = setTimeout(() => {
      arrowsTrigger.current.classList.remove('prevClick');
      clearTimeout(timer)
    }, 400)
  }

  const handleClick = (e) => {
    switch (e.key) {
      case "ArrowRight":
        handleNextArrow();
        break;
      case "ArrowLeft":
        handlePrevArrow();
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    setactiveClass(prev => true);
    window.addEventListener('keyup', handleClick)
    return () => {
      window.removeEventListener('keyup', handleClick)
    }
  }, [handleClick])

  return (
    <div onClick={closeModal} className={activeClass ? "modal_backdrop active" : "modal_backdrop"}>
      <div className={stp ? "modal_pane modal_pane__stp" : "modal_pane modal_pane__containers"}>
        <div className="modal_pane__header" ref={arrowsTrigger}>
          <span>{item.title}</span> 
          <div className="screen"></div> 
          <div className="modal_pane__prev" onClick={()=>handlePrevIndex(slideIdx - 1)}>
            <svg width="24" height="24" viewBox="0 0 24 24" className="close_icon prev">
              <path d="M15.41,16.59L10.83,12l4.58-4.59L14,6l-6,6l6,6L15.41,16.59z"></path>
            </svg>
          </div> 
          <div className="modal_pane__next" onClick={()=>handleNextIndex(slideIdx + 1)}>
            <svg width="24" height="24" viewBox="0 0 24 24" className="close_icon next">
              <path d="M8.59,16.59L13.17,12L8.59,7.41L10,6l6,6l-6,6L8.59,16.59z"></path>
            </svg>
          </div> 
          <div className="modal_pane__close" onClick={() => setIsModal(false)}>
            <svg width="24" height="24" viewBox="0 0 24 24" className="close_icon close">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
              </path>
            </svg>
          </div>
        </div> 
        {stp ? <ModalStp item={item} /> : <ModalContainers item={item} />}
      </div>
    </div>
  )
}

export default ModalPane;