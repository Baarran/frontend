import React, { useContext } from "react";
import { LanguageContext } from "../components/LanguageContext";

const Profile = () => {
  const { language } = useContext(LanguageContext);
  const basicInfoTitle =
    language === "en" ? "Basic Information" : "Temel Bilgiler";
  const aboutMeTitle = language === "en" ? "About Me" : "Hakkımda";

  return (
    <section className="bg-white dark:bg-gray-800 py-10">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h2 className="text-black dark:text-white text-3xl font-bold mb-4">
            {basicInfoTitle}
          </h2>
          <p className="text-black dark:text-white">
            {language === "en" ? "Name: John Adams" : "Adı: John Adams"}
          </p>
          <p className="text-black dark:text-white">
            {language === "en" ? "Age: 25" : "Yaş: 25"}
          </p>
          <p className="text-black dark:text-white">
            {language === "en"
              ? "Education: BA in Computer Science"
              : "Eğitim: Bilgisayar Bilimleri Lisansı"}
          </p>
          <p className="text-black dark:text-white">
            {language === "en"
              ? "Location: Los Angeles, CA"
              : "Konum: Los Angeles, CA"}
          </p>
        </div>
        <div>
          <h2 className="text-black dark:text-white text-3xl font-bold mb-4">
            {aboutMeTitle}
          </h2>
          <p className="text-black dark:text-white">
            {language === "en"
              ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus."
              : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
