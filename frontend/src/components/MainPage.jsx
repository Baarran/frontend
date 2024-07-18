import React, { useContext } from "react";
import { LanguageContext } from "../components/LanguageContext";
import profileImage from "../assets/image.png";

const MainPage = () => {
  const { language } = useContext(LanguageContext);
  const title =
    language === "en"
      ? "Creative thinker Minimalism lover"
      : "Yaratıcı düşünür Minimalizm seven";
  const description =
    language === "en"
      ? "Hi, I'm Almila. I'm a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let's shake hands with me."
      : "Merhaba, ben Almila. Ben bir full-stack geliştiriciyim. Sağlam ve ölçeklenebilir frontend ürünleri oluşturabilecek bir geliştirici arıyorsanız, hadi el sıkışalım.";

  return (
    <main className="bg-white dark:bg-gray-800 py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-black dark:text-white text-4xl font-bold mb-4">
            {title}
          </h1>
          <p className="text-gray-700 dark:text-gray-300 mb-6">{description}</p>
          <div className="flex justify-center md:justify-start space-x-4">
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
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src={profileImage}
            alt="Profile"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      </div>
    </main>
  );
};

export default MainPage;
