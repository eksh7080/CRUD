import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Login from 'auth/Login';
import Signup from 'auth/Signup';
import Home from 'Home';
import Todo from 'Todo';
import { useToken } from 'hooks/useToken';

const Routers = () => {
    const token = useToken();
    const location = useLocation();
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token'));

    useEffect(() => {
        setIsLoggedIn(localStorage.getItem('token'));
    }, [location.pathname]);

    return (
        <Routes>
            {isLoggedIn && (
                <>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/todo" element={<Todo />}></Route>
                </>
            )}

            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
        </Routes>
    );
};

export default Routers;
