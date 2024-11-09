import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'ar'], // Add all supported languages here
    fallbackLng: 'en',
    debug: true,
    detection: {
      order: [
        'cookie',
        'localStorage',
        'sessionStorage',
        'navigator',
        'htmlTag',
        'path',
        'subdomain',
      ],
      caches: [], // Temporarily disable caching
    },

    backend: {
      loadPath: './locales/{{lng}}/translation.json',
    },
  });

export default i18n;
