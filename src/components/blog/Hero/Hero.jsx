import React from 'react';
import SmallButton from '../../common/buttons/SmallButton/SmallButton';
import BlueWhiteHeading from '../../common/headings/BlueWhiteHeading/BlueWhiteHeading';
import InputField from '../../common/InputField/InputField';

const Hero = ({ setBlogInput, blogInput }) => {
  return (
    <div className="bg-[#000C29] ">
      <div className="p-20">
        <center>
          <BlueWhiteHeading white={'Blogs'} />
        </center>
        <div className="flex justify-center items-center mt-3">
          <InputField
            removeRoundedFromRight
            color="#222442"
            value={blogInput}
            onChange={setBlogInput}
            placeholder="Search the blog"
          />
          <SmallButton theme="blue" title="Search" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
