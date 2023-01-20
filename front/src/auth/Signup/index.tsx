import { SignupSection, Container } from './style';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API } from 'utils/api';

const Signup = () => {
    const navigate = useNavigate();
    const reg = /@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]/;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const isEmailCheck = reg.test(email);
    const isBtnDisAbled = email.length ? false : true;

    console.log(isEmailCheck, isBtnDisAbled, 'ds');

    const emailChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const passwordChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const signUp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            if (email === '' || password === '') alert('정보를 정확하게 입력해주세요.');
            const res = await API.post(`/users/create`, {
                email: email,
                password: password,
            });

            if (res.status === 200) {
                alert(res.data.message);
                navigate('/login');
            }

            console.log(res);
        } catch (err: unknown) {
            console.log(err);
        }
    };

    return (
        <Container>
            <SignupSection>
                <form onSubmit={signUp}>
                    <h1>
                        <Link to="/">SIGN UP</Link>
                    </h1>
                    <div className="signWrap">
                        <ul>
                            <li>
                                <label>이메일</label>
                                <input
                                    placeholder="이메일"
                                    name="email"
                                    autoComplete="off"
                                    required
                                    onChange={emailChangeValue}
                                />
                            </li>

                            {email.length > 1 ? (
                                <li className={`${isEmailCheck ? 'none' : 'block'}`}>
                                    <label>올바른 이메일 주소를 입력해 주세요.</label>
                                </li>
                            ) : (
                                ''
                            )}

                            <li>
                                <label>비밀번호</label>
                                <input
                                    type="password"
                                    minLength={8}
                                    name="password"
                                    maxLength={21}
                                    autoComplete="off"
                                    placeholder="비밀번호"
                                    required
                                    onChange={passwordChangeValue}
                                />
                            </li>
                        </ul>

                        <div>
                            <button
                                type="submit"
                                className={isBtnDisAbled ? 'disabled' : ''}
                                disabled={isBtnDisAbled ? true : false}
                            >
                                회원가입
                            </button>
                        </div>
                    </div>
                </form>
            </SignupSection>
        </Container>
    );
};

export default Signup;
