import i18n from 'i18next';

// i18n.services.languageDetector.addDetector({
//   name: 'customDetector',
//   lookup() {
//     // Custom logic to detect language
//   },
//   cacheUserLanguage(lng) {
//     // Custom logic to cache user language
//   },
// });

// export default i18n;

i18n.services.languageDetector.addDetector({
  name: 'customDetector',
  lookup() {
    // Custom logic to detect language, e.g., from a specific domain path
    // For example, you might return the language based on URL path:
    const path = window.location.pathname;
    if (path.includes('/ar')) return 'ar';
    if (path.includes('/en')) return 'en';
    return null; // Return null if no custom detection is needed
  },
  cacheUserLanguage(lng) {
    // Custom logic to cache the user's language preference
    // You might store it in localStorage, cookies, or a custom API
    localStorage.setItem('userLanguage', lng);
  },
});
