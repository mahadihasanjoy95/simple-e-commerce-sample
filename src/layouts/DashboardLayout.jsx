import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";
import DashboardNavBar from "../components/navbar/DashboardNavBar";

function DashboardLayout(props) {

    return (<div>
        <DashboardNavBar/>
        <Outlet/>
    </div>);
}

export default DashboardLayout;