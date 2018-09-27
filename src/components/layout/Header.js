import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <nav className="navbar navbar-expand-sm  bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="text-light navbar-brand">
          <h1>{props.brandName}</h1>
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link text-light">
                home <i className="fas fa-home" />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link text-light">
                Contact
                <i className="fas fa-plus" />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link text-light">
                About
                <i className="fas fa-question" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  brandName: "This is my App in React"
};
Header.prototypes = {
  brandName: PropTypes.bool.isRequired
};

export default Header;
