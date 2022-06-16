import React from 'react';

export default function Basket(props) {
    const {cartItem,onAdd, onRemove} = props
    console.log({cartItem})
    return (
        <aside className="block col-1">
            <h2>Cart Items</h2>
            {cartItem.length===0 &&(<div>Cart Is Empty</div>)}
            {cartItem.map(item =>(
                <div key={item.id} className="row">
                    <div className="col-2">{item.name}</div>
                        <div className="col-2">
                            <button onClick={()=>onAdd(item)} className="add" >+</button>
                            <button onClick={()=>onRemove(item)} className="remove" >-</button>
                        </div>
                        <div className="col-2">
                            {item.qty} X ${item.price.toFixed(2)}
                        </div>
                </div>

            ))}
        </aside>
    );
}