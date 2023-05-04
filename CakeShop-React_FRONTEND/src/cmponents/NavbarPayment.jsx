import React from "react";
import { Link } from "react-router-dom";
// import Home from "./Home";
// import customercomplaint from "./customercomplaint";

class NavbarPayment extends React.Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light "
        style={{ backgroundColor: "transperant" }}
      >
        <div className="container-fluid shadow py-2 mx-1">
          <Link className="navbar-brand " to="/" style={{ fontSize: "26px" }}>
            Cake 🧁 Restaurant
          </Link>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav navbar-nav ml-auto">
              <li
                className="nav-item"
                style={{ fontSize: "18px", marginRight: "15px" }}
              >
                <Link className="nav-link active" aria-current="page" to="/ ">
                  Home
                </Link>
              </li>
              <li
                className="nav-item"
                style={{ fontSize: "18px", marginRight: "15px" }}
              >
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/customercomplaint"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavbarPayment;
