import { useState } from "react";
import "./Header.scss";

const Header = () => {
  const [activeSidebar, setActiveSideBar] = useState(false);

  function toggleSidebar() {
    setActiveSideBar((prevState) => !prevState);
  }

  return (
    <header>
      <div className="header">
        <div className="logo">
          <a href="#start">
            <i className="fa-brands fa-pagelines logo__icon"></i>
            <h2 className="logo__name">ANAIS</h2>
          </a>
        </div>
        <nav className="header__nav">
          <a href="#about-section">À propos</a>
          <a href="#projects-section">Projets</a>
          <a href="#">Contact</a>
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
          <a href="#about-section">À propos</a>
          <a href="#projects-section">Projets</a>
          <a href="#">Contact</a>
        </nav>
        <div className="sidebar__config">
          <p>Langage</p>
          <p>Mode sombre</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
