import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Field, Form, Formik, useFormikContext } from 'formik'
import { sessionStorageGet, sessionStorageRemove, sessionStorageStore } from '../../functions/commonFunctions';
import { dateConvert } from '../../functions/dateConvertFunction';
import { checkoutForm } from '../../validations/validationSchema';
import PaymentForm from '../../forms/PaymentForm';
import axios from 'axios';

const FormObserver = ({ }) => {

    const { values } = useFormikContext();
    console.log("values", values)


    return null;
};

export default function CheckoutPage({ serviceData, routeId, initialValues }) {
    // control state
    const [controlService, setControlService] = useState({})

    // const [initialValues, setInitialValues] = useState({
    //     name: '', phone: '', location: '', hours: '', address: '', startDate: "", endDate: ""
    // })
    const [userInfo, setUserInfo] = useState({})
    const [sectionHide, setSectionHide] = useState(false)

    useEffect(() => {
        try {
            const date = sqlDate()
            console.log("date local routeId", routeId)
            axios.get(`http://localhost:8080/serviceAvailable/?id=${routeId}`)
                // axios.get(`http://localhost:8080/serviceAvailable/?id=${routeId}&date=${date}`)
                .then(function (response) {
                    // handle success
                    console.log("backend response", response.data);
                    let data = { ...response.data }
                    let allBookedDates = data.allBookedDate
                    console.log("allBookedDates", allBookedDates)

                    console.log("Date Convert", dateConvert(allBookedDates[2]))
                    console.log("Today Convert", dateConvert(new Date()))

                    const foundDate = allBookedDates.find((abd) => dateConvert(abd) === dateConvert(new Date()))
                    console.log("foundDate : ", foundDate)

                    if (foundDate) {
                        data.status = true;
                        console.log("Updated Data : ", data)
                        setControlService(data)
                    } else {
                        data.status = false;
                        console.log("Updated Data : ", data)
                        setControlService(data)
                    }

                })
                .catch(function (error) {
                    // handle error
                    console.log("error", error);
                })
                .finally(function () {
                    // always executed
                });
        } catch (error) {
            console.log("fetch disable error", error)
        }
    }, [])

    // control functions
    const handleSubmit = (values) => {
        console.log("Values", values)
        setUserInfo(values)
        // sessionStorageStore("user-info", { ...values, vehicleId: routeId })
        // setSectionHide(true) // future it will comment if payment not work


        // TODO: Comment this out if payment not working 
        // send data to the db if payment method is not work
        const userData = sessionStorageGet("user-info")
        const userEmail = sessionStorageGet("user-email")

        const bookingInfo = { ...userData, email: userEmail, payment_intent: Math.random() }
        console.log("Post API", bookingInfo)

        if (userData) {
            // console.log("Post API", bookingInfo)

            axios.post('http://localhost:8080/bookingService', {
                ...bookingInfo
            })
                .then(function (response) {
                    console.log(response);
                    alert("Check your booking at Dashboard")
                    sessionStorageRemove('user-info')
                    window.location.replace("http://localhost:3000/admin/booked")
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

    }

    function sqlDate() {
        if (!Date.prototype.toUTCDate) {
            // eslint-disable-next-line no-extend-native
            Date.prototype.toUTCDate = function () {
                return this.getUTCFullYear() + '-' +
                    ('0' + (this.getUTCMonth() + 1)).slice(-2) + '-' +
                    ('0' + this.getUTCDate()).slice(-2);
            }
        }
        const sqlDate = new Date().toUTCDate()
        return sqlDate
    }




    return (

        <div className='mt-2 flex justify-center'>
            <section>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="bg-gray-50 py-12 md:py-24">
                        <div className="space-y-8 px-4 lg:px-8">
                            <div className="flex items-center gap-4">
                                <span className="h-10 w-10 rounded-full bg-blue-700"></span>
                                <div className='w-90'>
                                    <h2 className="font-medium text-gray-900">{serviceData?.name}   </h2>
                                </div>
                            </div>
                            <div>
                                <img src={serviceData?.image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                            </div>

                            <div>
                                <p className="text-2xl font-medium tracking-tight text-gray-900">
                                    ${serviceData?.price}/perHour
                                </p>

                                <p className="mt-1 text-sm text-gray-600">For the purchase of</p>
                            </div>

                            <div>
                                <div className="flow-root">
                                    <ul className="-my-4 divide-y divide-gray-100">
                                        <li className="flex items-center gap-4 py-4">

                                            <div>
                                                <h1>Review section</h1>
                                                {/* <img
                                                    src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                                                    alt=""
                                                    className="h-16 w-16 rounded object-cover"
                                                /> */}
                                            </div>
                                            <div>
                                                {/* <h3 className="text-sm text-gray-900">Basic Tee 6-Pack</h3>

                                                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                                                    <div>
                                                        <dt className="inline">Size:</dt>
                                                        <dd className="inline">XXS</dd>
                                                    </div>

                                                    <div>
                                                        <dt className="inline">Color:</dt>
                                                        <dd className="inline">White</dd>
                                                    </div>
                                                </dl> */}
                                            </div>
                                        </li>
                                        {/* 
                                        <li className="flex items-center gap-4 py-4">
                                            <img
                                                src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                                                alt=""
                                                className="h-16 w-16 rounded object-cover"
                                            />

                                            <div>
                                                <h3 className="text-sm text-gray-900">Basic Tee 6-Pack</h3>

                                                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                                                    <div>
                                                        <dt className="inline">Size:</dt>
                                                        <dd className="inline">XXS</dd>
                                                    </div>

                                                    <div>
                                                        <dt className="inline">Color:</dt>
                                                        <dd className="inline">White</dd>
                                                    </div>
                                                </dl>
                                            </div>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white py-12 md:py-24 flex justify-center items-center">
                        <div className="px-4 lg:px-8">
                            {
                                // controlService.status === false ?
                                //     <div>
                                //         <h2>You cant add today any booking of this service Please choose another one</h2>
                                //     </div>
                            }
                            {
                                !sectionHide ?
                                    (controlService.status === false) ?
                                        < Formik
                                            initialValues={{ ...initialValues }}
                                            validationSchema={checkoutForm(controlService)}
                                            validateOnChange={true}
                                            onSubmit={async (values) => {
                                                handleSubmit(values)
                                                console.log("Submit form")
                                            }}
                                        >
                                            {({ errors }) => {
                                                const first = Object.keys(errors)[0];
                                                return <div>

                                                    <Form>
                                                        <FormObserver />
                                                        <div className="pb-2">
                                                            <label
                                                                className="block text-xs font-medium text-gray-700"
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
                                                                    className="block text-xs font-medium text-gray-700"
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
                                                                    className="block text-xs font-medium text-gray-700"
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
                                                                className="block text-xs font-medium text-gray-700"
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
                                                                className="block text-xs font-medium text-gray-700"
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
                                                                className="block text-xs font-medium text-gray-700"
                                                            >
                                                                Booking Start Date *
                                                            </label>
                                                            <Field
                                                                type="date"
                                                                name="startDate"
                                                                className="mt-1 w-full rounded-md border-gray-200 shadow-lg sm:text-lg p-1 mx-1 px-1"
                                                                min={sqlDate()}
                                                            // max={controlService?.date}
                                                            />
                                                        </div>
                                                        {/* <div className="pb-2">
                                                    <label
                                                        className="block text-xs font-medium text-gray-700"
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

                                                </div>
                                            }
                                            }

                                        </Formik>
                                        :
                                        <div >
                                            <h2 className='bg-red-300 text-white font-bold border-color: rgb(127 29 29) p-2'    >You cant add today any booking of this service Please choose another one</h2>
                                            <div className='text-center border mt-2'>
                                                <Link to="/home">Go Home</Link>
                                            </div>
                                            <div className='text-center border mt-2'>
                                                <button onClick={() => {
                                                    setControlService({ ...controlService, status: false })
                                                }}>
                                                    Book for other date ?
                                                </button>
                                            </div>
                                        </div>
                                    :
                                    <div>
                                        <PaymentForm userInfo={userInfo} />
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </section >
        </div >


    )
}
