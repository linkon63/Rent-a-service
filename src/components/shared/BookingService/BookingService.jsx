import React from 'react'
import { Link } from 'react-router-dom'
import { allCarsData } from '../../data/projectdata'
import PaymentForm from '../../forms/PaymentForm'
const car = allCarsData[0]
export default function BookingService() {
    return (
        <div class="grid grid-cols-2">
            <div className='bg-white flex items-center justify-center '>
                <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100" key={car.id}>
                    <h5 className="text-3xl font-semibold tracking-wide text-center pb-1 pt-1">Safe journey Sir!</h5>
                    <img src={car.image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-semibold tracking-wide">{car.name}</h2>
                            <p className="dark:text-gray-100">{car.describe}</p>
                        </div>
                        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">
                            {/* <Link to={`/bookingService/${car.id}`}>Book Now</Link> */}
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <PaymentForm />
            </div>
        </div>
    )
}
