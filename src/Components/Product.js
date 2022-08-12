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
import {useStateValue} from '../StateProvider'
import GoogleFontLoader from 'react-google-font-loader';
import NoSsr from '@mui/base/NoSsr';
import accounting from 'accounting';
import cx from 'clsx';
import Badge from '@mui/material/Badge';
import {actionTypes} from '../reducer'
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

export default function Product({product : { id, name, productType, image, price, rating, description, avatar, tallas}}) {
  const classes = useStyles();
  const [{basket}, dispatch] = useStateValue();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const addToBasket = () => {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
        id,
        avatar,
        name,
        tallas,
        productType,
        price,
        rating,
        image,
        description
      }
    })
  }
  return (
<div className={classes.section}>
    <NoSsr>
        <GoogleFontLoader fonts={[{ font: family, weights: [900, 700] }]} />
      </NoSsr>
    <Card sx={{ maxWidth: 200 }} className={cx(classes.card)} style={{backgroundColor: "#9975aa"}}>
      
      <CardHeader style={{color: "#ffff"}} className={classes.header}
        avatar={
          <Avatar sx={{ bgcolor: deepPurple[400] }} aria-label="recipe">
            {avatar}
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
            fontWeight= "bold"
            fontFamily= "Comic Sans">
            {accounting.formatMoney(price, "PEN ")}
          </Typography>
        }
        title={productType}
        subheader={tallas}
        fontFamily= "Comic Sans"
      />
      <CardMedia
        className={classes.media}
        component="img"
        height="194"
        image= {image}
        alt=" "
      />
      <CardContent className={classes.cardcontent}>
        <Typography variant="body" color="white">
          {name}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to Cart" onClick={addToBasket}>
          <AddShoppingCart fontSize='large' />
        </IconButton>
        <IconButton aria-label="share">
          {Array(rating)
          .fill()
          .map((_, i) =>(
            <p>&#11088;</p>
          ))}
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
            {description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>
  );
}


const useStyles = makeStyles((theme) =>({
  media:{
    weight: "90px",
    height: "270px",
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
    minWidth: 260,
    marginLeft: "10px",
    opacity: 0.91,
    },
    header:{
      height: "60px",
        },
    cardcontent:{
      backgroundColor: "#913f6e",
      borderRadius: 10,
    },
    section:{
      // backgroundImage: `url(${image})`,


      },
      body: {
        color: "#ffff"
      },
      precio:{
        display:"flex",
        position: "relative",
        margin: "10px",
        fontFamily: "Comic Sans"
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