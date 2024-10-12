import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';


const PUBLIC_KEY = "pk_test_51PnEuQIXmkLMJ9bFUW2Rh2aDwGdbrLq1QcmNI1lcVOP5N5nbTffRty44bqxcvaGGixQdb7h5MZS7jHcjF6NlQ6TT000eC3lEkH"


const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}