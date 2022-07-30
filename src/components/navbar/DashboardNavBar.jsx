import React from 'react';
import {Nav, Navbar, NavbarBrand} from "react-bootstrap";
import {Badge} from "@mui/material";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function DashboardNavBar(props) {
    const { classes } = props
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
                    <Nav className="ml-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/auth/logIn">Login</Nav.Link>
                    </Nav>
                <Badge badgeContent={1} color="primary"  id="basic-button"
                       aria-controls={open ? 'basic-menu' : undefined}
                       aria-haspopup="true"
                       aria-expanded={open ? 'true' : undefined}
                       onClick={handleClick}>                    <i className="fa-solid fa-cart-shopping text-light" style={{fontSize:25,cursor:"pointer"}}></i>
                </Badge>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {/*<MenuItem onClick={handleClose}>Your Cart Is Empty!!</MenuItem>*/}
                <div className={"card_details d-flex justify-content-center align-items-center"} style={{padding:10,position:"relative"}}>
                    <i className={"fas fa-close smallclose"} style={{position:"absolute", top:2,right:20,fontSize:23, cursor:"pointer"}} onClick={handleClose}></i>
                    <p style={{fontSize:20}}>Your Cart Is Empty!!</p>
                    <img src="/cart.gif" alt={""} className={"emptycart_img"} style={{width:"4rem",padding:10}}/>
                </div>
            </Menu>

                </Navbar>
    );
}

export default DashboardNavBar;