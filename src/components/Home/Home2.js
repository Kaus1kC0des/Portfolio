import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.4em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm an <b className="purple">AI Product Engineer</b> at Qik Office,
              shipping production speech, LLM-agent and API systems.
              <br />
              <br />I take AI features end to end:
              <i>
                <b className="purple"> the models, the GPU infrastructure they run on, and the APIs and agents that expose them.</b>
              </i>
              <br />
              <br />
              Lately that's meant a
              <b className="purple"> Whisper + Pyannote diarization pipeline </b>
              used by 95% of our enterprise customers, a custom
              <b className="purple"> MCP server </b> with LLM agents on the
              <b className="purple"> OpenAI Agents SDK</b>, and a public
              <b className="purple"> OAuth 2.0 REST API</b>.
              <br />
              <br />
              My day-to-day stack is
              <i>
                <b className="purple"> Python, FastAPI, PyTorch, PostgreSQL, Redis and Docker</b>
              </i>
              , running on <b className="purple">AWS, GCP and DigitalOcean</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Kaus1kC0des"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/KausikDevanath1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kausik-devanathan/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/kausik_02"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;