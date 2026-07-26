/**
 * External dependencies.
 */
import React from "react";

/**
 * Internal dependencies.
 */
import Layout from "../layouts/Layout";
import CVDetails from "../../components/modules/cv/CVDetails";

const CVPageContainer = () => {
    return (
        <Layout slug='cv'>
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">
                        Curriculum Vitae
                    </h2>
                    <h3 className="section-subheading text-muted">
                        My Curriculum Vitae
                    </h3>
                </div>
                <CVDetails/>
            </div>
        </Layout>
    );
};

export default CVPageContainer;
