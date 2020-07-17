import React, { Component } from 'react';


class Header extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid border rounded-0 border-dark">
                    <div className="row align-items-center" style={{ backgroundColor: '#ffffff', overflow: 'hidden', position: 'fixed', top: 0, zIndex: 10, width: '100%', height: 102 }}>
                        <div className="col-sm-6 col-md-6 text-center d-xl-flex justify-content-xl-start align-items-xl-center" style={{ height: 112 }}><img src="assets/img/1561179296437-Black%20Logo%20Mark.png" style={{ width: '3.0rem' }} />
                            <div className="form-group text-center d-xl-flex justify-content-xl-start align-items-xl-start" style={{ height: 35, margin: 0, padding: 0, marginLeft: 10 }}><label htmlFor="search-field" style={{ marginBottom: 0 }}><i className="fa fa-search" style={{ fontSize: 24, paddingRight: 10 }} /><input type="text" id="input-date" className="input-date" placeholder="Tìm kiếm..." /></label></div>
                        </div>
                        <div className="col-sm-6 col-md-6 text-center d-flex justify-content-center align-items-center justify-content-xl-end">
                            <nav className="navbar navbar-light navbar-expand-md navigation-clean" style={{ paddingTop: 10 }}>
                                <div className="container"><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
                                    <div className="collapse navbar-collapse" id="navcol-1">
                                        <ul className="nav navbar-nav ml-auto">
                                            <li className="nav-item" role="presentation"><a className="nav-link" href="#">Host</a></li>
                                            <li className="nav-item" role="presentation"><a className="nav-link" href="#">Đăng ký</a></li>
                                            <li className="nav-item" role="presentation"><a className="nav-link" href="#">Đăng nhập</a></li>
                                            <li className="nav-item dropdown"><a className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#">VN</a>
                                                <div className="dropdown-menu" role="menu"><a className="dropdown-item" role="presentation" href="#">Tiếng Anh</a><a className="dropdown-item" role="presentation" href="#">Tiếng Nhật</a></div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Header;