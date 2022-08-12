import React from 'react';
import accounting from 'accounting';
import { makeStyles} from '@mui/styles'
import Button from '@mui/material/Button'
import {getBasketTotal} from '../reducer'
import {useStateValue} from '../StateProvider';


const useStyle = makeStyles((theme) =>({
root:{
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "20vh",
  fontSize: "45px",
  color: "#ffff"

},
button:{
  marginTop: "2rem"
}
}))

const Total = () => {
  const classes = useStyle()
  const [{basket}, dispatch] = useStateValue();
  return (
    <div className={classes.root}>
        <h5>Total items: {basket?.length}</h5>
        <h5> {accounting.formatMoney(getBasketTotal(basket), "PEN ")} </h5>
        <Button className={classes.button} variant="contained" color="secondary">
            Check out
        </Button>
    </div>
  )
}

export default Total