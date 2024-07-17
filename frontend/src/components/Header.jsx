import React, { useContext } from "react";
import { LanguageContext } from "../components/LanguageContext";

const Header = ({ darkMode, setDarkMode }) => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <header className="bg-white dark:bg-gray-900 p-5 flex flex-col items-end pl-20 ">
      <div className="flex justify-between items-center w-full mb-4 pr-12">
        <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full ">
          <span className="text-4xl text-purple-500 pt-36">A</span>
        </div>
        <div className="flex items-center space-x-6">
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
      </div>
      <div className="flex justify-center space-x-4 pr-12">
        <a
          href="#"
          className="bg-purple-500 text-white px-4 py-2 rounded shadow"
        >
          Hire me
        </a>
        <a
          href="https://github.com"
          className="text-black dark:text-white border border-black dark:border-white px-4 py-2 rounded shadow"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com"
          className="text-black dark:text-white border border-black dark:border-white px-4 py-2 rounded shadow"
        >
          LinkedIn
        </a>
      </div>
    </header>
  );
};

export default Header;
