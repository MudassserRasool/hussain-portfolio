import React from 'react';

const BlueBlackHeading = ({ blue, black }) => {
  return (
    <>
      <h1 className="md:text-3xl text-2xl font-bold    md:mb-4">
        {black}
        <span className="text-blue-600"> {blue}</span>
      </h1>
    </>
  );
};

export default BlueBlackHeading;
