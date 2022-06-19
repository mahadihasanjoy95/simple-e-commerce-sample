import React, {useState} from "react";


export default function SignInForm() {

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
     async function login(){
        console.log(username,password)
         let item = {username,password}
        let result = await fetch("http://localhost:8080/api/auth/signin",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(item)
        })
         result = await result.json()
         console.log(result)
         localStorage.setItem("userInfo",JSON.stringify(result))
         alert(JSON.stringify(result))
    }
    return (
        <div className="col-sm-6 offset-sm-3">
            <form className="form block">
               <div className="">
                       <input onChange={(e)=>(setUsername(e.target.value))} className="form-control" type="text" placeholder="Email"/>
                   <br/>
                       <input onChange={(e)=>(setPassword(e.target.value))} className="form-control" placeholder="Password" type="password"/>
               </div>
                <button href="#/signIn" type="submit" onClick={()=>login()}>Log in</button>
            </form>
        </div>
    )
}