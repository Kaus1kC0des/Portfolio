import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Particle from "../Particle";

const publications = [
  {
    title:
      "From Chaos to Coherence: Unifying Legal AI through Grounded Reasoning and Governance",
    authors: ["Kausik D", "Gunal Prasad D S", "Thiraviaselvi G"],
    affiliation:
      "Department of Artificial Intelligence and Machine Learning, St. Joseph's College of Engineering, Chennai",
    status: "Under review",
    venue: "Submitted to Springer",
    summary:
      "Proposes a single agentic AI platform for legal practice that turns client-call recordings and case papers into high-fidelity transcripts, then supports grounded drafting and filing, schedule management and AI-assisted mock-trial preparation in one workflow. Reliability comes from knowledge-graph-based RAG, role-specific mixture-of-experts encodings, verifier ensembles, human-in-the-loop adjudication and auditable explanations. Evaluation is planned on LegalBench, CUAD and CaseHOLD, plus adversarial compliance and citation-anonymisation tests.",
    tags: [
      "Agentic AI",
      "Legal RAG",
      "Knowledge Graphs",
      "Verifier Ensembles",
      "Human-in-the-Loop",
      "Auditable AI",
    ],
  },
];

function Publications() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Research <strong className="purple">Publications </strong>
        </h1>
        <p style={{ color: "white" }}>
          Papers I have written, with their current review status.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {publications.map((paper) => (
            <Col md={10} className="project-card" key={paper.title}>
              <Card className="project-card-view">
                <Card.Body style={{ textAlign: "left" }}>
                  <div style={{ marginBottom: "10px" }}>
                    <Badge bg="warning" text="dark" style={{ marginRight: "8px" }}>
                      {paper.status}
                    </Badge>
                    <span style={{ fontStyle: "italic" }}>{paper.venue}</span>
                  </div>
                  <Card.Title style={{ fontSize: "1.3em" }}>{paper.title}</Card.Title>
                  <p style={{ marginBottom: "4px" }}>
                    {paper.authors.map((a, i) => (
                      <span key={a}>
                        {a === "Kausik D" ? <strong className="purple">{a}</strong> : a}
                        {i < paper.authors.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </p>
                  <p style={{ fontSize: "0.9em", opacity: 0.8 }}>{paper.affiliation}</p>
                  <Card.Text style={{ textAlign: "justify" }}>{paper.summary}</Card.Text>
                  <div>
                    {paper.tags.map((t) => (
                      <Badge
                        key={t}
                        bg="secondary"
                        style={{ marginRight: "6px", marginBottom: "6px", fontWeight: 400 }}
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Publications;
