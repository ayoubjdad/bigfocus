import React from "react";
import PageTitle from "../components/PageTitle/PageTitle";
import ContactForm from "../components/ContactForm/ContactForm";

export default function Contact() {
  return (
    <div>
      <PageTitle title="Contactez-nous" />
      <ContactForm />
    </div>
  );
}
