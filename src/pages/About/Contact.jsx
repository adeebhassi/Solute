import React from "react";
import Breadcrumb from "../../components/Shared-Components/Breadcrumb";
import ContactArea from "../../components/About/Contact/ContactArea";
import AddressArea from "../../components/About/Contact/AddressArea";
import FooterArea from "../../components/Shared-Components/FooterArea";
function Contact() {
  const breadcrumbLinks = [{ label: "Home", path: "/" }, { label: "Contact" }];

  return (
    <>
      <Breadcrumb title="Contact" links={breadcrumbLinks} />
      <ContactArea />
      <AddressArea />
    </>
  );
}

export default Contact;
