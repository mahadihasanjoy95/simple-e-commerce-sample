import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {Badge} from "@mui/material";

import Menu from '@mui/material/Menu';
import {useSelector} from "react-redux";
import Table from "react-bootstrap/Table";
import {NavLink} from "react-router-dom";

function DashboardNavBar(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const getData = useSelector((state)=>state.cartreducer.carts);
    return (
        <Navbar bg="dark" variant="dark" style={{ height: "60px",padding:"5px 20px"}}>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/itemDetails">Item Details</Nav.Link>
                        <Nav.Link href="/auth/logIn">Login</Nav.Link>
                    </Nav>
                <Badge badgeContent={getData.length} color="primary"  id="basic-button"
                       aria-controls={open ? 'basic-menu' : undefined}
                       aria-haspopup="true"
                       aria-expanded={open ? 'true' : undefined}
                       onClick={handleClick}>
                    <i className="fa-solid fa-cart-shopping text-light" style={{fontSize:25,cursor:"pointer"}}></i>
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
                {getData.length?
                    <div className={"card_details"} style={{width:"24rem",padding:10}}>
                        <Table>
                            <thead>
                            <tr>
                                <th>Photo</th>
                                <th>Restaurant Name</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                getData.map((e)=>{
                                        return (
                                            <>
                                                <tr>
                                                    <td> <NavLink to={`/itemDetails/${e.id}`}><img src={e.imgdata} style={{width:"5rem",height:"5rem"}} onClick={handleClose}/></NavLink></td>
                                                    <td><p><strong>{e.rname}</strong></p>
                                                        <p><strong>Price: </strong>৳{e.price}</p>
                                                        <p><strong>Quantity: </strong>{e.qnty}</p>
                                                        <p style={{color:"red",cursor:"pointer", fontSize:20}}>
                                                            <i className={"fas fa-trash smalltrash"}></i>
                                                        </p>
                                                    </td>
                                                    <td className={"mt-5"} style={{color:"red",cursor:"pointer", fontSize:20}}>
                                                        <i className={"fas fa-trash largetrash"}></i>
                                                    </td>
                                                </tr>
                                            </>
                                        )
                                    })
                            }
                            <p className={"text-center"}> <strong>Total :</strong>৳300 </p>
                            </tbody>
                        </Table>
                    </div>:

                    <div className={"card_details d-flex justify-content-center align-items-center"} style={{padding:10,position:"relative"}}>
                        <i className={"fas fa-close smallclose"} style={{position:"absolute", top:2,right:20,fontSize:23, cursor:"pointer"}} onClick={handleClose}></i>
                        <p style={{fontSize:20}}>Your Cart Is Empty!!</p>
                        <img src="/cart.gif" alt={""} className={"emptycart_img"} style={{width:"4rem",padding:10}}/>
                    </div>

                }
            </Menu>

                </Navbar>
    );
}

export default DashboardNavBar;