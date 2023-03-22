import React, { useEffect, useState } from 'react'
import { Field, Form, Formik } from 'formik'
import { sessionStorageGet, sessionStorageStore } from '../../functions/commonFunctions';
import { checkoutForm } from '../../validations/validationSchema';
import PaymentForm from '../../forms/PaymentForm';
import axios from 'axios';

export default function CheckoutPage({ serviceData, routeId, initialValues }) {
    // control state
    const [buttonDisable, setButtonDisable] = useState(false)
    // const [initialValues, setInitialValues] = useState({
    //     name: '', phone: '', location: '', hours: '', address: '', startDate: "", endDate: ""
    // })
    const [userInfo, setUserInfo] = useState({})
    const [sectionHide, setSectionHide] = useState(false)

    // control functions
    const handleSubmit = (values) => {
        console.log("Values", values)
        setUserInfo(values)
        sessionStorageStore("user-info", { ...values, vehicleId: routeId })
        // setSectionHide(true) // future it will comment if payment not work


        // TODO: Comment this out if payment not working 
        // send data to the db if payment method is not work
        // const userData = sessionStorageGet("user-info")
        // const userEmail = sessionStorageGet("user-email")

        // if (userData) {
        //     const bookingInfo = { ...userData, email: userEmail, payment_intent: Math.random() }
        //     console.log("Post API", bookingInfo)

        //     axios.post('http://localhost:8080/bookingService', {
        //         ...bookingInfo
        //     })
        //         .then(function (response) {
        //             console.log(response);
        //             alert("Check your booking at Dashboard")
        //             window.location.replace("http://localhost:3000/admin/booked")
        //         })
        //         .catch(function (error) {
        //             console.log(error);
        //         });
        // }

    }
    return (

        <div className='mt-2 flex justify-center'>
            <section>
                <div class="grid grid-cols-1 md:grid-cols-2">
                    <div class="bg-gray-50 py-12 md:py-24">
                        <div class="space-y-8 px-4 lg:px-8">
                            <div class="flex items-center gap-4">
                                <span class="h-10 w-10 rounded-full bg-blue-700"></span>
                                <div className='w-90'>
                                    <h2 class="font-medium text-gray-900">{serviceData?.name}   </h2>
                                </div>
                            </div>
                            <div>
                                <img src={serviceData?.image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                            </div>

                            <div>
                                <p class="text-2xl font-medium tracking-tight text-gray-900">
                                    ${serviceData?.price}/perHour
                                </p>

                                <p class="mt-1 text-sm text-gray-600">For the purchase of</p>
                            </div>

                            <div>
                                <div class="flow-root">
                                    <ul class="-my-4 divide-y divide-gray-100">
                                        <li class="flex items-center gap-4 py-4">

                                            <div>
                                                <h1>Review section</h1>
                                                {/* <img
                                                    src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                                                    alt=""
                                                    class="h-16 w-16 rounded object-cover"
                                                /> */}
                                            </div>
                                            <div>
                                                {/* <h3 class="text-sm text-gray-900">Basic Tee 6-Pack</h3>

                                                <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
                                                    <div>
                                                        <dt class="inline">Size:</dt>
                                                        <dd class="inline">XXS</dd>
                                                    </div>

                                                    <div>
                                                        <dt class="inline">Color:</dt>
                                                        <dd class="inline">White</dd>
                                                    </div>
                                                </dl> */}
                                            </div>
                                        </li>
                                        {/* 
                                        <li class="flex items-center gap-4 py-4">
                                            <img
                                                src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                                                alt=""
                                                class="h-16 w-16 rounded object-cover"
                                            />

                                            <div>
                                                <h3 class="text-sm text-gray-900">Basic Tee 6-Pack</h3>

                                                <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
                                                    <div>
                                                        <dt class="inline">Size:</dt>
                                                        <dd class="inline">XXS</dd>
                                                    </div>

                                                    <div>
                                                        <dt class="inline">Color:</dt>
                                                        <dd class="inline">White</dd>
                                                    </div>
                                                </dl>
                                            </div>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white py-12 md:py-24">
                        <div class="px-4 lg:px-8">
                            {
                                !sectionHide ?
                                    <Formik
                                        initialValues={{ ...initialValues }}
                                        validationSchema={checkoutForm}
                                        validateOnChange={true}
                                        onSubmit={async (values) => {
                                            handleSubmit(values)
                                            console.log("Submit form")
                                        }}
                                    >
                                        {({ errors }) => {
                                            const first = Object.keys(errors)[0];
                                            console.log("Formik Error", errors)
                                            return <Form>
                                                <div className="pb-2">
                                                    <label
                                                        class="block text-xs font-medium text-gray-700"
                                                    >
                                                        Name *
                                                    </label>
                                                    <Field
                                                        type="text"
                                                        name="name"
                                                        placeholder="Name"
                                                        className="mt-1 w-full rounded-md border-gray-200 shadow-lg sm:text-lg p-1 px-3"
                                                    />
                                                </div>

                                                <div className="pb-2 w-full flex justify-between">
                                                    <div>
                                                        <label
                                                            class="block text-xs font-medium text-gray-700"
                                                        >
                                                            Phone *
                                                        </label>
                                                        <Field
                                                            type="phone"
                                                            name="phone"
                                                            placeholder="Phone"
                                                            className="mt-1 w-full rounded-md border-gray-200 shadow-lg sm:text-lg p-1 px-3"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label
                                                            class="block text-xs font-medium text-gray-700"
                                                        >
                                                            Location
                                                        </label>
                                                        <Field
                                                            type="text"
                                                            name="location"
                                                            placeholder="Location"
                                                            className="mt-1 w-full rounded-md border-gray-200 shadow-lg sm:text-lg p-1 mx-1 px-1"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="pb-2">
                                                    <label
                                                        class="block text-xs font-medium text-gray-700"
                                                    >
                                                        Hours *
                                                    </label>
                                                    <Field
                                                        type="number"
                                                        name="hours"
                                                        placeholder="Hours"
                                                        className="mt-1 w-full rounded-md border-gray-200 shadow-lg sm:text-lg p-1 mx-1 px-1"
                                                    />
                                                </div>

                                                <div className="pb-2">
                                                    <label
                                                        class="block text-xs font-medium text-gray-700"
                                                    >
                                                        Address *
                                                    </label>
                                                    <Field
                                                        type="text"
                                                        name="address"
                                                        placeholder="Address"
                                                        className="mt-1 w-full rounded-md border-gray-200 shadow-lg sm:text-lg p-1 mx-1 px-1"
                                                    />
                                                </div>

                                                <div className="pb-2">
                                                    <label
                                                        class="block text-xs font-medium text-gray-700"
                                                    >
                                                        Booking Start Date *
                                                    </label>
                                                    <Field
                                                        type="date"
                                                        name="startDate"
                                                        className="mt-1 w-full rounded-md border-gray-200 shadow-lg sm:text-lg p-1 mx-1 px-1"
                                                    />
                                                </div>
                                                {/* <div className="pb-2">
                                                    <label
                                                        class="block text-xs font-medium text-gray-700"
                                                    >
                                                        Booking End Date *
                                                    </label>
                                                    <Field
                                                        type="date"
                                                        name="endDate"
                                                        className="mt-1 w-full rounded-md border-gray-200 shadow-lg sm:text-lg p-1 mx-1 px-1"
                                                    />
                                                </div> */}
                                                {
                                                    errors.name && <div className='text-end'>{errors.name}</div>
                                                }
                                                {
                                                    errors.phone && <div className='text-end'>{errors.phone}</div>
                                                }
                                                {
                                                    errors.hours && <div className='text-end'>{errors.hours}</div>
                                                }
                                                {
                                                    errors.address && <div className='text-end'>{errors.address}</div>
                                                }
                                                {
                                                    errors.startDate && <div className='text-end'>{errors.startDate}</div>
                                                }
                                                <div className="mt-2">
                                                    <button type='submit'
                                                        className="block w-full p-2 text-sm rounded-full bg-blue-700 hover:bg-indigo-600 focus:outline-none">
                                                        Next
                                                    </button>
                                                </div>
                                            </Form>
                                        }
                                        }

                                    </Formik>
                                    :
                                    <div>
                                        <PaymentForm userInfo={userInfo} />
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>


    )
}
