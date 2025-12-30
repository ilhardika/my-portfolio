import "./style.css";
import TechIcons from "@/TechIcons";
import { TechList } from "@/data/TechList";
import ScrollReveal from "@/animation/ScrollReveal";

const Tech = () => {
  return (
    <div id="tech" className="tech-container">
      <ScrollReveal>
        <h1 className="tech-title">Technologies</h1>
      </ScrollReveal>
      <ScrollReveal>
        <div className="tech-icons-container">
          <TechIcons technologies={TechList} />
        </div>
      </ScrollReveal>
    </div>
  );
};

export default Tech;
