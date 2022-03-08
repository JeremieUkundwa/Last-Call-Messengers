import React from "react";
import Header from "../header-components/Header";
import CarouselComponent from "../Carousel/CarouselComponent";
import Footer from "../Footer-Components/Footer";
import VideoApp from "./VideoApp";

function Videos() {
    return (
        <div>
            <Header />
            <CarouselComponent />
            <VideoApp />
            <Footer />
        </div>
    )
}

export default Videos;