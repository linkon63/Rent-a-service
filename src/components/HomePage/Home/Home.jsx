import React from 'react';
import { Link } from 'react-router-dom';
import car1 from '../../assets/car/car1.jpg'
import car2 from '../../assets/car/car2.jpg'
import car3 from '../../assets/car/car3.jpg'
import Review from '../../lib/Review/Review';
import Footer from '../../shared/Footer/Footer';
import Section2 from '../Section2/Section2';
import Section3 from '../Section3/Section3';

import './Home.css'

const Home = () => {
    return (
        <div className='home-container'>
            <div className='home-main mt-2'>
                {/* slider section */}
                <div className="carousel w-full h-screen" style={{ position: 'relative', zIndex: 0 }}>
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={car1} className="w-full" alt="" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={car2} className="w-full" alt="" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={car3} className="w-full" alt="" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                </div>

                <Section3 />
                <Section2 />
                <Review />
                <Footer />

            </div>
        </div >
    );
};

export default Home;