import "./Projects.scss";
import projectsData from "../../data/projects.json";
import projectsImage from "../../data/projectsImages";
import { useState } from "react";

const Projects = () => {
  const [projectInfos, setProjectInfos] = useState([]);

  // sort last projects before older
  const newestProjects = projectsData.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const lastProjects = newestProjects.slice(1, 3);

  function handleProjectInfos(projectId) {
    setProjectInfos((prevActiveProjects) =>
      // if projects table includes project clicked
      prevActiveProjects.includes(projectId)
        ? // return projects table without it
          prevActiveProjects.filter((id) => id !== projectId)
        : // else add it to projects table
          [...prevActiveProjects, projectId]
    );
  }

  return (
    <section id="projects-section">
      <div className="projects">
        <h2 className="projects__title">Projets</h2>
        <div className="projects__content">
          {lastProjects.map((project) => (
            <div
              key={project.id}
              className="projects__content__card"
              onClick={() => handleProjectInfos(project.id)}
            >
              <img
                loading="lazy"
                src={projectsImage[project.imageKey]}
                alt={
                  project.title === "Portfolio"
                    ? `${project.title} web site`
                    : `Web site for ${project.title}`
                }
                className="image"
              />
              <div
                className={`infos ${
                  projectInfos.includes(project.id) && "active"
                }`}
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a
                  href={project.link ? project.link : project.repoLink}
                  target="_blank"
                  className="infos__link"
                >
                  Voir le Projet
                </a>
                <ul className="infos__skills">
                  {project.skills.map((technology, index) => (
                    <li key={`tech-${index}`}>{technology}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <a href="" className="projects__content__more" aria-disabled>
            Plus <i className="fa-solid fa-angles-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
