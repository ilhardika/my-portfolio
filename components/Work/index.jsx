import "./style.css";
import WorkLists from "@/WorkLists";
import ScrollReveal from "@/animation/ScrollReveal";

const Work = () => {
  return (
    <div id="work" className="work-container">
      <ScrollReveal>
        <h1 className="work-header">Work Experience</h1>
      </ScrollReveal>

      <div className="work-list-wrapper">
        <WorkLists />
      </div>
    </div>
  );
};

export default Work;
