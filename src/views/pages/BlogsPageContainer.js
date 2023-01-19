/**
 * External dependencies.
 */
import React from "react";

/**
 * Internal dependencies.
 */
import Layout from "../layouts/Layout";
import BlogList from "../../components/modules/blogs/BlogListList";

const BlogsPageContainer = () => {
    return (
        <Layout slug='blogs'>
            <div className="text-center">
                <h2 className="section-heading text-uppercase">Blogs</h2>
                <h3 className="section-subheading text-muted">
                    I love to write to share my knowledge's and get from you something also...
                </h3>
            </div>
            <BlogList/>
        </Layout>
    );
};

export default BlogsPageContainer;
