import { Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { allBusData, allCarsData, allTrucksData } from '../../data/projectdata'
import PaymentForm from '../../forms/PaymentForm'
import { sessionStorageStore } from '../../functions/commonFunctions'
import Footer from '../Footer/Footer'
import CheckoutPage from './CheckoutPage'

const car = allCarsData
const bus = allBusData
const truck = allTrucksData

export default function BookingService() {
    // controls global variable
    let { pathname } = useLocation();
    const serviceName = pathname.split('/')[2]
    const routeId = pathname.split('/')[3]
    const filteredCar = car.filter(data => data.id == routeId)[0]
    const filteredBus = bus.filter(data => data.id == routeId)[0]
    const filteredTruck = truck.filter(data => data.id == routeId)[0]
    // constrol state
    const [buttonDisable, setButtonDisable] = useState(false)
    const [userInfo, setUserInfo] = useState({})
    const [serviceData, setServiceData] = useState({})
    // constrols useeffect
    // useEffect(() => {
    //     if (filteredCar) {
    //         console.log("Car")
    //         setServiceData(filteredCar)
    //     }
    //     if (filteredBus) {
    //         console.log("Bus")
    //         setServiceData(filteredBus)
    //     }
    //     if (filteredTruck) {
    //         console.log("Truck")
    //         setServiceData(filteredTruck)
    //     }

    // }, [])

    // const handleSubmit = (values) => {
    //     console.log("Values", values)
    //     setUserInfo(values)
    //     setButtonDisable(true)
    //     sessionStorageStore("user-info", { ...values, vehicleId: routeId })
    // }

    // logs ref
    // console.log("serviceName", serviceName)
    // console.log("routeId", routeId)
    // console.log("car", car)
    // console.log("filteredCar", filteredCar)

    return (

        <div className='w-100'>
            {
                serviceName == 'car' &&
                filteredCar &&
                <CheckoutPage serviceData={filteredCar} key={Math.random()} routeId={routeId} />
            }
            <Footer />
            {
                //    <div class="grid grid-cols-3 100vh" style={{ height: '100vh' }}>
                //         <div className='flex items-center justify-center w-100 h-100 bg-white'>

                //             {
                //                 serviceName == 'car' &&
                //                 filteredCar &&
                //                 <div className='flex items-center justify-center '>
                //                     <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100" key={filteredCar.id}>
                //                         <h5 className="text-3xl font-semibold tracking-wide text-center pb-1 pt-1">Safe journey Sir!</h5>
                //                         <img src={filteredCar.image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                //                         <div className="flex flex-col justify-between p-6 space-y-8">
                //                             <div className="space-y-2">
                //                                 <h2 className="text-3xl font-semibold tracking-wide">{filteredCar.name}</h2>
                //                                 <p className="dark:text-gray-100">{filteredCar.describe}</p>
                //                             </div>
                //                             <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">
                //                                 {/* <Link to={`/bookingService/${car.id}`}>Book Now</Link> */}
                //                             </button>
                //                         </div>
                //                     </div>
                //                 </div>

                //             }
                //             {
                //                 serviceName == 'bus' &&
                //                 filteredBus &&
                //                 <div className='flex items-center justify-center h-100 w-100'>
                //                     <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100 h-100 w-100" key={filteredBus.id}>
                //                         <h5 className="text-3xl font-semibold tracking-wide text-center pb-1 pt-1">Safe journey Sir!</h5>
                //                         <img src={filteredBus.image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                //                         <div className="flex flex-col justify-between p-6 space-y-8">
                //                             <div className="space-y-2">
                //                                 <h2 className="text-3xl font-semibold tracking-wide">{filteredBus.name}</h2>
                //                                 <p className="dark:text-gray-100">{filteredBus.describe}</p>
                //                             </div>
                //                             <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">
                //                                 {/* <Link to={`/bookingService/${car.id}`}>Book Now</Link> */}
                //                             </button>
                //                         </div>
                //                     </div>
                //                 </div>

                //             }
                //             {
                //                 serviceName == 'truck' &&
                //                 filteredTruck &&
                //                 <div className='flex items-center justify-center '>
                //                     <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100" key={filteredTruck.id}>
                //                         <h5 className="text-3xl font-semibold tracking-wide text-center pb-1 pt-1">Safe journey Sir!</h5>
                //                         <img src={filteredTruck.image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                //                         <div className="flex flex-col justify-between p-6 space-y-8">
                //                             <div className="space-y-2">
                //                                 <h2 className="text-3xl font-semibold tracking-wide">{filteredTruck.name}</h2>
                //                                 <p className="dark:text-gray-100">{filteredTruck.describe}</p>
                //                             </div>
                //                             <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">
                //                                 {/* <Link to={`/bookingService/${car.id}`}>Book Now</Link> */}
                //                             </button>
                //                         </div>
                //                     </div>
                //                 </div>

                //             }
                //         </div>

                //         <div className='flex items-center justify-center'>
                //             <div>

                //                 <h1 className='bg-white text-center text-2xl p-2 text-black'>Your information</h1>

                //                 <Formik
                //                     initialValues={{
                //                         name: '',
                //                         phone: '',
                //                         location: '',
                //                         hours: '',
                //                         address: '',
                //                     }}
                //                     validate={false}
                //                     onSubmit={async (values) => {
                //                         handleSubmit(values)
                //                     }}
                //                 >
                //                     <Form>
                //                         <div className="pb-2 pt-4">
                //                             <Field
                //                                 type="text"
                //                                 name="name"
                //                                 placeholder="Name"
                //                                 className="block w-full p-4 text-lg rounded-sm bg-black"
                //                                 disabled={buttonDisable}
                //                             />
                //                         </div>
                //                         <div className="pb-2 pt-4 w-full flex justify-between">
                //                             <Field
                //                                 type="phone"
                //                                 name="phone"
                //                                 placeholder="Phone"
                //                                 className="block w-full p-4 text-lg rounded-sm bg-black w-2/4 mr-2"
                //                                 disabled={buttonDisable}
                //                             />
                //                             <Field
                //                                 type="text"
                //                                 name="location"
                //                                 placeholder="location"
                //                                 className="block w-full p-4 text-lg rounded-sm bg-black w-2/4 ml-2"
                //                                 disabled={buttonDisable}
                //                             />
                //                         </div>
                //                         <div className="pb-2 pt-4">
                //                             <Field
                //                                 type="number"
                //                                 name="hours"
                //                                 placeholder="Hours"
                //                                 className="block w-full p-4 text-lg rounded-sm bg-black"
                //                                 disabled={buttonDisable}
                //                             />
                //                         </div>
                //                         <div className="pb-2 pt-4">
                //                             <Field
                //                                 type="text"
                //                                 name="address"
                //                                 placeholder="Address"
                //                                 className="block w-full p-4 text-lg rounded-sm bg-black"
                //                                 disabled={buttonDisable}
                //                             />
                //                         </div>
                //                         <div className="px-4 pb-2 pt-4">
                //                             <button type='submit'
                //                                 disabled={buttonDisable}
                //                                 className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none">
                //                                 Next
                //                             </button>
                //                         </div>
                //                     </Form>
                //                 </Formik>
                //             </div>
                //         </div>

                //         <div className='flex items-center justify-center w-100 bg-white' style={{ background: "#A78BFA" }}>
                //             <PaymentForm userInfo={userInfo} />
                //         </div>
                //     </div>
            }

        </div>

    )
}
