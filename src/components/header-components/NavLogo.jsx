import React from "react";
// import logo from "../header-components/img/logo.jpeg";
const logo = require('../../images/logo.jpeg')
function NavLogo(){
    return(
        <img className="image-logo" src={logo} alt="page-logo"/>
    );
}

export default NavLogo;