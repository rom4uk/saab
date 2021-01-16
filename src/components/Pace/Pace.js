import React, { useEffect, useRef } from 'react';

const Pace = ({setBodyClass, handleChange, isDomLoaded}) => {
  const progress = useRef(null);
  const pace = useRef(null);

  const triggerProgress = () => {
    let dataProgress = parseInt(progress.current.getAttribute('data-progress'));
    const interval = setInterval(() => {
      if(dataProgress <= 99) {
        progress.current.setAttribute('data-progress', `${dataProgress++}%`);
        progress.current.setAttribute('style', `transform: translate3d(${dataProgress++}%, 0px, 0px)`);
        if(isDomLoaded && dataProgress === 98) {
          pace.current.classList.remove('pace-active');
          pace.current.classList.add('pace-inactive');
          progress.current.setAttribute('data-progress', `100%`);
          document.body.classList.add('pace-done');
          setBodyClass(true);
          clearInterval(interval);
        }
      }
    }, 20)
  }

  useEffect(() => {
    handleChange('isActive0');
    triggerProgress();
  }, [isDomLoaded])

  return (
    <div className="pace pace-active" ref={pace}>
      <div className="pace-progress" ref={progress} data-progress="0%" style={{
        transform: 'translate3d(100%, 0px, 0px)'
      }}>
        <div className="pace-progress-inner"></div>
      </div>
      <div className="pace-activity"></div>
    </div>
  )
}

export default Pace;