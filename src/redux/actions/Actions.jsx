export const ADD = (item) => {
    return {
        type: "ADD_CART", payload: item
    }
}
export const REMOVE = (i) => {
    return {
        type: "REMOVE_CART", payload: i
    }
}
export const REMOVE_PRODUCT = (i) => {
    return {
        type: "REMOVE_PRODUCT", payload: i
    }
}
export const REMOVE_ONE = (item) => {
    return {
        type: "REMOVE_ONE_CART", payload: item
    }
}