import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // passes i18n to react-i18next
  .init({
    resources: {
      en: { translation: {} },
      zh: { translation: {} },
      ja: { translation: {} },
    },
    lng: 'zh', // default language
    fallbackLng: 'en', // fallback language if the current language translations are not available
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n; 