import { useEffect, useState } from "react";
import "./Header.scss";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [activeSidebar, setActiveSideBar] = useState(false);
  const location = useLocation();
  const projectsPage = location.pathname === "/all-projects";

  const [theme, setTheme] = useState(() => {
    const choosenTheme = localStorage.getItem("choosenTheme");
    const systemPreferences = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (choosenTheme) {
      return choosenTheme;
    } else {
      // if user prefers dark system use dark data-theme else light
      return systemPreferences ? "dark" : "light";
    }
  });

  function toggleSidebar() {
    setActiveSideBar((prevState) => !prevState);
  }

  function toggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("choosenTheme", newTheme);
  }

  useEffect(() => {
    // add data-theme attribute to the page 
    document.documentElement.setAttribute("data-theme", theme);
    // update when theme changes
  }, [theme]);

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
            <button
              onClick={toggleTheme}
              aria-label={`Activer le mode ${
                theme === "light" ? "sombre" : "clair"
              }`}
            >
              {theme === "light" ? (
                <i className="fa-regular fa-moon"></i>
              ) : (
                <i className="fa-regular fa-sun"></i>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
