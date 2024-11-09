import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SmallButton from '../../common/buttons/SmallButton/SmallButton';
// import Dropdown from '../../common/dropdowns/Dropdown/Dropdown';
import BlueWhiteHeading from '../../common/headings/BlueWhiteHeading/BlueWhiteHeading';
import InputField from '../../common/InputField/InputField';

const Hero = ({ pagName }) => {
  const [jobName, setJobName] = useState('');
  const [jobLocation, setJobLocation] = useState('');
  const [experience, setExperience] = useState('');
  const jobLocations = ['Lahore, punjab,pakistan'];
  const experiences = ['1-2 years', '2-3 years', '3-4 years', '4-5 years'];

  const { t } = useTranslation();
  const data = (string, returnObjects = false) => {
    return t(`${pagName}.hero.${string}`, {
      returnObjects: returnObjects,
    });
  };
  return (
    <div className="bg-[#000C29] ">
      <div className="p-20">
        <center>
          <BlueWhiteHeading
            white={data('heading.white')}
            blue={data('heading.blue')}
          />
        </center>
        <div className="flex items-center gap-3 justify-center mt-7">
          {/* <Dropdown
            options={jobLocations}
            value={jobLocation}
            onChange={setJobLocation}
            placeholder={'Select Location'}
          />
          <Dropdown
            options={experiences}
            value={experience}
            onChange={setExperience}
            placeholder={'Select Experience'}
          /> */}
          <div className="flex justify-center items-center ">
            <InputField
              removeRoundedFromRight
              color="#222442"
              textColor="#ffffff"
              value={jobName}
              onChange={setJobName}
              placeholder="Search the job"
            />
            <SmallButton theme="blue" title="Search" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
