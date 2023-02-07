import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { LinkContainer } from "react-router-bootstrap";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import AspectRatio from "./AspectRatio";

function ContentCardsSection(props) {
  const items = [
    {
      image:
        "https://images.unsplash.com/photo-1565204310681-74dd89a559cb?auto=format&fit=crop&w=800&h=600&q=80",
      title: "Faucibus turpis in",
      body: "Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.",
      url: "/post/golden-gate",
    },
    {
      image:
        "https://images.unsplash.com/photo-1554366347-897a5113f6ab?auto=format&fit=crop&w=800&h=600&q=80",
      title: "Faucibus turpis in",
      body: "Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.",
      url: "/post/beach",
    },
    {
      image:
        "https://images.unsplash.com/photo-1610128114197-485d933885c5?auto=format&fit=crop&w=800&h=600&q=80",
      title: "Faucibus turpis in",
      body: "Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.",
      url: "/post/road",
    },
    {
      image:
        "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=800&h=600&q=80",
      title: "Faucibus turpis in",
      body: "Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.",
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
            <Col xs={12} md={6} lg={3} className="py-3" key={index}>
              <LinkContainer to={item.url}>
                <Card as="a" text="dark" className="text-decoration-none">
                  <AspectRatio ratio={1 / 0.75}>
                    <Card.Img src={item.image} alt={item.title} variant="top" />
                  </AspectRatio>
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
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
