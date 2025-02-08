import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

import "../../styles/css/imgbanner/style.css";

function ImgBanner({ title, description, image, alt }) {
  return (
    <div className="img-banner-conteneur">
      <div className="img-banner banner-content">
        <div className="img-banner top-content">
          <h1>{title}</h1>
          <h2>{description}</h2>
        </div>
        <div className="img-banner down-content">
          <a href="#contact">Contact</a>
          <a href="/portfolio/cv.pdf" download="CV_Dehan_Dartial_Antoine">
            <FontAwesomeIcon icon={faFileArrowDown} /> Mon CV
          </a>
          <a href="https://github.com/AntoineDehan">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
      <img src={image} alt={alt} />
      <div className="banner-overlay"></div>
    </div>
  );
}

export default ImgBanner;
