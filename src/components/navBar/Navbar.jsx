import { Outlet, NavLink } from "react-router-dom";
import "./navBar.css";

import React from "react";

const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "var(--blue)" : "white",
    };
  };

  return (
    <>
      <div className="navContainer ">
        <nav
          className=" navbar-expand-lg navbar navbar-dark"
          style={{ width: "100vw", background: "black" }}
        >
          <div className="container ">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <NavLink
                  to="/"
                  className="nav-link active"
                  style={navLinkStyles}
                >
                  Home
                </NavLink>
                <li className="nav-item">
                  <NavLink
                    to="/about"
                    className="nav-link  active"
                    style={navLinkStyles}
                  >
                    About me
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/projects"
                    className="nav-link  active"
                    style={navLinkStyles}
                  >
                    Projects
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/contact"
                    className="nav-link  active"
                    style={navLinkStyles}
                  >
                    Contact
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/resume"
                    className="nav-link  active"
                    style={navLinkStyles}
                  >
                    Resume
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <Outlet />
    </>
  );
};

export default Navbar;
