import React from 'react';
import BlueBlackHeading from '../../headings/BlueBlackHeading/BlueBlackHeading';

const MissionCard = ({ mission }) => {
  return (
    <div  className="md:ml-28 ml-16 md:w-[450px]">
      <div>
        <img className="w-24 m-2" src={mission.icon} alt="logo" />
      </div>
      <div>
        <p className="font-semibold ">{mission.title}</p>
      </div>
      <div>
        <BlueBlackHeading
          black={mission.heading.black}
          blue={mission.heading.blue}
        />
      </div>
      <div>
        <p className="mt-2 w-80 md:w-[450px] ">{mission.description}</p>
      </div>
    </div>
  );
};

export default MissionCard;
