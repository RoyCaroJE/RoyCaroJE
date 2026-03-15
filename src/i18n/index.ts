import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import es from "./es.json";
import en from "./en.json";
import fr from "./fr.json";

const SUPPORTED_LANGUAGES = ["es", "en", "fr"] as const;
type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

function getInitialLanguage(): SupportedLanguage {
  const browserLanguage = navigator.language.split("-")[0] as SupportedLanguage;
  return SUPPORTED_LANGUAGES.includes(browserLanguage) ? browserLanguage : "en";
}

i18n.use(initReactI18next).init({
  lng: getInitialLanguage(),
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
