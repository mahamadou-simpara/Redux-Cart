import { createSlice  } from "@reduxjs/toolkit";

const itemInitState = {isCartShown: false}

const cartReducer = createSlice({
    name: 'cart',
    initialState: itemInitState,
    reducers: {
        toggleCart (state) {
            state.isCartShown = !state.isCartShown
        },
    }
});
 
export const uiReducer = cartReducer.reducer;
export const uiActions = cartReducer.actions;
