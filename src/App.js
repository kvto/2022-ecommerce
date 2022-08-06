import Product from "../src/Components/Product"
import Navbar from "../src/Components/Navbar"
import { makeStyles} from '@mui/styles';
import './App.css';

function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Navbar />
     <Product className={classes.navbar}/>
    </div>
  );
}

const useStyles = makeStyles(() =>({
  app: {
      margin: '10px',
  },
  navbar:{
    marginTop: '10px'
  }
}));

export default App;
