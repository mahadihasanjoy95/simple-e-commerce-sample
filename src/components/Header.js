import React, {useState} from 'react';

export default function Header(props) {

    const [stateName, setStateNAme] = useState("Index")
    const {signInButtom,signUpButton} = props

    const checkState = (val) => {
        if (val === "Index") {
            return "Home Page"
        } else if (val === "SignIn") {
            return "Sign In"
        } else if (val === "Register") {
            return "Sign Up"
        } else
            return "Others"
    }
    return (
        <header className="block row center">
            <div>
                <a href={"#/"} onClick={()=>{setStateNAme("Index");signInButtom("Index")}}>
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
                <a onClick={()=>{setStateNAme("SignIn");signInButtom("SignIn")}} href="#/signIn">SignIn</a>
                <> </>
                <a href="#/Register" onClick={()=>{setStateNAme("Register");signUpButton("SignUp")}}>Register</a>
            </div>
        </header>
    );
}