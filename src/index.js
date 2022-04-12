import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_es from './translations/spanish/global.json'
import global_en from './translations/english/global.json'

i18next.init({
     interpolation:{escapeValue:false},
     lng:'english',
     resources:{
          spanish:{
               global: global_es
          },
          english: {
               global: global_en
          },

     },
});

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
    <>
          <I18nextProvider i18n={i18next}>
          <App />
          </I18nextProvider>
     </>
);
