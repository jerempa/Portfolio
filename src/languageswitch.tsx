import React from "react";
import { useTranslation } from "react-i18next";
import './App.css';


const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="language-switcher">
      <button className="styled-button"
        onClick={() => handleLanguageChange({ target: { value: 'en' } } as React.ChangeEvent<HTMLSelectElement>)}
        style={{ marginRight: '0.5vw'}}
      >
        {i18n.t("english")}
      </button>
      <button className="styled-button"
        onClick={() => handleLanguageChange({ target: { value: 'fi' } } as React.ChangeEvent<HTMLSelectElement>)}
      >
        {i18n.t("finnish")}
      </button>
    </div>
  );
};

export default LanguageSwitcher;