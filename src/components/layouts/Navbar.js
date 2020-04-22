import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark" id="mainNav">
        <div className="container">
          <Link className="navbar-brand js-scroll-trigger" to="/">
            <span className="app-title1"> Maniruzzaman </span>
            <span className="app-title2"> Akash </span>
          </Link>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu<i className="fas fa-bars ml-1"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ml-auto">
              <li className="nav-item">
                <Link
                  to="/portfolio"
                  className="nav-item nav-link js-scroll-trigger"
                >
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-item nav-link js-scroll-trigger"
                >
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className="nav-item nav-link js-scroll-trigger"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
