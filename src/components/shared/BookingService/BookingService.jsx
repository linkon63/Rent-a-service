import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { allBusData, allCarsData, allTrucksData } from '../../data/projectdata'
import PaymentForm from '../../forms/PaymentForm'

const car = allCarsData
const bus = allBusData
const truck = allTrucksData

export default function BookingService() {

    let { pathname } = useLocation();
    // console.log("location", pathname)
    const serviceName = pathname.split('/')[2]
    const routeId = pathname.split('/')[3]
    console.log("serviceName", serviceName)
    console.log("routeId", routeId)

    const filteredCar = car.filter(data => data.id == routeId)[0]
    const filteredBus = bus.filter(data => data.id == routeId)[0]
    const filteredTruck = truck.filter(data => data.id == routeId)[0]

    return (
        <div class="grid grid-cols-3 bg-gray-200">
            <div className='flex items-center justify-center border border-black'>

                {
                    serviceName == 'car' &&
                    filteredCar &&
                    <div className='flex items-center justify-center '>
                        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100" key={filteredCar.id}>
                            <h5 className="text-3xl font-semibold tracking-wide text-center pb-1 pt-1">Safe journey Sir!</h5>
                            <img src={filteredCar.image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                            <div className="flex flex-col justify-between p-6 space-y-8">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-semibold tracking-wide">{filteredCar.name}</h2>
                                    <p className="dark:text-gray-100">{filteredCar.describe}</p>
                                </div>
                                <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">
                                    {/* <Link to={`/bookingService/${car.id}`}>Book Now</Link> */}
                                </button>
                            </div>
                        </div>
                    </div>

                }
                {
                    serviceName == 'bus' &&
                    filteredBus &&
                    <div className='flex items-center justify-center '>
                        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100" key={filteredBus.id}>
                            <h5 className="text-3xl font-semibold tracking-wide text-center pb-1 pt-1">Safe journey Sir!</h5>
                            <img src={filteredBus.image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                            <div className="flex flex-col justify-between p-6 space-y-8">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-semibold tracking-wide">{filteredBus.name}</h2>
                                    <p className="dark:text-gray-100">{filteredBus.describe}</p>
                                </div>
                                <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">
                                    {/* <Link to={`/bookingService/${car.id}`}>Book Now</Link> */}
                                </button>
                            </div>
                        </div>
                    </div>

                }
                {
                    serviceName == 'truck' &&
                    filteredTruck &&
                    <div className='flex items-center justify-center '>
                        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100" key={filteredTruck.id}>
                            <h5 className="text-3xl font-semibold tracking-wide text-center pb-1 pt-1">Safe journey Sir!</h5>
                            <img src={filteredTruck.image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                            <div className="flex flex-col justify-between p-6 space-y-8">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-semibold tracking-wide">{filteredTruck.name}</h2>
                                    <p className="dark:text-gray-100">{filteredTruck.describe}</p>
                                </div>
                                <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">
                                    {/* <Link to={`/bookingService/${car.id}`}>Book Now</Link> */}
                                </button>
                            </div>
                        </div>
                    </div>

                }
            </div>

            <div className='flex items-center justify-center border border-black'>
                <div>
                    <h1>User Form</h1>
                </div>
            </div>

            <div className='border border-black'>
                <PaymentForm />
            </div>
        </div>
    )
}
