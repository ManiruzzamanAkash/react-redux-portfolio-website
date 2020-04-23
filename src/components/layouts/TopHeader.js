import React from "react";
import { Link } from "react-router-dom";

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import SlideshowIcon from "@material-ui/icons/Slideshow";
import profileImage from "../../assets/img/about/profile-large.png";

const TopHeader = () => {
  return (
    <>
      <header className="masthead">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <img src={profileImage} alt="" className="img" />
            </div>
            <div className="col-md-8 col-sm-6">
              <div className="masthead-subheading">
                Hi, I'm Maniruzzaman Akash
              </div>
              <div className="masthead-heading text-uppercase">
                Welcome to my portfolio
              </div>
              <div>
                <Link
                  className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
                  to="/about"
                >
                  About Me <ArrowForwardIcon />
                </Link>
              </div>
              <div className="mt-2">
                <Link
                  className="btn btn-info btn-xl text-uppercase js-scroll-trigger"
                  to="/portfolio"
                >
                  View Portfolios <SlideshowIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default TopHeader;
