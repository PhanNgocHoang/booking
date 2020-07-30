import React from 'react'

function Forget(props) {
    return (
        <div className="sufee-login d-flex align-content-center flex-wrap">
            <div className="container">
                <div className="login-content">
                    <div className="login-logo">
                        <a href="index.html">
                            <img className="align-content" src="images/logo.png" alt />
                        </a>
                    </div>
                    <div className="login-form">
                        <form>
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control" placeholder="Email" />
                            </div>
                            <button type="submit" className="btn btn-primary btn-flat m-b-15">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Forget

