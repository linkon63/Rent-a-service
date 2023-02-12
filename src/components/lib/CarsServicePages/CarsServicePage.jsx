import React from 'react'
import { Link } from 'react-router-dom'

export default function CarsServicePage() {
    return (
        <div>
            <h1>
                Section design
            </h1>
            <button style={{ border: "4px solid yellow;", background: "red" }}>
                <Link to={`/booking_service`}>Book Now</Link>
            </button>
        </div>
    )
}
