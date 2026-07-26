/**
 * External dependencies.
 */
import React from "react";

/**
 * Internal dependencies.
 */
import Layout from "../layouts/Layout";
import ActivityTypeList from "../../components/modules/extra-activity/ActivityTypeList";

const ExtraActivityPageContainer = () => {
    return (
        <Layout slug='skills'>
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Skills</h2>
                    <h3 className="section-subheading text-muted">
                        All of my skills and extra activities
                    </h3>
                </div>
                <ActivityTypeList/>
            </div>
        </Layout>
    );
};

export default ExtraActivityPageContainer;
