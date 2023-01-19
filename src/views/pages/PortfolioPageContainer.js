/**
 * External dependencies.
 */
import React from "react";

/**
 * Internal dependencies.
 */
import PortfolioList from "../../components/modules/portfolio/PortfolioList";
import Layout from "../layouts/Layout";

const PortfolioPageContainer = () => {
    return (
        <Layout slug='portfolio'>
            <div className="text-center">
                <h2 className="section-heading text-uppercase">Portfolio</h2>
                <h3 className="section-subheading text-muted">
                    Some of my portfolios...
                </h3>
            </div>
            <PortfolioList/>
        </Layout>
    );
};

export default PortfolioPageContainer;
