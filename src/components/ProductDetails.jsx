import React, {useState} from 'react';
import Table from "react-bootstrap/Table";
import {useEffect} from "react";
import {API_LIST, client2} from "../ApiConfig";
import {useParams} from "react-router-dom";

function ProductDetails(props) {
    const [data,setData] = useState({})
    console.log(data)
    const {id} = useParams()

    useEffect(() => {
        client2.get(API_LIST.FAKE_PRODUCTS+"/"+id,{
            headers: {
            }}).then((response) => {
            // console.log(response.data)
            setData(response.data)
        });
    }, []);
    return (
        <div>
            <div className={"container mt-2"}>
                <h2>Item Details</h2>
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
                                            <br/>
                                            <><strong>Dishes :</strong> {data.address}</>
                                            <br/>

                                        </td>
                                        <td>
                                            {/*<p><strong>Rating :</strong><span style={{*/}
                                            {/*    background: "green",*/}
                                            {/*    color: "#fff",*/}
                                            {/*    padding: "2px 5px",*/}
                                            {/*    borderRadius: "5px"*/}
                                            {/*}}> {data.rating.rate} ★</span></p>*/}

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