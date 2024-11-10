import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../slices/Slice"; 

export const store = configureStore({
    reducer: {
        todos: todoReducer 
    }
});
