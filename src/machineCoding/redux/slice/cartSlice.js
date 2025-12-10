import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cart:[],
    totalPrice:0,
}


const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const find = state.cart.findIndex((data)=>data.id === action.payload.id)
            console.log(find);
            
            if(find >= 0){
                state.cart[find].quantity += 1;
                state.cart[find].price += action.payload.price
            }else{
                state.cart.push(action.payload)
            }
        },
        removeFromCart:(state,action)=>{
            const find = state.cart.findIndex((data)=>data.id === action.payload)
             if(find >= 0 && state.cart[find].quantity > 1){
                console.log("1 delete");
                
                state.cart[find].quantity -= 1
            }else{
                console.log("full delete");
                
                state.cart = state.cart.filter((data)=>data.id !== action.payload)
            }
        }
    }
});

export const {addToCart,removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;