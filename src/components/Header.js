import React, {useState} from 'react';

export default function Header(props) {

    const [stateName, setStateNAme] = useState("Index")

    const checkState=(val) =>{
        console.log({val})

        if (val==="Index"){
            return "Home Page"
        }
        else if(val==="SignIn") {
            return "Sign In"
        }
        else if(val==="Register") {
            return "Sign Up"
        }
        else
            return "Others"
    }
    return (
        <header className="block row center">
            <div>
                <a href={"#/"} onClick={(onclick)=>setStateNAme("Index")}>
                    <div className="row">
                        <img className="small" src="/favicon.ico" alt="icon"/>
                        <h1>Meena Bazar</h1>
                    </div>
                </a>
            </div>
            <div className="center">
                <h1>{checkState(stateName)}</h1>
            </div>
            <div>
                <a onClick={(onclick)=>setStateNAme("SignIn")} href="#/signIn">SignIn</a>
                <> </>
                <a href="#/Register" onClick={(onclick)=>setStateNAme("Register")} >Register</a>
            </div>
        </header>
    );
}