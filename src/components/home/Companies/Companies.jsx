import React from 'react';
import { Link } from 'react-router-dom';

const Companies = ({ data }) => {
  return (
    <>
      <div className="flex items-center justify-center py-8 lg:py-12  mx-5 md:mx-0">
        <div className="flex items-center justify-center space-x-12">
          {data.map((companies, index) => {
            return (
              <Link
                key={index}
                to={companies.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={companies.logo}
                  alt={companies.name}
                  className={`w-auto ${
                    index === 4 ? 'h-[40px]' : 'h-[50px]'
                  } object-contain  `}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Companies;
