import React from "react";
import Header from "./header-components/Header";
import CarouselComponent from "./Carousel/CarouselComponent";
import MiddleComponent from "./main-components/MiddleComponent";

function App() {
    return (
        <div style={{backgroundColor: '#EEE6CE'}}>
            <Header />
            <CarouselComponent />
            <MiddleComponent />
        </div>
    );
}

export default App;