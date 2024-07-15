import React, { useEffect, useState, useContext } from "react";
import { LanguageContext } from "../components/LanguageContext";
import { fetchMockData } from "../components/api";

const Projects = () => {
  const { language } = useContext(LanguageContext);
  const [projects, setProjects] = useState([]);
  const projectsTitle = language === "en" ? "Projects" : "Projeler";

  useEffect(() => {
    const getProjects = async () => {
      try {
        const data = await fetchMockData();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects", error);
      }
    };
    getProjects();
  }, []);

  return (
    <section className="bg-white dark:bg-gray-800 py-10">
      <h2 className="text-black dark:text-white text-3xl font-bold text-center mb-6">
        {projectsTitle}
      </h2>
      <div className="container mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-700 p-6 rounded-lg mb-6"
            style={{ backgroundColor: project.color }}
          >
            <h3 className="text-black dark:text-white text-2xl font-bold mb-2">
              {project.name}
            </h3>
            <p className="text-black dark:text-white">
              {language === "en"
                ? `Year: ${project.year}`
                : `Yıl: ${project.year}`}
            </p>
            <p className="text-black dark:text-white">
              {language === "en"
                ? `Pantone Value: ${project.pantone_value}`
                : `Pantone Değeri: ${project.pantone_value}`}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
