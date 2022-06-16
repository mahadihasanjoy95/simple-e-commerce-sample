import React from 'react';
import Product from "./Product";

export default function Main(props) {
    const {products} = props
    return (
        <main className="block col-2">
            <h2>Products</h2>
            <div className="row">
                <Product product = {products}/>
            </div>
        </main>
    );
}