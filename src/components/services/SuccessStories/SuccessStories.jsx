// SuccessStories.js
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RiDoubleQuotesL } from 'react-icons/ri';

const SuccessStories = () => {
  const { t } = useTranslation();

  const data = (string, returnObjects = false) => {
    return t(`services.${string}`, {
      returnObjects: returnObjects,
    });
  };

  const testimonials = data('testimonials', true);
  const testimonialsArray = Array.isArray(testimonials) ? testimonials : [];

  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex(
      activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex(
      activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1
    );
  };

  return (
    <div className=" relative px-96 py-4">
      <div className="relative h-56   overflow-hidden rounded-lg md:h-52">
        {testimonialsArray.map((testimonial, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              activeIndex === index ? 'block' : 'hidden'
            }`}
          >
            <div className="flex items-center justify-center   h-full bg-blue-600 text-white text-center p-4">
              <div className="flex">
                {/* <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 mr-8  mt-4 rounded-full mb-4"
                /> */}
                <div className="flex flex-col justify-start items-start">
                  <RiDoubleQuotesL size={50} />
                  <p className="text-sm mb-4  w-[550px]">{testimonial.text}</p>
                  <span className="font-bold ml-2 text-xl">
                    {testimonial.name}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slider Indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {testimonialsArray.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              activeIndex === index ? 'bg-white' : 'bg-gray-500'
            }`}
            aria-current={activeIndex === index}
            onClick={() => setActiveIndex(index)}
          ></button>
        ))}
      </div>

      {/* Navigation Controls */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default SuccessStories;
