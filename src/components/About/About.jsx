import cssLogo from "../../assets/icons/css3.svg";
import figmaLogo from "../../assets/icons/figma.svg";
import gitLogo from "../../assets/icons/git.svg";
import githubLogo from "../../assets/icons/github.svg";
import html5Logo from "../../assets/icons/html5.svg";
import javascriptLogo from "../../assets/icons/javascript.svg";
import mongodbLogo from "../../assets/icons/mongodb.svg";
import notionLogo from "../../assets/icons/notion.svg";
import postmanLogo from "../../assets/icons/postman.svg";
import reactLogo from "../../assets/icons/react.svg";
import reduxLogo from "../../assets/icons/redux.svg";
import sassLogo from "../../assets/icons/sass.svg";
import slackLogo from "../../assets/icons/slack.svg";
import swaggerLogo from "../../assets/icons/swagger.svg";
import tailwindLogo from "../../assets/icons/tailwind.svg";
import vscodeLogo from "../../assets/icons/vscode.svg";

import "./About.scss";

const About = () => {
  const skills = [
    { name: "CSS", icon: cssLogo },
    { name: "Figma", icon: figmaLogo },
    { name: "Git", icon: gitLogo },
    { name: "GitHub", icon: githubLogo },
    { name: "HTML", icon: html5Logo },
    { name: "JavaScript", icon: javascriptLogo },
    { name: "MongoDB", icon: mongodbLogo },
    { name: "Notion", icon: notionLogo },
    { name: "Postman", icon: postmanLogo },
    { name: "React", icon: reactLogo },
    { name: "Redux", icon: reduxLogo },
    { name: "Sass", icon: sassLogo },
    { name: "Slack", icon: slackLogo },
    { name: "Swagger", icon: swaggerLogo },
    { name: "Tailwind", icon: tailwindLogo },
    { name: "VSCode", icon: vscodeLogo },
  ];

  return (
    <section className="about">
      <div className="about__coloring"></div>

      <article className="about__presentation">
        <h2 className="about__presentation__title">À propos de moi</h2>
        <div className="about__presentation__content">
          <p>
            {`J'ai commencé à créer des sites web en autodidacte avant de rejoindre la formation de développeur intégrateur web chez OpenClassrooms, où j'ai renforcé
          mes compétences en HTML, CSS, JavaScript et appris de nouvelles technologies comme React et Redux. L'accessibilité et à la sécurité des sites est pour moi 
          essentielle afin d'offrir une expérience utilisateur inclusive et fiable. `}
          </p>

          <p>
            {`Toujours en veille, je continue d'explorer les technologies et perfectionne mes méthodes pour garantir des solutions modernes et performantes. Votre 
          satisfaction est au cœur de mon approche, et je m'engage à répondre aux attentes de chaque projet avec innovation et rigueur technique.`}
          </p>
        </div>
      </article>

      <article className="about__skills">
        <h2 className="about__skills__title">Compétences et outils</h2>
        <div className="about__skills__container">
          {skills.map((skill) => (
            <div className="technology" key={skill.name}>
              <img src={skill.icon} alt={`${skill.name} icon`} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </article>
      <div className="border-section">
        <div className="border-section__lign"></div>
      </div>
    </section>
  );
};

export default About;
