import React from 'react';
import {Carousel} from 'react-bootstrap';

const imageCarousel = (props) => {
    const carouselItems = props.images.map(img => {
        return (<Carousel.Item>
            <img 
                src={img} 
                style={{objectFit: "contain", width: props.width, height: props.height}}
            />
        </Carousel.Item>)
    })
    
    return (
        <Carousel>
            {carouselItems}
        </Carousel>
    )
};

export default imageCarousel;