import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../../Hooks/useLanguage";
import { useTranslation } from "react-i18next";

import "./Header.scss";

import iconFR from "../../assets/icons/france.svg";
import iconUK from "../../assets/icons/united-kingdom.svg";


const Header = () => {
  const { t } = useTranslation();
  const { lang, toggleLanguage } = useLanguage();
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
                <a href="/#about-section">{t("header.about")}</a>
                <a href="/#projects-section">{t("header.projects")}</a>
                <a href="/#contact">{t("header.contact")}</a>
              </>
            ) : (
              <Link to="/">{t("header.home")}</Link>
            )}
          </nav>
          <button
            className="header__burger"
            onClick={toggleSidebar}
            aria-label={t("header.burgerMenu")}
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
                <a href="/#about-section">{t("header.about")}</a>
                <a href="/#projects-section">{t("header.projects")}</a>
                <a href="/#contact">{t("header.contact")}</a>
              </>
            ) : (
              <Link to="/">{t("header.home")}</Link>
            )}
          </nav>
          <div className="sidebar__config">
            <button onClick={toggleLanguage}>
              {lang === "fr" ? 
              <img src={iconUK} alt="English language"></img>
              : 
              <img src={iconFR} alt="Langage français"></img>}
            </button>
            <button
              onClick={toggleTheme}
              aria-label={t("header.toggleTheme", {
                mode: theme === "light" ? t("header.dark") : t("header.light"),
              })}
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
