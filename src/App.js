
import Checkout from "../src/Components/CheckoutPage"
import Navbar from "../src/Components/Navbar"
import Products from "../src/Components/Products";
import './App.css';
import { Routes, Route} from "react-router-dom"

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
      <Route path="/checkout-page"  element={<Checkout  />} />
      <Route path="/"element={<Products  />} />  
      </Routes>
      </div>  
  );
}

export default App;
