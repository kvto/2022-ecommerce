import { Divider, Typography } from '@mui/material'
import { Elements, CardElement, useStripe, useelements} from "@stripe/react-stripe-js"
import React from 'react'
import Review from './Review'
import {loadStripe} from "@stripe/stripe-js"

const stripePromise = loadStripe("pk_test_51LYcsLCC8ihmzqlnLhbfkvqVkMobnIHChrf0m1KDmcFNj7iMBv7i0GXQvDJpuEhLWsoTQHSmhUT7rZe03ZpqQlyY00VL5SlJdv")

const PaymentForm = (backStep, nextStep) => {
  return (
    <>
    <Review />
    <Divider />
    <Typography variant="h6" gutterBottom style={{margin: "20px 0"}}>Payment method</Typography>
    <Elements stripe={stripePromise}>

    </Elements>
    </>
  )
}

export default PaymentForm