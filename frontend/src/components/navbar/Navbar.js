import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const handleClick = () => {};
  const transForm = 0;
  return (
    <div className="header fixed-top">
      <div className="menu-bar">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a href="/" className="navbar-brand">
            <h1 onClick={() => window.scrollTo({ top: 0 })}>Hey-Doc :)</h1>
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="hamburger-menu" onClick={handleClick}>
              <i className={/*clicked ? "fa fa-times" :*/ "fa fa-bars"}></i>
            </div>
          </button>

          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav menu ml-auto">
              <NavLink
                exact
                to="/create_appointments"
                class="main-nav"
                activeStyle={{
                  fontWeight: "bold",
                  color: "white",
                }}
                onClick={() => window.scrollTo({ top: 0 })}
              >
                Appointment
              </NavLink>
              <NavLink
                exact
                to="/find_doctor"
                class="main-nav"
                activeStyle={{
                  fontWeight: "bold",
                  color: "white",
                }}
                onClick={() => window.scrollTo({ top: 0 })}
              >
                Find Doctor
              </NavLink>
              <NavLink
                exact
                to="/find_lab_test"
                class="main-nav"
                activeStyle={{
                  fontWeight: "bold",
                  color: "white",
                }}
                onClick={() => window.scrollTo({ top: 0 })}
              >
                Lab tests
              </NavLink>
              <NavLink
                exact
                to="/find_ambulance"
                class="main-nav"
                activeStyle={{
                  fontWeight: "bold",
                  color: "white",
                }}
                onClick={() => window.scrollTo({ top: 0 })}
              >
                Ambulance
              </NavLink>
              <NavLink
                exact
                to="/articles"
                class="main-nav"
                activeStyle={{
                  fontWeight: "bold",
                  color: "white",
                }}
                onClick={() => window.scrollTo({ top: 0 })}
              >
                Articles
              </NavLink>

              <li className="nav-item dropdown" style={{ opacity: 1 }}>
                <div
                  className="dropdown"
                  style={{ transform: "translateX(75px)" }}
                >
                  {/* <NotifyModal /> */}
                </div>
              </li>
              <li>
                <Link
                  exact
                  to="/login"
                  class="main-nav sign-in"
                  onClick={() => window.scrollTo({ top: 0 })}
                >
                  <i class="fa fa-user" aria-hidden="true"></i>
                  Sign in
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
