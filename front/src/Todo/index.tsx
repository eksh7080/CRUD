import { API } from 'Instance';
import React, { useEffect, useState } from 'react';
import { Container, TodoWrap } from './style';
import { TodoData, TodoList } from 'types/todoType';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'Globalstate/store';
import { changeValue } from 'Globalstate/slices/todoSlice';
import { useQuery } from '@tanstack/react-query';

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

    const { isLoading, isError, data, error } = useQuery<TodoList[]>({
        queryKey: ['todoData'],
        queryFn: () => API.get('/todos').then(res => res.data.data),
    });

    console.log(data);

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

    const createTodoList = async () => {
        try {
            if (todoValue.title === '' || todoValue.content === '') {
                alert('내용을 입력해주세요.');
                return;
            }

            const res = await API.post(`/todos`, {
                title: todoValue.title,
                content: todoValue.content,
            });

            const todoData = res.data.data;

            if (res.status === 200) {
                setTodoList([
                    ...todoList,
                    {
                        title: todoData.title,
                        content: todoData.content,
                        id: todoData.id,
                        createdAt: todoData.createdAt,
                        updatedAt: todoData.updatedAt,
                    },
                ]);
                setTodoValue({ title: '', content: '' });
            }

            console.log(res.data.data, 'create', todoData);
        } catch (err: unknown) {
            console.log(err);
        }
    };

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

    // const getTodoList = async () => {
    //     try {
    //         const res = await API.get(`/todos`);

    //         if (res.status === 200) setTodoList(res.data.data);
    //         console.log('getTodo', res);
    //     } catch (err: unknown) {
    //         console.log(err);
    //     }
    // };

    // useEffect(() => {
    //     getTodoList();
    // }, []);

    return (
        <Container>
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
                                <button type="button" onClick={createTodoList}>
                                    생성
                                </button>
                            </span>
                        </li>
                    </ul>

                    {data?.length === 0 ? (
                        <>
                            <h1>추가된 투두리스트가 없습니다.</h1>
                        </>
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
