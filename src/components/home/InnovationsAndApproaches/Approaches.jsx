import React from 'react';
import { useTranslation } from 'react-i18next';
import BlueWhiteHeading from '../../common/headings/BlueWhiteHeading/BlueWhiteHeading';

const Approaches = ({ pageName }) => {
  const { t } = useTranslation();
  const data = (string, returnObjects = false) => {
    return t(`${pageName}.ourApproaches.${string}`, {
      returnObjects: returnObjects,
    });
  };
  return (
    <div className="flex justify-center">
      <div>
        <center className="">
          <div className="md:h-10 h-10 mb-10">
            <center className=" text-white p-8  ">
              <BlueWhiteHeading
                blue={data('heading.blue')}
                white={data('heading.white')}
              />
              <div className="md:-translate-y-14 -translate-y-10">
                <span className="opacity-20 text-gray-400 font-bold text-xl md:text-3xl mb-10">
                  {data('heading.background')}
                </span>
              </div>
            </center>
          </div>
          <div className="text-gray-300 text-md w-60 md:w-[610px] mt-6 mb-2 ml-4 md:ml-24">
            <center>{data('description')}</center>
          </div>
        </center>
        <div className=" text-white grid max-w-screen-xl px-4 py-8 mx-auto ">
          <div className="flex flex-col md:flex-row  gap-72 h-42 mt-10">
            <img
              className="w-44 md:w-40  pt-10"
              src="/icons/approches/Union.svg"
              alt="circle"
            />
            <div className=" pt-10n">
              <h1 className="text-xs pl:2 md:pl-10">
                {data('experience.field')}
              </h1>
              <div className="-translate-y-12 md:translate-x-10">
                <span className="opacity-20 text-gray-400 text-7xl  font-bold">
                  0{data('experience.backgroundNumber')}
                </span>
                <h1 className="text-md font-semibold mb-1">
                  {data('experience.title')}
                </h1>
                <p className="md:text-md text-sm w-60 md:w-[400px] text-md">
                  {data('experience.description')}
                </p>
              </div>
            </div>
          </div>
          <div className="flex  flex-col-reverse md:flex-row mb-10 md:h-24 mt-10 gap-72">
            <div>
              <div className="ml-6 overflow-hidden">
                <h1 className="text-xs pt-5 text-white">
                  {data('technology.field')}
                </h1>
                <div className="-translate-y-10 ">
                  <span className="opacity-20 text-gray-400 text-7xl font-bold">
                    0{data('technology.backgroundNumber')}
                  </span>
                  <h1 className="text-md font-semibold md:mb-1">
                    {data('technology.title')}
                  </h1>
                  <p className="md:text-md text-sm w-60 md:w-[350px]">
                    {data('technology.description')}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img
                className="w-44 md:w-36  mb-4"
                src="/icons/approches/Union2.svg"
                alt="circle"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row  md:h-40 mt-20 gap-72">
            <img
              className="w-44 md:w-40  md:ml-20 mt-10"
              src="/icons/approches/Clock.svg"
              alt="circle"
            />
            <div className=" pt-10 overflow-hidden">
              <h1 className="text-xs  md:pl-5">{data('process.field')}</h1>
              <div className="-translate-y-12 translate-x-4">
                <span className="opacity-20 text-gray-400 text-7xl font-bold">
                  0{data('process.backgroundNumber')}
                </span>
                <h1 className="text-md font-semibold mb-1">
                  {data('process.title')}
                </h1>
                <p className="md:text-md text-xs  w-60 md:w-[400px]">
                  {data('process.description')}
                </p>
              </div>
            </div>
          </div>

          <div className="flex  flex-col-reverse md:flex-row mb-10 md:h-24 mt-10 gap-72">
            <div>
              <div className="ml-6 overflow-hidden">
                <h1 className="text-xs pt-5 text-white">
                  {data('quality.field')}
                </h1>
                <div className="-translate-y-10 ">
                  <span className="opacity-20 text-gray-400 text-7xl font-bold">
                    0{data('quality.backgroundNumber')}
                  </span>
                  <h1 className="text-md font-semibold md:mb-1">
                    {data('quality.title')}
                  </h1>
                  <p className="md:text-md text-sm w-60 md:w-[350px]">
                    {data('quality.description')}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img
                className="w-44 md:w-36  mb-4"
                src="/icons/approches/Union2.svg"
                alt="circle"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row  md:h-40 mt-20 gap-72">
            <img
              className="w-44 md:w-40  md:ml-20 mt-10"
              src="/icons/approches/Clock.svg"
              alt="circle"
            />
            <div className=" pt-10 overflow-hidden">
              <h1 className="text-xs  md:pl-5">{data('delivery.field')}</h1>
              <div className="-translate-y-12 translate-x-4">
                <span className="opacity-20 text-gray-400 text-7xl font-bold">
                  0{data('delivery.backgroundNumber')}
                </span>
                <h1 className="text-md font-semibold mb-1">
                  {data('delivery.title')}
                </h1>
                <p className="md:text-md text-xs  w-60 md:w-[400px]">
                  {data('delivery.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approaches;
