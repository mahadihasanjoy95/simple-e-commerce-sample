import './App.css';
import Header from "./components/Header";
import Main from "./components/Main"
import Basket from "./components/Basket";
import {useEffect, useState} from "react"
import SignInForm from "./components/SignInForm";

import SignUpForm from "./components/SignUpForm";

function App() {

    const [appState, setAppState] = useState({
        loading: false,
        repos: null,
    });
    const [products, setProducts] = useState([])
    const [cartItem, setCartItem] = useState([])
    const [containerForm, setContainerForm] = useState("Index")
    const [logout, setLogout] = useState(true)
    const onAdd = (products) => {
        const exist = cartItem.find((x) => (x.id === products.id))
        if (exist) {
            setCartItem(cartItem.map(x => x.id === products.id ? {...exist, qty: exist.qty + 1} : x))
        } else {
            setCartItem([...cartItem, {...products, qty: 1}])
        }
    }
    const [stateNameFromApp, setStateNameFromApp] = useState("Index")


    const onRemove = (products) => {
        const exist = cartItem.find((x) => (x.id === products.id))
        if (exist.qty === 1) {
            setCartItem(cartItem.filter((x) => (x.id !== products.id)))
        } else {
            setCartItem(cartItem.map(x => x.id === products.id ? {...exist, qty: exist.qty - 1} : x))
        }
    }
    const changeForm = (val) => {
        setContainerForm(val)
        setStateNameFromApp(val)
    }
    const logoutButton = (val) => {
        localStorage.setItem('token', "")
        setLogout(val)
        setProducts([])
        alert("Logged Out!!")
        window.location.reload(false);
    }

    useEffect(() => {
        let auth = localStorage.getItem('token');
        setAppState({loading: true});
        const apiUrl = `https://spring-boot--signin-jwt.herokuapp.com/procuct/getAll`;
        fetch(apiUrl, {
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
                console.log("Response From BackEnd:::" + repos.result)
                setProducts(repos.result);
            }, (error) => {
                setProducts([]);
                alert("Login First To See Products!!!")
            });
    }, [setAppState]);


    return (
        <div className="">
            <Header changeForm={changeForm} state="Index" logoutButton={logoutButton} logout={logout}
                    stateNameFromApp={stateNameFromApp}/>
            <div>
                {containerForm === "Index" && (<div>
                    <div className="row col-2"><Main onAdd={onAdd} products={products}/> <Basket cartItem={cartItem}
                                                                                                 onAdd={onAdd}
                                                                                                 onRemove={onRemove}/>
                    </div>
                </div>)}
                {containerForm === "SignIn" && (<div className="center"><SignInForm changeForm={changeForm}/></div>)}
                {containerForm === "SignUp" && (<div className="center"><SignUpForm changeForm={changeForm}/></div>)}
            </div>
        </div>
    );
}

export default App;
