import "./About.scss";
import skills from "../../data/skills";

const About = () => {
  return (
    <section className="about" id="about-section">
      <div className="about__presentation">
        <h2 className="about__presentation__title">À propos de moi</h2>
        <div className="about__presentation__content">
          <p>
            Passionnée par le web, j&apos;ai commencé à apprendre les bases des langages HTML et <a href="https://css-tricks.com/" target="_blank">CSS</a> par 
            moi-même avant de rejoindre la formation de développeur intégrateur web chez OpenClassrooms. J&apos;y ai renforcé mes compétences et appris de nouvelles 
            technologies comme <a href="https://www.javascript.com/" target="_blank">JavaScript</a>, <a href="https://react.dev/" target="_blank">React</a>{" "}
            et <a href="https://redux.js.org/" target="_blank">Redux</a>. L&apos;<a href="https://www.w3.org/WAI/" target="_blank">accessibilité</a>{" "}et la{" "}
            <a href="https://owasp.org/" target="_blank">sécurité</a>{" "}sont pour moi essentielles pour concevoir des sites internet et applications web offrant 
            une expérience utilisateur inclusive et fiable.
          </p>

          <p>
            Toujours en{" "} <a href="https://feedly.com/" target="_blank">veille</a>, je continue d&apos;explorer les technologies et de perfectionner mes 
            méthodes. Mon objectif est de développer des solutions modernes, performantes et adaptées au web, en respectant les principes de responsive design, 
            pour une navigation fluide sur mobile, tablette ou ordinateur. Votre satisfaction est ma priorité, et je m&apos;engage à répondre aux attentes de 
            chaque projet avec innovation et rigueur.
          </p>

          <div className="about__skills">
            <h3>Compétences et outils</h3>
            <div className="about__skills__container">
              {skills.map((skill) => (
                <div className="technology" key={skill.name}>
                  <img
                    loading="lazy"
                    src={skill.icon}
                    alt={`${skill.name} icon`}
                  />
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
