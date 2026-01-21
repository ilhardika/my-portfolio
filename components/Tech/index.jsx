import "./style.css";
import ScrollReveal from "@/animation/ScrollReveal";
import { FiCode, FiUsers, FiGlobe } from "react-icons/fi";

const Skill = () => {
  const skills = {
    hardSkills: ["Cypress", "Playwright", "Katalon", "Postman", "JMeter", "JIRA", "Zephyr"],
    softSkills: ["Detail-Oriented", "Collaboration", "Problem-Solving", "Adaptability", "Time Management"],
    languages: ["English (Intermediate)", "Indonesian (Native)"]
  };

  return (
    <div id="skill" className="tech-container">
      <ScrollReveal>
        <h1 className="tech-title">Skills</h1>
      </ScrollReveal>

      <div className="skills-grid">
        <ScrollReveal>
          <div className="skill-category">
            <div className="skill-header">
              <FiCode className="skill-icon" size={24} />
              <h3 className="skill-category-title">Hard Skills</h3>
            </div>
            <div className="skill-tags">
              {skills.hardSkills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="skill-category">
            <div className="skill-header">
              <FiUsers className="skill-icon" size={24} />
              <h3 className="skill-category-title">Soft Skills</h3>
            </div>
            <div className="skill-tags">
              {skills.softSkills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="skill-category">
            <div className="skill-header">
              <FiGlobe className="skill-icon" size={24} />
              <h3 className="skill-category-title">Languages</h3>
            </div>
            <div className="skill-tags">
              {skills.languages.map((lang, index) => (
                <span key={index} className="skill-tag">{lang}</span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Skill;
