import React from "react";
import SocialMedia from "./SocialMedia";
import Publication from "./Publication";
import Contact from "./Contact";
import Copyright from "./CopyRight";
function Footer(){
    return(
        <div className="footer-style">
            <Publication />
            <SocialMedia/>
            <Contact />
            <Copyright />
        </div>
    );
}

export default Footer;