import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import "./Slider.scss";

import cv from "../../assets/pdf/cv.pdf";


const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  // state variable to save repo from GitHub
  const [repos, setRepos] = useState([]);
  const { t } = useTranslation();

  const slides = [
    {
      // first view
      content: (
        <>
          <a
            href="https://github.com/Neawen"
            target="_blank"
            aria-label={t("slider.firstView.label")}
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <div className="slider__container__border"></div>
          <a className="slider__container__cv" href={cv} target="_blank">
          CV <i className="fa-regular fa-file-pdf"></i>
          </a>
        </>
      ),
    },
    {
      // second view
      content: (
        <>
          <h2 className="title">{t("slider.secondView.title")}</h2>
          <ul className="list">
            {repos.map((repo) => (
              <li key={repo.id}>
                <a href={repo.html_url} target="_blank" className="list__link">
                  {repo.name}
                </a>
                <p className="list__text">
                {t("slider.secondView.updated")} : {new Date(repo.updated_at).toLocaleDateString()}
                </p>
              </li>
            ))}
          </ul>
        </>
      ),
    },
  ];

  function handleSlider() {
    setActiveSlide((slide) => (slide === 0 ? 1 : 0));
  }

  useEffect(() => {
    const interval = setInterval(handleSlider, 4000);

    return () => clearInterval(interval);
  }, []);

  async function getGithubRepo() {
    const token = import.meta.env.VITE_GITHUB_TOKEN;

    try {
      const response = await fetch(
        "https://api.github.com/users/Neawen/repos?sort=updated",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();
      const lastRepos = data.slice(0, 1);

      setRepos(lastRepos);
    } catch (error) {
      console.error("Failed to fetch repositories, Hero component", error);
    }
  }

  useEffect(() => {
    getGithubRepo();
  }, []);

  return (
    <aside className="slider">
      {slides.map((slide, index) => (
        <div
          className={`slider__container
            ${activeSlide === 1 && "slider__container--second-view"}
            ${activeSlide === index && "slide-active"}
           `}
          //  first condition: class to reorganize slider second view
          //  second condition: class to delete the view to hide
          key={`slide-view-${index}`}
        >
          {slide.content}
        </div>
      ))}
      <div>
        {slides.map((dot, index) => (
          <span
            key={`dot-${index}`}
            onClick={() => setActiveSlide(index)}
            className={`dot ${activeSlide === index && "active"}`}
          ></span>
        ))}
      </div>
    </aside>
  );
};

export default Slider;
