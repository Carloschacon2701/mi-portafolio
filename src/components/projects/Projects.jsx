import React, { useEffect } from "react";
import "./ProjectsStyles.css";
import { ProjectCard } from "./ProjectCard";
import { DataProjects } from "./DataProjects";
import AOS from "aos";

export const Projects = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="main-project-container" id="Projects">
      <div>
        <div className="projects-text">
          <h1 className="title-projects">Projects</h1>
        </div>
        <div className="my-projects">
          {DataProjects.map((project, index) => {
            let indice = index + 1;

            if (indice % 2 === 0) {
              return (
                <ProjectCard key={indice}
                  title={project.title}
                  description={project.description}
                  foto={require(`../../images/project${indice}.png`)}
                  number={"1"}
                  aos={"fade-right"}
                  technologies={project.technologies}
                />
              );
            } else {
              return (
                <ProjectCard key={indice}
                  title={project.title}
                  description={project.description}
                  foto={require(`../../images/project${indice}.png`)}
                  number={"2"}
                  aos={"fade-left"}
                  technologies={project.technologies}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};
