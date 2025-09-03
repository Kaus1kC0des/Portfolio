import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import { DiPython } from "react-icons/di";
import { SiGit, SiMysql, SiMongodb, SiScikitlearn, SiFlask, SiPytorch, SiWeightsandbiases, SiLinux, SiAmazonaws, SiDigitalocean, SiFastapi, SiChainlink, SiOpencv } from "react-icons/si";

function Techstack() {
  const techs = [
    { icon: <DiPython />, name: "Python" },
    { icon: <SiPytorch />, name: "PyTorch" },
    { icon: <SiFastapi />, name: "FastAPI" },
    { icon: <SiChainlink />, name: "LangChain" },
    { icon: <SiScikitlearn />, name: "Scikit-learn" },
    { icon: <SiOpencv />, name: "OpenCV" },
    { icon: <SiFlask />, name: "Flask" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiGit />, name: "Git" },
    { icon: <SiLinux />, name: "Linux" },
    { icon: <SiAmazonaws />, name: "AWS" },
    { icon: <SiDigitalocean />, name: "DigitalOcean" },
    { icon: <SiWeightsandbiases />, name: "Weights & Biases" },
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