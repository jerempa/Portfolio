import './App.css';
import NavBar from "./navbar";
import About from "./about";
import CV from "./cv";
import Showcase from './showcase';
import LanguageSwitcher from './languageswitch';

import { useTranslation } from "react-i18next";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en-translation.json";
import translationFI from "./locales/fi-translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  fi: {
    translation: translationFI,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});



function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <LanguageSwitcher />
      <NavBar />
      <About translate = {t} />
      <CV />
      <Showcase />
    </div>
  );
}

export default App;
