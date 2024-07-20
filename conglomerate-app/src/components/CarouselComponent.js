import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = () => {
    return (
        <Carousel 
            autoPlay 
            infiniteLoop 
            showThumbs={false}
            stopOnHover={false}  // Ensure the carousel keeps scrolling
        >
            <div>
                <img src="https://via.placeholder.com/800x400" alt="farmFlyer" />
                <p className="legend">Image 1</p>
            </div>
            <div>
                <img src="https://via.placeholder.com/800x400" alt="EstateFlyer" />
                <p className="legend">Image 2</p>
            </div>
            <div>
                <img src="https://via.placeholder.com/800x400" alt="PharmaceuticalFlyer" />
                <p className="legend">Image 3</p>
            </div>
        </Carousel>
    );
};

export default CarouselComponent;
