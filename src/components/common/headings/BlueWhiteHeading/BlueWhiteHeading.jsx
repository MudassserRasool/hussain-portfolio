import React from 'react';

const BlueWhiteHeading = ({ blue, white }) => {
  return (
    <>
      <h1 className="text-3xl font-bold   text-white ">
        {white}
        <span className="text-blue-600"> {blue}</span>
      </h1>
    </>
  );
};

export default BlueWhiteHeading;
