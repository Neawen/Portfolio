import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="">
          <i className="fa-brands fa-pagelines logo__icon"></i>
          <h2 className="logo__name">ANAIS</h2>
        </a>
      </div>
      <nav className="header__nav">
        <a href="">À propos</a>
        <a href="">Projets</a>
        <a href="">Contact</a>
      </nav>
      <button className="header__burger">
        <i className="fa-solid fa-bars"></i>
      </button>
    </header>
  );
};

export default Header;
