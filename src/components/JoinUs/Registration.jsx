import React from "react";
import "./joinUs.css";
import image1 from "../../images/join us hands.png"
function Registration() {
    return (
        <div className="joinUs-page">
            <div className="registration-form">
                <h2>REGISTRATION FORM</h2>
                <form action="">
                    <label htmlFor="">First Name </label> <input type="text" required /> <br /> <br />

                    <label htmlFor="">Middle Name </label> <input type="text" /> <br /> <br />
                    <label htmlFor="">Last Name </label> <input type="text" required /> <br /> <br />
                    <label htmlFor="">Email  </label> <input type="email" required /> <br /> <br />
                    <label htmlFor="">Phone </label>  <input type="number" required /> <br /> <br />
                    <label htmlFor="">Country  </label>  <input type="text" required /><br /> <br />
                    <button type="submit">REGISTER</button>
                </form>
            </div>
            <div className="join-us-image">
                <img src={image1} alt="" />
            </div>
        </div>

    );
}

export default Registration;