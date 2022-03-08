import React from "react";
import Header from "../header-components/Header";
import CarouselComponent from "../Carousel/CarouselComponent";
import Footer from "../Footer-Components/Footer";
import Leaders from "../ContactUS/Leaders";

function ContactUs() {
    return (
        <div className="react-body">
            <Header />
            <CarouselComponent />
            <Leaders />
            <Footer />
        </div>
    )
}

export default ContactUs;