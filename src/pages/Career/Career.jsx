import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import Benefits from '../../components/career/Benefits/Benefits';
import CareerDetailsPage from '../../components/career/CareerDetailsPage/CareerDetailsPage';
import Hero from '../../components/career/Hero/Hero';
import Jobs from '../../components/career/Jobs/Jobs';

const Career = () => {
  const pageName = 'career';
  const [searchParams] = useSearchParams();
  const paramsJobId = searchParams.get('jobId');
  const { t } = useTranslation();

  const data = (string, returnObjects = false) => {
    return t(`${pageName}.${string}`, {
      returnObjects: returnObjects,
    });
  };

  const detailedJob = data('detailedJob', true);
  const detailedJobArray = Array.isArray(detailedJob) ? detailedJob : [];

  const currentDetailsJob = detailedJobArray.find(
    (job) => job.id == paramsJobId
  );
  if (paramsJobId) {
    return <CareerDetailsPage job={currentDetailsJob} />;
  }
  return (
    <>
      <Hero pagName="career" />
      <Jobs pageName="career" />
      <Benefits pageName="career" />
    </>
  );
};

export default Career;
