/**
 * External dependencies.
 */
import React from "react";

/**
 * Internal dependencies.
 */
import Layout from "../layouts/Layout";
import LifeHistory from "../../components/modules/about/LifeHistory";

const AboutPageContainer = () => {
    return (
        <Layout slug='about'>
            <LifeHistory/>
        </Layout>
    );
};

export default AboutPageContainer;
