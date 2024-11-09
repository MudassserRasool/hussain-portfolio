import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { PcUser } from '../../../assets';
import { routes } from '../../../routes/routes';
import Button from '../../common/buttons/Button/Button';
import BlueBlackHeading from '../../common/headings/BlueBlackHeading/BlueBlackHeading';

const AboutCard = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <div className="bg-white   max-w-5xl mx-auto  p-5 md:p-0 my-10">
        <div className="flex flex-col lg:flex-row md:items-center">
          <div className="flex-shrink-0 mb-6 lg:mb-0">
            <img src={PcUser} alt="Person sitting on bean bag" width={480} />
          </div>
          <div className="lg:ml-8 text-center lg:text-left">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              {t('home.about.title')}
            </h2>

            <BlueBlackHeading
              blue={t('home.about.heading.blue')}
              black={t('home.about.heading.black')}
            />
            <p className="text-gray-600 mb-6 text-sm md:text-lg text-start">
              {t('home.about.description')}
            </p>
            <div className="flex justify-center md:justify-start">
              <Button
                title="Learn More"
                onClick={() => navigate(routes.about)}
                theme="blueRounded"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCard;
