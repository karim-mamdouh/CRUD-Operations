//i18n
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
//Languages Dictionary
import en from "./en/en";
import ar from "./ar/ar";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    saveMissing: true,
    resources: {
      ...en,
      ...ar,
    },
  });

export default i18n;
