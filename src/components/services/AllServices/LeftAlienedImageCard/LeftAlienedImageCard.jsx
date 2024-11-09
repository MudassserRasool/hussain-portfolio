import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { routes } from '../../../../routes/routes';
// import Button from '../../../common/buttons/Button/Button';
import BlueBlackHeading from '../../../common/headings/BlueBlackHeading/BlueBlackHeading';
const LeftAlienedImageCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="mt-20">
      <div className="flex flex-col md:flex-row ">
        <div>
          <div>
            <img
              className="md:w-[480px] w-[400px] md:mr-6 mr-[460px] "
              src={data.images.large}
              alt="person"
            />
          </div>
        </div>
        <div className="md:mt-12  ml-8 md:ml-0 md:mb-0 mb-14 " >
          <div>
            <img className="w-8" src={data.icon} alt="person" />
          </div>
          <BlueBlackHeading
            black={data.heading.black}
            blue={data.heading.blue}
          />
          <div className="w-[330px] text-md  mt-2">{data.description}</div>
          {/* <div className="mt-3">
            <Button
              theme="blueRounded"
              title="Learn More"
              onClick={() =>
                navigate(`${routes.services}/?service=${data.buttonLink}`)
              }
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default LeftAlienedImageCard;
