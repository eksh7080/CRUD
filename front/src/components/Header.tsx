import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NavContainer } from './style';

const Header = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const [login, setLogin] = useState<boolean>(token ? true : false);
    const logout = () => {
        localStorage.clear();
        setLogin(!login);
    };

    return (
        <NavContainer>
            {token ? (
                <ul className="onToken">
                    <li>
                        <button type="button" onClick={logout}>
                            로그아웃
                        </button>
                    </li>
                </ul>
            ) : (
                <ul className="noneToken">
                    <li>
                        <Link to="/login">로그인</Link>
                    </li>
                    <li>
                        <Link to="/signup">회원가입</Link>
                    </li>
                </ul>
            )}
        </NavContainer>
    );
};

export default Header;
