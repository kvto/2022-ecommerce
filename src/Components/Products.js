import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Product from '../Components/Product'

import products from '../product-data'

export default function Products() {
  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        {
          products.map(product =>(
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
          <Product key={product.id} product={product}/>
          </Grid>

          ))
        }
      </Grid>
    </Box>

    </div>
    
  );
}

