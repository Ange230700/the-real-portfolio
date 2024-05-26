import { useState, useEffect } from "react";
import projectsData from "../../data/Portfolio/projectsData"; // eslint-disable-line
import projectsNav from "../../data/Portfolio/projectsNav"; // eslint-disable-line
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
          />
        ))}
      </div>
    </>
  );
}

export default Works;
