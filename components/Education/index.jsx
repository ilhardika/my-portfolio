import "./style.css";
import ScrollReveal from "@/animation/ScrollReveal";
import { FiBook, FiCalendar, FiAward } from "react-icons/fi";

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Front End Bootcamp",
      period: "September 2024 – February 2025",
      institution: "Dibimbing",
      details: "React.js, Next.js, Tailwind, Git",
      icon: FiBook
    },
    {
      id: 2,
      degree: "QA Bootcamp",
      period: "March 2023 – June 2023",
      institution: "Eduwork",
      details: "Manual & Automated Testing with Cypress, Katalon, Postman",
      icon: FiBook
    },
    {
      id: 3,
      degree: "B.Sc. in Informatics Engineering",
      period: "2018 – 2023",
      institution: "Dr. Soetomo University",
      details: "GPA 3.5",
      icon: FiAward
    }
  ];

  return (
    <div id="education" className="education-container">
      <ScrollReveal>
        <h1 className="education-header">Education</h1>
      </ScrollReveal>

      <div className="education-timeline">
        {educationData.map((edu, index) => (
          <ScrollReveal key={edu.id}>
            <div className="timeline-item">
              <div className="timeline-icon">
                <edu.icon size={20} />
              </div>
              
              <div className="timeline-content">
                <h3 className="timeline-degree">{edu.degree}</h3>
                <p className="timeline-meta">{edu.period} | {edu.institution}</p>
                <p className="timeline-details">{edu.details}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};

export default Education;
