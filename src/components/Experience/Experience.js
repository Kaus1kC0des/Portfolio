import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { MdWork } from "react-icons/md";
import qikLogo from "../../Assets/qikOfficeLogo.png";
import hclLogo from "../../Assets/hclLogo.png"

function Experience() {
  const experiences = [
    {
      title: "Developer Intern",
      company: "Qik Meetings",
      logo: qikLogo,
      date: "Aug 2024 - Sept 2025",
      description: [
        "Led the development of AI-powered voice diarization solutions",
        "Built and maintained infrastructure for API services with focus on low latency",
        "Built a LLM application to help users query on meeting data"
      ],
      skills: ["PyTorch", "Python", "AWS", "Backend Development"],
      webLink: "https://qikoffice.com/"
    },
    {
      title: "TechBee Intern",
      company: "HCL Technologies",
      logo: hclLogo,
      date: "Mar 2022 - Aug 2022",
      description: "Maintained the client's infrastructure and helped them achieve maximum uptime.",
      skills: ["AWS", "Linux", "Docker"],
      webLink: "https://www.hcltech.com/"
    }
  ];

  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Professional <strong className="purple">Experience </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here's a summary of my professional journey so far
        </p>
        
        <div className="timeline-container">
          {experiences.map((exp, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-badge">
                <MdWork color="white" size={20} />
              </div>
              <div className="timeline-content">
                <div className="company-logo-container">
                  <img src={exp.logo} alt={`${exp.company} logo`} className="company-logo" />
                </div>
                <h3 className="experience-role">{exp.title}</h3>
                <h4 className="experience-company">{exp.company}</h4>
                <p className="experience-date">{exp.date}</p>
                {Array.isArray(exp.description) ? (
                  <ul className="experience-description-list">
                    {exp.description.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                ) : (
                  <p className="experience-description">{exp.description}</p>
                )}
                <div className="skills-container">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
                {exp.webLink && (
                  <a 
                    href={exp.webLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="company-link"
                  >
                    Visit Company
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Container>
  );
}

export default Experience; 