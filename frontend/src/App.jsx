import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { LanguageProvider } from "./components/LanguageContext";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <LanguageProvider>
      <div
        className={`min-h-screen bg-white dark:bg-gray-900 ${
          darkMode ? "dark" : ""
        }`}
      >
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Skills />
        <hr className="border-t-2 border-gray-300 dark:border-gray-600 my-8" />
        <Profile />
        <hr className="border-t-2 border-gray-300 dark:border-gray-600 my-8" />
        <Projects />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
