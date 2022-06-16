import './App.css';
import Header from "./components/Header";
import Main from "./components/Main"
import Basket from "./components/Basket";
import data from "./data";
import {useState} from "react";
function App() {
  const {products} = data;
  const [cartItem,setCartItem] = useState([])
  const onAdd = (products) =>{
    const exist = cartItem.find((x)=>(x.id===products.id))
    if (exist){
      setCartItem(cartItem.map(x => x.id ===products.id ? {...exist,qty:exist.qty+1} : x))
    }else{
      setCartItem([...cartItem,{...products,qty:1}])
    }
    <div key={products.id}></div>
  }
  return (
    <div className="">
    <Header/>
      <div className="row">
        <Main onAdd = {onAdd} products ={products}/>
        <Basket cartItem = {cartItem}/>
      </div>
    </div>
  );
}

export default App;
