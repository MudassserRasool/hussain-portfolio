import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaArrowRightLong } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../routes/routes';
import Button from '../common/buttons/Button/Button';

const UpperBox = ({ data }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <>
      <div className="relative -mb-12 mx-auto w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] bg-blue-600 py-6  md:py-20 h-auto md:h-32 flex flex-col md:flex-row justify-between px-6 sm:px-10 md:px-20 items-center text-white">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <div className="text-lg sm:text-xl md:text-2xl font-bold">
            {t('footer.heading')}
          </div>
          <div className="text-sm sm:text-md md:text-lg w-full sm:w-[90%] md:w-[85%] mx-auto md:mx-0">
            {t('footer.description')}
          </div>
        </div>
        <div className="block text-center md:text-right">
          <Button
            theme="dark"
            title={t('footer.button')}
            onClick={() => navigate(routes.contactUs)}
            icon={<FaArrowRightLong />}
            iconPosition="right"
            minWidth={'150px'}
          />
        </div>
      </div>
    </>
  );
};

export default UpperBox;
