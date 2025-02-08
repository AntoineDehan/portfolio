import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "../../styles/css/header/style.css";

function Header() {
  return (
    <header className="header-conteneur">
      <div></div>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/compact">Version compacte</Link>
        <a href="#contact">Contact</a>
        <a href="https://github.com/AntoineDehan">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </nav>
    </header>
  );
}

export default Header;
