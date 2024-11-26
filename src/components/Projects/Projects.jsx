import "./Projects.scss";
import projectsData from "../../data/projects.json";
import projectsImage from "../../data/projectsImages";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const Projects = () => {
  const [projectInfos, setProjectInfos] = useState([]);
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.5 });

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

  // variant for children (project cards)
  const cardVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  //  variant for parent container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 1,
      },
    },
  };

  return (
    <section id="projects-section">
      <div className="projects">
        <h2 className="projects__title">Projets</h2>
          <motion.div
            className="projects__content"
            variants={containerVariants}
            initial="hidden"
            animate={isInView && "visible"}
            ref={ref}
            viewport={{ once: true }}

          >
            {lastProjects.map((project) => (
              <motion.div
                key={project.id}
                className="projects__content__card"
                onClick={() => handleProjectInfos(project.id)}
                variants={cardVariants}
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
              </motion.div>
            ))}

            <a href="" className="projects__content__more">
              Plus <i className="fa-solid fa-angles-right"></i>
            </a>
          </motion.div>
      </div>
    </section>
  );
};

export default Projects;
