import React from 'react';
import { useTranslation } from 'react-i18next';
import BlueWhiteHeading from '../../headings/BlueWhiteHeading/BlueWhiteHeading';
const Header = ({ pagName }) => {
  const { t } = useTranslation();
  const data = (string, returnObjects = false) => {
    return t(`${pagName}.header.${string}`, {
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
        <center>
          <p className="text-white md:w-[750px]">{data('description')}</p>
        </center>
      </div>
    </div>
  );
};

export default Header;
