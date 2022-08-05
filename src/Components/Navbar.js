import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles} from '@mui/styles';
import log from "../image/D31.png"

export default function Navbar() {
    const classes = useStyles();

  return (

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor: "#f0e0e3"}}>
        <Toolbar className={classes.toolBar}>
          <IconButton className={classes.menuButton}
            size="large"
            edge="start"
            color="warning"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img src={log} 
            alt="D31" 
            width={"56px"}
            borderRadius={"80px 20px"}
            className={classes.image}/>
            <MenuIcon color="#913f6e"/>
          </IconButton>
          <Typography color="#913f6e" variant="h6" component="div" sx={{ flexGrow: 1 }} >
            News
          </Typography>
          <Button color="warning" className={classes.buttonLogin}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>    
  );
}


const useStyles = makeStyles(() =>({
    image: {
        marginRight: "10px",
        borderradius: "20px"
    },
    appBar:{
        backgroundColor: '#e5fcfb',
    },
    buttonLogin:{
        backgroundColor:"#913f6e"
    }
  }));