import React from 'react'

export default function BookingTable({ bookingData }) {

    return (
        <div class="mt-2 overflow-x-auto bg-white border border-gray-200">
            <table class="w-full divide-y-2 divide-gray-200 text-sm">
                <thead>
                    <tr>
                        <th
                            class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Booking Id
                        </th>
                        <th
                            class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Name
                        </th>
                        <th
                            class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Email
                        </th>
                        <th
                            class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Address
                        </th>
                        <th
                            class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Phone
                        </th>
                        <th
                            class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Vehicle Id
                        </th>
                        <th
                            class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Location
                        </th>
                        <th
                            class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Hours
                        </th>
                        <th
                            class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Payment_intent
                        </th>
                    </tr>
                </thead>

                <tbody class="divide-y divide-gray-200">
                    {
                        bookingData?.map(bD => (
                            <tr onClick={() => {
                                console.log("Booking", bD)
                            }}>
                                <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{bD?.bookingId}</td>
                                <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-ellipsis">{bD?.name}</td>
                                <td class="whitespace-nowrap px-4 py-2 text-gray-700">{bD?.email}</td>
                                <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-ellipsis">{bD?.address}</td>
                                <td class="whitespace-nowrap px-4 py-2 text-gray-700">{bD?.phone}</td>
                                <td class="whitespace-nowrap px-4 py-2 text-gray-700">{bD?.vehicleId}</td>
                                <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-ellipsis">{bD?.location}</td>
                                <td class="whitespace-nowrap px-4 py-2 text-gray-700">{bD?.hours}</td>
                                <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-ellipsis">{bD?.payment_intent}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
