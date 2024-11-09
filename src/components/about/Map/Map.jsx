import React from 'react';
import { useTranslation } from 'react-i18next';
import MapComponent from '../../common/MapComponent/MapComponent';
import BlueBlackHeading from '../../common/headings/BlueBlackHeading/BlueBlackHeading';

const Map = ({ pageName = 'about' }) => {
  const { t } = useTranslation();
  const data = (string, returnObjects = false) => {
    return t(`${pageName}.location.${string}`, {
      returnObjects: returnObjects,
    });
  };
  const locations = data('locations', true);
  const locationsArray = Array.isArray(locations) ? locations : [];

  return (
    <div>
      <div className=" py-5 mx-auto ">
        <div className="flex justify-center">
          <BlueBlackHeading
            black={data('heading.black')}
            blue={data('heading.blue')}
          />
        </div>

        <div className="flex gap-14 justify-center mt-6">
          <div>
            {locationsArray.map((location, index) => (
              <div key={location.country} className="flex flex-col ">
                <div className="flex flex-col mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                    <span className="text-black">{location.city}</span>
                  </div>
                  <span className="text-blue-600 text-2xl font-semibold">
                    {location.country}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <MapComponent />
        </div>
      </div>
    </div>
  );
};

export default Map;
