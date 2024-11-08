import { useEffect, useState } from "react";
import "./Slider.scss";

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [repos, setRepos] = useState([]);

  const slides = [
    {
      content: (
        <>
          <a href="https://github.com/Neawen" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
          <div className="slider__container__border"></div>
          <button className="slider__container__cv">CV</button>
        </>
      ),
    },
    {
      content: (
        <>
          <h2 className="title">Dernier projet GitHub</h2>
          <ul className="list">
            {repos.map((repo) => (
              <li key={repo.id}>
                <a href={repo.html_url} target="_blank" className="list__link">
                  {repo.name}
                </a>
                <p className="list__text">Maj : {new Date(repo.updated_at).toLocaleDateString()}</p>
              </li>
            ))}
          </ul>
        </>
      ),
    },
  ];

  function handleSlider() {
    setActiveSlide((prev) => (prev === 0 ? 1 : 0));
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
            Authorization: `${token}`,
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
          className={`slider__container ${
            activeSlide === 1 && "slider__container--second-view"
          }`}
          key={index}
          style={{ display: activeSlide !== index && "none" }}
        >
          {slide.content}
        </div>
      ))}
      <div>
        {slides.map((dot, index) => (
          <span
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`dot ${activeSlide === index && "active"}`}
          ></span>
        ))}
      </div>
    </aside>
  );
};

export default Slider;
