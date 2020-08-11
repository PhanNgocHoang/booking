import React from 'react'
import { Link } from 'react-router-dom'

function header(props) {
    return (
        <>
            <aside id="left-panel" className="left-panel">
                <nav className="navbar navbar-expand-sm navbar-default">
                    <div className="navbar-header">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-menu" aria-controls="main-menu" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fa fa-bars" />
                        </button>
                        <a className="navbar-brand" href="./"><img src="admin/images/logo.png" alt="Logo" /></a>
                        <a className="navbar-brand hidden" href="./"><img src="admin/images/logo2.png" alt="Logo" /></a>
                    </div>
                    <div id="main-menu" className="main-menu collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <Link to="/admin/dashboard"> <i className="menu-icon fa fa-dashboard" />Dashboard </Link>
                            </li>
                            <h3 className="menu-title">Quản lý</h3>{/* /.menu-title */}
                            <li className="menu-item-has-children dropdown">
                                <Link to="/admin/room"><i className="menu-icon fa fa-book" />Room</Link>
                                <Link to="/admin/booking"> <i className="menu-icon fa fa-book" />Booking</Link>
                                <Link to="/admin/comment"> <i className="menu-icon fa fa-book" />Comment</Link>
                                <Link to="/admin/user"> <i className="menu-icon fa fa-book" />User</Link>
                            </li>
                        </ul>
                    </div>{/* /.navbar-collapse */}
                </nav>
            </aside>{/* /#left-panel */}
            {/* Left Panel */}
        </>
    )
}

export default header

