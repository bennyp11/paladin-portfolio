import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import "./SkillsSection.css";


function TeamBiosSection(props) {
  const items = [
    {
      avatar: "fa-brands fa-angular",
      name: "Front-End",
      role: "Angular, React, anything else",
    },
    {
      avatar: "fa-solid fa-file-code",
      name: "Web Fundamentals",
      role: "HTML, CSS, Javascript (all the good stuff)",
    },
    {
      avatar: "fa-solid fa-swatchbook",
      name: "Web Design Patterns",
      role: "Responsive, Progressive Web Apps, Aesthetic Color / Spacing, Accessibility",
    },
    {
      avatar: "fa-solid fa-stapler",
      name: "Browser Data Cacheing",
      role: "Cookies, Local Storage, Session Storage",
    },
    {
      avatar: "fa-brands fa-node",
      name: "Back-End",
      role: "NodeJS, Java, a little Python",
    },
    {
      avatar: "fa-solid fa-door-open",
      name: "API Development",
      role: "REST, CRUD, in Express and Java Servlets",
    },
    {
      avatar: "fa-solid fa-file-shield",
      name: "Security",
      role: "Auth0, Session Security, JSON Web Tokens, Encryption, Parameterized Queries",
    },
    {
      avatar: "fa-solid fa-box-open",
      name: "Data Storage",
      role: "S3, Redis, MySQL, Postgres, Oracle, MongoDB",
    },
    {
      avatar: "fa-solid fa-scroll",
      name: "Database",
      role: "SQL & NoSQL",
    },
    {
      avatar: "fa-solid fa-table",
      name: "Schema Design",
      role: "Using primary keys, foreign keys, and indexes",
    },
    {
      avatar: "fa-solid fa-handshake",
      name: "Data Integration",
      role: "Using Cloud tools to integrate data from multiple sources",
    },
    {
      avatar: "fa-solid fa-warehouse",
      name: "Data Warehousing",
      role: "Setting data models for analytical analysis",
    },
    {
      avatar: "fa-brands fa-aws",
      name: "Infrastructure",
      role: "Deploying to AWS, GCP, or Oracle Cloud",
    },
    {
      avatar: "fa-solid fa-server",
      name: "Web Servers",
      role: "NGINX & Tomcat",
    },
    {
      avatar: "fa-solid fa-cloud-arrow-up",
      name: "CI/CD",
      role: "Vercel & Netlify",
    },
    {
      avatar: "fa-solid fa-globe",
      name: "DevOps Tools",
      role: "Git, Kubernetes, Docker, DeepSource",
    },
  ];

  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container id="skills">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={1}
          spaced={true}
          className="text-center"
        />
        <Row className="justify-content-center">
          {items.map((item, index) => (
            <Col
              xs={12}
              md={4}
              lg={3}
              className="py-3 d-flex align-items-stretch text-center"
              key={index}
            >
              <Card id="card-id" className="card-container">
                <Card.Body className="p-3">
                  <i class={item.avatar} alt={item.name} style={{color: "#669bbc", fontSize: "8rem", maxHeight: "128px"}}/>
                  <div className="mt-3">
                    <h5 className="font-weight-bold mb-0" style={{color: "#fdf0d5"}}>{item.name}</h5>
                    <br/>
                    <p style={{color: "#fdf0d5"}}>{item.role}</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  );
}

export default TeamBiosSection;
