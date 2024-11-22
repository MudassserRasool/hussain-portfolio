import React from 'react';
import Button from '../../common/buttons/Button/Button';

const Hero = ({ data = {} }) => {
  return (
    <>
      <section className="bg-white bg-gradient-to-r from-[#0a0a2a] to-[#1a1a4d]">
        <div className="grid max-w-screen-xl px-4  mx-auto lg:gap-3 xl:gap-0 pt-10  lg:grid-cols-12">
          <div className=" place-self-center lg:col-span-6">
            <h1 className="max-w-2xl mb-4 text-xl font-semibold tracking-tight leading-none md:text-2xl xl:text-4xl dark:text-white">
              {data.title?.white1}
              <span className="text-blue-600">{` {${data.title?.blue}} `}</span>
              {data.title?.white2}
            </h1>
            <div className="flex items-center mb-6 gap-3">
              <div className="text-xl text-blue-500">{'>'}</div>
              <div className="max-w-2xl font-light text-white md:text-lg lg:text-xl dark:text-gray-400">
                {data?.description}
              </div>
            </div>

            <Button theme={'blue'} title="Hire Me" />
          </div>
          <div className="hidden lg:mt-0 lg:col-span-6 lg:flex">
            <img src={data?.image} alt="mockup" height={5000} loading="lazy" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
