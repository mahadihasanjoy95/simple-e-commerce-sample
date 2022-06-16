import React from 'react';

export default function Basket(props) {
    const {cartItem} = props
    return (
        <aside className="block col-1">
            <h2>Cart Items</h2>
            {cartItem.length===0 &&(<div>Cart is Empty</div>)}
            {cartItem.map(item =>{
                <div className="col-2 text-right">

                    <h1>Ited added</h1> {item.qty} x ${item.price.toFixed(2)}
                </div>
            })}
        </aside>
    );
}