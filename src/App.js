import './App.css';
import Header from "./components/Header";
import Main from "./components/Main"
import Basket from "./components/Basket";
import data from "./data";
import {useState} from "react";
function App() {
  const {products} = data;
  const [cartItem,setCartItem] = useState([])
  return (
    <div className="">
    <Header/>
      <div className="row">
        <Main products ={products}/>
        <Basket cartItem = {cartItem}/>
      </div>
    </div>
  );
}

export default App;
