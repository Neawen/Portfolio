import "./Projects.scss";

import { ProjectType, ProjectsTypeImage } from "../../PropTypes/types";

import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Projects = ({ projectsData, projectsImage }) => {
  const { t } = useTranslation();
  const [projectInfos, setProjectInfos] = useState([]);
  // ref to interact with a dom element (pojects container)
  const ref = useRef(null);
  // framer motion hook to check if ref is visible at 50%
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

  // animation variants for project cards
  const cardVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  // animation variants for parent container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        // delay between children
        staggerChildren: 1,
      },
    },
  };

  return (
    <section id="projects-section">
      <div className="projects">
        <h2 className="projects__title">{t("projects.title")}</h2>
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
                <p>{project.shortDesc}</p>
                <a
                  href={project.link ? project.link : project.repoLink}
                  className="infos__link"
                  target="_blank"
                >
                  {t("projects.seeProject")}
                </a>
                <ul className="infos__skills">
                  {project.skills.map((technology, index) => (
                    <li key={`tech-${index}`}>{technology}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}

          <div className="container-link">
            <Link to="/all-projects" className="container-link__more">
              {t("projects.more")} <i className="fa-solid fa-angles-right"></i>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

Projects.propTypes = {
  projectsData: PropTypes.arrayOf(PropTypes.shape(ProjectType)).isRequired,
  projectsImage: ProjectsTypeImage,
};

export default Projects;
