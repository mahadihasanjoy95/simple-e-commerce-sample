import React, {useEffect, useState} from 'react'
import {Nav, Navbar} from "react-bootstrap";
import {NavLink, useNavigate} from "react-router-dom"
import Button from "react-bootstrap/Button";


function AuthNavBar(props) {
    const navigate = useNavigate()
    const [logout,setLogout] = useState(false);
    const handleLogout=()=>{
        localStorage.setItem("token","")
        setLogout(true)
        navigate("/")
    }
    useEffect(()=>{
        if (localStorage.getItem("token") === null || localStorage.getItem("token").length===0) {
            setLogout(true)
        }
        else{
            setLogout(false)
        }
    })
    return (<div>
        <Navbar bg="dark" variant="dark" style={{height: "60px", padding: "5px 20px"}}>
            <Nav className="me-auto">
                {/*<NavLink to="/" className="text-decoration-none text-light mx-3">Home</NavLink>*/}
                <NavLink to="/signUp" className="text-decoration-none text-light mx-3">SignUp </NavLink>
                <NavLink to="/" className="text-decoration-none text-light mx-3">LogIn</NavLink>
            </Nav>
            {logout?<></>:<i onClick={()=>handleLogout()} className="fa-solid fa fa-sign-out text-light" style={{fontSize: 30, cursor: "pointer",padding:20}}></i>
            }
        </Navbar>
    </div>);
}

export default AuthNavBar;