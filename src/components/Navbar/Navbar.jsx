import React from 'react';
import { useTranslation } from 'react-i18next';
import { IoMdMenu } from 'react-icons/io';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from '../../assets';
import { routes } from '../../routes/routes';
// import Button from '../common/buttons/Button/Button';
import LanguageSwitcher from '../common/buttons/LanguageChanger/LanguageChanger';
const Navbar = () => {
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
      <nav className="border-gray-200  bg-[#000C29]  sticky top-0  z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to={routes.home}>
            <img src={Logo} className="h-8" alt=" Logo" />
          </Link>
          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <IoMdMenu size={30} />
          </button>

          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-solid-bg"
          >
            <ul className="flex justify-center items-center flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              {navbarArray.map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      to={item.link}
                      className={`block ${
                        path === item.link ? 'border-b-2 border-white' : ''
                      } px-3 md:p-0 text-gray-white hover:text-gray-300 md:text-white  dark:hover:text-gray-200 md:dark:text-gray-200`}
                    >
                      {item.item}
                    </Link>
                  </li>
                );
              })}
              {/* <Button
                theme="blue"
                title="Get Started"
                onClick={() => console.log('Get Started')}
              /> */}
            </ul>
          </div>
          <LanguageSwitcher />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
