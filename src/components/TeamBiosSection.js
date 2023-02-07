import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Avatar from "./Avatar";

function TeamBiosSection(props) {
  const items = [
    {
      avatar: "https://uploads.divjoy.com/pravatar-150x-35.jpeg",
      name: "Front-End Development",
      role: "Angular, React, anything else",
    },
    {
      avatar: "https://i.pravatar.cc/150?img=5",
      name: "Web Fundamentals",
      role: "HTML, CSS, Javascript (all the good stuff)",
    },
    {
      avatar: "https://uploads.divjoy.com/pravatar-150x-16.jpeg",
      name: "Web Design Patterns",
      role: "Responsive, Progressive Web Apps, Aesthetic Color / Spacing, Accessibility",
    },
    {
      avatar: "https://i.pravatar.cc/150?img=7",
      name: "Browser Data Cacheing",
      role: "Cookies, Local Storage, Session Storage",
    },
    {
      avatar: "https://i.pravatar.cc/150?img=8",
      name: "Back-End Development",
      role: "NodeJS, Java, a little Python",
    },
    {
      avatar: "https://uploads.divjoy.com/pravatar-150x-68.jpeg",
      name: "API Development",
      role: "REST, CRUD, in Express and Java Servlets",
    },
    {
      avatar: "https://i.pravatar.cc/150?img=10",
      name: "Security",
      role: "Auth0, Session Security, JSON Web Tokens, Encryption, Parameterized Queries",
    },
    {
      avatar: "https://i.pravatar.cc/150?img=6",
      name: "Data Storage",
      role: "S3, Redis, MySQL, Postgres, Oracle, MongoDB",
    },
    {
      avatar: "https://i.pravatar.cc/150?img=8",
      name: "Database Development",
      role: "SQL & NoSQL",
    },
    {
      avatar: "https://i.pravatar.cc/150?img=10",
      name: "Schema Design",
      role: "Using primary keys, foreign keys, and indexes",
    },
    {
      avatar: "https://uploads.divjoy.com/pravatar-150x-68.jpeg",
      name: "Data Integration",
      role: "Using Cloud tools to integrate data from multiple sources",
    },
    {
      avatar: "https://i.pravatar.cc/150?img=6",
      name: "Data Warehousing",
      role: "Setting data models for analytical analysis",
    },
    {
      avatar: "https://i.pravatar.cc/150?img=8",
      name: "Infrastructure Development",
      role: "Deploying to AWS, GCP, or Oracle Cloud",
    },
    {
      avatar: "https://i.pravatar.cc/150?img=10",
      name: "Web Servers",
      role: "NGINX, Tomcat",
    },
    {
      avatar: "https://uploads.divjoy.com/pravatar-150x-68.jpeg",
      name: "Scaling",
      role: "Scaling Virtual Machines, S3",
    },
    {
      avatar: "https://i.pravatar.cc/150?img=6",
      name: "Networking",
      role: "DNS & Network Firewalling",
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
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
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
              <Card className="d-flex flex-grow-1 flex-column text-center align-items-center border-0">
                <Card.Body className="p-2">
                  <Avatar src={item.avatar} alt={item.name} size="128px" />
                  <div className="mt-4">
                    <h6 className="font-weight-bold mb-0">{item.name}</h6>
                    <small>{item.role}</small>
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
