function SkillCard({ data }) {
  return (
    <div className="skill-conteneur">
      {data?.map((skill) => {
        const { id, image, title } = skill;
        return (
          <div className="skill" key={id}>
            <img src={image} alt="" />
            <h3>{title}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default SkillCard;
