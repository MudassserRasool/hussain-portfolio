import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { routes } from '../../../../routes/routes';

const ServicesCard = ({ data }) => {
  return (
    <>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-200">
        <h5 className="mb-2 text-2xl font-bold  text-black ">{data.title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-black line-clamp-3">
          {data.description}
        </p>
        <div className="flex justify-between">
          <Link
            to={`${routes.services}/?service=${data.link}`}
            className="inline-flex items-center gap-2  text-sm font-medium text-center text-blue-500 rounded-lg "
          >
            Read more
            <FaArrowRightLong />
          </Link>
          <img src={data.icon} alt="Icon" width={50} />
        </div>
      </div>
    </>
  );
};

export default ServicesCard;
