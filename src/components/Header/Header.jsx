import { useState } from "react";
import "./Header.scss";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [activeSidebar, setActiveSideBar] = useState(false);
  const location = useLocation();
  const projectsPage = location.pathname === "/all-projects";

  function toggleSidebar() {
    setActiveSideBar((prevState) => !prevState);
  }

  return (
    <header>
      <div className="header-container">
        <div className="header">
          <div className="logo">
            <Link to="/">
              <i className="fa-brands fa-pagelines logo__icon"></i>
              <h2 className="logo__name">ANAIS</h2>
            </Link>
          </div>
          <nav className="header__nav">
            {!projectsPage ? (
              <>
                <a href="/#about-section">À propos</a>
                <a href="/#projects-section">Projets</a>
                <a href="/#contact">Contact</a>
              </>
            ) : (
              <Link to="/">Accueil</Link>
            )}
          </nav>
          <button
            className="header__burger"
            onClick={toggleSidebar}
            aria-label="Ouvrir le menu d'options"
          >
            {activeSidebar ? (
              // back
              <i className="fa-solid fa-arrow-right"></i>
            ) : (
              // menu
              <i className="fa-solid fa-bars"></i>
            )}
          </button>
        </div>
        <div className={`sidebar ${activeSidebar && "sidebar--active"}`}>
          <nav className="sidebar__nav">
          {!projectsPage ? (
              <>
                <a href="/#about-section">À propos</a>
                <a href="/#projects-section">Projets</a>
                <a href="/#contact">Contact</a>
              </>
            ) : (
              <Link to="/">Accueil</Link>
            )}
          </nav>
          <div className="sidebar__config">
            <p>Langage</p>
            <p>Mode sombre</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
