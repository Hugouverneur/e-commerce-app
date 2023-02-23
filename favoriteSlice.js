import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        favorites: []
    },
    reducers: {
        initFavorite: (state, action) => {
            state.favorites = action.payload;
        },
        addFavorite: (state, action) => {
            state.favorites.push(action.payload);
        },
        removeFavorite: (state, action) => {
            state.favorites.slice(action.payload);
        }
    }
});

export const { initFavorite, addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;