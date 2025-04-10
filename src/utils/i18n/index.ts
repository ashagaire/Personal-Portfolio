import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import enLang from "./locales/en.json";
import fiLang from "./locales/fi.json";

const resources = {
  en: { translation: enLang },
  fi: { translation: fiLang },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,

    fallbackLng: "en",
    lng: "en",
    supportedLngs: ["en", "fi"],
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
