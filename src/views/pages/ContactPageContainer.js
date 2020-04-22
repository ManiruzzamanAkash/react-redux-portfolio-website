import React from "react";

const ContactPageContainer = () => {
  return (
    <section className="page-section" id="contact">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Contact Me</h2>
          <h3 className="section-subheading text-muted">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
        </div>
        <form id="contactForm" name="sentMessage">
          <div className="row align-items-stretch mb-5">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  className="form-control"
                  id="name"
                  type="text"
                  placeholder="Your Name *"
                  required="required"
                  data-validation-required-message="Please enter your name."
                />
                <p className="help-block text-danger"></p>
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  id="email"
                  type="email"
                  placeholder="Your Email *"
                  required="required"
                  data-validation-required-message="Please enter your email address."
                />
                <p className="help-block text-danger"></p>
              </div>
              <div className="form-group mb-md-0">
                <input
                  className="form-control"
                  id="phone"
                  type="tel"
                  placeholder="Your Phone *"
                  required="required"
                  data-validation-required-message="Please enter your phone number."
                />
                <p className="help-block text-danger"></p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group form-group-textarea mb-md-0">
                <textarea
                  className="form-control"
                  id="message"
                  placeholder="Your Message *"
                  required="required"
                  data-validation-required-message="Please enter a message."
                ></textarea>
                <p className="help-block text-danger"></p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div id="success"></div>
            <button
              className="btn btn-primary btn-xl text-uppercase"
              id="sendMessageButton"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactPageContainer;
