import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPycharm,
  SiHeroku,
  SiSlack,
  SiNotion,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  const tools = [
    { icon: <SiMacos />, name: "macOS" },
    { icon: <SiPycharm />, name: "PyCharm" },
    { icon: <SiHeroku />, name: "Heroku" },
    { icon: <SiSlack />, name: "Slack" },
    { icon: <SiNotion />, name: "Notion" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          {tool.icon}
          <div style={{ fontSize: "12px", fontFamily: "Arial, sans-serif" }}>
            {tool.name}
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;