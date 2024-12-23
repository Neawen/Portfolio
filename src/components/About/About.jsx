import "./About.scss";
import skills from "../../data/skills";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="about" id="about-section">
      <div className="about__presentation">
        <h2 className="about__presentation__title">{t("about.sectionTitle")}</h2>
        <div className="about__presentation__content">
          {t("about.content", { returnObjects: true }).map((item, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: item.paragraph }}></p>
          ))}
          <div className="about__skills">
            <h3>{t("about.skillsTitle")}</h3>
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
