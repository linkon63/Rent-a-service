import React from 'react'
import { Link } from 'react-router-dom';
import blkCarImage from '../../assets/car/blk1.jpg'
// import blkCarImage from '../../assets/car/blkCarImage.jpg'
import car1 from '../../assets/car/car1.jpg'
import car2 from '../../assets/car/car2.jpg'
import car3 from '../../assets/car/car3.jpg'

export default function Slider() {
    return (
        <div className='bg-slate-900 rounded h-96'>
            <div className='flex h-full '>
                <div className='flex justify-center items-center md:w-8/12 min-w-fulL'>
                    <div>
                        <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl p-2"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Rental cars</span> <br /> can be your experience</h1>
                        <h1 class="mb-4 text-4xl leading-none tracking-tight text-gray-900 md:text-2xl lg:text-2xl dark:text-white text-right">Find your <mark class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">best</mark> match for days</h1>
                    </div>
                </div>
                <div className='h-full flex justify-end md:w-4/12 min-w-fulL'>
                    <div>
                        {/* <img className=" transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" src={blkCarImage} alt="imageDescription" style={{ height: '100%', width: "100%" }} /> */}

                        <div className="carousel h-full" style={{ position: 'relative', zIndex: 0 }}>
                            <div id="slide1" className="carousel-item relative w-full">
                                <img className=" transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" src={blkCarImage} alt="imageDescription" style={{ height: '100%', width: "100%" }} />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide4" >❮</a>
                                    <a href="#slide2" >❯</a>
                                </div>
                            </div>
                            <div id="slide2" className="carousel-item relative w-full">
                                <img className=" transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" src={car1} alt="imageDescription" style={{ height: '100%', width: "100%" }} />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide1">❮</a>
                                    <a href="#slide3">❯</a>
                                </div>
                            </div>
                            <div id="slide3" className="carousel-item relative w-full">
                                <img className=" transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" src={car3} alt="imageDescription" style={{ height: '100%', width: "100%" }} />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide2" >❮</a>
                                    <a href="#slide1" >❯</a>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>


    )
}


//    <div className="carousel w-full h-screen" style={{ position: 'relative', zIndex: 0 }}>
//             <div id="slide1" className="carousel-item relative w-full">
//                 <img src={car1} className="w-full" alt="" />
//                 <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//                     <a href="#slide4" className="btn btn-circle">❮</a>
//                     <a href="#slide2" className="btn btn-circle">❯</a>
//                 </div>
//             </div>
//             <div id="slide2" className="carousel-item relative w-full">
//                 <img src={car2} className="w-full" alt="" />
//                 <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//                     <a href="#slide1" className="btn btn-circle">❮</a>
//                     <a href="#slide3" className="btn btn-circle">❯</a>
//                 </div>
//             </div>
//             <div id="slide3" className="carousel-item relative w-full">
//                 <img src={car3} className="w-full" alt="" />
//                 <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//                     <a href="#slide2" className="btn btn-circle">❮</a>
//                     <a href="#slide1" className="btn btn-circle">❯</a>
//                 </div>
//         </div>
//             </div>