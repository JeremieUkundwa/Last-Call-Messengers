import React from "react";
import {FaTelegram ,FaTwitter,FaInstagram,FaYoutube,FaFacebook,FaEnvelope,FaWhatsapp} from "react-icons/fa";


function Icons(){
    return(
        <div className="social-media">
            <nav>
                <a href=""><FaTelegram /></a>
                <a href=""><FaTwitter /></a>
                <a href=""><FaInstagram /></a>
                <a href=""><FaYoutube /></a>
                <a href=""><FaFacebook /></a>
                <a href=""><FaEnvelope /></a>
                <a href=""><FaWhatsapp /></a>
            </nav>
        </div>
    )
}

export default Icons;