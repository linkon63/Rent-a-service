import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { sessionStorageGet } from '../../functions/commonFunctions';

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
        <div className='w-full container'>

            {/* header section*/}
            <div className='flex justify-center '>
                <div className="dark:bg-gray-800 dark:text-gray-100 ">
                    <div className="max-w-6xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                        <div className="flex items-center justify-between">
                            <span className="text-sm dark:text-gray-400">Jun 1, 2020</span>
                            <a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">Javascript</a>
                        </div>
                        <div className="mt-3">
                            <a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">Nos creasse pendere crescit angelos etc</a>
                            <p className="mt-2">Tamquam ita veritas res equidem. Ea in ad expertus paulatim poterunt. Imo volo aspi novi tur. Ferre hic neque vulgo hae athei spero. Tantumdem naturales excaecant notaverim etc cau perfacile occurrere. Loco visa to du huic at in dixi aër.</p>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Read more</a>
                            <div>
                                <a rel="noopener noreferrer" href="#" className="flex items-center">
                                    <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                                    <span className="hover:underline dark:text-gray-400">Leroy Jenkins</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* table section */}
            <div className='flex justify-center border '>
                <div class="bg-white">
                    <table class="divide-y-2 divide-gray-200 text-sm border w-full">
                        <thead>
                            <tr>
                                <th
                                    class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                                >
                                    Name
                                </th>
                                <th
                                    class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                                >
                                    Date of Birth
                                </th>
                                <th
                                    class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                                >
                                    Role
                                </th>
                                <th
                                    class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                                >
                                    Salary
                                </th>
                                <th class="px-4 py-2"></th>
                            </tr>
                        </thead>

                        <tbody class="divide-y divide-gray-200">
                            <tr>
                                <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    John Doe
                                </td>
                                <td class="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
                                <td class="whitespace-nowrap px-4 py-2 text-gray-700">Web Developer</td>
                                <td class="whitespace-nowrap px-4 py-2 text-gray-700">$120,000</td>
                                <td class="whitespace-nowrap px-4 py-2">
                                    <a
                                        href="#"
                                        class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                    >
                                        View
                                    </a>
                                </td>
                            </tr>

                            <tr>
                                <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Jane Doe
                                </td>
                                <td class="whitespace-nowrap px-4 py-2 text-gray-700">04/11/1980</td>
                                <td class="whitespace-nowrap px-4 py-2 text-gray-700">Web Designer</td>
                                <td class="whitespace-nowrap px-4 py-2 text-gray-700">$100,000</td>
                                <td class="whitespace-nowrap px-4 py-2">
                                    <a
                                        href="#"
                                        class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                    >
                                        View
                                    </a>
                                </td>
                            </tr>

                            <tr>
                                <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Gary Barlow
                                </td>
                                <td class="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
                                <td class="whitespace-nowrap px-4 py-2 text-gray-700">Singer</td>
                                <td class="whitespace-nowrap px-4 py-2 text-gray-700">$20,000</td>
                                <td class="whitespace-nowrap px-4 py-2">
                                    <a
                                        href="#"
                                        class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                    >
                                        View
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>

    )
}
