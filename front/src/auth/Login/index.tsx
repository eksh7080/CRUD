import { Container, LoginSection } from './style';

const Login = () => {
    return (
        <Container>
            <LoginSection>
                <form>
                    <div className="loginWrap">
                        <h1>LOGIN</h1>

                        <input type="email" placeholder="email" autoComplete="off" />

                        <input
                            type="password"
                            placeholder="비밀번호 입력"
                            autoComplete="new-password"
                        />

                        <div className="util">
                            <a href="#">회원가입 </a>
                            <a href="#">비밀번호 찾기</a>
                        </div>

                        <article>
                            <ul>
                                <li>
                                    <button type="submit" className="loginBtn">
                                        로그인
                                    </button>
                                </li>
                            </ul>
                            <ul className="kakaoLogin">
                                <li>
                                    <button type="button">카카오 로그인</button>
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
