import axios from 'axios';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { sessionStorageGet } from '../../functions/commonFunctions';
import '../../styles/SuccessfulPage/successfulPageStyle.css'


export default function SuccessfulPage() {

    useEffect(() => {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const params = Object.fromEntries(urlSearchParams.entries());
        const userEmail = sessionStorageGet("user-email")
        console.log("params", params)
        const userData = sessionStorageGet("user-info")
        if (userData && params) {
            const bookingInfo = { ...userData, email: userEmail, payment_intent: params.payment_intent }
            console.log("Post API", bookingInfo)

            axios.post('http://localhost:8080/bookingService', {
                ...bookingInfo
            })
                .then(function (response) {
                    console.log(response);
                    alert("Check your booking at Dashboard")
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

    }, [])

    return (
        <section className='section'>
            <div class="card">
                <div style={{ borderRadius: "200px", height: "200px", width: "200px", "background": " #F8FAF5", margin: "0 auto" }}>
                    <i class="checkmark">✓</i>
                </div>
                <h1>Success</h1>
                <p>We received your purchase request;<br /> we'll be in touch shortly!</p>
                <Link to="/dashboard">
                    <button className='button'>
                        Booking
                    </button>
                </Link>
            </div>
        </section >
    )
}
