import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { sessionStorageGet } from '../../functions/commonFunctions';

export default function SettingPage() {
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


    const deleteService = (bookingId, email) => {
        console.log("Delete Service", bookingId)
        if (bookingId && email) {
            axios.get(`http://localhost:8080/deleteBookingService/?bookingId=${bookingId}&email=${email}`)
                .then(function (response) {
                    console.log(response);
                    console.log("backend res after delete", response.data);
                    setBookingData(response.data)
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }


    return (
        <div>

            <div className="mt-2 overflow-x-auto bg-white border border-gray-200">
                <table className="w-full divide-y-2 divide-gray-200 text-sm">
                    <thead>
                        <tr>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                Service Done
                            </th>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                Booking Id
                            </th>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                Name
                            </th>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                Email
                            </th>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                Address
                            </th>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                Phone
                            </th>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                Vehicle Id
                            </th>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                Location
                            </th>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                Hours
                            </th>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                Payment_intent
                            </th>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                Start Date
                            </th>
                        </tr>
                    </thead>
                    {
                        <tbody className="divide-y divide-gray-200">
                            {
                                bookingData?.map(bD => (
                                    <tr
                                    // onClick={() => {
                                    //     console.log("Booking", bD)
                                    // }}
                                    >
                                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                            <button className='bg-sky-500 hover:bg-sky-700 px-4 py-1 rounded-lg'
                                                onClick={() => deleteService(bD.bookingId, bD.email)}
                                            >Yes</button>
                                        </td>
                                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{bD?.bookingId}</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-ellipsis">{bD?.name}</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{bD?.email}</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-ellipsis">{bD?.address}</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{bD?.phone}</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{bD?.vehicleId}</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-ellipsis">{bD?.location}</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{bD?.hours}</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-ellipsis">{bD?.payment_intent}</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-ellipsis">{bD?.startDate}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    }
                </table>
            </div>

        </div >
    )
}
