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
    <select value={i18n.language} onChange={handleLanguageChange} style={{position: "relative", "left": "50vw", "top": "15vh"}}>
      <option value="en">English</option>
      <option value="fi">Finnish</option>
    </select>
  );
};

export default LanguageSwitcher;