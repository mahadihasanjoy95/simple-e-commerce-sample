import {combineReducers} from "redux";
import {cartreducer} from "./Reducer";
import {authReducer} from "./AuthReducer";

const rootred = combineReducers({
    cartreducer,
    authReducer
    //Add other reducer here if you have
})
export default rootred