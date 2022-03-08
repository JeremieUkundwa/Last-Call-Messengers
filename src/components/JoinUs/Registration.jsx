import React from "react";
import "./joinUs.css";
function Registration() {
    return (
        <div className="registration-form">
            <h2>REGISTRATION FORM</h2>
            <form action="">
                <li><input type="text" placeholder="First Name" /></li> <br />
                <li><input type="text" placeholder="Middle Name" /></li>  <br />
                <li><input type="text" placeholder="Last Name" /></li> <br />
                <li><input type="text" placeholder="Email" /></li> <br />
                <li><input type="text" placeholder="Phone Name" /></li> <br />
                <li><input type="text" placeholder="Country Name" /></li> <br />
                <button type="submit">REGISTER</button>
            </form>
        </div>
    );
}

export default Registration;