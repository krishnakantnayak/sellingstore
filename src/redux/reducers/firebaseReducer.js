
import { createSlice } from "@reduxjs/toolkit";

const initialState={
    authObj:null
}


const firebaseSlice=createSlice({
    name:"firebase",
    initialState:initialState,
    reducers:{
        setAuth:(state,action)=>{
            state.authObj=action.payload
        }
    }
})

export const firebaseReducer=firebaseSlice.reducer;
export const firebaseAction=firebaseSlice.actions;