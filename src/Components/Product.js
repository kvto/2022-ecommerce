import * as React from 'react';
import { styled} from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { deepPurple } from '@mui/material/colors';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles} from '@mui/styles'
import polo from "../image/185230695_321287142672314_2980049136382795457_n.jpg";
import GoogleFontLoader from 'react-google-font-loader';
import NoSsr from '@mui/base/NoSsr';
import cx from 'clsx';
import Badge from '@mui/material/Badge';
const family = 'Rubik';



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Product() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
<div className={classes.section}>
    <NoSsr>
        <GoogleFontLoader fonts={[{ font: family, weights: [900, 700] }]} />
      </NoSsr>
    <Card sx={{ maxWidth: 200 }} className={cx(classes.card)} style={{backgroundColor: "#9975aa"}}>
      <CardHeader style={{color: "#ffff"}} className={classes.header} alignItems="center"
        avatar={
          <Avatar sx={{ bgcolor: deepPurple[400] }} aria-label="recipe">
            D
            <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
            >
</StyledBadge>
          </Avatar>
        }
        action={
          <Typography className={classes.precio}
            variant='h6'
            color='white'
            fontWeight= "bold">
            S/. 20.00
          </Typography>
        }
        title="Polos estampados"
        subheader="Disponible✅"
      />
      <CardMedia
        className={classes.media}
        component="img"
        height="194"
        image= {polo}
        alt="Polos de chicas"
      />
      <CardContent className={classes.cardcontent}>
        <Typography variant="body" color="white">
          Polo para Dama con distintos tipos de diseños personalizados
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to Cart">
          <AddShoppingCart fontSize='large' />
        </IconButton>
        <IconButton aria-label="share">
          {Array(4)
          .fill()
          .map((i =>(
            <p>&#11088;</p>
          )))}
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
         
          <Typography variant="body" color="white">
            Polos para damas personalizados al gusto.
            Contando con un estampado de vinil textil
            con el diseño elegido por el cliente❤
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>
  );
}


const useStyles = makeStyles(() =>({
  media:{
    weight: "90px",
    height: "260px",
    fontFamily: '"Comic Sans"',
    color: "#fff",
    fontWeight: 600,
    display: "grid",
    placeContent: "center",
    borderRadius: 10,
    
  },
  card: {
    position: 'relative',
    borderRadius: 16,
    padding: 12,
    backgroundColor: '#e5fcfb',
    minWidth: 300,
    marginLeft: "10px",
    opacity: 0.91,
    },
    header:{

        },
    cardcontent:{
      backgroundColor: "#913f6e",
      borderRadius: 10,
    },
    section:{
      // backgroundImage: `url(${image})`,
      position: "relative",
      backgroundPosition: 'center', 
          backgroundSize: 'cover', 
          backgroundRepeat: 'no-repeat',
          height: '130vh',
          maxWidth: 345,
      
      },
      body: {
        color: "#ffff"
      },
      precio:{
        display:"flex",
        position: "relative",
        margin: "100px"
      }
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    margin: '-2px',
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));