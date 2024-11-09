import React, { useRef, useState } from 'react';
import { FaPause, FaPlay } from 'react-icons/fa6';

const VideoPlayer = ({ videoSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
      <video
        ref={videoRef}
        className="absolute block w-[50%] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        controls
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={(e) => {
          e.stopPropagation();
          handlePlayPause();
        }}
      >
        {isPlaying ? <FaPause size={30} /> : <FaPlay size={30} />}
      </button>
    </div>
  );
};

export default VideoPlayer;
