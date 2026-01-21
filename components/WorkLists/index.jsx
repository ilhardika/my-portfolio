import "./style.css";
import { workExperience } from "@/data/WorkList";
import ScrollReveal from "@/animation/ScrollReveal";
import { useState } from "react";
import { FiX, FiCalendar, FiCheckCircle, FiBriefcase, FiTag } from "react-icons/fi";

const WorkLists = ({ works = workExperience }) => {
  const [selectedWork, setSelectedWork] = useState(null);

  const openModal = (work) => {
    setSelectedWork(work);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedWork(null);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <div className="work-scroll-container">
        <div className="work-bento-grid">
          {works.map((work, index) => (
            <ScrollReveal key={work.id}>
              <div
                className="work-card"
                onClick={() => openModal(work)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    openModal(work);
                  }
                }}
              >
                {/* Banner Header with Logo */}
                <div className="work-card-banner">
                  <img
                    src={work.logo}
                    alt={`${work.company} logo`}
                    className="work-banner-logo"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div className="work-banner-placeholder" style={{ display: "none" }}>
                    <FiBriefcase size={48} />
                  </div>
                </div>

                <div className="work-card-content">
                  <div className="work-type-badge">
                    <FiTag size={12} />
                    <span>{work.type}</span>
                  </div>
                  <h3 className="work-position">{work.position}</h3>
                  <h4 className="work-company">{work.company}</h4>
                  <div className="work-period">
                    <FiCalendar size={14} />
                    <span>{work.period}</span>
                  </div>
                  <p className="work-short-desc">{work.shortDesc}</p>
                  <button className="work-view-btn">View Details →</button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedWork && (
        <div className="work-modal-overlay" onClick={closeModal}>
          <div className="work-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="work-modal-close" onClick={closeModal} aria-label="Close modal">
              <FiX size={24} />
            </button>

            <div 
              className="work-modal-header"
              style={{ '--modal-banner-bg': `url(${selectedWork.logo})` }}
            >
              <div className="work-modal-title">
                <h2 className="work-modal-position">{selectedWork.position}</h2>
                <h3 className="work-modal-company">{selectedWork.company}</h3>
                <div className="work-modal-period">
                  <FiCalendar size={16} />
                  <span>{selectedWork.period}</span>
                </div>
              </div>
            </div>

            <div className="work-modal-body">
              <div className="work-section">
                <h4 className="work-section-title">Responsibilities</h4>
                <ul className="work-responsibilities-list">
                  {selectedWork.responsibilities.map((resp, index) => (
                    <li key={index} className="work-responsibility-item">
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>

              {selectedWork.achievements && selectedWork.achievements.length > 0 && (
                <div className="work-section">
                  <h4 className="work-section-title">Key Achievements</h4>
                  <div className="work-achievements-grid">
                    {selectedWork.achievements.map((achievement, index) => (
                      <div key={index} className="work-achievement-item">
                        <FiCheckCircle className="work-achievement-icon" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WorkLists;
