import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../components/pages/login/Login';
import Signup from '../components/pages/signup/Signup';
import Dashboard from '../components/Dashboard/Dashboard';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path={"/login"} element={<Login />} />
                <Route exact path={"/signup"} element={<Signup />} />
                <Route exact path={"/dashboard"} element={<Dashboard/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router