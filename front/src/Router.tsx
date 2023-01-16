import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from 'auth/Login';
import Signup from 'auth/Signup';
import Home from 'Home';
import Todo from 'Todo';

const Router = () => {
    const token = localStorage.getItem('token');

    return (
        <BrowserRouter>
            <Routes>
                {token && (
                    <>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/todo" element={<Todo />}></Route>
                    </>
                )}

                <Route path="/" element={<Home />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
