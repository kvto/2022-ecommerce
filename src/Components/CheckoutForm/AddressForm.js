import { Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button'
import {useForm, FormProvider} from 'react-hook-form'
import React from 'react'
import AddressInput from './AddressInput';

const AddressForm = () => {
  const methods = useForm();
  return (
    <>

      <Typography variant='h6' gutterBottom>Shipping address</Typography>
      <FormProvider {...methods}>
      <form>
        <Grid container spacing={3}>
          <AddressInput required name="firstName" label="First Name"/>
          <AddressInput required name="lastName" label="Last Name"/>
          <AddressInput required name="address1" label="Adress"/>
          <AddressInput required name="city" label="First Name"/>
          <AddressInput required name="postCode" label="Post Code"/>
        </Grid>
        <Button type="submit" variant="contained" color="primary">Back ⬅</Button>
        <Button type="submit" variant="contained" color="primary">Next ➡</Button>
      </form>
      </FormProvider>
     
    </>
  )
}

export default AddressForm