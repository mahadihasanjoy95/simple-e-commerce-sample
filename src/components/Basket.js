import React from 'react';

export default function Basket(props) {
    const {cartItem} = props
    return (
        <aside className="block col-1">
            <h2>Cart Items</h2>
            {cartItem.length===0 &&(<div>Cart is Not Empty</div>)}
        </aside>
    );
}