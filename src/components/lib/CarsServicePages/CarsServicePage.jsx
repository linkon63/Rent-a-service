import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { allBusData, allCarsData, allTrucksData } from '../../data/projectdata'
import Gauges from '../../shared/Gauges/Gauges'

const carsData = allCarsData
const busData = allBusData
const truckData = allTrucksData

export default function CarsServicePage() {
    let { pathname } = useLocation();
    // console.log("location", pathname)
    const routeId = pathname.split('/')[2]
    console.log("routeId", routeId)
    return (
        <>
            <div className=" flex justify-center bg-white">
                <div className='container'>
                    <div>
                        <div class="mb-2 text-center bg-white border mt-3">
                            <h2 class="text-center text-2xl text-gray-900 font-bold md:text-4xl p-2">Take Our Services</h2>
                        </div>

                        <div className='mt-2 border bg-zinc-900'>
                            <div class="grid grid-cols-2 content-center gap-4">
                                <div className=''>
                                    <div className='text-center'>
                                        <div>
                                            <Gauges />
                                        </div>
                                    </div>
                                </div>
                                <div>

                                    <div className="grid  grid-cols-3 gap-4 pt-2" >
                                        {
                                            routeId == '101' &&
                                            carsData &&
                                            carsData.map((data) => (
                                                <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100" key={data.id}>
                                                    <img src={data.image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                                                    <div className="flex flex-col justify-between p-6 space-y-8">
                                                        <div className="space-y-2">
                                                            <h2 className="text-3xl font-semibold tracking-wide">{data.name}</h2>
                                                            <p className="dark:text-gray-100">{data.describe}</p>
                                                        </div>
                                                        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">
                                                            <Link to={`/bookingService/${data.id}`}>Book Now</Link>
                                                        </button>
                                                    </div>
                                                </div>
                                            ))
                                        }

                                        {
                                            routeId == '102' &&
                                            busData &&
                                            busData.map((data) => (
                                                <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100" key={data.id}>
                                                    <img src={data.image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                                                    <div className="flex flex-col justify-between p-6 space-y-8">
                                                        <div className="space-y-2">
                                                            <h2 className="text-3xl font-semibold tracking-wide">{data.name}</h2>
                                                            <p className="dark:text-gray-100">{data.describe}</p>
                                                        </div>
                                                        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">
                                                            <Link to={`/bookingService/${data.id}`}>Book Now</Link>
                                                        </button>
                                                    </div>
                                                </div>
                                            ))
                                        }

                                        {
                                            routeId == '103' &&
                                            truckData &&
                                            truckData.map((data) => (
                                                <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100" key={data.id}>
                                                    <img src={data.image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                                                    <div className="flex flex-col justify-between p-6 space-y-8">
                                                        <div className="space-y-2">
                                                            <h2 className="text-3xl font-semibold tracking-wide">{data.name}</h2>
                                                            <p className="dark:text-gray-100">{data.describe}</p>
                                                        </div>
                                                        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">
                                                            <Link to={`/bookingService/${data.id}`}>Book Now</Link>
                                                        </button>
                                                    </div>
                                                </div>
                                            ))
                                        }

                                        {/* <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                                    <img src={car1} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                                    <div className="flex flex-col justify-between p-6 space-y-8">
                                        <div className="space-y-2">
                                            <h2 className="text-3xl font-semibold tracking-wide">Donec lectus leo</h2>
                                            <p className="dark:text-gray-100">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                                        </div>
                                        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">
                                            <Link to={`/bookingService`}>Book Now</Link>
                                        </button>
                                    </div>
                                </div>
                                <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                                    <img src={car2} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                                    <div className="flex flex-col justify-between p-6 space-y-8">
                                        <div className="space-y-2">
                                            <h2 className="text-3xl font-semibold tracking-wide">Donec lectus leo</h2>
                                            <p className="dark:text-gray-100">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                                        </div>
                                        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">
                                            <Link to={`/bookingService`}>Book Now</Link>
                                        </button>
                                    </div>
                                </div>
                                <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                                    <img src={car3} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                                    <div className="flex flex-col justify-between p-6 space-y-8">
                                        <div className="space-y-2">
                                            <h2 className="text-3xl font-semibold tracking-wide">Donec lectus leo</h2>
                                            <p className="dark:text-gray-100">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                                        </div>
                                        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">
                                            <Link to={`/bookingService`}>Book Now</Link>
                                        </button>
                                    </div>
                                </div> */}
                                    </div>
                                </div>
                            </div>
                            {/* Step of process booked a car */}
                        </div >
                        <div class="grid grid-cols-2 mt-5">
                            <section className="dark:bg-gray-800 dark:text-gray-100">
                                <div className="container max-w-5xl px-4 py-12 mx-auto">
                                    <div className="grid gap-4 mx-4 sm:grid-cols-12">
                                        <div className="col-span-12 sm:col-span-3">
                                            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400">
                                                <h3 className="text-3xl font-semibold">Morbi tempor</h3>
                                                <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">Vestibulum diam nunc</span>
                                            </div>
                                        </div>
                                        <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                                            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                                                    <h3 className="text-xl font-semibold tracking-wide">Donec porta enim vel </h3>
                                                    <time className="text-xs tracking-wide uppercase dark:text-gray-400">Dec 2020</time>
                                                    <p className="mt-3">Pellentesque feugiat ante at nisl efficitur, in mollis orci scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                                                </div>
                                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                                                    <h3 className="text-xl font-semibold tracking-wide">Aliquam sit amet nunc ut</h3>
                                                    <time className="text-xs tracking-wide uppercase dark:text-gray-400">Jul 2019</time>
                                                    <p className="mt-3">Morbi vulputate aliquam libero non dictum. Aliquam sit amet nunc ut diam aliquet tincidunt nec nec dui. Donec mollis turpis eget egestas sodales.</p>
                                                </div>
                                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                                                    <h3 className="text-xl font-semibold tracking-wide">Pellentesque habitant morbi</h3>
                                                    <time className="text-xs tracking-wide uppercase dark:text-gray-400">Jan 2016</time>
                                                    <p className="mt-3">Suspendisse tincidunt, arcu nec faucibus efficitur, justo velit consectetur nisl, sit amet condimentum lacus orci nec purus. Mauris quis quam suscipit, vehicula felis id, vehicula enim.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="dark:bg-gray-800 dark:text-gray-100">
                                <div className="container px-4 py-16 mx-auto space-y-8 lg:max-w-3xl">
                                    <h2 className="text-2xl font-bold md:text-4xl">Timeline</h2>
                                    <div className="space-y-8">
                                        <div>
                                            <h3 className="mb-3 text-lg font-bold md:text-xl">2021</h3>
                                            <ul className="space-y-4">
                                                <li className="space-y-1">
                                                    <div className="flex items-center space-x-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-violet-400">
                                                            <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                                            <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                                        </svg>
                                                        <h4 className="font-medium">Quis velit quae similique maxime optio temporibus</h4>
                                                    </div>
                                                    <p className="ml-7 dark:text-gray-400">Illum hic placeat unde porro, cupiditate nesciunt? Numquam debitis eligendi aspernatur mum.</p>
                                                </li>
                                                <li className="space-y-1">
                                                    <div className="flex items-center space-x-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-violet-400">
                                                            <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                                            <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                                        </svg>
                                                        <h4 className="font-medium">Quis velit quae similique maxime optio temporibus</h4>
                                                    </div>
                                                    <p className="ml-7 dark:text-gray-400">Illum hic placeat unde porro, cupiditate nesciunt? Numquam debitis eligendi aspernatur mum.</p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="mb-3 text-lg font-bold md:text-xl">2020</h3>
                                            <ul className="space-y-4">
                                                <li className="space-y-1">
                                                    <div className="flex items-center space-x-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-violet-400">
                                                            <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                                            <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                                        </svg>
                                                        <h4 className="font-medium">Quis velit quae similique maxime optio temporibus</h4>
                                                    </div>
                                                    <p className="ml-7 dark:text-gray-400">Illum hic placeat unde porro, cupiditate nesciunt? Numquam debitis eligendi aspernatur mum.</p>
                                                </li>
                                                <li className="space-y-1">
                                                    <div className="flex items-center space-x-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-violet-400">
                                                            <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                                            <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                                        </svg>
                                                        <h4 className="font-medium">Quis velit quae similique maxime optio temporibus</h4>
                                                    </div>
                                                    <p className="ml-7 dark:text-gray-400">Illum hic placeat unde porro, cupiditate nesciunt? Numquam debitis eligendi aspernatur mum.</p>
                                                </li>
                                                <li className="space-y-1">
                                                    <div className="flex items-center space-x-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-violet-400">
                                                            <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                                            <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                                        </svg>
                                                        <h4 className="font-medium">Quis velit quae similique maxime optio temporibus</h4>
                                                    </div>
                                                    <p className="ml-7 dark:text-gray-400">Illum hic placeat unde porro, cupiditate nesciunt? Numquam debitis eligendi aspernatur mum.</p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="mb-3 text-lg font-bold md:text-xl">2019</h3>
                                            <ul className="space-y-4">
                                                <li className="space-y-1">
                                                    <div className="flex items-center space-x-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-violet-400">
                                                            <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                                            <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                                        </svg>
                                                        <h4 className="font-medium">Quis velit quae similique maxime optio temporibus</h4>
                                                    </div>
                                                    <p className="ml-7 dark:text-gray-400">Illum hic placeat unde porro, cupiditate nesciunt? Numquam debitis eligendi aspernatur mum.</p>
                                                </li>
                                                <li className="space-y-1">
                                                    <div className="flex items-center space-x-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-violet-400">
                                                            <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                                            <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                                        </svg>
                                                        <h4 className="font-medium">Quis velit quae similique maxime optio temporibus</h4>
                                                    </div>
                                                    <p className="ml-7 dark:text-gray-400">Illum hic placeat unde porro, cupiditate nesciunt? Numquam debitis eligendi aspernatur mum.</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
