import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiPython } from "react-icons/di";
import { SiGit, SiMysql, SiPandas, SiNumpy, SiScikitlearn, SiFlask, SiPytorch, SiWeightsandbiases, SiTableau, SiLinux, SiAmazonaws, SiDigitalocean, SiOpencv } from "react-icons/si";
import { GiHistogram } from "react-icons/gi"; // For Statistics
import { FaChartBar } from "react-icons/fa"; // For Matplotlib

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaChartBar />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpencv />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWeightsandbiases />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTableau />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDigitalocean />
      </Col>
    </Row>
  );
}

export default Techstack;