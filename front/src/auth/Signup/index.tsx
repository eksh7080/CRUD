import { SignupSection, Container } from './style';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Signup = () => {
    const navigate = useNavigate();
    const reg = /@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]/;

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [emailValidate, setEmailValidate] = useState<boolean>(false);
    const [btnDisabled, setBtnDisabled] = useState<boolean>(true);

    const emailChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        reg.test(value) ? setEmailValidate(false) : setEmailValidate(true);
        if (value === '') setEmailValidate(false);
        setEmail(value);
    };

    const passwordChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        setPassword(value);
    };

    useEffect(() => {
        if (!(email === '') && password.length > 7) setBtnDisabled(false);
        else setBtnDisabled(true);
    }, [email, password]);

    const signUp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            if (email === '' || password === '') alert('정보를 정확하게 입력해주세요.');
            const res = await axios.post(`/users/create`, {
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

                            <li className={`${emailValidate ? 'block' : 'none'}`}>
                                <label>올바른 이메일 주소를 입력해 주세요.</label>
                            </li>

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
                                className={btnDisabled ? 'disabled' : ''}
                                disabled={btnDisabled ? true : false}
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
