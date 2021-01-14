import React, { useEffect } from 'react';

const Pace = ({setBodyClass, handleChange}) => {

  useEffect(() => {
    document.body.classList.add('pace-done');
    setBodyClass(true);
    handleChange('isActive0')
  }, [])

  return (
    <div className="pace  pace-inactive">
      <div className="pace-progress" data-progress-text="100%" data-progress="99" style={{
        transform: 'translate3d(100%, 0px, 0px)'
      }}>
        <div className="pace-progress-inner"></div>
      </div>
      <div className="pace-activity"></div>
    </div>
  )
}

export default Pace;