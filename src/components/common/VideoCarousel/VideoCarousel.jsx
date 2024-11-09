import React, { useRef, useState } from 'react';
import {
  FaChevronLeft,
  FaChevronRight,
  FaPause,
  FaPlay,
} from 'react-icons/fa6';

const VideoCarousel = ({ data }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRefs = useRef([]);

  const handlePlayPause = (index) => {
    const videoElement = videoRefs.current[index];
    if (videoElement) {
      if (isPlaying) {
        videoElement.pause();
      } else {
        videoElement.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div
      id="default-carousel"
      className="relative w-full"
      data-carousel="static"
    >
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {data.map((video, index) => (
          <div
            key={index}
            className={`${
              index === 0 ? 'block' : 'hidden'
            } duration-700 ease-in-out`}
            data-carousel-item
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              className="absolute block w-[50%] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              controls
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
              onClick={() => handlePlayPause(index)}
            >
              {isPlaying ? <FaPause size={30} /> : <FaPlay size={30} />}
            </button>
          </div>
        ))}
      </div>

      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {data.map((_, index) => (
          <button
            key={index}
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current={index === 0 ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
          />
        ))}
      </div>

      <button
        type="button"
        className="absolute top-1/2 left-[20%] z-30 transform -translate-y-1/2 flex items-center justify-center h-10 w-10 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <FaChevronLeft color="#ffff" />
          <span className="sr-only">Previous</span>
        </span>
      </button>

      <button
        type="button"
        className="absolute top-1/2 right-[20%] z-30 transform -translate-y-1/2 flex items-center justify-center h-10 w-10 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <FaChevronRight color="#ffff" />
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default VideoCarousel;
