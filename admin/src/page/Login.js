import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { LoginAdmin } from '../services/api'

function Login(props) {
    const [InputLogin, setInputLogin] = useState({})
    const [Token, setToken] = useState('')

    const onSubmitLogin = (e) => {
        e.preventDefault()
        LoginAdmin(InputLogin).then((res) => {
            if (res.data && res.status == "200") {
                console.log(res.data.token);
                setToken(res.data.token)
                localStorage.setItem("Token", JSON.stringify(res.data))
            }
            props.history.push("/admin/dashboard")
        })
    }

    const onChangeInput = (e) => {
        const { name, value } = e.target
        setInputLogin({ ...InputLogin, [name]: value })
    }

    return (
        <div className="sufee-login d-flex align-content-center flex-wrap" style={{ backgroundColor: "gray" }}>
            <div className="container">
                <div className="login-content">
                    <div className="login-logo">
                        <a href="index.html">
                            <img className="align-content" src="admin/images/logo.png" alt="logo.png" />
                        </a>
                    </div>
                    <div className="login-form">
                        <form>
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" name="username" className="form-control" placeholder="Email" onChange={onChangeInput} />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" name="password" className="form-control" placeholder="Password" onChange={onChangeInput} />
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" /> Remember Me
            </label>
                                <label className="pull-right">
                                    <Link to="/admin/forget">Forgotten Password?</Link>
                                </label>
                            </div>
                            <button type="submit" className="btn btn-success btn-flat m-b-30 m-t-30" onClick={onSubmitLogin}>Sign in</button>
                            <div className="social-login-content">
                                <div className="social-button">
                                    <button type="button" className="btn social facebook btn-flat btn-addon mb-3"><i className="ti-facebook" />Sign in with facebook</button>
                                    <button type="button" className="btn social twitter btn-flat btn-addon mt-2"><i className="ti-twitter" />Sign in with twitter</button>
                                </div>
                            </div>
                            <div className="register-link m-t-15 text-center">
                                <p>Don't have account ? <Link to="/admin/register"> Sign Up Here</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login

