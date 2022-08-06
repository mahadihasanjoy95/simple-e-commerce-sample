import React from 'react';
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {LOGIN, LOGOUT} from "./redux/actions/Actions";


function PrivateRoute(children) {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    let logout = useSelector((state) => state.authReducer.logout);
    useEffect(()=>{
        if (localStorage.getItem("token") === null || localStorage.getItem("token").length===0) {
            dispatch(LOGOUT())
        }
        else{
            dispatch(LOGIN())
        }
    })
    return logout ? navigate("/") : children.children ;
}

export default PrivateRoute;