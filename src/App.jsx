import Landing from "./pages/Landing";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AllProjects from "./pages/AllProjects/AllProjects";

import "./assets/style/main.scss";

import { ParallaxProvider } from "react-scroll-parallax";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";

import projectsData from "./data/projects.json";
import projectsImage from "./data/projectsImages";

function App() {
  const { t } = useTranslation();

  const translatedProjects = projectsData.map((project) => ({
    ...project,
    shortDesc: t(`projects.projectsData.${project.id}.shortDesc`),
    description: t(`projects.projectsData.${project.id}.description`)
  }))

  return (
    <ParallaxProvider>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Landing
                projectsData={translatedProjects}
                projectsImage={projectsImage}
              />
            }
          />
          <Route
            path="/all-projects"
            element={
              <AllProjects
                projectsData={translatedProjects}
                projectsImage={projectsImage}
              />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </ParallaxProvider>
  );
}

export default App;
