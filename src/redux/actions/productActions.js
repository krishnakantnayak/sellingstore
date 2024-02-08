
// Action constants.

export const ADD_PRODUCT="ADD Product";
export const REMOVE_PRODUCT="REMOVE Product";

// Action Creators
export const addProduct = (prodObj)=>({prodObj, type:ADD_PRODUCT});
export const removeProduct = (index)=>({index, type: REMOVE_PRODUCT});