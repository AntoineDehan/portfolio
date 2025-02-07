import "../../styles/css/textbanner/style.css";

function TextBanner({ data }) {
  return (
    <div className="text-banner-conteneur">
      <h2>{data.title}</h2>
      <p>{data.content}</p>
      <p>{data.subcontent}</p>
    </div>
  );
}

export default TextBanner;
