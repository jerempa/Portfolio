import NavBar from "./navbar";
import About from "./about";
import CV from "./cv";
import Showcase from './showcase';

import { useTranslation } from "react-i18next";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./translations/en-translation.json";
import translationFI from "./translations/fi-translation.json";
import translationSE from "./translations/se-translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  fi: {
    translation: translationFI,
  },
  se: {
    translation: translationSE
  }
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
    <div>
      <NavBar translate = {t} />
      <About translate = {t} />
      <CV translate = {t} />
      <Showcase translate = {t}  />
    </div>
  );
}

export default App;
