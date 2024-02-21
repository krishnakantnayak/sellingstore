import { productReducer } from "./reducers/productReducer";
import { firebaseReducer } from "./reducers/firebaseReducer";
import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";

export const store=configureStore({
    reducer: {
        product: productReducer,
        firebase: firebaseReducer,
        user:userReducer
    }
})

