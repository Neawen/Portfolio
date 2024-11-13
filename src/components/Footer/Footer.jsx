import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="footer__title">&copy; 2024 Lenoble Anaïs. Tous droits réservés.</h2>
      <a
        href="http://www.linkedin.com/in/anais-lenoble"
        target="_blank"
        className="footer__social"
        aria-label="Lien vers Linkedin"
      >
        <i className="fa-brands fa-linkedin"></i>
      </a>
    </footer>
  );
};

export default Footer;
