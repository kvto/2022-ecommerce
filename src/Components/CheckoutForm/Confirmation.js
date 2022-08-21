import { Divider, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'

const Confirmation = ({message}) => {
  return (
    <>
        <Typography variant='h6'>{message}</Typography>
        <Divider/>
        <Typography variant="subtitle2" gutterBottom>
            {message === "Succesful Payment"
            ? "Your booking reference : Rgh63455233gdf"
        : ""}
        </Typography>
        <Button component={Link} to="/" variant='outlined'type='button'>Back Home ⬅</Button>
    </>
  )
}

export default Confirmation