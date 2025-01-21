
import React from "react";
import { createRoot } from 'react-dom/client';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import translationHe from "../src/locales/he/translationHe.json"
import translationEn from "../src/locales/en/translationEn.json"
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEn
      },
      he:{
        translation: translationHe
      }
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false 
    }
  });

function App() {
  const { t } = useTranslation();

  return <h2>{t('Welcome to React')}</h2>;
}
const root = createRoot(document.getElementById('root'));
root.render(
  <App />
);