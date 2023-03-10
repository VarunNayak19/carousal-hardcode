import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import i18n from "i18next";
import Backend from "i18next-http-backend";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import store from './redux/store';
import { Provider } from 'react-redux';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  // .use(HttpApi)
  .use(Backend)
  .init({
    fallbackLng: "en",
    detection: {
      order: ['htmlTag', 'querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'path', 'subdomain'],
      caches: ['cookie']
    },
    backend: {
      // translation file path
      loadPath: "/assets/locale/{{lng}}.json",
    },
    interpolation: {
      espaceValue: false,
      formatSeparator: ",",
    },
    react: {
      wait: true,
      useSuspense: false
    },
  });

const rtlLanguages = ["kn"];
function setPageDirection(language) {
  const dir = rtlLanguages.includes(language) ? "rtl" : "ltr"
  document.documentElement.dir = dir
};
let lng = localStorage.getItem("lng");
console.log(lng);
setPageDirection(lng);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  < BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

