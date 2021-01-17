import { useEffect, useRef } from 'react';

const Video = ({src, className}) => {
  const videoRef = useRef(null);
  useEffect(() => {
    videoRef.current.play();
  }, [])
  return (
    <video ref={videoRef} loop={"loop"} muted={"muted"} playsinline="" className={className}>
      <source src={src} type="video/mp4" />
    </video>
  )
}

export default Video;