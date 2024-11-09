import React from 'react';
import { useTranslation } from 'react-i18next';
import BlueBlackHeading from '../../common/headings/BlueBlackHeading/BlueBlackHeading';
const Hero = ({ pagName }) => {
  const { t } = useTranslation();
  const data = (string, returnObjects = false) => {
    return t(`${pagName}.hero.${string}`, {
      returnObjects: returnObjects,
    });
  };
  return (
    <div>
      <div className="bg-blue-50 flex justify-center p-10">
        <div className>
          <div className="flex flex-row ml-56 h-32">
            <div>
              <img
                alt="person"
                className=" hidden   md:block w-8 mt-2 md:mr-6 mr-2"
                src="/images/about/person2.png"
              />
            </div>
            <div>
              <img
                alt="person"
                className="hidden  md:block w-24 mt-6"
                src="/images/about/imag3.png"
              />
            </div>
            <div>
              <img
                alt="person"
                className=" hidden  md:block w-10"
                src="/images/about/person3.png"
              />
            </div>
            <div>
              <img
                alt="person"
                className="hidden  md:block w-24 mt-8"
                src="/images/about/image2.png"
              />
            </div>
          </div>
          <div className="flex flex-row h-28">
            <div>
              <div>
                <img
                  alt="person"
                  className=" hidden  md:block w-10 ml-4 mb-6 -translate-y-6"
                  src="/images/about/person1.png"
                />
              </div>
              <div>
                <img
                  alt="person"
                  className=" hidden  md:block w-24"
                  src="/images/about/image6.png"
                />
              </div>
            </div>
            <div className=" p-16 -mt-12">
              <div className="text-xl font-bold">
                <center>
                  <BlueBlackHeading
                    black={data('heading.black')}
                    blue={data('heading.blue')}
                  />
                </center>
              </div>
              <div className="text-sm w-[290px] ms-9">
                <center>{data('description')}</center>
              </div>
            </div>
            <div>
              <div>
                <img
                  alt="person"
                  className=" hidden md:block w-10 mt-2 ml-16"
                  src="/images/about/person5.png"
                />
              </div>
              <div>
                <img
                  alt="person"
                  className=" hidden  md:block w-24 mt-4"
                  src="/images/about/image4.png"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row ml-48 h-20">
            <div className>
              <div>
                <img
                  alt="person"
                  className=" hidden  md:block w-10 -translate-x-28"
                  src="/images/about/person4.png"
                />
              </div>
              <div>
                <img
                  alt="person"
                  className=" hidden  md:block w-24 mr-32 -translate-x-20 -translate-y-4"
                  src="/images/about/image7.png"
                />
              </div>
            </div>
            <div>
              <img
                alt="person"
                className="hidden  md:block w-10 ml-32 translate-x-20"
                src="/images/about/Ellipse 241.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
