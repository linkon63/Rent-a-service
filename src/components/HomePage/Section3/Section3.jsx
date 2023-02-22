import React from 'react';
import { Link } from 'react-router-dom';

import './Section3.css'

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

const Section3 = () => {
    return (
        <div className=''>
            <h1 className='font-semibold text-2xl'>Our Service</h1>
            <div className='flex justify-around'>
            {/* <div className='grid grid-cols-1 md:grid-cols-1 ml-10 flex'> */}
                
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

                        <p className="information">" Let's spread the joy , here is Christmas , the most awaited day of the year.</p>



                        <div className="control">

                            <button className="btn">

                                <span className="shopping-cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></span>
                                <span className="buy"><Link to='/cars_services'>GET NOW</Link></span>
                            </button>

                        </div>

                    </div>
                    <div className="product-image">

                        <img src="https://images.unsplash.com/photo-1606830733744-0ad778449672?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNocmlzdG1hcyUyMHRyZWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />


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

                        <p className="information">" Let's spread the joy , here is Christmas , the most awaited day of the year.</p>



                        <div className="control">

                            <button className="btn">

                                <span className="shopping-cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></span>
                                <span className="buy">Get now</span>
                            </button>

                        </div>

                    </div>

                    <div className="product-image">

                        <img src="https://images.unsplash.com/photo-1606830733744-0ad778449672?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNocmlzdG1hcyUyMHRyZWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />


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

                        <p className="information mb-6">" Let's spread the joy , here is Christmas , the most awaited day of the year.</p>



                        <div className="control">

                            <button className="btn">
                                <span className="buy ">Get now</span>
                            </button>

                        </div>

                    </div>

                    <div className="product-image">

                        <img src="https://images.unsplash.com/photo-1606830733744-0ad778449672?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNocmlzdG1hcyUyMHRyZWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />


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