import React, {useEffect} from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {Badge} from "@mui/material";

import Menu from '@mui/material/Menu';
import {useDispatch, useSelector} from "react-redux";
import Table from "react-bootstrap/Table";
import {NavLink, useNavigate} from "react-router-dom";
import {LOGIN, LOGOUT, REMOVE} from "../../redux/actions/Actions";

function DashboardNavBar(props) {
    const navigate = useNavigate()
    const getData = useSelector((state) => state.cartreducer.carts);
    let logout = useSelector((state) => state.authReducer.logout);
    const dispatch = useDispatch();
    // const [logout, setLogout] = useState(false);

    const handleLogout = () => {
        localStorage.setItem("token", "")
        dispatch(LOGOUT())
        navigate("/")
    }
    useEffect(() => {
        if (localStorage.getItem("token") === null || localStorage.getItem("token").length === 0) {
            dispatch(LOGOUT())
            // navigate("/")
        } else {
            dispatch(LOGIN())
        }
    })
    /**
     * Remove particular product from cart and from Redux store
     * @param e
     */
    const remove = (e) => {
        dispatch(REMOVE(e));
        //TODO: remove the navigation section and handle this navigate with product on item details page
        navigate("/dashboard")
    }


    //These states are for handling the carts menu
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleCheckout = () => {
        navigate("/dashboard/checkout")
        setAnchorEl(null);
    };

    return (
        <Navbar bg="dark" variant="dark" style={{height: "60px", padding: "5px 20px"}}>
            <Nav className="me-auto">
                <NavLink to="/dashboard" className="text-decoration-none text-light mx-3">Home</NavLink>
                <NavLink to="/" className="text-decoration-none text-light mx-3">Login</NavLink>
            </Nav>
            {logout ? <></> : <i title={"Logout"} onClick={() => handleLogout()} className="fa-solid fa fa-sign-out text-light"
                                 style={{fontSize: 30, cursor: "pointer", padding: 20}}></i>
            }
            <Badge badgeContent={getData.length} color="primary" id="basic-button"
                   aria-controls={open ? 'basic-menu' : undefined}
                   aria-haspopup="true"
                   aria-expanded={open ? 'true' : undefined}
                   onClick={handleClick}>
                <i title={"Cart"} className="fa-solid fa-cart-shopping text-light" style={{fontSize: 25, cursor: "pointer"}}></i>
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
                {getData.length ?
                    <div className={"card_details"} style={{width: "24rem", padding: 10}}>
                        <Table>
                            <thead>
                            <tr>
                                <th>Photo</th>
                                <th>Restaurant Name</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                getData.map((e) => {
                                    return (
                                        <>
                                            <tr>
                                                <td><NavLink to={`/dashboard/itemDetails/${e.id}`}><img src={e.image}
                                                                                                        style={{
                                                                                                            width: "5rem",
                                                                                                            height: "5rem"
                                                                                                        }}
                                                                                                        onClick={handleClose}/></NavLink>
                                                </td>
                                                <td><p><strong>{e.name}</strong></p>
                                                    <p><strong>Price: </strong>৳{e.price}</p>
                                                    <p><strong>Quantity: </strong>{e.qnty}</p>
                                                    <p style={{color: "red", cursor: "pointer", fontSize: 20}}>
                                                        <i className={"fas fa-trash smalltrash"}
                                                           onClick={() => remove(e.id)}></i>
                                                    </p>
                                                </td>
                                                <td className={"mt-5"}
                                                    style={{color: "red", cursor: "pointer", fontSize: 20}}>
                                                    <i className={"fas fa-trash largetrash"}
                                                       onClick={() => remove(e.id)}></i>
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })
                            }
                            {/*<p className={"text-center"}><strong>Total :</strong>৳{totalPrice} </p>*/}
                            <button onClick={() => handleCheckout()}>Checkout</button>
                            </tbody>
                        </Table>
                    </div> :

                    <div className={"card_details d-flex justify-content-center align-items-center"}
                         style={{padding: 10, position: "relative"}}>
                        <i className={"fas fa-close smallclose"}
                           style={{position: "absolute", top: 2, right: 20, fontSize: 23, cursor: "pointer"}}
                           onClick={handleClose}></i>
                        <p style={{fontSize: 20}}>Your Cart Is Empty!!</p>
                        <img src="/cart.gif" alt={""} className={"emptycart_img"} style={{width: "4rem", padding: 10}}/>
                    </div>

                }
            </Menu>

        </Navbar>
    );
}

export default DashboardNavBar;