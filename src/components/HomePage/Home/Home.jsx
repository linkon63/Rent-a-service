import React from 'react';
import { Link } from 'react-router-dom';
import car1 from '../../assets/car/car1.jpg'
import car2 from '../../assets/car/car2.jpg'
import car3 from '../../assets/car/car3.jpg'
import car5 from '../../assets/car/car5.jpg'
import Section1 from '../Section1/Section1';
import Section2 from '../Section2/Section2';
import Section3 from '../Section3/Section3';

import './Home.css'

const Home = () => {
    return (
        <div>
            <div className="carousel w-full h-screen" style={{ position: 'relative', zIndex: 0 }}>
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={car1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={car2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={car3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>

            <div className='md:flex hidden w-2/3 justify-center items-center -mt-28  p-4 ml-32 ' style={{ position: 'absolute', zIndex: 2 }}>
                <div className='relative bg-blue-100 w-1/2 '>
                    <img src={car5} alt="" className='img-round' />
                    <p className='absolute top-1/2 left-3/5 text-black text-3xl font-semibold ' >Chose Your Car Based On</p>
                </div>
                <div className='grid grid-cols-2 gap-2 bg-blue-200 p-4'>
                    <p className='border-2 h-10 p-2 border-slate-600 bg-red-100 text-center'>Address</p>
                    <p className='border-2 h-10 p-2 border-slate-600 bg-red-100 text-center'>Date</p>
                    <p className='border-2 h-10 p-2 border-slate-600 bg-red-100 text-center'>Time</p>
                    <p className='border-2 h-10 p-2 border-slate-600 bg-red-100 text-center'>Model</p>
                </div>
            </div>

            {/* kon update Code 25/1/23 */}
            {/* <section>
                <h1 style={{ border: "2px solid black;" }}>Cars service</h1>

                <div>
                    <button style={{ border: "4px solid yellow;", background: "red" }}>
                        <Link to={`/cars_services`}>Cars</Link>
                    </button>
                    <h1>Bus</h1>
                    <h1>Track</h1>
                </div>

            </section> */}
            <Section1></Section1>
            <Section3></Section3>
            <Section2></Section2>
        </div>
    );
};

export default Home;