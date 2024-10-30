import "./Header.scss";
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <a href="">
          <img className="header__logo__icon" src={logo} />
          <h2 className="header__logo__name">ANAIS</h2>
        </a>
      </div>
      <nav className="header__nav">
        <a href="">À propos</a>
        <a href="">Projets</a>
        <a href="">Contact</a>
      </nav>
      <button className="header__burger">
        <i className="fa-solid fa-burger"></i>
      </button>
    </header>
  );
};

export default Header;
