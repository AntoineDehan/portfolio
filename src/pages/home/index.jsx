import TextBanner from "../../componants/textbanner";
import ImgBanner from "../../componants/imgbanner";
import Card from "../../componants/card";
import CvCard from "../../componants/cvcard";
import SkillCard from "../../componants/skillcard";

import image from "../../assets/bg.webp";
import Projets from "../../data/projets.json";
import Diplomes from "../../data/diplomes.json";
import Experiences from "../../data/experiences.json";
import Skills from "../../data/skills.json";
import About from "../../data/textcontent/about.json";

import "../../styles/css/home/style.css";

function Home() {
  return (
    <div className="main-conteneur">
      <section className="intro">
        <ImgBanner
          title="Antoine Dehan-Dartial"
          description="Font-End Développeur"
          alt="Fond noir"
          image={image}
        />
        <TextBanner data={About} />
      </section>
      <section className="projets" id="projets">
        <h2 className="section-title">Mes projets</h2>
        <Card data={Projets} />
      </section>
      <section className="diplomes">
        <h2 className="section-title">Diplômes</h2>
        <CvCard data={Diplomes} />
      </section>
      <section className="experiences">
        <h2 className="section-title">Expériences</h2>
        <CvCard data={Experiences} />
      </section>
      <section className="competences">
        <h2 className="section-title">Compétences</h2>
        <SkillCard data={Skills} />
      </section>
    </div>
  );
}

export default Home;
