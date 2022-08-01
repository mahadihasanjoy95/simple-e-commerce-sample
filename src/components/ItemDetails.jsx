import React, {useEffect, useState} from 'react';
import Table from 'react-bootstrap/Table'
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {REMOVE} from "../redux/actions/Actions";

function ItemDetails(props) {
    const [data, setData] = useState([])
    console.log(data)
    const {id} = useParams()
    const getdata = useSelector((state) => state.cartreducer.carts);
    const navigate = useNavigate()
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
    const remove = (e) => {
        dispatch(REMOVE(e));
        navigate("/")
    }

    return (<>
            <div className={"container mt-2"}>
                <h2>Item Details</h2>
                <section className={"container mt-3"}>
                    <div className="iteamsdetails">
                        {data.map((e) => {
                            return (<>
                                    <div className={"items_img"}>
                                        <img src={e.imgdata}/>
                                    </div>
                                    <div className={"details"}>
                                        <Table>
                                            <tr>
                                                <td><p><strong>Restaurant :</strong>{e.rname}</p>
                                                    <p><strong>Price :</strong> ৳{e.price}</p>
                                                    <p><strong>Dishes :</strong> {e.address}</p>
                                                    <p><strong>Total :</strong> ৳{e.price}</p>
                                                </td>
                                                <td>
                                                    <p><strong>Rating :</strong><span style={{
                                                        background: "green",
                                                        color: "#fff",
                                                        padding: "2px 5px",
                                                        borderRadius: "5px"
                                                    }}> {e.rating} ★</span></p>

                                                    <p><strong>Order Review :</strong><span>{e.somedata}</span></p>

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