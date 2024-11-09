import React from 'react';
import { useTranslation } from 'react-i18next';
import BlueBlackHeading from '../../common/headings/BlueBlackHeading/BlueBlackHeading';

const Journey = ({ pageName }) => {
  const { t } = useTranslation();
  const data = (string, returnObjects = false) => {
    return t(`${pageName}.milestones.${string}`, {
      returnObjects: returnObjects,
    });
  };
  const milestones = data('milestones', true);
  const milestonesArray = Array.isArray(milestones) ? milestones : [];

  return (
    <div className="container mx-auto py-16 px-4 bg-white">
      <div className="flex justify-center">
        <BlueBlackHeading
          black={data('heading.black')}
          blue={data('heading.blue')}
        />
      </div>
      <div className="flex  flex-col  md:flex-row md:ml-44 ml-40  justify-center">
        {milestonesArray.map((milestone, index) => (
          <div
            key={milestone.year}
            className={`flex items-center mt-7 md:mt-0 mr-2 ${
              index % 2 === 0 ? 'mt-12 md:mt-40' : ''
            }`}
          >
            <div className="w-1/4 flex flex-col items-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center text-white text-1xl font-bold">
                {milestone.year}
              </div>
              <div className="mt-4 text-center">
                <h2 className="text-lg font-medium text-gray-800">
                  {milestone.title}
                </h2>
                <p className="text-gray-600 text-xs w-60">
                  {milestone.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journey;
