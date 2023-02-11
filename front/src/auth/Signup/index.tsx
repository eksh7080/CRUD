import { SignupSection, Container } from './style';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API } from 'utils/api';
import { db, auth } from 'pbase';
import {
    createUserWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged,
    NextOrObserver,
    User,
} from 'firebase/auth';
import { serverTimestamp, setDoc, doc } from 'firebase/firestore';

const Signup = () => {
    const navigate = useNavigate();
    const reg = /@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]/;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nickName, setNickName] = useState('');

    const [currentUser, setCurrentUser] = useState<User | null>(null);

    // const userr = (callback: NextOrObserver<User>) => {
    //     onAuthStateChanged(auth, callback);
    // };
    useEffect(() => {
        onAuthStateChanged(auth, evt => {
            if (evt) setCurrentUser(evt);
            else setCurrentUser(null);
        });
        // userr(user);
    }, [currentUser]);

    const isEmailCheck = reg.test(email);
    const isBtnDisAbled = email.length > 8 ? false : true;

    const emailChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const passwordChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const nickChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNickName(e.target.value);
    };

    // const signUp = async (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();

    //     try {
    //         if (email === '' || password === '') alert('정보를 정확하게 입력해주세요.');
    //         const res = await API.post(`/api/users/create`, {
    //             email: email,
    //             password: password,
    //         });

    //         if (res.status === 200) {
    //             alert(res.data.message);
    //             navigate('/login');
    //         }

    //         console.log(res);
    //     } catch (err: unknown) {
    //         console.log(err);
    //     }
    // };

    const signUp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password);
            console.log(user, ' user user user user');
            if (user) {
                // updateProfile(currentUser, { displayName: nickName });
                // setDoc(doc(db, 'userInfo', currentUser?.uid), {
                //     name: nickName,
                //     avatar: currentUser.photoURL,
                //     createdAt: serverTimestamp(),
                //     uid: currentUser.uid,
                // });
            }

            alert('회원가입이 성공적으로 완료되었습니다.');
            // navigate('/');
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
                                <label>닉네임</label>
                                <input
                                    placeholder="닉네임"
                                    name="nickName"
                                    autoComplete="off"
                                    required
                                    onChange={nickChangeValue}
                                />
                            </li>

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
