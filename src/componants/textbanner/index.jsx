import "../../styles/css/textbanner/style.css";

function TextBanner({ title, content }) {
  return (
    <section className="text-banner-conteneur">
      <h2>{title}</h2>
      <p>{content}</p>
    </section>
  );
}

export default TextBanner;
