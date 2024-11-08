import "./Projects.scss";
import projectsData from "../../data/projects.json";
import projectsImage from "../../data/projectsImages";

const Projects = () => {
  // sort last projects before older
  const newestProjects = projectsData.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const lastProjects = newestProjects.slice(0, 2);

  return (
    <section>
      <div className="projects">
        <h2 className="projects__title">Projets</h2>
        <div className="projects__content">
          {lastProjects.map((project) => (
            <div key={project.id} className="projects__content__card">
              <img
                src={projectsImage[project.imageKey]}
                alt={`web site for ${project.name}`}
                className="image"
              />
              <div className="infos">
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

          <a href="" className="projects__content__more">Plus <i className="fa-solid fa-angles-right"></i></a>
        </div>
      </div>
      <div className="border-section">
        <div className="border-section__lign"></div>
      </div>
    </section>
  );
};

export default Projects;
