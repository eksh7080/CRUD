import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, TodoWrap } from './style';

const Todo = () => {
    interface TodoList {
        id: string;
        title: string;
        content: string;
        createdAt: string;
        updatedAt: string;
    }

    interface TodoData {
        title: string;
        content: string;
    }

    const LOGINTOKEN = localStorage.getItem('token');

    const [updateFormState, setUpdateFormState] = useState<boolean>(false);
    const [todoList, setTodoList] = useState<TodoList[]>([]);
    const [todoValue, setTodoValue] = useState<TodoData>({
        title: '',
        content: '',
    });
    const [updateIndex, setUpdateIndex] = useState<boolean[]>(
        Array.from([{ length: todoList.length }], () => false),
    );

    const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;

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

            const res = await axios.post(
                `/todos`,
                {
                    title: todoValue.title,
                    content: todoValue.content,
                },
                {
                    headers: { Authorization: `login ${LOGINTOKEN}` },
                },
            );

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
            }

            console.log(res.data.data, 'create', todoData);
        } catch (err: unknown) {
            console.log(err);
        }
    };

    const deleteTodo = async (id: string) => {
        try {
            const res = await axios.delete(`/todos/${id}`, {
                headers: { Authorization: `login ${LOGINTOKEN}` },
            });

            const filtered = todoList.filter(tem => tem.id !== id);
            setTodoList(filtered);
        } catch (err: unknown) {
            console.log(err);
        }
    };

    const updateForm = (id: string) => {};

    console.log(updateIndex, ' index', todoList.length);

    // const updateTodo = async (id: string) => {
    //     try{
    //         const res = await axios.put(`/todos/${id}`, {
    //             title:
    //         } , {
    //             headers: { Authorization: `login ${LOGINTOKEN}` }
    //         })
    //     }catch(err: unknown){
    //         console.log(err)
    //     }
    // }

    const getTodoList = async () => {
        try {
            const res = await axios.get(`/todos`, {
                headers: { Authorization: `login ${LOGINTOKEN}` },
            });

            if (res.status === 200) setTodoList(res.data.data);
            console.log('getTodo', res);
        } catch (err: unknown) {
            console.log(err);
        }
    };

    useEffect(() => {
        getTodoList();
    }, []);

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

                    {todoList.length === 0 ? (
                        <>
                            <h1>추가된 투두리스트가 없습니다.</h1>
                        </>
                    ) : (
                        <div>
                            {todoList.map((tem, idx) => {
                                return (
                                    <dl key={idx}>
                                        {updateFormState ? (
                                            <form className="updateForm">
                                                <input
                                                    type="text"
                                                    name="title"
                                                    value={tem.title}
                                                    onChange={changeInputValue}
                                                />
                                                <input
                                                    type="text"
                                                    name="content"
                                                    value={tem.content}
                                                    onChange={changeInputValue}
                                                />
                                                <p>
                                                    <button
                                                        type="submit"
                                                        className="updateConfirm"
                                                        onClick={(): void =>
                                                            setUpdateFormState(false)
                                                        }
                                                    >
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
                                                    onClick={() => updateForm(tem.id)}
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
