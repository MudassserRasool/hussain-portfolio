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
    <section className="bg-white bg-gradient-to-r from-[#0a0a2a] to-[#1a1a4d] ">
      {technologiesArray.map((item, index) => (
        <BackgroundNumberedCard key={index} data={item} />
      ))}
    </section>
  );
};

export default Innovations;
