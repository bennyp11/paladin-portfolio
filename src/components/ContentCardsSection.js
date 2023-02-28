import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { LinkContainer } from "react-router-bootstrap";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import AspectRatio from "./AspectRatio";
import "./ContentCardsSection.css";

function ContentCardsSection(props) {
  const items = [
    {
      image:
        "https://images.unsplash.com/photo-1599272771314-f3ec16bda3f2?auto=format&fit=crop&w=800&h=600&q=80",
      title: "CheckCode.ai",
      body: "CheckCode.ai is a analytical, opinionated, and generative AI code reviewer.",
      url: "/post/golden-gate",
    },
    {
      image:
        "https://images.unsplash.com/photo-1531959870249-9f9b729efcf4?auto=format&fit=crop&w=800&h=600&q=80",
      title: "Phishy",
      body: "SMS/Email phishing as a service.",
      url: "/post/beach",
    },
    {
      image:
        "https://images.unsplash.com/photo-1509479200622-4503f27f12ef?auto=format&fit=crop&w=800&h=600&q=80",
      title: "Hacker Tracker",
      body: "Website crawler that programatically puts all <a> tag hrefs into a series of disk storage JSON objects that are uploaded to S3.",
      url: "/post/road",
    },
    {
      image:
        "https://images.unsplash.com/photo-1619616294321-e33bccb598bb?auto=format&fit=crop&w=800&h=600&q=80",
      title: "BugSite",
      body: "Site for user bug reporting. Learn when and where there are issues in your software, from your clients.",
      url: "/post/ballons",
    },
    {
      image:
        "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&w=800&h=600&q=80",
      title: "AI Text Rater",
      body: "Widget that rates the age appropriateness for text using the OpenAI API.",
      url: "/post/ballons",
    },
    {
      image:
        "https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=800&h=600&q=80",
      title: "Schedule Me",
      body: "Full Stack Angular/Javascript/MySQL Scheduling Software.",
      url: "/post/ballons",
    },
    {
      image:
        "https://images.unsplash.com/photo-1625190643120-2891798f0e8c?auto=format&fit=crop&w=800&h=600&q=80",
      title: "Yoga Class Booking",
      body: "Full Stack Java/MySQL software for tracking your yoga classes, as a yoga instructor.",
      url: "/post/ballons",
    },
    {
      image:
        "https://images.unsplash.com/photo-1560910615-9eaa2e704e63?auto=format&fit=crop&w=800&h=600&q=80",
      title: "Cookie Time",
      body: "Displaying use of cookie-based authorization for Angular Apps.",
      url: "/post/ballons",
    },
    {
      image:
        "https://images.unsplash.com/photo-1590845947667-381579052389?auto=format&fit=crop&w=800&h=600&q=80",
      title: "SmartBrain",
      body: "Full stack React/Javascript/Postgres app with self-hosted login and registration.",
      url: "/post/ballons",
    },
    {
      image:
        "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?auto=format&fit=crop&w=800&h=600&q=80",
      title: "Sendmo/Requestmo",
      body: "Simple QR web app that auto-populates a predetermined Venmo address and amount.",
      url: "/post/ballons",
    },
    {
      image:
        "https://images.unsplash.com/photo-1457144759132-40d119c2f120?auto=format&fit=crop&w=800&h=600&q=80",
      title: "Robofriends",
      body: "Example of Progressive Web App design.",
      url: "/post/ballons",
    },
    {
      image:
        "https://images.unsplash.com/photo-1483794344563-d27a8d18014e?auto=format&fit=crop&w=800&h=600&q=80",
      title: "AI Generated Blog",
      body: "React blog site with AI generated technical content.",
      url: "/post/ballons",
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
      <Container id="projects">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={1}
          spaced={true}
          className="text-center"
        />
        <Row className="justify-content-center">
          {items.map((item, index) => (
            <Col xs={12} md={6} lg={3} className="py-3" key={index}>
              <LinkContainer to={item.url}>
                <Card as="a" id="card-container" text="light" className="text-decoration-none">
                  <AspectRatio ratio={1 / 0.75}>
                    <Card.Img src={item.image} alt={item.title} variant="top" />
                  </AspectRatio>
                  <Card.Body>
                    <Card.Title className="project-title">{item.title}</Card.Title>
                    <Card.Text>{item.body}</Card.Text>
                  </Card.Body>
                </Card>
              </LinkContainer>
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  );
}

export default ContentCardsSection;
