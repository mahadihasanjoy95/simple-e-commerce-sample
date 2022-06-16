import React from 'react';

export default function Product(props) {
    const {product} = props;
    return (
        product.map((product)=>(
            <div>
                <img className="small" src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <div>${product.price}</div>
                <div>
                    <button>Add To Cart</button>
                </div>
            </div>
        ))
    );
}