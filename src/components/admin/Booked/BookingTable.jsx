import React, { useState } from 'react'
import CustomModal from '../../shared/Modal/CustomModal'

export default function BookingTable({ bookingData }) {
    const [openModal, setOpenModal] = useState(false)
    const [selectedRow, setSelectedRow] = useState({})
    return (
        <div>

            <div className="mt-2 overflow-x-auto bg-white border border-gray-200">
                <table className="w-full divide-y-2 divide-gray-200 text-sm">
                    <thead>
                        <tr>
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

                    <tbody className="divide-y divide-gray-200">
                        {
                            bookingData?.map(bD => (
                                <tr onClick={() => {
                                    console.log("Booking", bD)
                                    setOpenModal(true)
                                    setSelectedRow(bD)
                                }}>
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
                </table>
            </div>
            {
                openModal &&
                <CustomModal />
            }
        </div>

    )
}
