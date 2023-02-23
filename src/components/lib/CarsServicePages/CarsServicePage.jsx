import React from 'react'
import { Link } from 'react-router-dom'
import Gauges from '../../shared/Gauges/Gauges'

export default function CarsServicePage() {
    return (

        <div className='h-100'>

            <div class="grid grid-cols-2 content-center gap-4">
                <div className=''>
                    <div className='text-center'>
                        <h1>LIMIT YOUR SPEED AND BOOK THE CAR</h1>
                        <div>
                            <Gauges />
                        </div>
                    </div>
                </div>
                <div>
                    <h1>
                        Section design
                    </h1>
                    <button style={{ border: "4px solid yellow;", background: "red" }}>
                        <Link to={`/bookingService`}>Book Now</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}
