import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../features/Register/registerSlice";

export const store = configureStore({
  reducer: {
    register: registerReducer, // ← VERY IMPORTANT!
  },
});
