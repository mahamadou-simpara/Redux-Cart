import { configureStore, createSlice  } from "@reduxjs/toolkit";

const itemInitState = { quantity: 0, isCartShown: false }

const cartReducer = createSlice({
    name: 'cart',
    initialState: itemInitState,
    reducers: {
        incrementCartItem (state) {
            state.quantity++
        },
        decrementCartItem (state) {
            state.quantity--
        },
        toggleCart (state) {
            state.isCartShown = !state.isCartShown
        },
    }
})


const store = configureStore({
    reducer: {
        cart: cartReducer.reducer
    }
});

export const cartActions = cartReducer.actions;

export default store;