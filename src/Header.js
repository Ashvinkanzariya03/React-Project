import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header className="header_area sticky-header">
        <div className="main_menu">
          <nav className="navbar navbar-expand-lg navbar-light main_box">
            <div className="container">
              {/* Brand and toggle get grouped for better mobile display */}
              <a className="navbar-brand logo_h" href="index.html">
                <img src="img/logo.png"  />
                
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              {/* Collect the nav links, forms, and other content for toggling */}
              <div
                className="collapse navbar-collapse offset"
                id="navbarSupportedContent"
              >
                <ul className="nav navbar-nav menu_nav ml-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item submenu dropdown">
                    <a
                      href="#"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Shop
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link className="nav-link" to="/shopcategory">
                          Shop Category
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="productdetails">
                          Product Details
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="Checkout">
                          Product Checkout
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="Cart">
                          Shopping Cart
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="Confirmation">
                          Confirmation
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item submenu dropdown">
                    <a
                      href="#"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Blog
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link className="nav-link" to="Blog">
                          Blog
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="BlogDetails">
                          Blog Details
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item submenu dropdown">
                    <a
                      href="#"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Pages
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link className="nav-link" to="Tracking">
                          Tracking
                        </Link>
                      </li>
                      {/* --------------------------------------------------------------------------------------------------- */}
                    </ul>
                    <ul></ul>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="Contect">
                      Contact
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="Login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/register"}>
                      Register
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/adminlogin">
                      Admin
                    </Link>
                  </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  {/* <li className="nav-item">
                    <Link to="/adminlogin" className="cart">
                      <span className="ti-bag" />
                    </Link>
                  </li> */}
                  {/* <li className="nav-item">
                    <button className="search">
                      <span className="lnr lnr-magnifier" id="search" />
                    </button>
                  </li> */}
                </ul>
              </div>
            </div>
          </nav>
        </div>
        {/* <div className="search_input" id="search_input_box">
          <div className="container">
            <form className="d-flex justify-content-between">
              <input
                type="text"
                className="form-control"
                id="search_input"
                placeholder="Search Here"
              />
              <button type="submit" className="btn" />
              <span
                className="lnr lnr-cross"
                id="close_search"
                title="Close Search"
              />
            </form>
          </div>
        </div> */}
      </header>
    </div>
  );
}

export default Header;
