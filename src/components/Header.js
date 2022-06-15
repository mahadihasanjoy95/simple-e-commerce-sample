import React from 'react';

export default function Header(props) {
    return (
        <header className="block row center">
            <div>
                <a href={"#/"}>
                    <h1>Small Shopping Cart</h1>
                </a>
            </div>
            <div>
                <a href="#/signIn">SignIn</a>
                <a href="#/cart">Cart</a>
            </div>
        </header>
    );
}