
import CheckoutPage from "../src/Components/CheckoutPage"
import Checkout from "./Components/CheckoutForm/Checkout"
import Navbar from "../src/Components/Navbar"
import Products from "../src/Components/Products";
import './App.css';
import { Routes, Route} from "react-router-dom";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import { useEffect } from "react";
import {actionTypes} from "./reducer";
import {useStateValue} from "./StateProvider";
import firebaseApp from '../src/firebase';
import { getAuth} from 'firebase/auth';
const auth = getAuth(firebaseApp)

function App() {
  const [{user}, dispatch] = useStateValue()
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      console.log(authUser);
      if(authUser){
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        })
      }
    })
  },[])

  return (
    <div>
      <Navbar />
      <Routes>
      <Route path="/checkout-page"  element={<CheckoutPage  />} />
      <Route path="/checkout"  element={<Checkout  />} />
      <Route path="/"element={<Products  />} /> 
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      </Routes>
      </div>  
  );
}

export default App;
