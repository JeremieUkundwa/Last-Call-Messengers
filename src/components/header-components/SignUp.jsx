import React from "react";

const account = require("../../images/user.png")

function SignUp(){
    return(
        <img className="account-image" src={account} alt="sign-in" />
    );
}

export default SignUp;