import "../../styles/css/textbanner/style.css";

function TextBanner({ title, content }) {
  return (
    <div className="text-banner-conteneur">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default TextBanner;
