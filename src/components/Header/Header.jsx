import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="#start">
          <i className="fa-brands fa-pagelines logo__icon"></i>
          <h2 className="logo__name">ANAIS</h2>
        </a>
      </div>
      <nav className="header__nav">
        <a href="#about-section">À propos</a>
        <a href="#projects-section">Projets</a>
        <a href="#">Contact</a>
      </nav>
      <button className="header__burger">
        <i className="fa-solid fa-bars"></i>
      </button>
    </header>
  );
};

export default Header;
