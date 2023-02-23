import React from 'react';
import { Link } from 'react-router-dom';
import './Section3.css'
const Section3 = () => {
    return (
        <div className='mt-3'>
            <h1 className='font-semibold text-3xl'>Our Service</h1>

            <div className='flex justify-around mt-3'>
                <div id="container">
                    <div className="product-details">
                        <h1>Car</h1>
                        <span className="hint-star star">
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star-o" aria-hidden="true"></i>
                        </span>
                        <p className="information">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, aliquid?</p>
                        <div className="control">

                            <button className="btn">

                                <span className="shopping-cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></span>
                                <span className="buy"><Link to='/carsServices'>GET NOW</Link></span>
                            </button>

                        </div>

                    </div>
                    <div className="product-image">

                        <img src="https://i.ibb.co/p0sjp3X/13841402-2010-i123-005-car-headlights-AD-composition.jpg" alt="" />


                        <div className="info">
                            <h2> Description</h2>
                            <ul>
                                <li><strong>Height : </strong>5 Ft </li>
                                <li><strong>Shade : </strong>Olive green</li>
                                <li><strong>Decoration: </strong>balls and bells</li>
                                <li><strong>Material: </strong>Eco-Friendly</li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div id="container">
                    <div className="product-details">
                        <h1>Bus</h1>
                        <span className="hint-star star">
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star-o" aria-hidden="true"></i>
                        </span>
                        <p className="information">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, veritatis?</p>



                        <div className="control">

                            <button className="btn">

                                <span className="shopping-cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></span>
                                <span className="buy">Get now</span>
                            </button>

                        </div>

                    </div>

                    <div className="product-image">

                        <img src="https://i.ibb.co/k0b3czV/full-shot-disabled-man-near-bus.jpg" alt="" />


                        <div className="info">
                            <h2> Description</h2>
                            <ul>
                                <li><strong>Height : </strong>5 Ft </li>
                                <li><strong>Shade : </strong>Olive green</li>
                                <li><strong>Decoration: </strong>balls and bells</li>
                                <li><strong>Material: </strong>Eco-Friendly</li>

                            </ul>
                        </div>
                    </div>

                </div>
                <div id="container">

                    <div className="product-details">

                        <h1>Truck</h1>
                        <span className="hint-star star">
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star-o" aria-hidden="true"></i>
                        </span>

                        <p className="information mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, eaque.</p>



                        <div className="control">

                            <button className="btn">
                                <span className="buy ">Get now</span>
                            </button>

                        </div>

                    </div>

                    <div className="product-image">

                        <img src="https://i.ibb.co/kcV4PKQ/truck-long-vehicle-ready-delivering-transport.jpg" alt="" />


                        <div className="info">
                            <h2> Description</h2>
                            <ul>
                                <li><strong>Height : </strong>5 Ft </li>
                                <li><strong>Shade : </strong>Olive green</li>
                                <li><strong>Decoration: </strong>balls and bells</li>
                                <li><strong>Material: </strong>Eco-Friendly</li>

                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Section3;