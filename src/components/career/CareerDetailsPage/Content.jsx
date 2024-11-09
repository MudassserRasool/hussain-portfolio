import React from 'react';

const Content = ({ job }) => {
  return (
    <div className="ml-32">
      <div>
        <h1 className="font-semibold text-3xl w-96 mt-3 mb-2">{job?.title}</h1>
      </div>
      <div className=" ">
        <h1 className="text-lg font-semibold mt-2 mb-2">
          {job.overview?.title}
        </h1>
        <p style={{ width: 460 }} className="  text-sm">
          {job.overview?.description}
        </p>
      </div>
      <div>
        <h1 className="font-semibold text-lg mb-1 mt-2">
          {job.responsibilities?.title}
        </h1>
        <div>
          <ul className="list-disc  pl-1 text-sm">
            {job.responsibilities.points.map((responsibility, index) => (
              <div key={index} className="flex flex-row  ">
                <div className="mr-2 mt-1 w-2 h-2 rounded-full bg-blue-600" />
                <div>{responsibility}</div>
              </div>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <h1 className="font-semibold text-lg mb-1 mt-2">
          {job.benefits?.title}
        </h1>
        <h4 style={{ width: 420 }} className=" text-sm mb-1">
          {job.benefits?.description}
        </h4>
        <div>
          <ul className="list-disc  list-blue-500 pl-1 text-sm">
            {job.benefits.points.map((benefit, index) => (
              <div key={index} className="flex flex-row  ">
                <div className="mr-2 mt-1 w-2 h-2 rounded-full bg-blue-600" />
                <div>{benefit}</div>
              </div>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <h1 className="text-lg font-semibold mb-1 mt-2">
          {job.expectations.title}
        </h1>
        <p style={{ width: 460 }} className=" text-sm">
          {job.expectations?.description}
        </p>
      </div>
    </div>
  );
};

export default Content;
