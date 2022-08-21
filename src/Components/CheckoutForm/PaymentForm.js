import { CircularProgress, Divider, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import { Elements, CardElement, useStripe, useElements} from "@stripe/react-stripe-js"
import React from 'react'
import { getBasketTotal } from '../../reducer'
import { useStateValue } from '../../StateProvider'
import {accounting} from "accounting"
import Review from './Review'
import {loadStripe} from "@stripe/stripe-js"
import axios from "axios"
import { actionTypes } from '../../reducer';
import { useState } from 'react'

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
  const [loading, setLoading] = useState(false);
  const [{basket, paymentMessage}, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async(e) =>{
    e.preventDefault();
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    });
    setLoading(true);
    if(!error){
      const {id} = paymentMethod;
      try{
    const { data} = await axios.post("http://localhost:3001/api/checkout",{
        id,
        amount: getBasketTotal(basket) * 100,
      });
      dispatch({
        type:actionTypes.SET_PAYMENT_MESSAGE,
        paymentMessage: data.message
      });
        dispatch({
          type: actionTypes.EMPTY_BASKET,
          basket:[],
        })
      
      elements.getElement(CardElement).clear();
      nextStep();
      }catch(error){
      console.log(error)
      nextStep();
      }
      setLoading(false)
    }
    }
return (
  <form onSubmit={handleSubmit}>
    <CardElement options={CARD_ELEMENT_OPTIONS}/>
    <div style={{display: "flex", justifyContent: "space-between", marginTop: "1rem"}}>
       <Button variant='outlined' onClick={backStep}>Back</Button> 
      <Button disabled={false} type='submit' variante='contained'
      color='primary'> {
      loading ? (<CircularProgress/>) : (`Pay ${accounting.formatMoney(getBasketTotal(basket), "PEN ")}`)
      }</Button>
    </div>
    
  </form>
)
}

const PaymentForm = ({backStep, nextStep}) => {
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