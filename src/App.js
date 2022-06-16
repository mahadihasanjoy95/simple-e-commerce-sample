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
    // const exist = cartItem.find((x)=>(x.id===products.id))
    // if (exist){
    //   console.log()
    // }
    // <div key={products.id}></div>
    console.log({products})
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
