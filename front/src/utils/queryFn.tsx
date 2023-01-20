import { API } from 'utils/api';
import { TodoList, TodoData } from 'types/todoType';

export const getTodoList = async (): Promise<TodoList[]> => {
    const { data } = await API.get('/todos').then(res => res.data);
    return data;
};

export const createTodo = async (newTodo: TodoData): Promise<TodoData> => {
    const { data } = await API.post(`/todos`, newTodo);
    return data;
};
