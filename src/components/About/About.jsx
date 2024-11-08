import "./About.scss";
import skills from "../../data/skills";

const About = () => {
  return (
    <section className="about">
      <div className="about__presentation">
        <h2 className="about__presentation__title">À propos de moi</h2>
        <div className="about__presentation__content">
          <p>
            {`Passionnée par le web j'ai commencé à apprendre les bases des langages HTML et CSS en autodidacte avant de rejoindre la formation de développeur 
            intégrateur web chez OpenClassrooms, où j'ai renforcé mes compétences et où j'ai également pu apprendre de nouvelles technologies comme JavaScript,
            React et Redux. L'accessibilité et la sécurité des sites sont pour moi essentielles afin d'offrir une expérience utilisateur inclusive et fiable. `}
          </p>

          <p>
            {`Toujours en veille, je continue d'explorer les technologies et de perfectionner mes méthodes pour garantir des solutions modernes et performantes. Votre 
          satisfaction est ma priorité et je m'engage à répondre aux attentes de chaque projet avec innovation et rigueur.`}
          </p>

          <div className="about__skills">
            <h3>Compétences et outils</h3>
            <div className="about__skills__container">
              {skills.map((skill) => (
                <div className="technology" key={skill.name}>
                  <img src={skill.icon} alt={`${skill.name} icon`} />
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-section">
        <div className="border-section__lign"></div>
      </div>
    </section>
  );
};

export default About;
