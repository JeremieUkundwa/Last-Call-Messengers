import React from "react"
import Header from "../header-components/Header";
import CarouselComponent from "../Carousel/CarouselComponent";
import MiddleComponent from "../main-components/MiddleComponent";
import Footer from "../Footer-Components/Footer";

function Home() {
    return (
        <div>
            <Header />
            <CarouselComponent />
            <MiddleComponent />
            <Footer />
        </div>
    )
}

export default Home;