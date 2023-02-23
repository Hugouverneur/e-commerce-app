import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./favoriteSlice";

export default configureStore({
    reducer: {
        favoriteData: favoriteReducer
    }
})