import { Container, LoginSection } from './style';
import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { API } from 'utils/api';
import { useToken } from 'hooks/useToken';
import { auth } from 'pbase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import GoogleSymbol from 'assets/images/googleSymbol.png';

const Login = () => {
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signInGoole = () => {
        signInWithPopup(auth, provider).then(res => console.log(res, ' ????'));
    };

    const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;

        switch (name) {
            case 'email': {
                setEmail(value);
                break;
            }

            case 'password': {
                setPassword(value);
            }
        }
    };

    const onSubmitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const res = await API.post(`/api/users/login`, {
                email: email,
                password: password,
            });

            if (res.status === 200) {
                localStorage.setItem('token', res.data.token);
                navigate('/');
            }
        } catch (err: unknown) {
            console.log(err);
            alert('이메일 또는 비밀번호를 확인하여주십시오.');
        }
    };

    return (
        <Container>
            <LoginSection>
                <form onSubmit={onSubmitLogin}>
                    <div className="loginWrap">
                        <h1>
                            <Link to="/">LOGIN</Link>
                        </h1>

                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="이메일"
                            autoComplete="off"
                            onChange={changeValue}
                        />

                        <input
                            type="password"
                            name="password"
                            required
                            placeholder="비밀번호"
                            autoComplete="off"
                            onChange={changeValue}
                        />

                        <div className="util">
                            <Link to="/signup">회원가입</Link>
                        </div>

                        <article>
                            <ul>
                                <li>
                                    <button type="submit" className="loginBtn">
                                        로그인
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="googleLogin"
                                        onClick={signInGoole}
                                    >
                                        <span>
                                            <img src={GoogleSymbol} alt="google" />
                                        </span>
                                        <small>Google</small>
                                    </button>
                                </li>
                            </ul>
                        </article>
                    </div>
                </form>
            </LoginSection>
        </Container>
    );
};

export default Login;
