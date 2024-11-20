import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../../routes/routes';
import Button from '../../common/buttons/Button/Button';
import ServicesCard from '../../common/cards/ServicesCard/ServicesCard';
import BlueBlackHeading from '../../common/headings/BlueBlackHeading/BlueBlackHeading';

const OurServices = ({ pageName }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const data = (string, returnObjects = false) => {
    return t(`${pageName}.ourServices.${string}`, {
      returnObjects: returnObjects,
    });
  };
  const services = data('services', true);
  const servicesArray = Array.isArray(services) ? services : [];
  return (
    <>
      <div className="bg-white mt-20  max-w-5xl mx-auto p-5 md:p-0">
        <div className="flex justify-center">
          <BlueBlackHeading
            black={data('heading.black')}
            blue={data('heading.blue')}
          />
        </div>
        <div className="grid grid-cols-1  md:grid-cols-3 gap-4">
          {servicesArray.map((service, index) => (
            <ServicesCard key={index} data={service} />
          ))}
        </div>
        <div className="flex justify-center mt-5">
          <Button
            theme="blueRounded"
            title="View More"
            onClick={() => navigate(routes.services)}
          />
        </div>
      </div>
    </>
  );
};

export default OurServices;
