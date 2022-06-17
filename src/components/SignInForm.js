import React from "react";

export default function SignInForm() {
    return (
        <div className="block">
            <form className="form">
               <div>
                   <label>
                       Email or username
                       <input className="row col-2"
                           name="emailOrUsername"
                           type="text"
                       />
                   </label>
                   <br/>
                   <label>
                       Password
                       <input className="row col-1"
                           name="password"
                           type="password"
                       />
                   </label>
               </div>
                <button href="#/signIn" type="submit" onClick={()=>alert("Login not implemented")}>Log in</button>
            </form>
        </div>
    )
}