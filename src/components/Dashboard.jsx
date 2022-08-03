import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useDispatch} from "react-redux";
import {ADD} from "../redux/actions/Actions";
import  {client2,API_LIST} from "../ApiConfig";
import {useNavigate} from "react-router-dom";


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
        client2.get(API_LIST.FAKE_PRODUCTS,{
            headers: {
                // 'Authorization': `Bearer ${access_token}`
            }}).then((response) => {
                setProduct(response.data)
        });
    }, []);
    const navigate = useNavigate()

    return (<div className={"container mt-3"}>
        <div className={"row d-flex justify-content-center align-items-center"}>
            {product.map((element, id) => {
                return (<Card key={id} style={{width: '22rem', border: "none"}} className="mx-2 mt-4 card_style">
                    <Card.Img onClick={()=>navigate(`/dashboard/productDetails/${element.id}`)} variant="top" src={element.image} style={{height: "16rem",cursor:"pointer"}} className={"mt-3"}/>
                    <Card.Body>
                        <Card.Title>{element.title}</Card.Title>
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