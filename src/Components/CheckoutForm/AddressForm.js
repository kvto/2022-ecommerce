import { Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button'
import {useForm, FormProvider} from 'react-hook-form'
import React from 'react'
import AddressInput from './AddressInput';
import { Link } from 'react-router-dom';
import {useStateValue} from '../../StateProvider';
import { actionTypes } from '../../reducer';


const AddressForm = ({nextStep}) => {
  const methods = useForm();
  const [{shippingData}, dispatch] = useStateValue();
  return (
    <>

      <Typography variant='h6' gutterBottom>Shipping address</Typography>
      <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(data=>{
       dispatch({
        type: actionTypes.SET_SHIPPINGDATA,
        shippingData: data,
       });
       nextStep();
      })}>
        <Grid container spacing={3}>
          <AddressInput required name="firstName" label="First Name"/>
          <AddressInput required name="lastName" label="Last Name"/>
          <AddressInput required name="address1" label="Adress"/>
          <AddressInput required name="email" label="Email"/>
          <AddressInput required name="city" label="City"/>
          <AddressInput required name="postCode" label="Post Code"/>
        </Grid>
        <div style={{display: "flex", justifyContent:"space-between", marginTop:"1rem"}}>
        <Button component={Link} to="/checkout-page">Back ⬅</Button>
        <Button type="submit" variant="contained" color="primary">Next ➡</Button>
        </div>
      </form>
      </FormProvider>
     
    </>
  )
}

export default AddressForm