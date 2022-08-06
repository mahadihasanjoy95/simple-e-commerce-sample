import React, {useEffect, useState} from 'react';
import Table from 'react-bootstrap/Table'
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {ADD, REMOVE, REMOVE_ONE} from "../../redux/actions/Actions";

function ItemDetails(props) {

    const [data, setData] = useState([])
    const {id} = useParams()

    //Get all the data from redux store
    const getdata = useSelector((state) => state.cartreducer.carts);

    const navigate = useNavigate()

    /**
     * This compare method filter carts data from store
     */
    const compare = () => {
        let comparedata = getdata.filter((e) => {
            return e.id == id
        });
        setData(comparedata);
    }

    useEffect(() => {
        compare();
    }, [id])

    const dispatch = useDispatch();
    /**
     * Remove particular product from cart and from Redux store
     * @param e
     */
    const remove = (e) => {
        dispatch(REMOVE(e));
        navigate("/dashboard")
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
            <h2>Cart Details</h2>
            <section className={"container mt-3"}>
                <div className="iteamsdetails">
                    {data.map((e) => {
                        return (<>
                            <div className={"items_img"}>
                                <img src={e.image}/>
                            </div>
                            <div className={"details"}>
                                <Table>
                                    <tr>
                                        <td><><strong>Restaurant :</strong>{e.title}</>
                                            <br/>
                                            <><strong>Price :</strong> ৳{e.price}</>
                                            <br/>
                                            <><strong>Dishes :</strong> {e.description}</>
                                            <br/>
                                            <><strong>Total :</strong> ৳{e.price*e.qnty}</>
                                            <div className='mt-5 d-flex justify-content-between align-items-center'
                                                 style={{
                                                     width: 100,
                                                     cursor: "pointer",
                                                     background: "#ddd",
                                                     color: "#111"
                                                 }}>
                                                <span style={{fontSize: 24}}
                                                      onClick={e.qnty <= 1 ? () => remove(e.id) : () => removeOne(e)}>-</span>
                                                <span style={{fontSize: 22}}>{e.qnty}</span>
                                                <span style={{fontSize: 24}} onClick={() => send(e)}>+</span>

                                            </div>
                                        </td>
                                        <td>
                                            <p><strong>Rating :</strong><span style={{
                                                background: "green",
                                                color: "#fff",
                                                padding: "2px 5px",
                                                borderRadius: "5px"
                                            }}> {e.rating.rate} ★</span></p>

                                            <p><strong>Order Review :</strong><span>{e.description}</span></p>

                                            <p><strong>Remove :</strong><span> <i className='fas fa-trash'
                                                                                  style={{
                                                                                      color: "red",
                                                                                      fontSize: 20,
                                                                                      cursor: "pointer"
                                                                                  }}
                                                                                  onClick={() => remove(e.id)}></i></span>
                                            </p>
                                        </td>
                                    </tr>
                                </Table>

                            </div>
                        </>)
                    })}

                </div>
            </section>
        </div>
    </>);
}

export default ItemDetails;