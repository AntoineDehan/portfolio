import { Link } from "react-router-dom";
import Tag from "../tag/index";

import "../../styles/css/card/style.css";

function Card({ data }) {
  return (
    <div className="card-conteneur">
      {data?.map((projet) => {
        const { id, image, title, description, tags, url } = projet;
        return (
          <div className="card" key={id}>
            <div className="card-top">
              {/* <Link to={`/projet/${id}`} className="content"> */}
              <a href={url} className="content">
                <h3>{title}</h3>
                <p>{description}</p>
              </a>
              {/* </Link> */}
              {/* <Link to={`/projet/${id}`} className="bg-content"> */}
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-content"
              >
                <img src={image} alt={title}></img>
                <div className="overlay"></div>
              </a>
              {/* </Link> */}
            </div>
            <Tag data={tags} />
          </div>
        );
      })}
    </div>
  );
}

export default Card;
