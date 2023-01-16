import { useAppSelector } from 'Globalstate/store';

export const useToken = () => {
    const token = useAppSelector(state => state.auth.token);
    return token;
};
