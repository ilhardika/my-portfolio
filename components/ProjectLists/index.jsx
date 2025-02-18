import "./style.css";
import { ProjectList } from "@/data/ProjectList";
import ScrollReveal from "@/animation/ScrollReveal";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const ProjectLists = ({ projects = ProjectList }) => {
  return (
    <>
      {projects.map((item, index) => (
        <ScrollReveal key={item.id}>
          <div
            className={`project-card group md:${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <div className="project-image-wrapper">
              <div className="project-image-container">
                <img
                  src={item.image}
                  alt={item.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn"
                    >
                      <FiGithub size={20} />
                      <span>Code</span>
                    </a>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn"
                    >
                      <FiExternalLink size={20} />
                      <span>Preview</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="project-content">
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
        </ScrollReveal>
      ))}
    </>
  );
};

export default ProjectLists;
