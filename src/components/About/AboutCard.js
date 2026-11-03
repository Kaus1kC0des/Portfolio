import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">KAUSIK D </span>
            from <span className="purple">  Chennai, India.</span>
            <br />
            I am currently working as an AI Product Engineer at Qik Office,
            where I started as a Software Developer Trainee in Aug 2024.
            <br />
            I completed my B.Tech in AI and Machine Learning at St. Joseph's
            College of Engineering in May 2026 (GPA 8.06 / 10).
            <br />
            <br />
            A couple of highlights: <span className="purple">Winner, IIT Madras ML Challenge</span> (2023)
            and <span className="purple">Top 5, BITS Pilani Hackathon</span> (2025).
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cycling
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Kausik</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;