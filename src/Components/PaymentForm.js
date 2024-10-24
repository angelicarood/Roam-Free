import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function PaymentForm() {
    const [success, setSuccess] = useState(false);
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();

    // Define CARD_OPTIONS
    const CARD_OPTIONS = {
        style: {
            base: {
                fontSize: '16px',
                color: '#32325d',
                letterSpacing: '0.025em',
                padding: '10px',
                // Add more styles as needed
            },
            invalid: {
                color: '#fa755a',
                iconColor: '#fa755a',
            },
        },
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return; // Stripe hasn't loaded yet
        }

        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: cardElement,
        });

        if (!error) {
            try {
                const { id } = paymentMethod;
                const response = await axios.post("http://localhost:4000/payment", {
                    amount: 1000, // cents
                    id,
                });

                if (response.data.success) {
                    console.log("Successful payment");
                    setSuccess(true);
                    navigate("/payment-success"); // Redirect to the payment success page
                }
            } catch (error) {
                console.error("Payment error:", error);
            }
        } else {
            console.error("Stripe error:", error.message);
        }
    };

    return (
        <>
            {!success ? (
                <form onSubmit={handleSubmit}>
                    <fieldset className="FormGroup">
                        <div className="FormRow">
                            <CardElement options={CARD_OPTIONS} />
                        </div>
                    </fieldset>
                    <button type="submit" disabled={!stripe}>Pay</button>
                </form>
            ) : (
                <div>Payment Successful!</div>
            )}
        </>
    );
}
