import React from 'react'
import { Link } from 'react-router-dom'
import Gauges from '../../shared/Gauges/Gauges'

export default function CarsServicePage() {
    return (
        <div>
            <h1>
                Section design
            </h1>

            {/* Design Section */}

            <div className='text-center'>
                <h1>LIMIT YOUR SPEED AND BOOK THE CAR</h1>
                <div>
                    <Gauges />
                </div>
            </div>

            <button style={{ border: "4px solid yellow;", background: "red" }}>
                <Link to={`/booking_service`}>Book Now</Link>
            </button>
        </div>
    )
}
