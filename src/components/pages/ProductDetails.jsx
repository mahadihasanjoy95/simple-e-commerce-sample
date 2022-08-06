import React, {useState} from 'react';
import Table from "react-bootstrap/Table";
import {useEffect} from "react";
import {API_LIST, client2} from "../../ApiConfig";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {ADD, REMOVE, REMOVE_ONE, REMOVE_PRODUCT} from "../../redux/actions/Actions";

function ProductDetails(props) {
    const [data,setData] = useState({rating:{rate:0}})
    // console.log(data)
    const {id} = useParams()
    const getdata = useSelector((state) => state.cartreducer.carts);
    // console.log(getdata)
    const dispatch = useDispatch();

    function findArrayElementByTitle(array, id,object) {
        return array.find((element) => {
            if (element.id===id){
                setData(element)
                return
            }
            console.log(object)
            setData(object)
        })
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

    useEffect(() => {
        client2.get(API_LIST.FAKE_PRODUCTS+"/"+id,{
            headers: {
            }}).then((response) => {
                let lol = getdata.find(e=>{
                    return e.id == id
                });
                if (lol==undefined){
                    console.log("Here")
                    response.data.qnty = 0
                    setData(response.data)
                }else{
                    console.log("Here MOther")

                    setData(lol)
                }
        });
    }, []);
    const remove = (e) => {
        dispatch(REMOVE_PRODUCT(e));
        e.qnty = 0
        setData(e)
    }
    return (
        <div>
            <div className={"container mt-2"}>
                <h2>Product Details</h2>
                <section className={"container mt-3"}>
                    <div className="iteamsdetails">
                            <div className={"items_img"}>
                                <img src={data.image}/>
                            </div>
                            <div className={"details"}>
                                <Table>
                                    <tr>
                                        <td><><strong>Restaurant :</strong>{data.name}</>
                                            <br/>
                                            <><strong>Price :</strong> ৳{data.price}</>
                                            <><strong>Total :</strong> ৳{data.price*data.qnty}</>
                                            <br/>
                                            <div className='mt-5 d-flex justify-content-between align-items-center'
                                                 style={{
                                                     width: 100,
                                                     cursor: "pointer",
                                                     background: "#ddd",
                                                     color: "#111"
                                                 }}>
                                                <span style={{fontSize: 24}}
                                                      onClick={data.qnty <= 1 ? () => remove(data) : () => removeOne(data)}>-</span>
                                                <span style={{fontSize: 22}}>{data.qnty}</span>
                                                <span style={{fontSize: 24}} onClick={() => send(data)}>+</span>

                                            </div>
                                            <br/>
                                            <><strong>Dishes :</strong> {data.address}</>
                                            <br/>

                                        </td>
                                        <td>
                                            <p><strong>Rating :</strong><span style={{
                                                background: "green",
                                                color: "#fff",
                                                padding: "2px 5px",
                                                borderRadius: "5px"
                                            }}> {data.rating.rate} ★</span></p>

                                            <p><strong>Order Review :</strong><span>{data.description}</span></p>
                                        </td>
                                    </tr>
                                </Table>

                            </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default ProductDetails;