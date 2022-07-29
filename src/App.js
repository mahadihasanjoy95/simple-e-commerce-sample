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


function App() {

    return (<div className={"App"}>
            <Routes>
                <Route path={"/auth"} element={<AuthLayout/>}>
                    <Route path={"logIn"} element={<LoginForm/>}></Route>
                    <Route path={"signUp"} element={<SignUpForm/>}></Route>
                </Route>
                <Route path={"/"} element={<DashboardLayout/>}>
                    <Route index element={<Dashboard/>}></Route>
                </Route>
                <Route path={"*"} element={<Error/>}></Route>

            </Routes>
        </div>
    );
}

export default App;
