import React from "react";
import Meta from "./../components/Meta";
import PricingSection from "./../components/PricingSection";
import ContactSection from "./../components/ContactSection";

function ContractMePage(props) {
  return (
    <>
      <Meta title="Contract Me" />
      <PricingSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Pricing"
        subtitle="Choose the plan that makes sense for you. All plans include a 14-day free trial."
      />
      <ContactSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Contact Us"
        subtitle=""
        buttonText="Send message"
        buttonColor="primary"
        showNameField={true}
      />
    </>
  );
}

export default ContractMePage;
