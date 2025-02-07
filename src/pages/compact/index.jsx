import ImgBanner from "../../componants/imgbanner";
import CvCard from "../../componants/cvcard";
import SkillCard from "../../componants/skillcard";

import image from "../../assets/bg.webp";
import Diplomes from "../../data/diplomes.json";
import Experiences from "../../data/experiences.json";
import Skills from "../../data/skills.json";

import "../../styles/css/home/style.css";

function Compact() {
  return (
    <div className="main-conteneur">
      <section className="intro">
        <ImgBanner
          title="Antoine Dehan-Dartial"
          description="Font-End Développeur"
          alt="blah"
          image={image}
        />
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

export default Compact;
