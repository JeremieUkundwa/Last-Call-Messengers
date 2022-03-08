import React from "react";

import Header from "../header-components/Header";
import CarouselComponent from "../Carousel/CarouselComponent";
import Footer from "../Footer-Components/Footer";
import Registration from "../JoinUs/Registration";
import "../JoinUs/joinUs.css";

function JoinUs() {
    return (
        <div className="join-us-page react-body">
            <Header />
            <CarouselComponent />
            <h1>JOIN US - MEMBERSHIP</h1>
            <Registration />
            <Footer />
        </div>
    )
}

export default JoinUs;