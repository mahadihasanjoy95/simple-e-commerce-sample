import React, {useState} from 'react';

export default function Header(props) {

    const {changeForm,logout,logoutButton, stateNameFromApp} = props
    const [stateName, setStateNAme] = useState(stateNameFromApp)

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
                <a href={"#/"} onClick={()=>{setStateNAme("Index");changeForm("Index")}}>
                    <div className="row">
                        <img className="small" src="/favicon.ico" alt="icon"/>
                        <h1>Meena Bazar</h1>
                    </div>
                </a>
            </div>
            {/*<div className="center">*/}
            {/*    <h1>{checkState(stateName)}</h1>*/}
            {/*</div>*/}
            <div>
                <button onClick={()=>{setStateNAme("SignIn");changeForm("SignIn")}} href="#/signIn">SignIn</button>
                <> </>
                <button href="#/Register" onClick={()=>{setStateNAme("Register");changeForm("SignUp")}}>Register</button>
                <></>
                {logout===true  && localStorage.getItem('token')!=null && localStorage.getItem('token')!=""  && (<button onClick={()=>{logoutButton(false)}}>LogOut</button>)}
            </div>
        </header>
    );
}