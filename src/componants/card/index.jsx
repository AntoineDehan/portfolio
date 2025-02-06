import { Link } from "react-router-dom";
import Tag from "../tag/index";

import "../../styles/css/card/style.css";

function Card({ data }) {
  return (
    <div className="card-conteneur">
      {data?.map((projet) => {
        const { id, image, title, description, tags } = projet;
        return (
          <div className="card" key={id}>
            <div className="card-top">
              <Link to={`/projet/${id}`} className="content">
                <h3>{title}</h3>
                <p>{description}</p>
              </Link>
              <Link to={`/projet/${id}`} className="bg-content">
                <img src={image} alt={title}></img>
                <div className="overlay"></div>
              </Link>
            </div>
            <Tag data={tags} />
          </div>
        );
      })}
    </div>
  );
}

export default Card;
