import { SignupSection, Container } from './style';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const Signup = () => {
    const reg = /@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]/;
    const [emailValidate, setEmailValidate] = useState<boolean>(false);

    const cheangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;

        switch (name) {
            case 'email': {
                reg.test(value) ? setEmailValidate(false) : setEmailValidate(true);
                if (value === '') setEmailValidate(false);
            }
        }
    };

    return (
        <Container>
            <SignupSection>
                <form>
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
                                    onChange={cheangeValue}
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
                                    onChange={cheangeValue}
                                />
                            </li>
                        </ul>

                        <div>
                            <button type="submit" onClick={e => e.preventDefault()}>
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
