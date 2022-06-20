import './App.css';
import Header from "./components/Header";
import Main from "./components/Main"
import Basket from "./components/Basket";
import data from "./data";
import {useEffect, useState} from "react"
import SignInForm from "./components/SignInForm";


import SignUpForm from "./components/SignUpForm";
function App() {

  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });
  const [products,setProducts] = useState([])
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
  }
  const signUpButton = (val) => {
    setContainerForm(val)
    console.log(val)
  }



  useEffect(() => {
    let auth =  localStorage.getItem('token');
    setAppState({ loading: true });
    const apiUrl = `https://spring-boot--signin-jwt.herokuapp.com/procuct/getAll`;
    fetch(apiUrl,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Content-Length": "<calculated when request is sent>",
        "Host": "<calculated when request is sent>",
        'Authorization': "Bearer " + auth
      }
    })
        .then((res) => res.json())
        .then((repos) => {
          console.log("Response From BackEnd:::"+repos.result)
          setProducts(repos.result);
        });
  }, [setAppState]);


  return (
    <div className="">
    <Header signInButtom = {signInButtom} signUpButton = {signUpButton} state = "Index"/>
      <div>
        {containerForm==="Index" &&(<div><div className="row col-2"><Main onAdd = {onAdd} products ={products}/> <Basket cartItem = {cartItem} onAdd = {onAdd} onRemove = {onRemove}/></div></div>)}
        {containerForm==="SignIn" &&(<div className="center"><SignInForm/></div>)}
        {containerForm==="SignUp" &&(<div className="center"><SignUpForm/></div>)}
      </div>
    </div>
  );
}

async function fetchData() {
  try {
    let auth =  localStorage.getItem('token');
    let result = await fetch("https://spring-boot--signin-jwt.herokuapp.com/procuct/getAll", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Content-Length": "<calculated when request is sent>",
        "Host": "<calculated when request is sent>",
        'Authorization': "Bearer " + auth
      }
    })
    result = await result.json()
    result = JSON.stringify(result)
    var obj = JSON.parse(result);
    console.log("Online Data"+obj.result)
  } catch (err) {
    alert(err)
  }
}
export default App;
