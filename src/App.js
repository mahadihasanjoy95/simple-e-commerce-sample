import './App.css';
import AuthLayout from "./layouts/AuthLayout";
import {Route, Routes} from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import React from "react";
import Error from "./Error";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./components/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useField} from "formik";
import ItemDetails from "./components/ItemDetails";
import ProductDetails from "./components/ProductDetails";


function App() {

    return (<div className={"App"}>
        <Routes>
            <Route path={"/"} element={<AuthLayout/>}>
                <Route index element={<LoginForm/>  }></Route>
                <Route path={"signUp"} element={<SignUpForm/>}></Route>
            </Route>
            <Route path={"/dashboard"} element={<DashboardLayout/>}>
                <Route index element={<Dashboard/>}></Route>
                <Route path={"itemDetails/:id"} element={<ItemDetails/>}></Route>
                <Route path={"productDetails/:id"} element={<ProductDetails/>}></Route>
            </Route>
            <Route path={"*"} element={<Error/>}></Route>
        </Routes>
    </div>);
}

export default App;
