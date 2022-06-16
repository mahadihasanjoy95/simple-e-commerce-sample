import React from 'react';

export default function Basket(props) {
    const {cartItem} = props
    return (
        <aside className="block col-1">
            <h2>Cart Items</h2>
            {cartItem.length===0 &&(<div>There is no item in cart</div>)}
            {cartItem.map(item =>{
                <div className="col-2 text-right">
                    git push heroku main
                    <h1>Ited added</h1> {item.qty} x ${item.price.toFixed(2)}
                </div>
            })}
        </aside>
    );
}