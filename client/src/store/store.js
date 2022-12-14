import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import dataslice from "./dataslice";

export default configureStore({
    reducer: {
        data: dataslice
    }, 
   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
   }) 
})