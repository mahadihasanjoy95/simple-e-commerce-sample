import React from 'react';

export default function Basket(props) {
    const {cartItem,onAdd, onRemove} = props
    const itemPrice = cartItem.reduce((a,c)=>a+c.price*c.qty,0);
    const taxPrice = itemPrice*0.14
    const deliveryFee = itemPrice>2000?0:50
    const totalPrice = itemPrice + taxPrice + deliveryFee
    const list = [itemPrice,taxPrice, deliveryFee,totalPrice]
    let i =0
    const findName=(val) =>{
        if (val===0)
            return "Items Price"
        else if(val===1)
            return "Items Tax"
        else if(val===2)
            return "Delivery Fees"
        else if(val===3)
            return <strong>Total Price</strong>

    }
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
            {cartItem.length>0 &&(
                <div>
                    <hr></hr>
                        {list.map(x=>(
                            <div key={x.id} className="row">
                                <div className="col-2">
                                    {findName(i++)}
                                </div>
                                <div key={x.id} className="col-1 text-left">
                                    {i===4?<strong>{x.toFixed(2)}</strong>:<div>{x.toFixed(2)}</div>}
                                </div>
                            </div>

                        ))}
                    <hr></hr>
                    <button onClick={()=>alert("This button is not implemented")}>Checkout</button>
                </div>

            )}
        </aside>
    );
}