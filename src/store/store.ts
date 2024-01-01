import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cartSlice.ts";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

// create your own type of Dispatch
export type AppDispatch = typeof store.dispatch;

// Type of useSelector
export type RootState = ReturnType<typeof store.getState>;
