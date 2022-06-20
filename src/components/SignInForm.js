import React, {useState} from "react";


export default function SignInForm() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function login() {
        console.log(email, password)
        let item = {email, password}
        // let result = await fetch("https://spring-boot--signin-jwt.herokuapp.com/user/signIn", {
        try{
            let result = await fetch("https://spring-boot--signin-jwt.herokuapp.com/user/signIn", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Content-Length": "<calculated when request is sent>",
                    "Host": "<calculated when request is sent>"
                },
                body: JSON.stringify(item)
            })

            result = await result.json()
            // console.log("Result######" + result)
            result = JSON.stringify(result)
            var obj = JSON.parse(result);
            localStorage.setItem("token", obj.jwt)
            alert(obj.jwt)
        }catch (err){
            alert(err)
        }
    }

    return (
        <div className="col-sm-6 offset-sm-3">
            <form className="form block">
                <div className="">
                    <input onChange={(e) => (setEmail(e.target.value))} className="form-control" type="text"
                           placeholder="Email"/>
                    <br/>
                    <input onChange={(e) => (setPassword(e.target.value))} className="form-control"
                           placeholder="Password" type="password"/>
                </div>
                <button href="#/signIn" type="submit" onClick={() => login()}>Log in</button>
            </form>
        </div>
    )
}