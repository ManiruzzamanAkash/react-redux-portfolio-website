import React from "react";
import PortfolioList from "../../components/modules/portfolio/PortfolioList";

const PortfolioPageContainer = () => {
  return (
    <div className="container">
      <section className="page-section" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Portfolio</h2>
            <h3 className="section-subheading text-muted">
              My All portfolios in my shortest life...
            </h3>
          </div>
          <PortfolioList />
        </div>
      </section>
    </div>
  );
};

export default PortfolioPageContainer;
