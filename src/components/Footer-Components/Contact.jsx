import React from "react";
import {FaPhoneAlt,FaMapMarkerAlt} from "react-icons/fa";

function Contact(){
    return(
        <div className="contact-map-style">
            <nav>
                <a href=""><FaPhoneAlt />+250 788 888888</a>
                <a href=""><FaMapMarkerAlt/>Kigali, Rwanda</a>
            </nav>
        </div>
    );
}

export default Contact;
