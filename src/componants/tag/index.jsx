import "../../styles/css/tag/style.css";

function Tag({ data }) {
  return (
    <div className="tag-conteneur">
      {data[0]?.tags.map((tag) => (
        <p key={tag}>{tag}</p>
      ))}
    </div>
  );
}

export default Tag;
