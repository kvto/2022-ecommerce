import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { makeStyles} from '@mui/styles';
import log from "../image/D31.png"
import ShoppingCart from '@mui/icons-material/AddShoppingCart';
import { Badge } from '@mui/material';

export default function Navbar() {
    const classes = useStyles();

  return (
    <div className={classes.root}>
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" style={{backgroundColor: "#f0e0e3"}}className={classes.menuButton} >
        <Toolbar className={classes.toolBar}>
          <IconButton>
            <img src={log} 
            alt="D31" 
            width={"50px"}
            margin={"1000px"}
            className={classes.image}/>
          </IconButton>
          <Typography color="#913f6e" variant="h6" component="div" sx={{ flexGrow: 1 }}  >
            Welcome💥
          </Typography>
          <Button color="warning" className={classes.buttonLogin} variant="outlined">
            <strong>Sign In 📨</strong>
          </Button>
          <IconButton>
            <Badge badgeContent={2} color="warning">
              <ShoppingCart fontSize="large" aria-label="show cart items" style={{color: "#913f6e"}}/>
            </Badge>

          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>    

    </div>
    
  );
}


const useStyles = makeStyles(() =>({
    image: {
        marginRight: "10px",
        borderradius: "20px",

    },
    appBar:{
        backgroundColor: '#e5fcfb',
    },
    buttonLogin:{
        backgroundColor:"#913f6e"
    },
    toolBar:{
      height: '20px' 
    },
    root:{
      flexGrow: 1,
      marginBottom: "2rem"
    },
    menuButton:{
      height:"90px" 
    }
  }));