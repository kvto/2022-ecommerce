import React from 'react';
import accounting from 'accounting';


export const total = () => {
  return (
    <div className={classes.root}>
        <h5>Total items: 3</h5>
        <h5> {accounting.formatNumber(50, "PEN")} </h5>
        <Button className={classes.button} variant="contained" color="secondary">
            Check out
        </Button>
    </div>
  )
}
