import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";

import '../styles/FormStyle/PaymentFormStyle/paymentStyle.css'
import { sessionStorageGet } from "../functions/commonFunctions";
import Loader from "../shared/Loader/Loader";


export default function CheckoutForm({ userInfo }) {
  const stripe = useStripe();
  const elements = useElements();

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  console.log(sessionStorageGet("user-info"))
  useEffect(() => {
    setIsLoading(true);
    if (!stripe) {
      setIsLoading(false);
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      setIsLoading(false)
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });

    setIsLoading(false)
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    console.log("Payment Successfully", userInfo)
    console.log("userInfo", userInfo)
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      console.log("Payment !stripe || !elements")
      setIsLoading(false)
      return;
    }

    // setIsLoading(true);
    await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:3000/successful",
      },
    }).then(function (result) {
      console.log("result", result)
      alert("Payment success")
      if (result.error) {
        // Inform the customer that there was an error.
      }
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    // if (error.type === "card_error" || error.type === "validation_error") {
    //   setMessage(error.message);
    //   console.log("error.message", error.message)
    // } else {
    //   setMessage("An unexpected error occurred.");
    //   console.log("An unexpected error occurred.")
    // }

    // setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs"
  }

  return (
    <div>
      {
        // isLoading ? <Loader /> :
        <form id="payment-form" onSubmit={handleSubmit}>
          <LinkAuthenticationElement
            id="link-authentication-element"
            onChange={(e) => setEmail(e.target.value)}
            email={email}
          />
          <PaymentElement id="payment-element" options={paymentElementOptions} />
          <button disabled={isLoading || !stripe || !elements} id="submit" className="payButton">
            <span id="button-text">
              {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
            </span>
          </button>
          {/* Show any error or success messages */}
          {message && <div id="payment-message">{message}</div>}
        </form>
      }
    </div>
  );
}