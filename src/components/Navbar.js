import React from "react";
import { Link } from "react-router-dom";


function Navbar() {

    return (
        <div>
            <nav
                className="navbar navbar-expand-sm fs-5 shadow-sm p-3"
            >
                <div className="">
                    <Link className="navbar-brand d-block mx-auto" to="/">
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/004/297/596/small/education-logo-open-book-dictionary-textbook-or-notebook-with-sunrice-icon-modern-emblem-idea-concept-design-for-business-libraries-schools-universities-educational-courses-vector.jpg" alt="Logo" width="100" height="100" className="d-inline-block text-center  align-text-top" />
                    </Link>
                </div>
                <div className="container">
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
                                        to="/signup"

                                    >
                                        SignUp
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to="login"

                                    >
                                        SignIn
                                    </Link>
                                </li>
                            </>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;