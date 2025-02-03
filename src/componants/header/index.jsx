import { Link } from "react-router-dom";

import "../../styles/css/header/style.css";

function Header() {
  return (
    <header className="header-conteneur">
      <div></div>
      <nav>
        <Link>Acceuil</Link>
        <Link>Version compacte</Link>
        <Link>Projets</Link>
        <Link>Contact</Link>
        <a href="https://github.com/AntoineDehan">
          <img src="src\assets\github.png" alt="Logo Github"></img>
        </a>
      </nav>
    </header>
  );
}

export default Header;
