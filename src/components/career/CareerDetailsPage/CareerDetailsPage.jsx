import React from 'react';
import Content from './Content';
import JobApplyForm from './JobApplyForm';

const CareerDetailsPage = ({ job = {} }) => {
  return (
    <div>
      <div className="flex justify-center  my-10">
        <Content job={job} />
        <JobApplyForm jobTitle={job.title} />
      </div>
    </div>
  );
};

export default CareerDetailsPage;
