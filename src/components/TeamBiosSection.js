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
      avatar: "https://bennyp-bucket.s3.us-west-1.amazonaws.com/svgs/brands/angular.svg",
      name: "Front-End Development",
      role: "Angular, React, anything else",
    },
    {
      avatar: "https://bennyp-bucket.s3.us-west-1.amazonaws.com/svgs/solid/computer.svg",
      name: "Web Fundamentals",
      role: "HTML, CSS, Javascript (all the good stuff)",
    },
    {
      avatar: "https://bennyp-bucket.s3.us-west-1.amazonaws.com/svgs/solid/palette.svg",
      name: "Web Design Patterns",
      role: "Responsive, Progressive Web Apps, Aesthetic Color / Spacing, Accessibility",
    },
    {
      avatar: "https://bennyp-bucket.s3.us-west-1.amazonaws.com/svgs/solid/stapler.svg",
      name: "Browser Data Cacheing",
      role: "Cookies, Local Storage, Session Storage",
    },
    {
      avatar: "https://bennyp-bucket.s3.us-west-1.amazonaws.com/svgs/brands/node-js.svg",
      name: "Back-End Development",
      role: "NodeJS, Java, a little Python",
    },
    {
      avatar: "https://bennyp-bucket.s3.us-west-1.amazonaws.com/svgs/solid/code.svg",
      name: "API Development",
      role: "REST, CRUD, in Express and Java Servlets",
    },
    {
      avatar: "https://bennyp-bucket.s3.us-west-1.amazonaws.com/svgs/solid/handcuffs.svg",
      name: "Security",
      role: "Auth0, Session Security, JSON Web Tokens, Encryption, Parameterized Queries",
    },
    {
      avatar: "https://bennyp-bucket.s3.us-west-1.amazonaws.com/svgs/solid/database.svg",
      name: "Data Storage",
      role: "S3, Redis, MySQL, Postgres, Oracle, MongoDB",
    },
    {
      avatar: "https://bennyp-bucket.s3.us-west-1.amazonaws.com/svgs/solid/cloud.svg",
      name: "Database Development",
      role: "SQL & NoSQL",
    },
    {
      avatar: "https://bennyp-bucket.s3.us-west-1.amazonaws.com/svgs/solid/diagram-project.svg",
      name: "Schema Design",
      role: "Using primary keys, foreign keys, and indexes",
    },
    {
      avatar: "https://bennyp-bucket.s3.us-west-1.amazonaws.com/svgs/solid/handshake.svg",
      name: "Data Integration",
      role: "Using Cloud tools to integrate data from multiple sources",
    },
    {
      avatar: "https://bennyp-bucket.s3.us-west-1.amazonaws.com/svgs/solid/house.svg",
      name: "Data Warehousing",
      role: "Setting data models for analytical analysis",
    },
    {
      avatar: "https://bennyp-bucket.s3.us-west-1.amazonaws.com/svgs/brands/aws.svg",
      name: "Infrastructure Development",
      role: "Deploying to AWS, GCP, or Oracle Cloud",
    },
    {
      avatar: "https://bennyp-bucket.s3.us-west-1.amazonaws.com/svgs/solid/server.svg",
      name: "Web Servers",
      role: "NGINX, Tomcat",
    },
    {
      avatar: "https://bennyp-bucket.s3.us-west-1.amazonaws.com/svgs/solid/arrow-up-from-ground-water.svg",
      name: "Scaling",
      role: "Scaling Virtual Machines, S3",
    },
    {
      avatar: "https://bennyp-bucket.s3.us-west-1.amazonaws.com/svgs/solid/globe.svg",
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
                  <Avatar src={item.avatar} alt={item.name} size="96px" />
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
