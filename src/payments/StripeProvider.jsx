import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";
import React from 'react'
import Donate from '../pages/Donate';


const stripePromise = loadStripe("pk_test_51QglaGHwT9DkfvDR3RnSBoYjrG899ZSaM0tc1eFnv5jNA4c2FJhujQz13vLGvF9G8YMzp22liZ88IaHo7ncCg4qT00mvhqZTiW");

const StripeProvider = () => {
  return (
    <Elements stripe={stripePromise}>
      <Donate></Donate>
    </Elements>
  )
}

export default StripeProvider