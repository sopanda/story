import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en/translation.json";
import translationRU from "./locales/ru/translation.json";
import translationPL from "./locales/pl/translation.json";

const resources = {
  en: {
    translation: translationEN
  },
  pl: {
    translation: translationPL
  },
  ru: {
    translation: translationRU
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pl",
  keySeparator: false,
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
