import React, { useContext } from "react";
import { LanguageContext } from "../components/LanguageContext";

const skills = [
  { name: "JavaScript", description: "Lorem ipsum dolor sit amet..." },
  { name: "React.js", description: "Lorem ipsum dolor sit amet..." },
  { name: "Node.js", description: "Lorem ipsum dolor sit amet..." },
];

const Skills = () => {
  const { language } = useContext(LanguageContext);
  const skillsTitle = language === "en" ? "Skills" : "Beceriler";

  return (
    <section className="bg-white dark:bg-gray-800 py-10">
      <h2 className="text-black dark:text-white text-3xl font-bold text-center mb-6">
        {skillsTitle}
      </h2>
      <div className="container mx-auto">
        {skills.map((skill, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-black dark:text-white text-xl font-semibold">
              {skill.name}
            </h3>
            <p className="text-black dark:text-white">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
