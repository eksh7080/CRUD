import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from 'auth/Login';
import Signup from 'auth/Signup';
import Landing from 'Landing';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landing />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/signup" element={<Signup />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
