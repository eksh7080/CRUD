import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './slices/todoSlice';
import authSlice from './slices/authSlice';
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';

export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer,
        auth: authSlice.reducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
