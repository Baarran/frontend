import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import { LanguageProvider } from "./components/LanguageContext";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";

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
        <MainPage />
        <Skills />
        <Profile />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
