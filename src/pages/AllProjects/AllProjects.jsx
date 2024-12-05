import { useState } from "react";
import { ProjectType, ProjectsTypeImage } from "../../PropTypes/types";

import "./AllProjects.scss";

import PropTypes from "prop-types";
import ReactModal from "react-modal";
// attach modal to root App
ReactModal.setAppElement("#root");

const AllProjects = ({ projectsData, projectsImage }) => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    "all",
    ...new Set(projectsData.map((project) => project.category)),
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  // sort last projects before older
  const newestProjects = filteredProjects.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <main className="main">
      <section className="all-projects">
        <h1 className="all-projects__title">Tous mes projets</h1>
        <div className="all-projects__container">
          <div className="filters">
            <p>Catégories :</p>
            <div>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={category === activeCategory ? "active" : undefined}
                >
                  {category === "all" ? "Toutes" : category}
                </button>
              ))}
            </div>
          </div>
          <div className="container-projects">
            {newestProjects.map((project) => (
              <div
                key={project.id}
                className="overflow"
                onClick={() => openModal(project)}
              >
                <div className="container-projects__card">
                  <img src={projectsImage[project.imageKey]} />
                  <div className="container-projects__card__infos">
                    <h2>{project.title}</h2>
                    <p>{project.shortDesc}</p>
                    <ul>
                      {project.skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReactModal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        className="modal"
        bodyOpenClassName="modal-open"
        overlayClassName="modal-overlay"
      >
        {selectedProject && (
          <>
            <button className="modal__close">
              <i className="fa-regular fa-circle-xmark" onClick={closeModal} aria-label="Fermer la modale"></i>
            </button>
            <h2>Détails du projet</h2>
            <p>{selectedProject.description}</p>
            <div className="modal__link">
              <a
                href={
                  selectedProject.link
                    ? selectedProject.link
                    : selectedProject.repoLink
                }
              >
                {selectedProject.link
                  ? "Voir le projet"
                  : "Voir le code du projet"}
              </a>
            </div>
          </>
        )}
      </ReactModal>
    </main>
  );
};

AllProjects.propTypes = {
  projectsData: PropTypes.arrayOf(PropTypes.shape(ProjectType)).isRequired,
  projectsImage: ProjectsTypeImage,
};

export default AllProjects;
