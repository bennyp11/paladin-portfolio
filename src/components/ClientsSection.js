import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

function ClientsSection(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container className="text-center">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={1}
          spaced={true}
        />
        <Row className="justify-content-center">
          <h3>🌞 From SoCal's sunny skies, bagging at TJ Maxx, 🛍️</h3>
        </Row>
        <Row className="justify-content-center">
          <h3>🐻 to UCLA study wise, learning business impacts. 👔</h3>
        </Row>
        <Row className="justify-content-center">
          <h3>☁️ From +$1m in cloud selling, to Caltech for coding. 👨‍💻</h3>
        </Row>
        <Row className="justify-content-center">
          <h3>🤖 Now I write AI apps. (I hope this page is loading!) 🙏🏻</h3>
        </Row>
      </Container>
    </Section>
  );
}

export default ClientsSection;
