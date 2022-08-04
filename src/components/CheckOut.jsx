import React, {useEffect, useState} from 'react';
import Table from "react-bootstrap/Table";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {ADD, REMOVE, REMOVE_ONE} from "../redux/actions/Actions";

function CheckOut(props) {
    const [data, setData] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    //Get all the data from redux store
    const getdata = useSelector((state) => state.cartreducer.carts);

    const navigate = useNavigate()

    /**
     * This compare method filter carts data from store
     */
    const compare = () => {
        setData(getdata);
    }

    /**
     * This method will calculate the total price of all product and give
     * summation to the Total in cart menu
     */
    const calculateTotalPrice =()=>{
        let price = 0;
        getdata.map((e,k)=>{
            price = price + (e.price*e.qnty)
        })
        setTotalPrice(price)
    }


    useEffect(() => {
        calculateTotalPrice()
        compare();
    }, [compare,calculateTotalPrice])

    const dispatch = useDispatch();
    /**
     * Remove particular product from cart and from Redux store
     * @param e
     */
    const remove = (e) => {
        dispatch(REMOVE(e));
    }
    //Send product method add every product into redux store
    const send = (e) => {
        dispatch(ADD(e));
    }

    /**
     * Not remove all the data, just decrease the count value
     * @param e
     */
    const removeOne = (e) => {
        console.log(e)
        dispatch(REMOVE_ONE(e));
    }

    return (<>
        <div className={"container mt-2"}>
            <h2>Checkout</h2>
            <section className={"container mt-3"}>
                <div className="iteamsdetails">

                    <Table>
                        {data.map((e) => {
                            return (<div className={"details"}>
                                <div className={"items_img_1 "}>
                                    <img src={e.image}/>
                                    <p className={"text-center"}><span> <i className='fas fa-trash'
                                                                           style={{
                                                                               color: "red",
                                                                               fontSize: 20,
                                                                               cursor: "pointer"
                                                                           }}
                                                                           onClick={() => remove(e.id)}></i></span>
                                    </p>
                                </div>
                                <tr>
                                    <td><><strong>Item Name :</strong>{e.title}</>
                                        <div className={"items_img_1"}><strong>Price :</strong> ৳{e.price}</div>
                                        <div className={"items_img_1"}><strong>Total :</strong> ৳{e.price * e.qnty}
                                        </div>
                                        <div
                                            className='mt-5 d-flex justify-content-between align-items-center items_img_1'
                                            style={{
                                                width: 100, cursor: "pointer", background: "#ddd", color: "#111"
                                            }}>
                                                <span style={{fontSize: 24}}
                                                      onClick={e.qnty <= 1 ? () => remove(e.id) : () => removeOne(e)}>-</span>
                                            <span style={{fontSize: 22}}>{e.qnty}</span>
                                            <span style={{fontSize: 24}} onClick={() => send(e)}>+</span>
                                        </div>
                                        <br/>
                                    </td>


                                </tr>

                            </div>)
                        })}
                        <tr className={"items_img_1"}>
                            <h2><strong>Total :</strong> {totalPrice}</h2>
                        </tr>
                    </Table>

                </div>
            </section>
        </div>
    </>);
}

export default CheckOut;