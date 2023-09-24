import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../components/pages/login/Login';
import Signup from '../components/pages/signup/Signup';
import Dashboard from '../components/Dashboard/Dashboard';
import ForgotPassword from '../components/forgotPassword/ForgotPassword';
import BookDisplay from '../components/booksDisplay/BookDisplay';
import Cards from '../components/cards/Cards';
import Cart from '../components/cart/Cart';
import CustomerDetails from '../components/customerDetails/CustomerDetails';
import OrderPlaced from '../components/orderPlaced/OrderPlaced';
import OrderSummary from '../components/orderSummary/OrderSummary';
import BookstoreBar from '../components/navbar/BookstoreBar';
import AuthRoute from './AuthRoute';
import ProtectedRoute from './ProtectedRoute';



function Router() {
    return (
        <BrowserRouter>
            <BookstoreBar>
                <Routes>
                    <Route exact path={"/"} element={<AuthRoute><Login /></AuthRoute>} />
                    <Route exact path={"/signup"} element={<AuthRoute><Signup /></AuthRoute>} />
                    <Route exact path={"/dashboard"} element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                    <Route exact path={"/cards"} element={<ProtectedRoute><Cards /></ProtectedRoute>} />
                    <Route exact path={"/forgotPassword"} element={<ProtectedRoute><ForgotPassword /></ProtectedRoute>} />
                    <Route exact path={"/bookDisplay"} element={<ProtectedRoute><BookDisplay /></ProtectedRoute>} />
                    <Route exact path={"/cart"} element={<ProtectedRoute><Cart /></ProtectedRoute>} />
                    <Route exact path={"/customerDetails"} element={<ProtectedRoute><CustomerDetails /></ProtectedRoute>} />
                    <Route exact path={"/orderPlaced"} element={<ProtectedRoute><OrderPlaced /></ProtectedRoute>} />
                    <Route exact path={"/orderSummary"} element={<ProtectedRoute><OrderSummary /></ProtectedRoute>} />
                </Routes>
            </BookstoreBar>
        </BrowserRouter>
    )
}

export default Router