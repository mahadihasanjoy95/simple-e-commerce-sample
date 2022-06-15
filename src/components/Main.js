import React from 'react';

export default function Main(props) {
    const {products} = props
    return (
        <main className="block col-2">
            <h2>Products</h2>
            <div className="row">
                {products.map((p)=>(
                    <div key= {p.id}>
                        <div>
                        <img className="small" src={p.image} alt={p.name} />
                        </div>

                        <div>
                        <h3>{p.name}</h3>
                        <p>${p.price}</p>
                        </div>

                    </div>
                ))}
            </div>
        </main>
    );
}