import React, {useState} from "react";


export default function SignUpForm() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    async function signUp() {
        console.log(email, password, firstName, lastName)
        let item = {email, password, firstName, lastName}
        // let result = await fetch("https://spring-boot--signin-jwt.herokuapp.com/user/signIn", {
        try{
            let result = await fetch("https://spring-boot--signin-jwt.herokuapp.com/user/signUp", {
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
            alert(JSON.stringify(result))
        }catch (err){
            alert(err)
        }
    }

    return (
        <div className="col-sm-6 offset-sm-3">
            <form className="form block">
                <div className="">
                    <input onChange={(e) => (setFirstName(e.target.value))} className="form-control" type="text"
                           placeholder="First Name"/>
                    <br/>
                    <input onChange={(e) => (setLastName(e.target.value))} className="form-control" type="text"
                           placeholder="Last Name"/>
                    <br/>
                    <input onChange={(e) => (setEmail(e.target.value))} className="form-control" type="text"
                           placeholder="Email"/>
                    <br/>
                    <input onChange={(e) => (setPassword(e.target.value))} className="form-control"
                           placeholder="Password" type="password"/>
                </div>
                <button href="#/signUp" type="submit" onClick={() => signUp()}>Sign Up</button>
            </form>
        </div>
    )
}