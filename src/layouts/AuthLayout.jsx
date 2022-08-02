import React from 'react';
import AuthNavBar from "../components/navbar/AuthNavBar";
import {Outlet} from "react-router-dom";

function AuthLayout(props) {
    return (
        <div>
            <AuthNavBar/>
            <h1 className={"text-center"}>Auth Layout</h1>
            <Outlet/>
        </div>
    );
}

export default AuthLayout;