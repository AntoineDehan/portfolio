import { Link } from "react-router-dom";

import "../../styles/css/header/style.css";

function Header() {
  return (
    <header className="header-conteneur">
      <div></div>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/compact">Version compacte</Link>
        <a href="#projets">Projets</a>
        <a href="#contact">Contact</a>
        <a href="https://github.com/AntoineDehan">
          <img src="src\assets\github.png" alt="Logo Github"></img>
        </a>
      </nav>
    </header>
  );
}

export default Header;
