import { Parallax } from "react-scroll-parallax";
import Slider from "../Slider/Slider";
import "./Hero.scss";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero" id="start">
      <Parallax scale={[0.9, 1.4]} speed={0.6}>
        <img
          src="/background2.webp"
          alt={t("hero.imageDesc")}
          className="hero__bg"
        />
      </Parallax>
      <h1 className="hero__title">
        <span className="hero__title__name">Anaïs Lenoble</span> <br />
        <span className="hero__title__work">{t("hero.work")}</span> <br />
        <span className="hero__title__work-type">
          <span className="border-bottom">Fro</span>{t("hero.workType")}
        </span>
      </h1>
      <Slider />
    </section>
  );
};

export default Hero;
