import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";


// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render..
// This is your test publishable API key..

import '../styles/FormStyle/PaymentFormStyle/paymentStyle.css'

export default function PaymentForm({ userInfo }) {
    const stripePromise = loadStripe("pk_test_51Ie1JhBHVweerPiKD5ZiauHVxaum4XV1yLjMsUHfkMPf2T7UKNlyHOJ0u0JDpztqmYSfu9R9nRsTA8gydkmksxSr00UdXEF7bv");
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        const cData = { clientSecret: 'pi_3Ml2b0BHVweerPiK1sJIEAKm_secret_nxcmOmekaYQYuurRGkumnuCvL' }
        try {
            fetch("http://localhost:8080/create-payment-intent", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log("Data", data)
                    // setClientSecret(cData)
                    setClientSecret(data.clientSecret)
                    // setClientSecret("sk_test_51Ie1JhBHVweerPiK6OwuH7Le6GhqvqT902IKfI31hUySxJe9VIKrea23SBrYdndy2Btyx539mTZqHlEUJ02MttrN00pUQ5cz5F")
                });
        } catch (error) {
            console.log("Api call error")
            setClientSecret(cData)
        }
    }, []);

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };

    return (
        <div className="">
            <h1 className="p-2 text-center">Payment</h1>
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm userInfo={userInfo} />
                </Elements>
            )}
        </div>

    )
}
