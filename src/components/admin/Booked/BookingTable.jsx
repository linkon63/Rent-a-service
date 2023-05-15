import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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
                <CustomModal setOpenModal={setOpenModal} heading={"Service order information"}>
                    <div>
                        <div className="p-6 py-12 dark:bg-violet-400 dark:text-gray-900">
                            <div className="container mx-auto">
                                <div className="flex flex-col lg:flex-row items-center justify-between">
                                    <h2 className="text-center text-6xl tracking-tighter font-bold">Give review :</h2>
                                    <div className="space-x-2 text-center py-2 lg:py-0">
                                        <span> of your taken service </span>
                                        {/* <span className="font-bold text-lg">MAMBA</span> */}
                                    </div>
                                    {/* <a href="/#" rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400">Shop Now</a> */}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center w-full">
                            <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
                            <div className="flex flex-col items-center py-6 space-y-3">
                                <span className="text-center">How was your experience?</span>
                                <div className="flex space-x-3">
                                    <button type="button" title="Rate 1 stars" aria-label="Rate 1 stars">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    </button>
                                    <button type="button" title="Rate 2 stars" aria-label="Rate 2 stars">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    </button>
                                    <button type="button" title="Rate 3 stars" aria-label="Rate 3 stars">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    </button>
                                    <button type="button" title="Rate 4 stars" aria-label="Rate 4 stars">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    </button>
                                    <button type="button" title="Rate 5 stars" aria-label="Rate 5 stars">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-gray-600">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col w-full">
                                <textarea rows="3" placeholder="Message..." className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"></textarea>
                                <button type="button" className="py-4 my-8 font-semibold rounded-md dark:text-gray-900 dark:bg-violet-400">Leave feedback</button>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <Link rel="noopener noreferrer" to="/home" className="text-sm dark:text-gray-400">Maybe later</Link>
                        </div>
                        {/* <form class="space-y-6" action="#">
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                            </div>
                            <div class="flex justify-between">
                                <div class="flex items-start">
                                    <div class="flex items-center h-5">
                                        <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                                    </div>
                                    <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                                </div>
                                <a href="/">Lost Password?</a>
                            </div>
                            <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                            <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                                Not registered? <a href="/#" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                            </div>
                        </form> */}
                    </div>
                </CustomModal>
            }
        </div>

    )
}
