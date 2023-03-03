import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from 'pbase';

interface UserAuth {
    token: string | null;
    uid: User | null | undefined;
}

const initialState: UserAuth = {
    token: localStorage.getItem('token') ?? null,
    uid: null,
};

onAuthStateChanged(auth, async user => {
    const id = await user?.getIdToken();
    console.log(id, 'adada');
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        getToken(state, action) {
            console.log(state, action, 'reducer confirm');
        },
    },
});

export const { getToken } = authSlice.actions;
export default authSlice;
