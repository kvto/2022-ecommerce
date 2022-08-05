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
import { red } from '@mui/material/colors';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles} from '@mui/styles'
import polo from "../image/185230695_321287142672314_2980049136382795457_n.jpg";
import GoogleFontLoader from 'react-google-font-loader';
import NoSsr from '@mui/base/NoSsr';
import image from '../image/G.jpeg'
import cx from 'clsx';
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
      <CardHeader style={{color: "#ffff"}}
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <Typography
            variant='h6'
            color='white'>
            {"S/. 20.00"}
           

          </Typography>
        }
        title="Polos estampados"
       
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
    cardcontent:{
      backgroundColor: "#913f6e"
    },
    section:{
      backgroundImage: `url(${image})`,
      position: "relative",
      backgroundPosition: 'center', 
          backgroundSize: 'cover', 
          backgroundRepeat: 'no-repeat',
          height: '110vh',
          weight : '90vh'
      
      },
      body: {
        color: "#ffff"
      }
}));

