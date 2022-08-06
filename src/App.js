import './App.css';
import AuthLayout from "./layouts/AuthLayout";
import {Route, Routes} from "react-router-dom";
import SignUpForm from "./components/pages/SignUpForm";
import LoginForm from "./components/pages/LoginForm";
import React from "react";
import Error from "./Error";
import DashboardLayout from "./layouts/DashboardLayout";
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./components/pages/Dashboard";
import ItemDetails from "./components/pages/ItemDetails";
import ProductDetails from "./components/pages/ProductDetails";
import CheckOut from "./components/pages/CheckOut";


function App() {

    return (<div className={"App"}>
        <Routes>
            <Route path={"/"} element={<AuthLayout/>}>
                <Route index element={<LoginForm/>}></Route>
                <Route path={"signUp"} element={<SignUpForm/>}></Route>
            </Route>
            <Route path="/dashboard" element={<PrivateRoute><DashboardLayout><Dashboard/></DashboardLayout></PrivateRoute>}></Route>
            <Route path="/dashboard/itemDetails/:id" element={<PrivateRoute><DashboardLayout><ItemDetails/></DashboardLayout></PrivateRoute>}></Route>
            <Route path="/dashboard/productDetails/:id" element={<PrivateRoute><DashboardLayout><ProductDetails/></DashboardLayout></PrivateRoute>}></Route>
            <Route path="/dashboard/checkout" element={<PrivateRoute><DashboardLayout><CheckOut/></DashboardLayout></PrivateRoute>}></Route>
            <Route path={"*"} element={<Error/>}></Route>
        </Routes>
    </div>);
}

export default App;
