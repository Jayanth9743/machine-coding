import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cart:[]
}


const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const find = state.cart.findIndex((data)=>data.id === action.payload.id)
            console.log(find);
            
            if(find >= 0){
                state.cart[find].quantity += 1
            }else{
                state.cart.push(action.payload)
            }
        }
    }
});

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;