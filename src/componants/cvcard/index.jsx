import Tag from "../tag";

import "../../styles/css/cvcard/style.css";

function CvCard({ data }) {
  return (
    <div className="cv-card-conteneur">
      {data?.map((card) => {
        const { id, image, title, date, content, tags } = card;
        return (
          <div className="cv-card" key={id}>
            <img src={image} alt="" />
            <div className="cv-card-contenu">
              <h3 className="cv-card-title">{title}</h3>
              <p className="cv-card-date">{date}</p>
              <p className="cv-card-content">{content}</p>
              <Tag data={tags} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CvCard;
