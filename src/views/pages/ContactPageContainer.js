/**
 * External dependencies.
 */
import React from "react";

/**
 * Internal dependencies.
 */
import Layout from "../layouts/Layout";
import Contact from "../../components/modules/contact/Contact";

const ContactPageContainer = () => {
    return (
        <Layout slug='contact'>
            <div className="text-center">
                <h2 className="section-heading text-uppercase">Contact Me</h2>
                <h3 className="section-subheading text-muted">
                    Any query about me, please contact me...
                </h3>
                <Contact/>
            </div>
        </Layout>
    );
};

export default ContactPageContainer;
