import React from 'react';
// import { routes } from '../../../../routes/routes';
// import Button from '../../../common/buttons/Button/Button';
import BlueBlackHeading from '../../../common/headings/BlueBlackHeading/BlueBlackHeading';

const RightAlienedImageCard = ({ data }) => {
  return (
    <div className="md:ms-52 md:mt-20 mt-72">
      <div className="flex flex-row  h-[380px] gap-20">
        <div className="bg-blue-50 md:w-[920px] mt-8 md:mt-0 ml-4 w-[760px] h-[380px] pl-6 pt-6">
          <div>
            <img className="w-6" src={data.icon} alt="icon" />
          </div>
          <BlueBlackHeading
            black={data.heading.black}
            blue={data.heading.blue}
          />
          <div className="md:w-[330px]   text-md mt-2">{data.description}</div>
          {/* <div className="mt-3">
            <Button
              theme="blueRounded"
              onClick={() =>
                navigate(`${routes.services}/?service=${data.buttonLink}`)
              }
              title="Learn More"
            />
          </div> */}
        </div>
        <div className="md:-translate-x-44 -translate-x-[490px]  md:-translate-y-0 -translate-y-[350px]">
          <div className="mt-12 ">
            <img
              className="w-[800px] ml-10 "
              src={data.images.large}
              alt="person"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightAlienedImageCard;
