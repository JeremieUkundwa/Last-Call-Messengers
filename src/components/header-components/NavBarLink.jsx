import React from "react";
import NavLogo from "./NavLogo";
import SignUp from "./SignUp";
function NavBarLink() {
    return (
        <div className="nav-bar">
            <div>
                <NavLogo />
            </div>
            <div>
                <nav>
                    <a href="">Home</a>
                    <a href="">About Us</a>
                    <a href="">Videos</a>
                    <a href="">Contact US</a>
                    <a href="">Join US</a>
                </nav>
            </div>
            <div>
                <SignUp />
            </div>
        </div>
    );
}

export default NavBarLink;