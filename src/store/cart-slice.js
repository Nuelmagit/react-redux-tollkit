import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: { items: [], totalQuantity: 0 },
    reducers: {
        addItem(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id)
            state.totalQuantity++;
            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            } else {
                state.items.push({
                    id: newItem.id,
                    quantity: 1,
                    price: newItem.price,
                    totalPrice: newItem.price,
                    title: newItem.title
                })
            }
        },
        removeItem(state, action) { 
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id)
            state.totalQuantity--;
            if(existingItem.quantity ===1 ){
                state.items = state.items.filter(item => item.id !== id)
            }else {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }
        }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice;