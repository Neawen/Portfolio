// import background from "../../../public/background2.webp";
import Slider from "../Slider/Slider";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero" id="start">
      <img
        src="/background2.webp"
        alt={`Image abstraite effet "dessiné au crayon" faisant référence à plusieurs langages de développement web`}
        className="hero__bg"
      />
      <h1 className="hero__title">
        <span className="hero__title__name">Anaïs Lenoble</span> <br />
        <span className="hero__title__work">Développeuse</span> <br />
        <span className="hero__title__work-type">
          <span className="border-bottom">Fro</span>nt-end
        </span>
      </h1>
      <Slider/>
    </section>
  );
};

export default Hero;
