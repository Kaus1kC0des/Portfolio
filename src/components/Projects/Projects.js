import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import tumor from "../../Assets/Projects/tumor.png"
import voice from "../../Assets/Projects/voice.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 99% by using EfficientNet pretrained model."
              ghLink="https://github.com/Kaus1kC0des/Plant-Disease-Classification"
              demoLink="https://kausik-plant-disease-model-5cdf266921c4.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={voice}
              isBlog={false}
              title="Voice Diarization"
              description="Built a tool to accurately transcribe Who Spoke What in an offline/in-person meeting using faster-whisper and PyTorch. Also built and maintained the infrastructure to run the API to ensure seamlesss experience to our users and maintain low latency."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tumor}
              isBlog={false}
              title="Brain Tumor Classification"
              description="Trained a CNN classifier using 'Kaggle dataset' with Keras and TensorFlow backened. The classifier sucessfully predicted the presence of Brain Tumor using MRI imagery.
              Experimented with different custom made neural network achitectures and deployed the model using Flask and Heroku. The model was able to predict the presence of tumor with an accuracy of 95%."
              ghLink="https://github.com/Kaus1kC0des/Tumor-Detection-Deep-Learning.git"
              demoLink="https://kausik-tumor-classification-4308c6d38f8e.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;