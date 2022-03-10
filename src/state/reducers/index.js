import { combineReducers } from "redux";
import amountReducer from "./amountReducer";
import productReducer from "./productReducer";

const reducers = combineReducers({
    amount: amountReducer,
    product: productReducer,
})

export default reducers;