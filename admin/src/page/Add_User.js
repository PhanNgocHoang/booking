import React, { useState } from 'react'
import Header from '../components/Header'
import Left from '../components/Left-menu'
import { Link } from 'react-router-dom'
import { addUser } from '../services/api'

function Add_User({ history }) {

    const [inputs, setInput] = useState({})
    const onChangeInputForm = (e) => {
        const { value, name } = e.target
        setInput({
            ...inputs,
            authType: "local",
            role: 1,
            [name]: value
        })
        console.log("onChangeInputForm -> inputs", inputs)
    }
    const onClickSubmit = (e) => {
        console.log(e);
        e.preventDefault();
        addUser({
            ...inputs
        }).then((res) => {
            console.log("onClickSubmit -> res", res)
            if (res.data.status === "success") {
                history.push("/admin/user")
            }
        })
    }

    return (
        <>
            <Left />
            {/* Left Panel */}
            {/* Right Panel */}
            <div id="right-panel" className="right-panel">
                {/* Header*/}
                <Header />
                {/* Header*/}
                <div className="breadcrumbs">
                    <div className="col-sm-4">
                        <div className="page-header float-left">
                            <div className="page-title">
                                <h1>Thêm người dùng</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="page-header float-right">
                            <div className="page-title">
                                <ol className="breadcrumb text-right">
                                    <li><a href="/admin/dashboard">Dashboard</a></li>
                                    <li><Link to="/admin/user">User</Link></li>
                                    <li className="active">Add</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content mt-3">
                    <div className="animated fadeIn">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <strong>Basic Form</strong>
                                    </div>
                                    <div className="card-body card-block">
                                        <form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                                            <div className="row form-group">
                                                <div className="col col-md-3"><label htmlFor="email-input" className=" form-control-label">Email</label></div>
                                                <div className="col-12 col-md-9"><input
                                                    type="email" id="email-input"
                                                    name="email" placeholder="Enter Email"
                                                    className="form-control"
                                                    onChange={onChangeInputForm}
                                                /><small className="help-block form-text">Please enter your email</small></div>
                                            </div>
                                            <div className="row form-group">
                                                <div className="col col-md-3"><label htmlFor="text-input" className=" form-control-label">Name</label></div>
                                                <div className="col-12 col-md-9"><input
                                                    type="text"
                                                    name="name" placeholder="Name"
                                                    className="form-control"
                                                    onChange={onChangeInputForm}
                                                /><small className="form-text text-muted">This is a help name</small></div>
                                            </div>
                                            <div className="row form-group">
                                                <div className="col col-md-3"><label htmlFor="password-input" className=" form-control-label">Password</label></div>
                                                <div className="col-12 col-md-9"><input type="password"
                                                    id="password-input" name="password"
                                                    placeholder="Password" className="form-control"
                                                    onChange={onChangeInputForm}
                                                /><small className="help-block form-text">Please enter a complex password</small></div>
                                            </div>
                                            <div className="row form-group">
                                                <div className="col col-md-3"><label htmlFor="number-input" className=" form-control-label">Phone</label></div>
                                                <div className="col-12 col-md-9"><input
                                                    type="text" name="phoneNumber"
                                                    placeholder="Phone"
                                                    className="form-control"
                                                    onChange={onChangeInputForm}
                                                /><small className="form-text text-muted">This is a help phone</small></div>
                                            </div>

                                        </form>
                                    </div>
                                    <div className="card-footer" style={{ display: "flex", justifyContent: "center" }}>
                                        <button type="submit" className="btn btn-primary" onClick={onClickSubmit} style={{ margin: "10px" }}>
                                            <i className="fa fa-dot-circle-o" /> Submit
    </button>
                                        <button type="reset" className="btn btn-danger" style={{ margin: "10px" }}>
                                            <i className="fa fa-ban" /> Reset
    </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Add_User

