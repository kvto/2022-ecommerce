import { Divider, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import { Elements, CardElement, useStripe, useElements} from "@stripe/react-stripe-js"
import React from 'react'
import { getBasketTotal } from '../../reducer'
import { useStateValue } from '../../StateProvider'
import {accounting} from "accounting"
import Review from './Review'
import {loadStripe} from "@stripe/stripe-js"

const stripePromise = loadStripe("pk_test_51LYcsLCC8ihmzqlnLhbfkvqVkMobnIHChrf0m1KDmcFNj7iMBv7i0GXQvDJpuEhLWsoTQHSmhUT7rZe03ZpqQlyY00VL5SlJdv")

const CARD_ELEMENT_OPTIONS = {
  iconStyle: "solid",
  hidePostalCode: true,
  style: {
    base: {
      iconcolor: "rgb(240, 57, 122)",
      color: "#333",
      fontSize: "18px",
      "::placeholder":{
        color: "#ccc"
      }
    },
    invalud: {
      color: "#e5424d",
      ":focus": {
        color: "#303238"
      },
    },
  },
};

const CheckoutForm = ({backStep, nextStep}) =>{
  const [{basket}, dispatch] = useStateValue();
return (
  <form>
    <CardElement options={CARD_ELEMENT_OPTIONS}/>
    <div style={{display: "flex", justifyContent: "space-between", marginTop: "1rem"}}>
       <Button variant='outlined' onClick={backStep}>Back</Button> 
      <Button disabled={true} type='submit' variante='contained'
      color='primary'> {`Pay ${accounting.formatMoney(getBasketTotal(basket), "PEN ")}`}</Button>
    </div>
    
  </form>
)
}

const PaymentForm = (backStep, nextStep) => {
  return (
    <>
    <Review />
    <Divider />
    <Typography variant="h6" gutterBottom style={{margin: "20px 0"}}>Payment method</Typography>
    <Elements stripe={stripePromise}>
      <CheckoutForm backStep={backStep} nextStep={nextStep} />
    </Elements>
    </>
  )
}

export default PaymentForm