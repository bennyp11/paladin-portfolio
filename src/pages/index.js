import React from "react";
import Meta from "./../components/Meta";
import HeroSection from "./../components/HeroSection";
import ClientsSection from "./../components/ClientsSection";
import FeaturesSection from "./../components/FeaturesSection";
import StatsSection from "./../components/StatsSection";
import TeamBiosSection from "./../components/TeamBiosSection";
import ContentCardsSection from "./../components/ContentCardsSection";
import TestimonialsSection from "./../components/TestimonialsSection";
import ContactSection from "./../components/ContactSection";
import NewsletterSection from "./../components/NewsletterSection";

function IndexPage(props) {
  return (
    <>
      <Meta />
      <HeroSection
        bg="light"
        textColor="dark"
        size="lg"
        bgImage=""
        bgImageOpacity={1}
        title="Hello! I'm Benny P 👋"
        subtitle="Software Engineer. Sales Engineer. Lover of Complexity."
        image="https://bennyp-bucket.s3.us-west-1.amazonaws.com/skyrim-ben-no-bg.png"
        buttonText="Get Started"
        buttonColor="primary"
        buttonPath="/pricing"
      />
      <ClientsSection
        bg="dark"
        textColor="light"
        title="My Story"
      />
      <FeaturesSection
        bg="light"
        textColor="dark"
        size="lg"
        bgImage=""
        bgImageOpacity={1}
        title="My Journey"
      />
      <TeamBiosSection
        bg="light"
        textColor="dark"
        size="lg"
        bgImage=""
        bgImageOpacity={1}
        title="My Skills"
        subtitle=""
      />
      <ContentCardsSection
        bg="light"
        textColor="dark"
        size="lg"
        bgImage=""
        bgImageOpacity={1}
        title="My Projects"
        subtitle=""
      />
      <ContactSection
        bg="light"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Contact Me"
        subtitle=""
        buttonText="Send message"
        buttonColor="primary"
        showNameField={true}
      />
    </>
  );
}

export default IndexPage;
