const INIT_STATE = {
    carts: []
};

export const cartreducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "ADD_CART":
            const itemIndex = state.carts.findIndex((i) => i.id === action.payload.id)
            if (itemIndex >= 0) {
                state.carts[itemIndex].qnty += 1;
                return {
                    ...state, carts: [...state.carts]
                }
            } else {
                let temp = action.payload
                temp.qnty = 1
                return {
                    ...state, carts: [...state.carts, temp]
                }
            }

        case "REMOVE_CART":
            const data = state.carts.filter((e) => e.id != action.payload)
            return {
                ...state, carts: data
            }
        case "REMOVE_ONE_CART":
            const itemIndex_dec = state.carts.findIndex((i) => i.id === action.payload.id)

            if (state.carts[itemIndex_dec].qnty >= 1) {
                state.carts[itemIndex_dec].qnty -= 1
                return {
                    ...state, carts: [...state.carts]
                }
            }

        default:
            return state
    }
}