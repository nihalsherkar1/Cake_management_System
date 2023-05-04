import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";

const AfterLoginNavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
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

          {/* <button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            className="btn btn-primary btn-sm"
          >
            Dashboard
          </button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu> */}

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
              {/* <li
                className="nav-item"
                style={{ fontSize: "18px", marginRight: "15px" }}
              >
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/login"
                >
                  Login
                </Link>
              </li> */}
              {/* <li
                className="nav-item"
                style={{ fontSize: "18px", marginRight: "15px" }}
              >
                <Link className="nav-link" aria-current="page" to="/register">
                  <button className="btn btn-info pb-1.5 btn-sm  ">
                    Registration
                  </button>
                </Link>
              </li> */}

              <Badge
                badgeContent={0}
                color="primary"
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <i
                  className="fa-sharp fa-solid fa-cart-shopping pb-1.5 navbar-brand "
                  style={{ fontSize: "25px", cursor: "pointer" }}
                ></i>
              </Badge>
            </ul>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <div
                className="card_details d-flex justify-content-center align-items-center"
                style={{ width: "24rem", padding: 10, position: "relative" }}
              >
                <i
                  className="fas fa-close smallclose"
                  onClick={handleClose}
                  style={{
                    position: "absolute",
                    top: 2,
                    right: 20,
                    fontSize: 23,
                    cursor: "pointer",
                  }}
                ></i>
                <p style={{ fontSize: 22 }}>Your carts is empty</p>
                <img
                  src="./cart.gif"
                  alt=""
                  className="emptycart_img"
                  style={{ width: "5rem", padding: 10 }}
                />
              </div>
            </Menu>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AfterLoginNavBar;
