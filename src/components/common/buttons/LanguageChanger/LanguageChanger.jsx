// import React from 'react';
// import { useTranslation } from 'react-i18next';

// const LanguageSwitcher = () => {
//   const { i18n } = useTranslation();

//   const changeLanguage = (e) => {
//     i18n.changeLanguage(e.target.value);
//   };

//   return (
//     <div className="relative inline-block text-left">
//       <select
//         onChange={changeLanguage}
//         className="block w-full px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//       >
//         <option value="en">English</option>
//         <option value="ar">العربي</option>
//       </select>
//     </div>
//   );
// };

// export default LanguageSwitcher;

// LanguageSwitcher.js;
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (e) => {
    const selectedLang = e.target.value;
    i18n.changeLanguage(selectedLang);

    // Adjust the document's direction based on the selected language
    if (selectedLang === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
    }
  };

  // Ensure that direction is set correctly on component mount
  useEffect(() => {
    const currentLang = i18n.language;
    if (currentLang === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);

  return (
    <div className="relative inline-block text-left">
      <select
        onChange={changeLanguage}
        value={i18n.language}
        className={`block  px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
          i18n.language === 'ar' ? 'w-32' : ''
        }`}
      >
        <option value="en">English</option>
        <option value="ar">العربي</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
