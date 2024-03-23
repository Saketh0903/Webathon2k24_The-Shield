import React from "react";
import { Link } from "react-router-dom";


function Navbar() {

  return (
    <nav
      className="navbar navbar-expand-sm fs-5 shadow-sm"
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <>
              
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to=""

                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to=""

                    >
                      SignUp
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to=""

                    >
                      SignIn
                    </Link>
                  </li>
                </>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;