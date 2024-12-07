import "./style.css";
import ProjectLists from "@/ProjectLists";
import ScrollReveal from "@/animation/ScrollReveal";

const Project = () => {
  return (
    <div id="project" className="project-container">
      <ScrollReveal>
        <h1 className="project-header">My Projects</h1>
      </ScrollReveal>

      <div className="project-list-container">
        <ProjectLists />
      </div>
    </div>
  );
};

export default Project;
