import TextBanner from "../../componants/textbanner";
import ImgBanner from "../../componants/imgbanner";
import image from "../../assets/test.png";

import "../../styles/css/home/style.css";

function Home() {
  return (
    <div className="main-conteneur">
      <ImgBanner
        title="Antoine Dehan-Dartial"
        description="Font-End Développeur"
        alt="blah"
        image={image}
      />
      <TextBanner
        title="Ceci est un titre test"
        content="Ceci est un texte test mais parcontre il est beaucoup plus long puisque c'est censé représenter un paragraphe. On peut me dire deux paragraphes en vrai? Dans tous les j'importerai le texte via un JSON pour faire genre je sais faire des sites de ouf"
      />
      <TextBanner
        title="Ceci est un titre test"
        content="Ceci est un texte test mais parcontre il est beaucoup plus long puisque c'est censé représenter un paragraphe. On peut me dire deux paragraphes en vrai? Dans tous les j'importerai le texte via un JSON pour faire genre je sais faire des sites de ouf"
      />
    </div>
  );
}

export default Home;
