import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
var image1 =  require("../../images/mb-1.jpg");
var image2 =  require("../../images/mb-2.jpg");
var image3 =  require("../../images/mb-3.jpg");
export default function CarouselComponent() {
    return (
        <div className='middle-image-carousel'>
            <Carousel>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src={image1}
                        alt="Image One"
                    />

                    <Carousel.Caption>
                        <h3>WELCOME TO OUR EVANGELICAL MINISTRY</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src={image2}
                        alt="Image One"
                    />
                    
                    <Carousel.Caption>
                        <h3>WELCOME TO OUR EVANGELICAL MINISTRY</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src={image3}
                        alt="Image Two"
                    />
                    <Carousel.Caption>
                        <h3>WELCOME TO OUR EVANGELICAL MINISTRY</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

