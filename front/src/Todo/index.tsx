import { API } from 'utils/api';
import React, { useEffect, useState } from 'react';
import { Container, TodoWrap } from './style';
import { TodoData, TodoList } from 'types/todoType';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'Globalstate/store';
import { changeValue } from 'Globalstate/slices/todoSlice';
import { useQuery, useMutation } from '@tanstack/react-query';
import { getTodoList, createTodo } from 'utils/queryFn';

const Todo = () => {
    const [updateFormState, setUpdateFormState] = useState<boolean>(false);
    const [todoList, setTodoList] = useState<TodoList[]>([]);
    const [todoValue, setTodoValue] = useState<TodoData>({
        title: '',
        content: '',
    });

    const [updateIndex, setUpdateIndex] = useState<boolean[]>(
        Array.from([{ length: todoList.length }], () => false),
    );

    const { isLoading, error, data } = useQuery<TodoList[]>({
        queryKey: ['todoData'],
        queryFn: () => getTodoList(),
    });

    const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;

        // dispatch(changeValue());

        switch (name) {
            case 'title':
                setTodoValue({ ...todoValue, title: value });
                break;

            case 'content':
                setTodoValue({ ...todoValue, content: value });
                break;
        }
    };

    const { mutate, isSuccess } = useMutation(createTodo, {
        onSuccess: () => {
            console.log('success success success');
        },
    });
    console.log(isSuccess, 'create Todo Mutate');

    const deleteTodo = async (id: string) => {
        try {
            if (window.confirm('삭제 하시겠습니까?')) {
                const res = await API.delete(`/todos/${id}`);

                const filtered = todoList.filter(tem => tem.id !== id);
                setTodoList(filtered);
            } else {
                return;
            }
        } catch (err: unknown) {
            console.log(err);
        }
    };

    const changeUpdateForm = (id: string, idx: number, e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(id, 'id idi di di di dididi ', idx, e);
        if (idx === idx) setUpdateFormState(!updateFormState);
    };

    const updateTodo = async (id: string) => {
        try {
            const res = await API.put(`/todos/${id}`, {
                title: todoValue.title,
                content: todoValue.content,
            });
            console.log(res, 'update update');
        } catch (err: unknown) {
            console.log(err);
        }
    };

    return (
        <Container>
            <Header />
            <TodoWrap>
                <article>
                    <ul>
                        <li>
                            <input
                                type="text"
                                name="title"
                                placeholder="제목"
                                onChange={changeInputValue}
                            />
                            <input
                                type="text"
                                name="content"
                                placeholder="내용"
                                onChange={changeInputValue}
                            />
                            <span>
                                <button type="button" onClick={(): void => mutate(todoValue)}>
                                    생성
                                </button>
                            </span>
                        </li>
                    </ul>

                    {isLoading ? (
                        <h1>Loading...</h1>
                    ) : (
                        <div>
                            {data?.map((tem, idx) => {
                                return (
                                    <dl key={idx}>
                                        {updateFormState ? (
                                            <form
                                                className="updateForm"
                                                onSubmit={() => updateTodo(tem.id)}
                                            >
                                                <input
                                                    type="text"
                                                    name="title"
                                                    defaultValue={tem.title}
                                                    onChange={changeInputValue}
                                                />
                                                <input
                                                    type="text"
                                                    name="content"
                                                    defaultValue={tem.content}
                                                    onChange={changeInputValue}
                                                />
                                                <p>
                                                    <button type="submit" className="updateConfirm">
                                                        저장
                                                    </button>
                                                </p>
                                            </form>
                                        ) : (
                                            <>
                                                <dt>{tem.title}</dt>
                                                <dd>{tem.content}</dd>
                                            </>
                                        )}

                                        <dd key={idx}>
                                            <label>
                                                <button
                                                    type="button"
                                                    onClick={e => changeUpdateForm(tem.id, idx, e)}
                                                >
                                                    수정
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => deleteTodo(tem.id)}
                                                >
                                                    삭제
                                                </button>
                                            </label>
                                        </dd>
                                    </dl>
                                );
                            })}
                        </div>
                    )}
                </article>
            </TodoWrap>
        </Container>
    );
};

export default Todo;
