import axios from "axios";

export const API_LIST = {
    WELCOME: "/",

    //USER
    SIGN_UP: "/user/signUp", SIGN_IN: "/user/signIn",

    //Products
    GET_PRODUCTS: "/product/getAll", CREATE_PRODUCTS: "/product/create", FAKE_PRODUCTS:"/products"
}


const client = axios.create({
    baseURL: "https://spring-boot--signin-jwt.herokuapp.com"
    // baseURL: "http://localhost:8080"
});
export const client2 = axios.create({
    baseURL: "https://fakestoreapi.com"
    // baseURL: "https://spring-boot--signin-jwt.herokuapp.com"
    // baseURL: "http://localhost:8080"
});
export default client
