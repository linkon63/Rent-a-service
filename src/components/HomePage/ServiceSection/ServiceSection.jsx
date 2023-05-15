import React from 'react';
import { Link } from 'react-router-dom';
import { allServiceData } from '../../data/projectdata';
import './ServiceSection.css'

const serviceData = allServiceData;

const ServiceSection = () => {
    return (
        <div className='mt-5'>
            <h1 class="mb-10 mt-10 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-white">Let's Go<span class="text-blue-600 dark:text-blue-500">Take Our Services</span> Services.</h1>
            <div className="grid grid-cols-3 gap-4">
                {
                    serviceData &&
                    serviceData.map(service => (
                        <Link to={`/services/${service.id}`} className="group relative block overflow-hidden" >
                            <button
                                className="absolute right-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
                            >
                                <span className="sr-only">Wishlist</span>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="h-4 w-4"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                    />
                                </svg>
                            </button>

                            <img
                                src={service.image}
                                alt=""
                                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                            />

                            <div className="relative border border-gray-100 bg-white p-6">
                                <span
                                    className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium"
                                >
                                    New
                                </span>
                                <h3 className="mt-4 text-lg font-medium text-gray-900">{service.name}</h3>
                                <p className="mt-1.5 text-sm text-gray-700">{service.price}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div >
    );
};

export default ServiceSection;