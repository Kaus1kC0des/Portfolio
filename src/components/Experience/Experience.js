import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import { MdWork } from "react-icons/md";
import qikLogo from "../../Assets/qikOfficeLogo.png";
import hclLogo from "../../Assets/hclLogo.png"

function Experience() {
  const experiences = [
    {
      title: "AI Product Engineer",
      company: "Qik Office",
      logo: qikLogo,
      date: "July 2026 - Present",
      description: [
        "Engineered a speech/NLP transcription and diarization pipeline (Whisper + Pyannote), evaluated at 95% speaker-attribution accuracy and 7–9 min per audio hour; adopted by 95% of enterprise customers.",
        "Wrote a custom MCP server exposing Qik Office services (meetings, email, notes, tasks) as LLM tools; built agents on the OpenAI Agents SDK for cross-service workflow orchestration, with human-in-the-loop checkpoints and logging.",
        "Shipped an OAuth 2.0 (PKCE) server and public REST API (56 endpoints, OpenAPI 3) for a multi-tenant SaaS without modifying existing controllers; validated via 27 E2E suites and mutation testing."
      ],
      skills: ["Whisper", "Pyannote", "MCP", "OpenAI Agents SDK", "OAuth 2.0", "FastAPI"],
      webLink: "https://qikoffice.com/"
    },
    {
      title: "Software Developer Trainee",
      company: "Qik Office",
      logo: qikLogo,
      date: "Aug 2024 - June 2026",
      description: [
        "Architected a real-time transcription service with per-meeting dynamic port allocation; an SFU routes audio via FFmpeg to Faster-Whisper, streaming live transcripts over WebSockets.",
        "Implemented GPU auto-scaling via the DigitalOcean API, provisioning new instances at 85% VRAM utilization and sustaining 8–10 concurrent meetings per GPU.",
        "Sole-owned the CPU-to-GPU migration on DigitalOcean: provisioned instances, configured CUDA and Python runtimes, and deployed all inference services, cutting processing time from 40+ min to 8–10 min (5× speedup)."
      ],
      skills: ["Faster-Whisper", "FFmpeg", "WebSockets", "CUDA", "DigitalOcean"],
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