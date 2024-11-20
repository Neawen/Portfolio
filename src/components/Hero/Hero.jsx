import { Parallax } from "react-scroll-parallax";
import Slider from "../Slider/Slider";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero" id="start">
      <Parallax scale={[0.9, 1.4]} speed={0.6}>
        <img
          src="/background2.webp"
          alt={`Image abstraite faisant référence à des langages de développement web`}
          className="hero__bg"
        />
      </Parallax>
      <h1 className="hero__title">
        <span className="hero__title__name">Anaïs Lenoble</span> <br />
        <span className="hero__title__work">Développeuse web</span> <br />
        <span className="hero__title__work-type">
          <span className="border-bottom">Fro</span>nt-end
        </span>
      </h1>
      <Slider />
    </section>
  );
};

export default Hero;
