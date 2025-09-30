import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

import { useState, React } from "react";  

import Modal from "../modal";

import "../../styles/scss/introbanner/style.scss";

function IntroBanner({ title, description }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="intro-banner-conteneur">
      <div className="intro-banner banner-content">
        <div className="intro-banner top-content">
          <h1>{title}</h1>
          <h2>{description}</h2>
        </div>
        <div className="intro-banner down-content">
          <a onClick={() => setIsModalOpen(true)}>Me Contacter</a>
          <a href="/portfolio/cv.pdf" download="CV_Dehan_Dartial_Antoine">
            <FontAwesomeIcon icon={faFileArrowDown} /> Mon CV
          </a>
          {/* <a href="https://github.com/AntoineDehan">
            <FontAwesomeIcon icon={faGithub} />
          </a> */}
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default IntroBanner;
