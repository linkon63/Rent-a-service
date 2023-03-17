import React from 'react';
import Slider from '../SliderSection/Slider';
import ServiceSection from '../ServiceSection/ServiceSection';
import HomeMidSection from '../HomeMidSection/HomeMidSection';

import Review from '../../lib/Review/Review';
import Footer from '../../shared/Footer/Footer';

import './Home.css'

const Home = () => {
    return (
        <div className='home-container'>
            <div className='home-main mt-2'>
                <Slider />
                <ServiceSection />
                <HomeMidSection />
                <Review />
                <Footer />

            </div>
        </div >
    );
};

export default Home;