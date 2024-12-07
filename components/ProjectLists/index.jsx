import "./style.css";
import { ProjectList } from "@/data/ProjectList";
import ScrollReveal from "@/animation/ScrollReveal";

const ProjectLists = ({ projects = ProjectList }) => {
  return (
    <>
      {projects.map((item) => (
        <ScrollReveal key={item.id}>
          <div className="project-card">
            <a href={item.link} target="_blank" className="w-full">
              <img
                src={item.image}
                alt={item.title}
                className="project-image"
              />
            </a>
            <div className="project-content">
              <div className="project-info">
                <h3 className="project-title">{item.title}</h3>
                <p className="project-description">{item.desc}</p>
                <div className="project-tech-stack">
                  {item.tech.map((tech, index) => (
                    <span key={index} className="project-tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </>
  );
};

export default ProjectLists;
