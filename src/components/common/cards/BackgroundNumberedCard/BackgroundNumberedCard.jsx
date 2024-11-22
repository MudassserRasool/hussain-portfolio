import React from 'react';
// import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import BlueWhiteHeading from '../../headings/BlueWhiteHeading/BlueWhiteHeading';

const BackgroundNumberedCard = ({ key, data = {} }) => {
  const isOddKey = data.backgroundNumber % 2 === 0;

  return (
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto ">
      <div className="flex justify-center">
        {data.heading && (
          <BlueWhiteHeading
            white={data.heading?.white}
            blue={data.heading?.blue}
          />
        )}
      </div>

      <div
        className={`flex ${
          isOddKey ? 'md:flex-row-reverse' : 'md:flex-row'
        } flex-col-reverse gap-9 items-center`}
      >
        <div className="md:ml-8 pt-2 overflow-hidden">
          <h1 className="text-xs font-bold pt-5 md:pl-14 text-white">
            {data.field}
          </h1>
          <div className=" -translate-y-14    ">
            <span className="opacity-20 text-gray-400 text-8xl pb-15 font-bold">
              0{data.backgroundNumber}
            </span>
            <div>
              <div>
                <h1 className="text-white  font-bold  text-xlg">
                  {data.title}
                </h1>
              </div>

              <div>
                <p className="w-4/5 text-white">{data.description}</p>
              </div>
              <div className=" flex flex-wrap gap-2  mt-2">
                {data.technologies?.length &&
                  data.technologies.map((item, index) => (
                    <button
                      key={index}
                      className="rounded-full text-sm border border-white text-gray-500 pt-1 pb-1 pl-3 pr-3 mr-1"
                    >
                      {item.name}
                    </button>
                  ))}

                {/* <div className="flex mt-4 gap-3 text-blue-500">
                  <FaArrowLeftLong />
                  <FaArrowRightLong />
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="w-90 ">
          <img
            loading="lazy"
            className="size-100 "
            width={3000}
            src={data.image}
            alt="pc"
          />
        </div>
      </div>
    </div>
  );
};

export default BackgroundNumberedCard;
