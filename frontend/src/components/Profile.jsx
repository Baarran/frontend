import React, { useContext } from "react";
import { LanguageContext } from "../components/LanguageContext";

const Profile = () => {
  const { language } = useContext(LanguageContext);
  const basicInfoTitle = language === "en" ? "Profile" : "Profil";
  const aboutMeTitle = language === "en" ? "About Me" : "Hakkımda";

  return (
    <section className="bg-white dark:bg-gray-800 py-10">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-black dark:text-white text-5xl font-bold mb-4">
            {basicInfoTitle}
          </h1>
          <h2 className="text-blue-700 dark:text-white text-3xl font-normal mb-4">
            {basicInfoTitle}
          </h2>
          <p className="text-black dark:text-white">
            {language === "en" ? "Name: John Adams
