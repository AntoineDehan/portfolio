import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

import "../../styles/scss/introbanner/style.scss";

function IntroBanner({ title, description }) {
  return (
    <div className="intro-banner-conteneur">
      <div className="intro-banner banner-content">
        <div className="intro-banner top-content">
          <h1>{title}</h1>
          <h2>{description}</h2>
        </div>
        <div className="intro-banner down-content">
          <a href="#contact">Me Contacter</a>
          <a href="/portfolio/cv.pdf" download="CV_Dehan_Dartial_Antoine">
            <FontAwesomeIcon icon={faFileArrowDown} /> Mon CV
          </a>
          {/* <a href="https://github.com/AntoineDehan">
            <FontAwesomeIcon icon={faGithub} />
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default IntroBanner;
