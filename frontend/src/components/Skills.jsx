import React, { useContext } from "react";
import { LanguageContext } from "../components/LanguageContext";

const skills = [
  { name: "Java Script" },
  { name: "React.Js" },
  { name: "Node.Js" },
];

const Skills = () => {
  const { language } = useContext(LanguageContext);
  const skillsTitle = language === "en" ? "Skills" : "Beceriler";

  return (
    <section className="container mx-auto  justify-between items-center border-b-2 border-b-indigo-700 		">
      <h2 className="text-black dark:text-white text-5xl font-bold mb-4 	">
        {skillsTitle}
      </h2>
      <div className="flex justify-center space-x-4 mb-20">
        {skills.map((skill) => (
          <div key={skill.name} className=" flex-col items-center border-b-indigo-700">
            <p className="text-blue-700	 dark:text-white text-3xl font-normal mb-4 ">
              {skill.name}
            </p>{" "}
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
            tempor incidunt ut labore et dolore magna aliqua.
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
