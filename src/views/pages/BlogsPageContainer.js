import React from "react";
import BlogList from "../../components/modules/blogs/BlogListList";

const BlogsPageContainer = () => {
  return (
    <div className="container">
      <section className="page-section" id="portfolio">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Blogs</h2>
          <h3 className="section-subheading text-muted">
            I love to write to share my knowledges and get from you something
            also...
          </h3>
        </div>
        <BlogList />
      </section>
    </div>
  );
};

export default BlogsPageContainer;
