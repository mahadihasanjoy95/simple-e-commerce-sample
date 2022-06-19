import './App.css';
import Header from "./components/Header";
import Main from "./components/Main"
import Basket from "./components/Basket";
import data from "./data";
import {useState} from "react"
import SignInForm from "./components/SignInForm";
function App() {
  const {products} = data;
  const [cartItem,setCartItem] = useState([])
  const [containerForm,setContainerForm] = useState("Index")
  const onAdd = (products) =>{
    const exist = cartItem.find((x)=>(x.id===products.id))
    if (exist){
      setCartItem(cartItem.map(x => x.id ===products.id ? {...exist,qty:exist.qty+1} : x))
    }else{
      setCartItem([...cartItem,{...products,qty:1}])
    }
  }

  const onRemove = (products) =>{
    const exist = cartItem.find((x)=>(x.id===products.id))
    if (exist.qty===1){setCartItem(cartItem.filter((x)=>(x.id!==products.id)))
    }else{
      setCartItem(cartItem.map(x => x.id ===products.id ? {...exist,qty:exist.qty-1} : x))
    }
  }
   const signInButtom = (val) => {
    setContainerForm(val)
     {console.log("###########Test First : #########"+containerForm,val)}
  }

  return (
    <div className="">
    <Header signInButtom = {signInButtom} state = "Index"/>
      <div>
        {containerForm==="Index" &&(<div><div className="row col-2"><Main onAdd = {onAdd} products ={products}/> <Basket cartItem = {cartItem} onAdd = {onAdd} onRemove = {onRemove}/></div></div>)}
        {containerForm==="SignIn" &&(<div className="center"><SignInForm/></div>)}
      </div>
    </div>
  );
}

export default App;
