import React from 'react';
import {Outlet} from "react-router-dom";
import DashboardNavBar from "../components/navbar/DashboardNavBar";
function DashboardLayout(props) {
    return (
        <div>
            <DashboardNavBar/>
            <h1 className={"text-center"}>Dashboard Layout</h1>
            <Outlet/>
        </div>
    );
}

export default DashboardLayout;