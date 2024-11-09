// AllServices.js
import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import LeftAlienedImageCard from './LeftAlienedImageCard/LeftAlienedImageCard';
import RightAlienedImageCard from './RightAlienedImageCard/RightAlienedImageCard';

const AllServices = () => {
  const { t } = useTranslation();
  const [params] = useSearchParams();
  const paramsServiceName = params.get('service');

  const data = (string, returnObjects = false) => {
    return t(`services.${string}`, {
      returnObjects: returnObjects,
    });
  };

  const services = data('allServices', true);
  const servicesArray = Array.isArray(services) ? services : [];

  // Create refs for each service
  const serviceRefs = useRef([]);

  // Scroll to the matching card on component mount or when paramsServiceName changes
  useEffect(() => {
    if (paramsServiceName && serviceRefs.current.length > 0) {
      const matchingIndex = servicesArray.findIndex(
        (service) =>
          service.cardOne.buttonLink === paramsServiceName ||
          service.cardTwo.buttonLink === paramsServiceName
      );

      // Scroll to the matching service card if found
      if (matchingIndex !== -1 && serviceRefs.current[matchingIndex]) {
        serviceRefs.current[matchingIndex].scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  }, [paramsServiceName, servicesArray]);

  return (
    <div className="bg-white max-w-5xl mx-auto">
      {servicesArray.map((service, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center"
          ref={(el) => (serviceRefs.current[index] = el)}
        >
          <RightAlienedImageCard
            data={service.cardOne}
            paramsServiceName={paramsServiceName}
          />
          <LeftAlienedImageCard
            data={service.cardTwo}
            paramsServiceName={paramsServiceName}
          />
        </div>
      ))}
    </div>
  );
};

export default AllServices;
