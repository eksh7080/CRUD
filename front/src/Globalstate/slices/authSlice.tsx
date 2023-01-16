import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserAuth {
    token: string | null;
}

const initialState: UserAuth = {
    token: localStorage.getItem('token') ?? null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        getToken(state, { payload: { token } }) {
            return {
                ...state,
                token,
            };
        },
    },
});

export const { getToken } = authSlice.actions;
export default authSlice;
