import axios from "axios";

export const API_LIST =
   {
        SIGN_UP:"/user/signUp",
        SIGN_IN: "/user/signIn",
        WELCOME: "/"
    }


const client = axios.create({
    baseURL: "https://spring-boot--signin-jwt.herokuapp.com"
    // baseURL: "http://localhost:8080"
});
export default client