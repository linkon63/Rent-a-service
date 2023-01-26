import React from 'react';
import { Link } from 'react-router-dom';
import bus from '../../assets/icon/bus.png'
import car from '../../assets/icon/car.png'
import truck from '../../assets/icon/truck.png'

const Section3 = () => {
    return (
        <div className=''>
            <h1 className='text-center font-semibold text-2xl'>Car Service</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 ml-10 '>
                <div className="card w-96 bg-red-200 shadow-xl">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Car</h2>
                        <img src={car} alt="" className='w-56' />
                        <div className="card-actions ">
                            <button className="btn btn-primary"><Link to='/cars_services'>Get Service</Link></button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-green-200 shadow-xl">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Bus</h2>
                        <img src={bus} alt="" className='w-60' />
                        <div className="card-actions ">
                            <button className="btn btn-primary"><Link to='/cars_services'>Get Service</Link></button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-cyan-200 shadow-xl">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title ">Truck</h2>
                        <img src={truck} alt="" className='w-56' />
                        <div className="card-actions">
                            <button className="btn btn-primary"><Link to='/cars_services'>Get Service</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section3;