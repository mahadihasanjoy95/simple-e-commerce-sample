import React from 'react';
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";


function PrivateRoute(children) {
    const navigate = useNavigate()
    const [logout,setLogout] = useState(false);
    useEffect(()=>{
        if (localStorage.getItem("token") === null || localStorage.getItem("token").length===0) {
            setLogout(true)
        }
        else{
            setLogout(false)
        }
    })
    return logout ? navigate("/") : children.children ;
}

export default PrivateRoute;