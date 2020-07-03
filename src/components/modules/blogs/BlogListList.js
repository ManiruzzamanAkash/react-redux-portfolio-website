import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import Loader from "react-loader-spinner";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import YouTubeIcon from "@material-ui/icons/YouTube";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./blog.css";

import { getBlogAction } from "../../../store/actions/blogs/BlogAction";

const BlogList = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogAction());
  }, [dispatch]);

  const blogs = useSelector((state) => state.BlogReducer.blogList);
  const isLoading = useSelector((state) => state.BlogReducer.isLoading);

  return (
    <>
      <div className="row">
        {blogs.map((item, index) => (
          <div key={index} className="col-lg-6">
            <article className="blog-single-short p-2">
              <div className="text-center">
                <a href={item.link}>
                  <img
                    src={item.image}
                    className="img-responsive"
                    alt={item.title}
                  />
                </a>
              </div>
              <div className="short-details">
                <h3>
                  <a href={item.link}>{item.title}</a>
                </h3>
                <div>
                  <p>{item.short_description.substring(0, 100)}...</p>
                </div>
                <div>
                  {item.link_type === "youtube" && (
                    <Button
                      variant="danger"
                      className="mr-2"
                      title="It's an Youtube Vide"
                    >
                      <YouTubeIcon />
                    </Button>
                  )}
                  {item.link_type === "github" && (
                    <Button
                      variant="light"
                      className="mr-2"
                      title="It's an Github's Profile"
                    >
                      <GitHubIcon />
                    </Button>
                  )}
                  <a
                    href={item.link}
                    target={item.is_external_link ? "_blank" : ""}
                    className="btn btn-outline-info  text-uppercase"
                  >
                    View <ArrowForwardIcon />
                  </a>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>

      <div className="text-center mt-2">
        <Loader
          type="TailSpin"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={10000}
          visible={isLoading}
        />
      </div>

      {blogs.length === 0 && !isLoading && (
        <div className="alert alert-info p-3 mt-4 text-center">
          <strong>No Blog found in this section !!</strong>
        </div>
      )}
    </>
  );
};

export default BlogList;
