import React from 'react';
import { useTranslation } from 'react-i18next';
import JobsCard from './JobsCard';

const Jobs = ({ pageName }) => {
  const { t } = useTranslation();
  const data = (string, returnObjects = false) => {
    return t(`${pageName}.${string}`, {
      returnObjects: returnObjects,
    });
  };
  const jobs = data('jobs', true);
  const jobsArray = Array.isArray(jobs) ? jobs : [];
  return (
    <div className="flex justify-center mt-10">
      {jobsArray.length ? (
        <div className="grid grid-cols-3 gap-6">
          {jobsArray.map((job) => (
            <JobsCard key={job.id} job={job} />
          ))}
        </div>
      ) : (
        <p className="text-4xl text-center">No jobs available currently</p>
      )}
    </div>
  );
};

export default Jobs;
