import React from "react";
import ActivityTypeList from "../../components/modules/extra-activity/ActivityTypeList";

const ExtraActivityPageContainer = () => {
  return (
    <div className="container">
      <section className="page-section" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Skills</h2>
            <h3 className="section-subheading text-muted">
              All of my skills and extra activities
            </h3>
          </div>
          <ActivityTypeList />
        </div>
      </section>
    </div>
  );
};

export default ExtraActivityPageContainer;
