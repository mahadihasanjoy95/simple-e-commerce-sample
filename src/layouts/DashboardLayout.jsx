import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";
import DashboardNavBar from "../components/navbar/DashboardNavBar";
import client, {API_LIST} from "../ApiConfig";

function DashboardLayout(props) {
    const [welcome, setWelcome] = useState("<h1>DashBoard Layout</h1>");
    useEffect(() => {
        client.get(API_LIST.WELCOME).then((response) => {
            setWelcome(response.data);
        });
    }, []);
    return (<div>
        <DashboardNavBar/>
        <h1 className={"text-center"}>{welcome}</h1>
        <Outlet/>
    </div>);
}

export default DashboardLayout;