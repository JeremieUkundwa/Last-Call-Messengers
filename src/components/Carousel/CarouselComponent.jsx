import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
var image1 =  require("../../images/bg-1.jpg");
var image2 =  require("../../images/bg-2.jpg");
var image3 =  require("../../images/bg-3.jpeg");
export default function CarouselComponent() {
    return (
        <div className='image-carousel'>
            <Carousel>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src={image1}
                        alt="Image One"
                    />

                    {/* <Carousel.Caption>
                        <h3>Label for first slide</h3>
                        <p>Sample Text for Image One</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src={image2}
                        alt="Image One"
                    />
                    
                    {/* <Carousel.Caption>
                        <h3>Label for first slide</h3>
                        <p>Sample Text for Image One</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src={image3}
                        alt="Image Two"
                    />
                    {/* <Carousel.Caption>
                        <h3>Label for second slide</h3>
                        <p>Sample Text for Image Two</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

