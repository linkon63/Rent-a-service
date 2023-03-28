import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { sessionStorageGet } from '../../functions/commonFunctions';
import BookingTable from './BookingTable';

export default function BookedPage() {
    const [bookingData, setBookingData] = useState([]);
    useEffect(() => {
        const userEmail = sessionStorageGet("user-email")
        axios.get(`http://localhost:8080/yourBooking/?email=${userEmail}`)
            .then(function (response) {
                // handle success
                console.log("backend res", response.data);
                setBookingData(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log("error", error);
            })
            .finally(function () {
                // always executed
            });

    }, [])
    return (
        <div className='w-full'>

            {/* header section*/}
            <div className='flex justify-center '>
                <div className="dark:bg-gray-800 dark:text-gray-100 ">
                    <div className="px-10 py-6 mx-auto shadow-sm dark:bg-gray-900">
                        <div className="flex items-center justify-between">
                            <span className="text-sm dark:text-gray-400">{new Date().toDateString()}</span>
                            <Link to="/home" className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">Go Home</Link>
                        </div>
                        <div className="mt-3">
                            <div className="text-2xl font-bold hover:underline">Schedule Your [Service] and Save Time</div>
                            <p className="mt-2">
                                Experience seamless booking with our user-friendly platform. From event tickets to reservations, our process is quick and easy. Book now and let us take care of the details, so you can sit back and enjoy the experience.
                            </p>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <p className="hover:underline dark:text-violet-400">Read more</p>
                            <div>
                                <div className="flex items-center">
                                    {/* <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                                    <span className="hover:underline dark:text-gray-400">Leroy Jenkins</span> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* table section */}
            {
                bookingData &&
                <BookingTable key={Math.random()} bookingData={bookingData} />
            }
        </div>

    )
}
