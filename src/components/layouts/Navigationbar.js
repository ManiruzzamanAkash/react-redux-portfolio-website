import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import { getAboutAction } from "../../store/actions/lifeStories/AboutAction";

const Navigationbar = (props) => {
  const dispatch = useDispatch();
  const [pageTitle, setPageTitle] = useState("");
  const currentPath = props.history.location.pathname;

  useEffect(() => {
    dispatch(getAboutAction());
    getCurrentPageTitle();
  }, [props, currentPath]);

  const about = useSelector((state) => state.AboutReducer.about);

  const navLinkCSS = (path) => {
    let navCSS = "nav-item nav-link";
    if (currentPath === path) {
      navCSS += " active";
    }
    return navCSS;
  };

  const getCurrentPageTitle = () => {
    let title = "";
    const { pathname } = props.history.location;

    switch (pathname) {
      case "/cv":
        title = "Curriculum Vitae";
        break;
      case "/portfolio":
        title = "My Portfolios";
        break;
      case "/about":
        title = "About Me";
        break;
      case "/extra-curricular":
        title = "Extra Curricular";
        break;
      case "/contact":
        title = "Contact Me";
        break;
    }
    if (pathname === "/") {
      setPageTitle("");
    } else {
      setPageTitle(title + " |");
    }
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`${pageTitle} ${about && about.name && about.name}`}</title>
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
                <Link
                  to="/extra-curricular"
                  className={navLinkCSS("/extra-curricular")}
                >
                  Extra Curricular
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cv" className={navLinkCSS("/cv")}>
                  CV
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
