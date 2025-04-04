// client\src\components\Portfolio\Works.jsx

import { useState, useEffect } from "react";
import projectsData from "../../data/Portfolio/projectsData";
import projectsNav from "../../data/Portfolio/projectsNav";
import WorkItem from "./WorkItem";

function Works() {
  const allButtonId = projectsNav.find(
    (projectNav) => projectNav.name.toLowerCase() === "tout"
  ).id;

  const [NavProject, setNavProject] = useState({
    name: "tout",
  });

  const [projects, setProjects] = useState([]);

  const [active, setActive] = useState(allButtonId);

  useEffect(() => {
    if (NavProject.name === "tout") {
      setProjects(projectsData);
    } else {
      const filteredProjects = projectsData.filter(
        (project) =>
          project.category.toLowerCase() === NavProject.name.toLowerCase()
      );
      setProjects(filteredProjects);
    }
  }, [NavProject]);

  const handleClick = (e) => {
    setNavProject({ name: e.target.textContent.toLowerCase() });
    setActive(e.target.id);
  };

  return (
    <>
      <div className="work__filters">
        {projectsNav.map((projectNav) => (
          <button
            type="button"
            onClick={(e) => {
              handleClick(e);
            }}
            key={projectNav.id}
            className={`${active === projectNav.id ? "active-work" : ""} work__item`}
          >
            {projectNav.name}
          </button>
        ))}
      </div>

      <div className="work__container container grid">
        {/* {projectsData.map((project) => ( */}
        {projects.map((project) => (
          <WorkItem
            key={project.id}
            id={project.id}
            image={project.image}
            title={project.title}
            link={project.link}
            description={project.description}
          />
        ))}
      </div>
    </>
  );
}

export default Works;
