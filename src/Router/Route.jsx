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



function Router() {
    return (
        <BrowserRouter>
            <BookstoreBar>
                <Routes>
                    <Route exact path={"/"} element={<Login />} />
                    <Route exact path={"/signup"} element={<Signup />} />
                    <Route exact path={"/dashboard"} element={<Dashboard />} />
                    <Route exact path={"/cards"} element={<Cards />} />
                    <Route exact path={"/forgotPassword"} element={<ForgotPassword />} />
                    <Route exact path={"/bookDisplay"} element={<BookDisplay />} />
                    <Route exact path={"/cart"} element={<Cart />} />
                    <Route exact path={"/customerDetails"} element={<CustomerDetails />} />
                    <Route exact path={"/orderPlaced"} element={<OrderPlaced />} />
                    <Route exact path={"/orderSummary"} element={<OrderSummary />} />
                </Routes>
            </BookstoreBar>
        </BrowserRouter>
    )
}

export default Router