import React from "react";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <>
      <nav
        className="
        navbar navbar-expand-lg navbar-light
        bg-white
        shadow
        p-3
        mb-5
        sticky-top
      "
      >
        <Link className="navbar-brand" to="/">
          <img
            src="https://www.etraveli.com/wp-content/uploads/2017/05/logo-mytrip.png"
            alt="logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link text-primary" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-primary" to="/contactus">
                Contact us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-primary" to="/package">
                Trip Package
              </Link>
            </li>
          </ul>
        </div>
        <ul className="navbar-nav mr-4">
          <li className="nav-item">
            <Link className="nav-link text-primary" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-link text-primary">
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default HeaderComponent;
