import { productReducer } from "./reducers/productReducer";
import { configureStore } from "@reduxjs/toolkit";

export const store=configureStore({
    reducer:productReducer
})

