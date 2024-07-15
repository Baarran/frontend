import React, { useContext } from "react";
import { LanguageContext } from "../components/LanguageContext";

const skills = [{ name: "JAVASCRIPT" }, { name: "NODE" }, { name: "REACT" }];

const Skills = () => {
  const { language } = useContext(LanguageContext);
  const skillsTitle = language === "en" ? "Skills" : "Beceriler";

  return (
    <section className="bg-white dark:bg-gray-800 py-10">
      <h2 className="text-black dark:text-white text-3xl font-bold text-center mb-6">
        {skillsTitle}
      </h2>
      <div className="flex justify-center space-x-4">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center">
            <p className="text-black dark:text-white">{skill.name}</p> Lorem
            ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor
            incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi
            ut aliquid ex ea commodi consequatur.
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
