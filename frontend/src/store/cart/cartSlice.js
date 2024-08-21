import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    quantityItens: 0,
    items: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState, 
    reducers: {
        increment: (state) => {
            state.quantityItens += 1
        },
        decrement: (state) => {
            state.quantityItens -= 1
        },
        addItem: (state, action) => {
            const { product, quantity } = action.payload;
            const existingItem = state.items.find(item => item.id === product.id)
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                state.items.push({...product, quantity})
            }
            
            state.quantityItens += quantity;
        },
        removeItem: (state, action) => {
            const id = action.payload;
            state.items = state.items.filter(item => item.id !== id);
            state.quantityItens = state.items.reduce((total, item) => total + item.quantity, 0);
        },

    }
})

export const {increment, decrement, addItem, removeItem} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;