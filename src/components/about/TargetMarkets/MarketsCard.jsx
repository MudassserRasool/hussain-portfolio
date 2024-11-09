import React from 'react';

const MarketsCard = ({ market }) => {
  const { title, description, icon } = market || {};
  return (
    <div className="w-60 mt-20 ml-20 ">
      <div>
        <center>
          <img className="w-10" src={icon} alt="logo" />
        </center>
      </div>
      <div className="font-semibold text-xl">
        <center>{title}</center>
      </div>
      <div className="w-48 text-sm ml-5 text-gray-500 line-clamp-4">
        <center>{description}</center>
      </div>
    </div>
  );
};

export default MarketsCard;
