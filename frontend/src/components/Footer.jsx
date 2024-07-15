import React, { useContext } from "react";
import { LanguageContext } from "../components/LanguageContext";

const Footer = () => {
  const { language } = useContext(LanguageContext);
  const contactTitle =
    language === "en" ? "Send me a message!" : "Bana bir mesaj gönderin!";
  const emailLabel = language === "en" ? "Email:" : "E-posta:";
  const email = "almila@example.com";

  return (
    <footer className="bg-white dark:bg-gray-800 py-10 text-center">
      <h2 className="text-black dark:text-white text-3xl font-bold mb-6">
        {contactTitle}
      </h2>
      <p className="text-black dark:text-white">
        {emailLabel}{" "}
        <a
          href={`mailto:${email}`}
          className="text-blue-500 dark:text-blue-300"
        >
          {email}
        </a>
      </p>
      <div className="mt-6">
        <a
          href="https://github.com"
          className="mx-2 text-black dark:text-white"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com"
          className="mx-2 text-black dark:text-white"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
