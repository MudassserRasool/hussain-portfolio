import React from 'react';
import { useTranslation } from 'react-i18next';
import BackgroundNumberedCard from '../../common/cards/BackgroundNumberedCard/BackgroundNumberedCard';

const AllPortfolios = ({ pageName }) => {
  const { t } = useTranslation();
  const data = (string, returnObjects = false) => {
    return t(`${pageName}.${string}`, {
      returnObjects: returnObjects,
    });
  };
  const innovations = data('innovations', true);
  const technologiesArray = Array.isArray(innovations) ? innovations : [];
  return (
    <>
      {technologiesArray.map((item, index) => (
        <BackgroundNumberedCard key={index} data={item} />
      ))}
    </>
  );
};

export default AllPortfolios;
