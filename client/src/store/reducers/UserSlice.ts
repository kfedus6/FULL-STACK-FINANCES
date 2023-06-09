import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../types/types";

export interface UserState {
    user: IUser[]
    isAuth: boolean,
}

const initialState: UserState = {
    user: [],
    isAuth: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        registration(state, action: PayloadAction<UserState>) {
            state.user = action.payload.user
            state.isAuth = action.payload.isAuth
        },
        login() { },
        logout() { }
    }
})

export default userSlice.reducer;