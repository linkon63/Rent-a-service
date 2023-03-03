import React from 'react';
import { Link } from 'react-router-dom';
import car1 from '../../assets/car/car1.jpg'
import car2 from '../../assets/car/car2.jpg'
import car3 from '../../assets/car/car3.jpg'
import car5 from '../../assets/car/car5.jpg'
import MissionVission from '../../lib/MissionVission/MissionVission';
import Review from '../../lib/Review/Review';
import Footer from '../../shared/Footer/Footer';
import Section1 from '../Section1/Section1';
import Section2 from '../Section2/Section2';
import Section3 from '../Section3/Section3';

import './Home.css'

import video from '../../assets/background/pexels-ojyrai-7875596.mp4'

const Home = () => {
    return (
        // <div>
        //     <div className="carousel w-full h-screen" style={{ position: 'relative', zIndex: 0 }}>
        //         <div id="slide1" className="carousel-item relative w-full">
        //             <img src={car1} className="w-full" alt="" />

        //             <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //                 <a href="#slide4" className="btn btn-circle">❮</a>
        //                 <a href="#slide2" className="btn btn-circle">❯</a>
        //             </div>
        //         </div>
        //         <div id="slide2" className="carousel-item relative w-full">
        //             <img src={car2} className="w-full" alt="" />
        //             <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //                 <a href="#slide1" className="btn btn-circle">❮</a>
        //                 <a href="#slide3" className="btn btn-circle">❯</a>
        //             </div>
        //         </div>
        //         <div id="slide3" className="carousel-item relative w-full">
        //             <img src={car3} className="w-full" alt="" />
        //             <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //                 <a href="#slide2" className="btn btn-circle">❮</a>
        //                 <a href="#slide1" className="btn btn-circle">❯</a>
        //             </div>
        //         </div>

        //     </div>





        //     {/* <Section1></Section1> */}
        //     {/* <Section3></Section3> */}
        //     {/* <Section2></Section2> */}
        //     {/* <MissionVission></MissionVission> */}
        //     {/* <Review></Review> */}
        //     <Footer></Footer>
        // </div >


        // <div>
        //     <div className="hero min-h-screen" >
        //         <div className="hero-overlay bg-opacity-60"></div>
        //         <div className="hero-content text-center text-neutral-content">
        //             <div className="max-w-md">
        //                 <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
        //                 <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        //                 <button className="btn btn-primary">Get Started</button>
        //             </div>
        //         </div>


        //     </div>


        //     <video autoPlay loop muted>
        //         <source src={video} type='video/ogg' />
        //     </video>
        //     <script>
        //         window.onload = function(){
        //             document.getElementById("autoplay")
        //         }
        //     </script>
        //     <Footer></Footer>
        // </div>

        <div>
            <div>
                <video autoPlay loop muted className='lg:h-screen lg:w-screen'>
                    <source src={video} type='video/ogg' />
                </video>
                <script>
                    window.onload = function(){
                        document.getElementById("autoplay")
                    }
                </script>
            </div>

            <div className="hero-content text-center text-neutral-content absolute top-28 lg:top-1/2 lg:left-1/3 flex flex-col items-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                </div>
            </div>
            <div className='absolute top-20 lg:top-24 lg:left-24'>
                <img className='w-20 lg:w-40' src="https://www.pngmart.com/files/22/Car-Logo-Transparent-PNG.png" alt="" />
                <p className='font-semibold text-sm lg:text-2xl text-slate-400 font-serif'>Rent A Car</p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;