import { Grid, Typography } from '@mui/material';
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
        </Grid>
      </form>
      </FormProvider>
     
    </>
  )
}

export default AddressForm