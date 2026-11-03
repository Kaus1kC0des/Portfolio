import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import { DiPython, DiJava } from "react-icons/di";
import { SiGit, SiMysql, SiMongodb, SiFlask, SiPytorch, SiAmazonaws, SiDigitalocean, SiFastapi, SiChainlink, SiOpenai, SiPostgresql, SiRedis, SiDocker, SiNodedotjs, SiJavascript, SiGooglecloud, SiGithubactions, SiNvidia } from "react-icons/si";

function Techstack() {
  const techs = [
    { icon: <DiPython />, name: "Python" },
    { icon: <SiPytorch />, name: "PyTorch" },
    { icon: <SiOpenai />, name: "OpenAI / LLMs" },
    { icon: <SiChainlink />, name: "LangChain" },
    { icon: <SiFastapi />, name: "FastAPI" },
    { icon: <SiNodedotjs />, name: "Node.js" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <DiJava />, name: "Java" },
    { icon: <SiFlask />, name: "Flask" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiRedis />, name: "Redis" },
    { icon: <SiDocker />, name: "Docker" },
    { icon: <SiAmazonaws />, name: "AWS" },
    { icon: <SiGooglecloud />, name: "GCP" },
    { icon: <SiDigitalocean />, name: "DigitalOcean" },
    { icon: <SiNvidia />, name: "CUDA" },
    { icon: <SiGithubactions />, name: "GitHub Actions" },
    { icon: <SiGit />, name: "Git" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techs.map((tech, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          {tech.icon}
          <Card.Text style={{ fontSize: "12px", fontFamily: "Arial, sans-serif" }}>
            {tech.name}
          </Card.Text>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;