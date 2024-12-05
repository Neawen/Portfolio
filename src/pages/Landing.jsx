import About from "../components/About/About";
import Form from "../components/Form/Form";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import { ProjectType, ProjectsTypeImage } from "../PropTypes/types";

import PropTypes from "prop-types";

const Landing = ({ projectsData, projectsImage }) => {
  return (
    <main className="main">
      <Hero />
      <About />
      <Projects projectsData={projectsData} projectsImage={projectsImage} />
      <Form />
    </main>
  );
};

Landing.propTypes = {
  projectsData: PropTypes.arrayOf(PropTypes.shape(ProjectType)).isRequired,
  projectsImage: ProjectsTypeImage,
}

export default Landing;
