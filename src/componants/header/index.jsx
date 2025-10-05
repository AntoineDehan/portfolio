import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { useState, useEffect } from "react";

import Modal from "../modal";

import "../../styles/scss/header/style.scss";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const options = { root: null, threshold: 0.2 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Visible:", entry.target.id);
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      setActiveSection("contact");
    } else {
      const visibleSection = Array.from(
        document.querySelectorAll("section[id]")
      ).find((section) => {
        const rect = section.getBoundingClientRect();
        return (
          rect.top < window.innerHeight / 2 &&
          rect.bottom > window.innerHeight / 2
        );
      });
      if (visibleSection) setActiveSection(visibleSection.id);
    }
  }, [isModalOpen]);

  return (
    <header className="header-conteneur">
      <nav>
        <a href="#intro" className={activeSection === "intro" ? "active" : ""}>
          Accueil
        </a>
        <a
          href="#projets"
          className={activeSection === "projets" ? "active" : ""}
        >
          Projets
        </a>
        <a
          href="#diplomes"
          className={activeSection === "diplomes" ? "active" : ""}
        >
          Diplômes
        </a>
        <a
          onClick={() => setIsModalOpen(true)}
          className={activeSection === "contact" ? "active" : ""}
        >
          Contact
        </a>
        <a href="https://github.com/AntoineDehan" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </nav>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
}

export default Header;
