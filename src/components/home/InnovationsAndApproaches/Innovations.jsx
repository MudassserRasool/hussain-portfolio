import React from 'react';
import { useTranslation } from 'react-i18next';
import BackgroundNumberedCard from '../../common/cards/BackgroundNumberedCard/BackgroundNumberedCard';

const Innovations = ({ pageName }) => {
  const { t } = useTranslation();
  const data = (string, returnObjects = false) => {
    return t(`${pageName}.${string}`, {
      returnObjects: returnObjects,
    });
  };
  const innovations = data('innovations', true);
  const technologiesArray = Array.isArray(innovations) ? innovations : [];
  return (
    <div className="px-5 md:px-0">
      {technologiesArray.map((item, index) => (
        <BackgroundNumberedCard key={index} data={item} />
      ))}
    </div>
  );
};

export default Innovations;
