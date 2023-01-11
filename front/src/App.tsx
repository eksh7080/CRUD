import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from 'auth/Login';
import Signup from 'auth/Signup';
import Landing from 'Landing';
import Todo from 'Todo';

function App() {
    const token = localStorage.getItem('token');

    return (
        <>
            <BrowserRouter>
                <Routes>
                    {token && (
                        <>
                            <Route path="/" element={<Landing />}></Route>
                            <Route path="/todo" element={<Todo />}></Route>
                        </>
                    )}

                    <Route path="/" element={<Landing />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/signup" element={<Signup />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
