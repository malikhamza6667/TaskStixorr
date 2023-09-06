import CartSlice from "../services/CartSlice";

import { configureStore } from "@reduxjs/toolkit";


export const store= configureStore({
    reducer:{
        CartSlice:CartSlice
    }
})



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
