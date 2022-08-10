import Product from "../src/Components/Product"
import Total from "./Components/Total"
import Checkout from "../src/Components/CheckoutPage"
import Navbar from "../src/Components/Navbar"
import { makeStyles} from '@mui/styles';
import Products from "../src/Components/Products";
import './App.css';

function App() {

  return (
    <div>
      <Navbar />
       <Checkout />    
      {/* <Product /> 
     {/* <Product className={classes.navbar}/> */}
    </div>
  );
}



export default App;
