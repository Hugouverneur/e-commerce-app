import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userData: {
            firstname: '',
            lastname: '',
            mail: '',
            uid: '',
            isAuth: false,
        }
    },
    reducers: {
        changeUserData: (state, action) => {
            state.userData = action.payload;
        }
    }
});

export const { changeUserData } = userSlice.actions;
export default userSlice.reducer;