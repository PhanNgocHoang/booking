import React, { Component } from 'react'
import HomePage from '../page/Home'
import Category from '../page/Category'
import Room from '../page/Room'
import Sale from '../page/Sale'
import Login from '../page/Login'
import Register from '../page/Register'
import Host from '../page/Host'
import CategorySale from '../page/CategorySale'
import AffterLogin from '../page/AffterLogin'
import CategoryRegion from '../page/CategoryRegion'
import { Route } from 'react-router-dom'

export default class index extends Component {
    render() {
        return (
            <>
                <Route path="/" exact component={HomePage} />
                <Route path="/category" component={Category} />
                <Route path="/room" component={Room} />
                <Route path="/sale" component={Sale} />
                <Route path="/categorySale" component={CategorySale} />
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <Route path="/host" exact component={Host} />
                <Route path="/affterLogin" exact component={AffterLogin} />
                <Route path="/categoryregion" exact component={CategoryRegion} />
            </>
        )
    }
}
