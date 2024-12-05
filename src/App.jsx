import Landing from "./pages/Landing";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AllProjects from "./pages/AllProjects/AllProjects";

import "./assets/style/main.scss";

import { ParallaxProvider } from "react-scroll-parallax";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import projectsData from "./data/projects.json";
import projectsImage from "./data/projectsImages";

function App() {
  return (
    <ParallaxProvider>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Landing
                projectsData={projectsData}
                projectsImage={projectsImage}
              />
            }
          />
          <Route
            path="/all-projects"
            element={
              <AllProjects
                projectsData={projectsData}
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
