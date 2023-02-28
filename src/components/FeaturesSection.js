import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import "./FeaturesSection.scss";

function FeaturesSection(props) {
  const items = [
    {
      title: "Prompt Engineer @ CheckCode.ai",
      time: "Dec. 2022 - Present",
      description:
        "Building an automated code review and enhancement system for software engineers.",
        image: "https://bennyp-bucket.s3.us-west-1.amazonaws.com/1.svg",
    },
    {
      title: "Software Engineer @ Fintactix",
      time: "Oct. 2022 - Present",
      description:
        "Style, usability, and security upgrades for financial calculators deployed across +120 banks & credit unions.",
        image: "https://bennyp-bucket.s3.us-west-1.amazonaws.com/2.svg",
    },
    {
      title: "Software Development @ Caltech",
      time: "Oct. 2022 - Present",
      description:
        "Fully embracing my inner geek, git-ing fully committed to writing software in TypeScript, Java, with modern tooling.",
        image: "https://bennyp-bucket.s3.us-west-1.amazonaws.com/3.svg",
    },
    {
      title: "Founder @ Phishy Inc",
      time: "Jun. 2022 - Sept. 2022",
      description:
        "Built a phishing system for SMS, Email, and Voice calls to compete with KnowBe4.com or Cloudflare Area 1. Now defunct due to FCC regulations.",
        image: "https://bennyp-bucket.s3.us-west-1.amazonaws.com/4.svg",
    },
    {
      title: "Sales Engineer @ Oracle Cloud",
      time: "Jul. 2020 - Nov. 2021",
      description:
        "Architected and deployed cloud infrastructure for SMBs and Fortune 500 companies. Wrote JIRA user stories for 5 production features. Supported +30 live cloud labs.",
        image: "https://bennyp-bucket.s3.us-west-1.amazonaws.com/5.svg",
    },
    {
      title: "Account Executive @ Oracle Cloud",
      time: "Jul. 2018 - Jul. 2020",
      description:
        "From cold calling to customer support, I succeeded in selling +$1M in cloud infrastructure. Evangelized a cloud certification program for 1000s of new hires.",
        image: "https://bennyp-bucket.s3.us-west-1.amazonaws.com/5.svg",
    },
    {
      title: "Co-Founder @ UConsulting",
      time: "Jul. 2016 - Jun. 2018",
      description:
        "After getting rejected from UCLA's top consulting club, a few friends and I created a new one. We grew to 50+ members and 30+ clients. Today it is recognized as UCLA's top consulting club.",
        image: "https://bennyp-bucket.s3.us-west-1.amazonaws.com/6.svg",
    },
    {
      title: "Business-Economics @ UCLA",
      time: "Aug. 2014 - Jun. 2018",
      description:
        "I explored across many subjects, including C++, Linear Algebra, Record Production, and my personal favorite: Gospel Choir.",
        image: "https://bennyp-bucket.s3.us-west-1.amazonaws.com/7.svg",
    },
    {
      title: "Cashier @ TJ Maxx",
      time: "Apr. 2011 - Aug. 2014",
      description:
        "I was a true Maxxinisto, getting discounts on discounted items. To pass the time, I would get extremely excited everytime a customer bought jams and jellies.",
      image: "https://bennyp-bucket.s3.us-west-1.amazonaws.com/8.svg",
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
          subtitle2={props.subtitle2}
          subtitle3={props.subtitle3}
          subtitle4={props.subtitle4}
          size={1}
          spaced={true}
          className="text-center"
        />
        <div id="about" className="FeaturesSection__features">
          {items.map((item, index) => (
            <Row className="align-items-center" key={index}>
              <Col xs={12} lg={6}>
                <SectionHeader
                  title={item.title}
                  subtitle={item.time}
                  subtitle2={item.description}
                  spaced={true}
                  size={3}
                  className="text-center text-lg-left"
                />
              </Col>
              <Col>
                <figure className="FeaturesSection__image-container">
                  <Image src={item.image} alt={item.title} fluid={true} />
                </figure>
              </Col>
            </Row>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default FeaturesSection;
