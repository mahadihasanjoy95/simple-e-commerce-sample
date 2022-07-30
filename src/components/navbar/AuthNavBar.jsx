import React from 'react'
import {Nav, Navbar} from "react-bootstrap";


function AuthNavBar(props) {
    return (  <div>
        <Navbar bg="dark" variant="dark">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/auth/signUp">SignUp</Nav.Link>
                    <Nav.Link href="/auth/logIn">LogIn</Nav.Link>
                </Nav>
        </Navbar>
    </div>);
}

export default AuthNavBar;