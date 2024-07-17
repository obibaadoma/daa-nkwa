import React from 'react';
import NavBar from '../components/NavBar';
import CarouselComponent from '../components/CarouselComponent';
import About from '../components/About';
import Service from '../components/Service';
import { Element } from 'react-scroll';
import { aboutData, serviceData } from '../data/pageData';

const Home = () => {
    return (
        <div>
            <NavBar />
            <div className="p-4" style={{ marginTop: '80px' }}>
                <div className="text-center mt-8">
                    <h1 className="text-6xl font-bold mb-4">Daa Nkwa</h1>
                    <h2 className="text-xl italic text-gray-700">
                        We are a conglomerate specializing in real estate, agribusiness, and pharmaceuticals. Our mission is to enhance the quality of life and ensure longevity through our tailored products and services, designed to meet the diverse needs of our clients.
                    </h2>
                </div>
                <CarouselComponent className="mt-8" />
                <Element name="about">
                    <About data={aboutData} />
                </Element>
                <Element name="service">
                    <Service data={serviceData} />
                </Element>
            </div>
        </div>
    );
};

export default Home;