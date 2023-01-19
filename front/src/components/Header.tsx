import { useToken } from 'hooks/useToken';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavContainer } from './style';

const Header = () => {
    const token = useToken();
    const location = useLocation();
    const [isLoggedIn, setIsLoggedIn] = useState(token);

    useEffect(() => {
        setIsLoggedIn(token);
    }, [location.pathname, token]);

    const logout = () => {
        localStorage.clear();
        setIsLoggedIn(null);
    };

    return (
        <NavContainer>
            {isLoggedIn ? (
                <ul className="onToken">
                    <li>
                        <button type="button" onClick={logout}>
                            로그아웃
                        </button>
                    </li>
                    <li>
                        <button type="button">
                            <Link to="/todo">Todo</Link>
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
