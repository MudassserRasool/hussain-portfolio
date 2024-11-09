import React from 'react';
const MainHero = ({ image }) => {
  return (
    <div
      class="h-72 w-full bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${image})` }}
    ></div>
  );
};

export default MainHero;
