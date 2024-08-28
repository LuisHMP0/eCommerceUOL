import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    quantityItens: 0,
    items: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState, 
    reducers: {
        increment: (state, action) => {
            const id = action.payload;
            const item = state.items.find(item => item.id === id);
            if (item) {
                item.quantity += 1; 
                state.quantityItens += 1;
            }
        },
        decrement: (state, action) => {
            const id = action.payload;
            const item = state.items.find(item => item.id === id);
            if (item && item.quantity > 0) {
                item.quantity -= 1;
                item.quantityItens -= 1;
            }
        },
        addItem: (state, action) => {
            const { product, quantity } = action.payload;
            const existingItem = state.items.find(item => item.id === product.id);
            const currentQuantityInCart = existingItem ? existingItem.quantity : 0;
          
            if (currentQuantityInCart + quantity > product.stock) {
              return;
            }
          
            if (existingItem) {
              existingItem.quantity += quantity;
            } else {
              state.items.push({ ...product, quantity });
            }
          
            state.quantityItens += quantity;     
        },
        removeItem: (state, action) => {
            const id = action.payload;
            state.items = state.items.filter(item => item.id !== id);
            state.quantityItens = state.items.reduce((total, item) => total + item.quantity, 0);
        },
        clearCart: (state) => {
            state.items = [];
            state.quantityItens = 0;
        }

    }
})

export const {increment, decrement, addItem, removeItem, clearCart} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;