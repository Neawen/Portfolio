import { useTranslation } from "react-i18next";
import "./Footer.scss";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="footer">
        <h2 className="footer__title">
          &copy; 2025 Lenoble Anaïs. {t("footer.title")}
        </h2>
        <a
          href="http://www.linkedin.com/in/anais-lenoble"
          target="_blank"
          className="footer__social"
          aria-label={t("footer.label")}
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
