import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import tumor from "../../Assets/Projects/tumor.png"
import voice from "../../Assets/Projects/voice.png"
import brainImage from "../../Assets/Projects/brainImage.png"
import jigsawImage from "../../Assets/Projects/jigsawImage.png"

function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle/>
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p style={{color: "white"}}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row style={{justifyContent: "center", paddingBottom: "10px"}}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={brainImage}
                            isBlog={false}
                            title="RAG Study Assistant"
                            description="A RAG study assistant for college courses: PDF chunking and vector embeddings in MongoDB vector search, with Gemini generating unit-scoped answers with source citations. Upload, semantic search and chat are served via async FastAPI REST APIs with PostgreSQL and Redis, with guardrails for unsafe LLM outputs. Built with LangChain and Next.js."
                            ghLink="https://github.com/Kaus1kC0des/rag-knowledge-base"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            isBlog={false}
                            title="Project Nethran"
                            description="AI assistive eyewear using YOLO-World (object detection) and CNNs (sign language recognition), deployed via quantized models on a Raspberry Pi 4 with a Flask inference backend for real-time edge inference."
                            ghLink="https://github.com/thepersonilike13/EyeGlass"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={voice}
                            isBlog={false}
                            title="Speaker Diarization Pipeline"
                            description="Built at Qik Office: a speech/NLP transcription and diarization pipeline (Whisper + Pyannote), evaluated at 95% speaker-attribution accuracy and 7–9 min per audio hour, and adopted by 95% of enterprise customers."
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={jigsawImage}
                            isBlog={false}
                            title="YouTube Comment Sentiment Analytics"
                            description="Trained a BERT algorithm and built a website that allows Youtube Content Creators to analyse and understand their content reach and target audience's response."
                            ghLink="https://github.com/Kaus1kC0des/Jigsaw-Toxic-Comment-Classification"
                            // demoLink="https://kausik-plant-disease-model-5cdf266921c4.herokuapp.com/"
                        />
                    </Col>

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