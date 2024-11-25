import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import { DiPython } from "react-icons/di";
import { SiGit, SiMysql, SiPandas, SiNumpy, SiScikitlearn, SiFlask, SiPytorch, SiWeightsandbiases, SiTableau, SiLinux, SiAmazonaws, SiDigitalocean, SiOpencv } from "react-icons/si";
import { FaChartBar } from "react-icons/fa"; // For Matplotlib

function Techstack() {
  const techs = [
    { icon: <DiPython />, name: "Python" },
    { icon: <SiGit />, name: "Git" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiPandas />, name: "Pandas" },
    { icon: <SiNumpy />, name: "NumPy" },
    { icon: <FaChartBar />, name: "Matplotlib" },
    { icon: <SiScikitlearn />, name: "Scikit-learn" },
    { icon: <SiFlask />, name: "Flask" },
    { icon: <SiOpencv />, name: "OpenCV" },
    { icon: <SiPytorch />, name: "PyTorch" },
    { icon: <SiWeightsandbiases />, name: "Weights & Biases" },
    { icon: <SiTableau />, name: "Tableau" },
    { icon: <SiLinux />, name: "Linux" },
    { icon: <SiAmazonaws />, name: "AWS" },
    { icon: <SiDigitalocean />, name: "DigitalOcean" },
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