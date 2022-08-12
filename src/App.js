
import Checkout from "../src/Components/CheckoutPage"
import Navbar from "../src/Components/Navbar"
import Products from "../src/Components/Products";
import './App.css';
import { Routes, Route} from "react-router-dom";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
      <Route path="/checkout-page"  element={<Checkout  />} />
      <Route path="/"element={<Products  />} /> 
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      </Routes>
      </div>  
  );
}

export default App;
