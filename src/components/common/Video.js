import { useState, useEffect, useRef } from 'react';

const Video = ({src, loop, ...rest}) => {
  const videoRef = useRef(null);
  useEffect(() => {
    videoRef.current.play();
  }, [])
  return (
    <video ref={videoRef} loop={"loop"} muted={"muted"} playsinline="" {...rest} /* className="weather_scene" */>
      <source src={src} type="video/mp4" />
    </video>
  )
}

export default Video;