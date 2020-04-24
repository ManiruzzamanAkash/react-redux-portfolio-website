import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import { getAboutAction } from "../../store/actions/lifeStories/AboutAction";

const Navigationbar = props => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAboutAction());
  }, [dispatch]);

  const about = useSelector(state => state.AboutReducer.about);
  const currentPath = props.history.location.pathname;

  const navLinkCSS = path => {
    let navCSS = "nav-item nav-link";
    if (currentPath === path) {
      navCSS += " active";
    }
    return navCSS;
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{about.name}</title>
        <link rel="canonical" href="/" />
        <link rel="shortcut icon" href={about.favicon} type="image/x-icon" />
      </Helmet>

      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className="navbar-expand-lg navbar-dark"
        id="mainNav"
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            {about.name}
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <li className="nav-item">
                <Link to="/portfolio" className={navLinkCSS("/portfolio")}>
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className={navLinkCSS("/about")}>
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className={navLinkCSS("/contact")}>
                  Contact
                </Link>
              </li>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default withRouter(Navigationbar);
