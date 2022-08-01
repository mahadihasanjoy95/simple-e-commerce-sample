import React from 'react'
import {Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom"


function AuthNavBar(props) {
    return (<div>
        <Navbar bg="dark" variant="dark" style={{height: "60px", padding: "5px 20px"}}>
            <Nav className="me-auto">
                <NavLink to="/" className="text-decoration-none text-light mx-3">Home</NavLink>
                <NavLink to="/auth/signUp" className="text-decoration-none text-light mx-3">SignUp </NavLink>
                <NavLink to="/auth/logIn" className="text-decoration-none text-light mx-3">LogIn</NavLink>
            </Nav>
        </Navbar>
    </div>);
}

export default AuthNavBar;