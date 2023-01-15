import { createSlice } from '@reduxjs/toolkit';

interface TodoContent {
    inputName: '' | 'title' | 'content';
}

const initialState: TodoContent = {
    inputName: '',
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        changeValue: (state, action) => {
            console.log('state', state, 'action', action);
        },
    },
});

export const { changeValue } = todoSlice.actions;
export default todoSlice.reducer;
