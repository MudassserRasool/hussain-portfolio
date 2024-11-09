import React from 'react';
import { useTranslation } from 'react-i18next';
import BlueBlackHeading from '../../common/headings/BlueBlackHeading/BlueBlackHeading';

const Benefits = ({ pageName }) => {
  const { t } = useTranslation();
  const data = (string, returnObjects = false) => {
    return t(`${pageName}.benefits.${string}`, {
      returnObjects: returnObjects,
    });
  };
  const benefits = data('benefitsList', true);
  const benefitsArray = Array.isArray(benefits) ? benefits : [];
  return (
    <div className="bg-blue-100 p-9 pb-32 -mb-40 mt-10">
      <div className="flex justify-center   bg-blue-100">
        <div className="flex flex-col items-center gap-3">
          <div className="text-gray-600 text-center ">{data('title')}</div>
          <BlueBlackHeading
            black={data('heading.black')}
            blue={data('heading.blue')}
          />
          <div className="md:text-sm w-[390px] text-center md:w-[850px]">
            {data('description')}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10 ">
        <div className="grid grid-cols-3 gap-x-12 gap-y-6">
          {benefitsArray.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2">
              <img src={benefit.icon} alt={benefit.icon} width={25} />
              <div className="text-sm">{benefit.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
