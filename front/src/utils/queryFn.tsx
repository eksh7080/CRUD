import { API } from 'utils/api';
import { TodoList } from 'types/todoType';

export const getTodoList = async (): Promise<TodoList[]> => {
    const { data } = await API.get('/todos').then(res => res.data);
    return data;
};
