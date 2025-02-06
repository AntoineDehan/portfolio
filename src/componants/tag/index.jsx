import "../../styles/css/tag/style.css";

function Tag({ data }) {
  if (!data || data.length === 0) return null;
  return (
    <div className="tag-conteneur">
      {data.map((tag, index) => (
        <p key={index} className="tag">
          {tag}
        </p>
      ))}
    </div>
  );
}

export default Tag;
