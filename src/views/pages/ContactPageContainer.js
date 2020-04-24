import React from "react";
import Contact from "../../components/modules/contact/Contact";

const ContactPageContainer = () => {
  return (
    <section className="page-section" id="contact">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Contact Me</h2>
          <h3 className="section-subheading text-muted">
            Any query about me, please write your message and I'll open it when
            I'll be free...
          </h3>
          <Contact />
        </div>
      </div>
    </section>
  );
};

export default ContactPageContainer;
