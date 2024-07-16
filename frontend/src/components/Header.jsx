import React, { useContext } from "react";
import { LanguageContext } from "../components/LanguageContext";

const Header = ({ darkMode, setDarkMode }) => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <header className="bg-white dark:bg-gray-900 p-5 h-screen 	 flex justify-between items-start">
      <h1 className="text-black dark:text-white text-4xl  font-bold mt-24 "></h1>

      <div className="flex items-center">
        <div className="flex items-center mr-4">
          <span className="mr-2 text-black dark:text-white">
            {darkMode ? "Dark Mode" : "Light Mode"}
          </span>
          <input
            type="checkbox"
            className="toggle-checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </div>
        <span
          className="text-black dark:text-white cursor-pointer"
          onClick={toggleLanguage}
        >
          {language === "en" ? "Türkçe'ye Geç" : "Switch to English"}
        </span>
      </div>
    </header>
  );
};

export default Header;
