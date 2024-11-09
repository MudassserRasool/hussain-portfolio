import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { GoClock } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../../routes/routes';

const JobsCard = ({ job }) => {
  const navigate = useNavigate();
  return (
    <div className="w-80 border border-gray rounded-md m-4 p-5">
      <div className="text-2xl font-semibold">{job.title}</div>
      <div className="mt-1 text-sm text-gray-500">{job.description}</div>
      <div
        className="flex items-center cursor-pointer"
        onClick={() => navigate(`${routes.careers}?jobId=${job.id}`)}
      >
        <div className="font-semibold text-sm mt-3 mb-3">Apply Now</div>
        <FaArrowRightLong className="text-blue-500  ml-2" />
      </div>
      <div className="flex ">
        <div className="text-xs mt-1 mr-3 text-gray-400">{job.category}</div>
        <div className="text-gray-400">|</div>
        <div className="flex ">
          <GoClock className="text-gray-400 mt-1 ml-2" />
          <div className="text-xs mt-1 ml-2 text-gray-400">
            {job.timeOfPosting}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsCard;
