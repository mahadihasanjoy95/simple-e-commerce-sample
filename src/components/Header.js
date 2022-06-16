import React from 'react';

export default function Header(props) {
    return (
        <header className="block row center">
            <div>
                <a href={"#/"}>
                    <div className="row">
                        <img className="small" src="/favicon.ico" alt="icon"/>
                        <h1>Meena Bazar</h1>
                    </div>
                </a>
            </div>
            <div>
                <a href="#/signIn">SignIn</a>
                <a href="#/cart">Cart</a>
            </div>
        </header>
    );
}