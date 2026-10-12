import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import es from "./es.json";
import en from "./en.json";
import fr from "./fr.json";

const SUPPORTED_LANGUAGES = ["es", "en", "fr"] as const;

i18n.use(initReactI18next).init({
  lng: "en",
  supportedLngs: SUPPORTED_LANGUAGES,
  resources: {
    es: { translation: es },
    en: { translation: en },
    fr: { translation: fr },
  },
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
