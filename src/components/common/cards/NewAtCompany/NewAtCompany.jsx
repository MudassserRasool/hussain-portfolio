import React from 'react';
import { useTranslation } from 'react-i18next';
import { MdArrowOutward } from 'react-icons/md';
import BlueBlackHeading from '../../headings/BlueBlackHeading/BlueBlackHeading';

const NewAtCompany = ({ pagName }) => {
  const { t } = useTranslation();
  const data = (string, returnObjects = false) => {
    return t(`${pagName}.newAtCompany.${string}`, {
      returnObjects: returnObjects,
    });
  };
  const images = data('images', true);
  const imagesArray = Array.isArray(images) ? images : [];

  return (
    <div className=" ">
      <div className="flex justify-center">
        <BlueBlackHeading
          black={data('heading.black')}
          blue={data('heading.blue')}
        />
      </div>

      <div className="bg-white  mt-10 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <div className=" ">
            <img
              style={{ width: 380, height: 350 }}
              src={data('mainImage.image')}
              className=" hidden  md:block"
              alt="main"
            />
            <p className="absolute w-72  transform translate-x-6 -translate-y-20 text-white  ">
              {data('mainImage.date')} <br />
              <span className="font-bold  ">{data('mainImage.text')}</span>
            </p>
          </div>
          <div className="grid grid-rows-3   ">
            {imagesArray.map((image, index) => (
              <div key={index} className="flex flex-col md:flex-row">
                <div>
                  <img
                    src={image.image}
                    className="w-60 md:w-32"
                    alt={image.image}
                  />
                </div>
                <div className="ml-1 md:ml-7 mt-2">
                  <p className="text-blue-600 font-bold text-xs">
                    {image.date}
                  </p>
                  <div className="flex flex-row g-3">
                    <p className="w-48 md:w-60 text-xs">{image.text}</p>
                    <p className="text-blue-600">
                      <MdArrowOutward />
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAtCompany;
