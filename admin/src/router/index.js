import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Dashboard from '../page/Dashboard'
import Login from '../page/Login'
import Room from '../page/Room'
import Comment from '../page/Comment'
import Booking from '../page/Booking'
import User from '../page/User'
import Register from '../page/Register'
import Forget from '../page/Forget'
import AddUser from '../page/Add_User'

export default class index extends Component {
    render() {
        return (
            <>
                <Route path="/admin/dashboard" exact component={Dashboard} />
                <Route path="/admin/room" exact component={Room} />
                <Route path="/admin/booking" exact component={Booking} />
                <Route path="/admin/comment" exact component={Comment} />
                <Route path="/admin/user" exact component={User} />
                <Route path="/admin/user/add" exact component={AddUser} />
                <Route path="/admin/login" exact component={Login} />
                <Route path="/admin/register" exact component={Register} />
                <Route path="/admin/forget" exact component={Forget} />
            </>
        )
    }
}
