import React from "react";
import CVDetails from "../../components/modules/cv/CVDetails";

const CVPageContainer = () => {
  return (
    <>
      <div className="container">
        <section className="page-section" id="portfolio">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">
                Curriculum Vitae
              </h2>
              <h3 className="section-subheading text-muted">
                My Curriculum Vitae
              </h3>
            </div>
            <CVDetails />
          </div>
        </section>
      </div>
    </>
  );
};

export default CVPageContainer;
