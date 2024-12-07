import "./style.css";

const TechIcons = ({ technologies = TechList }) => {
  return (
    <>
      {technologies.map((tech) => {
        const Icon = tech.icon;
        return <Icon key={tech.id} className={`tech-icon ${tech.color}`} />;
      })}
    </>
  );
};

export default TechIcons;
