import React from 'react';
import AuthNavBar from "../components/navbar/AuthNavBar";
import {Outlet, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {LOGIN, LOGOUT} from "../redux/actions/Actions";

function AuthLayout(props) {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    let logout = useSelector((state) => state.authReducer.logout);
    console.log(logout)
    useEffect(()=>{
        if (localStorage.getItem("token") === null || localStorage.getItem("token").length===0) {
            dispatch(LOGOUT())
        }
        else{
            dispatch(LOGIN())
        }
        if (!logout)
            navigate("/dashboard")
    })
    return(
        <div>
            <AuthNavBar/>
            <h1 className={"text-center"}>Auth Layout</h1>
            <Outlet/>
        </div>
    );
}

export default AuthLayout;