import React from 'react'
import { HomePage, Category, Room, Sale, Login, Register, CategorySale, Host, AffterLogin } from './page'
import { BrowserRouter, Route, Link } from "react-router-dom";

function App(props) {
    return (
        <BrowserRouter>
            <Route path="/" exact component={HomePage} />
            <Route path="/category" component={Category} />
            <Route path="/room" component={Room} />
            <Route path="/sale" component={Sale} />
            <Route path="/categorySale" component={CategorySale} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/host" exact component={Host} />
            <Route path="/affterLogin" exact component={AffterLogin} />
        </BrowserRouter>
    )
}

export default App

