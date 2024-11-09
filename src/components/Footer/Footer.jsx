import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { LogoFrame } from '../../assets';
import footerData from '../../data/footer';
import { routes } from '../../routes/routes';
import UpperBox from './UpperBox';
const Footer = () => {
  const location = useLocation();
  const path = location.pathname;

  const { t } = useTranslation();

  const data = (string, returnObjects = false) => {
    return t(`${string}`, {
      returnObjects: returnObjects,
    });
  };
  const navbar = data('navbar', true);
  const navbarArray = Array.isArray(navbar) ? navbar : [];
  return (
    <>
      <div className="mt-20">
        {path !== routes.contactUs && <UpperBox data={footerData} />}
        <footer className="flex text-white flex-col justify-end bg-custom-blue-gradient pt-10">
          <div className="w-full">
            <div className="container mx-auto flex flex-col">
              <div className="mt-10 flex w-full flex-col items-center">
                <div className="mb-10 shrink-0">
                  <img className="size-14" src={LogoFrame} alt="footer logo" />
                </div>
                <div className="mb-6 flex flex-col items-center gap-4">
                  <div className="flex items-center gap-8">
                    {footerData.icons.map((icon, index) => (
                      <Link
                        key={index}
                        to={icon.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {icon.icon}
                      </Link>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-5 gap-y-3 lg:flex-nowrap lg:gap-12">
                    {navbarArray.map((route, index) => (
                      <Link
                        className="text-sm font-medium leading-7 text-dark-grey-600"
                        to={route.link}
                        key={index}
                      >
                        {route.item}
                      </Link>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-5 gap-y-3 lg:flex-nowrap lg:gap-12">
                    {footerData.locations.map((country, index) => (
                      <Link
                        key={index}
                        className="text-sm font-medium leading-7 text-dark-grey-600"
                      >
                        {country}
                      </Link>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-5 gap-y-3 lg:flex-nowrap lg:gap-12">
                    {footerData.images.map((image, index) => (
                      <img
                        className="h-10"
                        src={image.image}
                        alt={image.name}
                        key={index}
                      />
                    ))}
                  </div>
                </div>
                <hr className="my-4 border-t border-white h-1 p-1 w-[95%] mx-auto" />

                <div className="flex items-center">
                  <p className="text-center text-sm font-medium leading-7 text-dark-grey-600">
                    {t('footer.copyRights')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
