import React from "react";
import Header from "./header-components/Header";
import CarouselComponent from "./Carousel/CarouselComponent";
import MiddleComponent from "./main-components/MiddleComponent";
import Footer from "./Footer-Components/Footer";

function App() {
    return (
        <div style={{backgroundColor: '#EEE6CE'}}>
            <Header />
            <CarouselComponent />
            <MiddleComponent />
            <Footer />
        </div>
    );
}

export default App;