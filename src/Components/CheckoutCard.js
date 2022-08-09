import * as React from 'react';
import { styled} from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { deepPurple } from '@mui/material/colors';
import { makeStyles} from '@mui/styles'
import DeleteIcon from '@mui/icons-material/Delete';
import GoogleFontLoader from 'react-google-font-loader';
import NoSsr from '@mui/base/NoSsr';
import cx from 'clsx';
import Badge from '@mui/material/Badge';
import { Icon } from '@mui/material';
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

export default function Product({product : { name, productType, image, price, rating, description, avatar, tallas}}) {
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
            S/. {price}
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
      
      <CardActions disableSpacing className={classes.cardActions}>
        <div className={classes.cardRating}>
        <IconButton aria-label="share">
          {Array(rating)
          .fill()
          .map((_, i) =>(
            <p>&#11088;</p>
          ))}
        </IconButton>
        </div>
        <IconButton>
          <DeleteIcon fontSize='large'/>
        </IconButton>
        
      </CardActions>
      
    </Card>
    </div>
  );
}


const useStyles = makeStyles((theme) =>({
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
    minWidth: 280,
    marginLeft: "10px",
    opacity: 0.91,
    paddingInline: 7
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
      },
      cardActions:{
        display: "flex",
        justifyContent: "space-between",
        textAlign: "center"
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