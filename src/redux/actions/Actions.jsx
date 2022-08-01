export const ADD = (item)=>{
    return {
        type:"ADD_CART",
        payload: item
    }
}
export const REMOVE = (i)=>{
    return{
        type:"REMOVE_CART",
        payload: i
    }
}
