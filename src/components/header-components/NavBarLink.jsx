import React from "react";
import NavLogo from "./NavLogo";
import SignUp from "./SignUp";
import { Link } from "react-router-dom";
function NavBarLink() {
    return (
        <div className="nav-bar">
            <div>
                <NavLogo />
            </div>
            <div>
                <nav>
                    <Link className="nav-link-header" to="/">Home </Link>
                    <Link className="nav-link-header" to="/about">About Us </Link>
                    <Link className="nav-link-header" to="/videos">Videos </Link>
                    <Link className="nav-link-header" to="/contactus">Contact US </Link>
                    <Link className="nav-link-header" to="/joinus">Join US </Link>
                </nav>
            </div>
            <div>
                <SignUp />
            </div>
        </div>
    );
}

export default NavBarLink;