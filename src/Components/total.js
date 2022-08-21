import React from 'react';
import accounting from 'accounting';
import { makeStyles } from '@mui/styles'
import Button from '@mui/material/Button'
import { getBasketTotal } from '../reducer'
import { useStateValue } from '../StateProvider';
import { Link } from "react-router-dom";


const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "20vh",
    fontSize: "45px",
    color: "#395776",


  },
  button: {
    marginTop: "2rem"
  }
}))

const Total = () => {
  const classes = useStyle()
  const [{ basket }] = useStateValue();
  return (
    <div className={classes.root}>
      <h5>Total items: {basket?.length}</h5>
      <h5> {accounting.formatMoney(getBasketTotal(basket), "PEN ")} </h5>
      <Link to="/checkout">
        <Button className={classes.button} variant="contained" color="info">
          Check out
        </Button>
      </Link>
    </div>
  )
}

export default Total