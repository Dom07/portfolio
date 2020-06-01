import React from 'react';
import {Carousel} from 'react-bootstrap';
import first from '../../../images/1.jpeg';
import second from '../../../images/2.jpeg';
import third from '../../../images/3.jpeg';

const imageCarousel = (props) => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    // src={first}
                    alt="First slide"
                    // style={{objectFit: "contain", height: "400px"}}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    // src={second}
                    alt="Second slide"
                    // style={{objectFit: "contain", height: "400px"}}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    // src={third}
                    alt="Third slide"
                    // style={{objectFit: "contain", height: "400px"}}
                />
            </Carousel.Item>
        </Carousel>
    )
};

export default imageCarousel;