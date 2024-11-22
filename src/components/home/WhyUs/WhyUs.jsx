import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import BlueBlackHeading from '../../common/headings/BlueBlackHeading/BlueBlackHeading';

const WhyUs = ({ pagName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useTranslation();

  const data = (string, returnObjects = false) => {
    return t(`${pagName}.whyUs.${string}`, {
      returnObjects: returnObjects,
    });
  };
  const services = data('services', true);

  return (
    <div className="max-w-5xl mx-auto my-20 p-5 md:p-0">
      <div className=" mb-10">
        <h2 className="text-gray-500 uppercase text-sm">
          {data('mainHeading')}
        </h2>
        <BlueBlackHeading
          black={data('heading.black')}
          blue={data('heading.blue')}
        />
      </div>
      <div className="flex flex-col lg:flex-row items-center">
        <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl">
          <div className="flex justify-center">
            <img
              src="/images/home/persons/TeachingGirl.svg"
              alt="Presentation"
              className="mb-3"
              style={{ width: '632px' }}
              loading="lazy"
            />
          </div>

          <div className="flex flex-col justify-start">
            {Array.isArray(services) &&
              services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-start mb-6 cursor-pointer"
                  onClick={() => setActiveIndex(index)}
                >
                  <div
                    className={`w-2 h-full mt-2 ${
                      activeIndex === index ? 'bg-blue-600' : 'bg-transparent'
                    } mr-4`}
                  />

                  <div>
                    <h3
                      className={`font-semibold text-lg ${
                        activeIndex === index
                          ? 'text-blue-600'
                          : 'text-gray-800'
                      }`}
                    >
                      {service.title}
                    </h3>
                    {activeIndex === index && (
                      <p className="text-gray-500 mt-2 text-sm md:text-lg">
                        {service.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
