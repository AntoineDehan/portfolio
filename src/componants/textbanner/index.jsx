import "../../styles/scss/textbanner/style.scss";

function TextBanner({ data }) {
  return (
    <div className="text-banner-conteneur">
      <h2 className="section-title">{data.title}</h2>
      <p>{data.content}</p>
      <p>{data.subcontent}</p>
    </div>
  );
}

export default TextBanner;
