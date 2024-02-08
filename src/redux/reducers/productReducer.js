
import { createSlice } from "@reduxjs/toolkit";

const initialState={
    products:[
        {name:"Vape", quantity: 10, pickUpLoc:"Delhi",sellerName:"MetroGuy",sellerId:"sellerId101",price:1000},
        {name:"Cola", quantity: 10, pickUpLoc:"Delhi",sellerName:"MetroGirl",sellerId:"sellerId102",price:100},
    ]
}


const productSlice = createSlice({
    name:'product',
    initialState:initialState,
    reducers:{
        // this is add action
        add:(state, action)=>{
                state.products.push(action.payload)
        },
        remove:(state, action)=>{
            state.products.filter((prod, i)=>{
                return i!==action.payload
            })
        }
    }
});

export const productReducer=productSlice.reducer;

export const productAction=productSlice.actions;
