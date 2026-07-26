/**
 * External dependencies
 */
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import SlideshowIcon from "@material-ui/icons/Slideshow";

/**
 * Internal dependencies.
 */
import HTMLParser from "../../../components/partials/html-parser/HTMLParser";
import SocialLink from "../../modules/about/social-links/SocialLink";
import SkillSet from "../../modules/portfolio/skills/SkillSet";

const HomePageHeader = (props) => {
  const about = useSelector((state) => state.AboutReducer.about);

  return (
    <>
      <header className="masthead">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <img src={about.profile_image} alt="" className="img" />
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="masthead-subheading">
                {about.short_description}
                <div className="about-description">
                  <HTMLParser data={about.description} />
                </div>
              </div>

              {about.is_welcome_enable && (
                <div className="masthead-heading text-uppercase">
                  <HTMLParser data={about.welcome_message} />
                </div>
              )}

              <SocialLink data={about} />

              <div className="mt-2">
                <Link
                  className="btn btn-outline-primary btn-xl text-uppercase js-scroll-trigger"
                  to="/about"
                >
                  About Me <ArrowForwardIcon />
                </Link>
              </div>
              <div className="mt-2">
                <Link
                  className="btn btn-outline-info btn-xl text-uppercase js-scroll-trigger"
                  to="/portfolio"
                >
                  View Portfolios <SlideshowIcon />
                </Link>
              </div>
            </div>

            <div className="col-md-2">
              <SkillSet />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HomePageHeader;
