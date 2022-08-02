import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useDispatch} from "react-redux";
import {ADD} from "../redux/actions/Actions";
import client, {API_LIST} from "../ApiConfig";


function Dashboard(props) {

    //This product list hold all the product after fetching from backend
    const [product,setProduct] = useState([])

    const dispatch = useDispatch();
    //Send product method add every product into redux store
    const send = (e) => {
        dispatch(ADD(e));
    }

    useEffect(() => {
        let access_token = localStorage.getItem("token");
        console.log(access_token)
        client.get(API_LIST.GET_PRODUCTS,{
            headers: {
                'Authorization': `token ${access_token}`
            }}).then((response) => {
                setProduct(response.data.result)
        });
    }, []);

    return (<div className={"container mt-3"}>
        <div className={"row d-flex justify-content-center align-items-center"}>
            {product.map((element, id) => {
                return (<Card key={id} style={{width: '22rem', border: "none"}} className="mx-2 mt-4 card_style">
                    <Card.Img variant="top" src={element.image} style={{height: "16rem"}} className={"mt-3"}/>
                    <Card.Body>
                        <Card.Title>{element.name}</Card.Title>
                        <Card.Text>
                            Price: ৳{element.price}
                        </Card.Text>
                        <div className="button_div d-flex justify-content-center">
                            <Button variant="primary" className='col-lg-12' onClick={() => send(element)}>Add to
                                cart </Button>
                        </div>

                    </Card.Body>
                </Card>)
            })}
        </div>
    </div>);
}

export default Dashboard;