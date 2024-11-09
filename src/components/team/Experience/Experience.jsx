import React from 'react';

const Experience = ({ data }) => {
  return (
    <div class="flex justify-center items-center my-10">
      <div>
        <p class="text-blue-600 text-center text-6xl font-bold">
          0{data.heading.blue1}
        </p>
        <p class="text-2xl w-44 text-center font-bold">
          {data.heading.black}{' '}
          <span class="text-blue-600">{data.heading.blue2}</span>
        </p>
      </div>
      <div class="ml-12">
        <p class="text-xs font-bold text-gray-500">{data.who}</p>
        <p class="text-base font-bold mb-2">
          {data.about.blue} <span class="text-blue-600"> {data.about.Me} </span>
        </p>
        <p class="text-sm text-gray-600 w-[360px] font-semibold">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default Experience;
