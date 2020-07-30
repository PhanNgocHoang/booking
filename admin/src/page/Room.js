import React, { Component } from 'react';

class Room extends Component {
    render() {
        return (
            <>
                <div>
                    {/* Left Panel */}
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
                                        <a href="/admin"> <i className="menu-icon fa fa-dashboard" />Dashboard </a>
                                    </li>
                                    <h3 className="menu-title">UI elements</h3>{/* /.menu-title */}
                                    <li className="menu-item-has-children dropdown">
                                        <a href="/admin/room"> <i className="menu-icon fa fa-laptop" />Room</a>
                                        <a href="/admin/booking"> <i className="menu-icon fa fa-laptop" />Booking</a>
                                        <a href="/admin/comment"> <i className="menu-icon fa fa-laptop" />Comment</a>
                                        <a href="/admin/user"> <i className="menu-icon fa fa-laptop" />User</a>
                                    </li>
                                </ul>
                            </div>{/* /.navbar-collapse */}
                        </nav>
                    </aside>{/* /#left-panel */}
                    {/* Left Panel */}
                    {/* Right Panel */}
                    <div id="right-panel" className="right-panel">
                        {/* Header*/}
                        <header id="header" className="header">
                            <div className="header-menu">
                                <div className="col-sm-7">
                                    <a id="menuToggle" className="menutoggle pull-left"><i className="fa fa fa-tasks" /></a>
                                    <div className="header-left">
                                        <button className="search-trigger"><i className="fa fa-search" /></button>
                                        <div className="form-inline">
                                            <form className="search-form">
                                                <input className="form-control mr-sm-2" type="text" placeholder="Search ..." aria-label="Search" />
                                                <button className="search-close" type="submit"><i className="fa fa-close" /></button>
                                            </form>
                                        </div>
                                        <div className="dropdown for-notification">
                                            <button className="btn btn-secondary dropdown-toggle" type="button" id="notification" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="fa fa-bell" />
                                                <span className="count bg-danger">5</span>
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="notification">
                                                <p className="red">You have 3 Notification</p>
                                                <a className="dropdown-item media bg-flat-color-1" href="#">
                                                    <i className="fa fa-check" />
                                                    <p>Server #1 overloaded.</p>
                                                </a>
                                                <a className="dropdown-item media bg-flat-color-4" href="#">
                                                    <i className="fa fa-info" />
                                                    <p>Server #2 overloaded.</p>
                                                </a>
                                                <a className="dropdown-item media bg-flat-color-5" href="#">
                                                    <i className="fa fa-warning" />
                                                    <p>Server #3 overloaded.</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="dropdown for-message">
                                            <button className="btn btn-secondary dropdown-toggle" type="button" id="message" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="ti-email" />
                                                <span className="count bg-primary">9</span>
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="message">
                                                <p className="red">You have 4 Mails</p>
                                                <a className="dropdown-item media bg-flat-color-1" href="#">
                                                    <span className="photo media-left"><img alt="avatar" src="admin/images/avatar/1.jpg" /></span>
                                                    <span className="message media-body">
                                                        <span className="name float-left">Jonathan Smith</span>
                                                        <span className="time float-right">Just now</span>
                                                        <p>Hello, this is an example msg</p>
                                                    </span>
                                                </a>
                                                <a className="dropdown-item media bg-flat-color-4" href="#">
                                                    <span className="photo media-left"><img alt="avatar" src="admin/images/avatar/2.jpg" /></span>
                                                    <span className="message media-body">
                                                        <span className="name float-left">Jack Sanders</span>
                                                        <span className="time float-right">5 minutes ago</span>
                                                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                                                    </span>
                                                </a>
                                                <a className="dropdown-item media bg-flat-color-5" href="#">
                                                    <span className="photo media-left"><img alt="avatar" src="admin/images/avatar/3.jpg" /></span>
                                                    <span className="message media-body">
                                                        <span className="name float-left">Cheryl Wheeler</span>
                                                        <span className="time float-right">10 minutes ago</span>
                                                        <p>Hello, this is an example msg</p>
                                                    </span>
                                                </a>
                                                <a className="dropdown-item media bg-flat-color-3" href="#">
                                                    <span className="photo media-left"><img alt="avatar" src="admin/images/avatar/4.jpg" /></span>
                                                    <span className="message media-body">
                                                        <span className="name float-left">Rachel Santos</span>
                                                        <span className="time float-right">15 minutes ago</span>
                                                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-5">
                                    <div className="user-area dropdown float-right">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <img className="user-avatar rounded-circle" src="admin/images/admin.jpg" alt="User Avatar" />
                                        </a>
                                        <div className="user-menu dropdown-menu">
                                            <a className="nav-link" href="#"><i className="fa fa-user" /> My Profile</a>
                                            <a className="nav-link" href="#"><i className="fa fa-user" /> Notifications <span className="count">13</span></a>
                                            <a className="nav-link" href="#"><i className="fa fa-cog" /> Settings</a>
                                            <a className="nav-link" href="#"><i className="fa fa-power-off" /> Logout</a>
                                        </div>
                                    </div>
                                    <div className="language-select dropdown" id="language-select">
                                        <a className="dropdown-toggle" href="#" data-toggle="dropdown" id="language" aria-haspopup="true" aria-expanded="true">
                                            <i className="flag-icon flag-icon-us" />
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="language">
                                            <div className="dropdown-item">
                                                <span className="flag-icon flag-icon-fr" />
                                            </div>
                                            <div className="dropdown-item">
                                                <i className="flag-icon flag-icon-es" />
                                            </div>
                                            <div className="dropdown-item">
                                                <i className="flag-icon flag-icon-us" />
                                            </div>
                                            <div className="dropdown-item">
                                                <i className="flag-icon flag-icon-it" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </header>{/* /header */}
                        {/* Header*/}
                        <div className="breadcrumbs">
                            <div className="col-sm-4">
                                <div className="page-header float-left">
                                    <div className="page-title">
                                        <h1>Dashboard</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <div className="page-header float-right">
                                    <div className="page-title">
                                        <ol className="breadcrumb text-right">
                                            <li><a href="#">Dashboard</a></li>
                                            <li><a href="#">Table</a></li>
                                            <li className="active">Data table</li>
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
                                                <strong className="card-title">Data Table</strong>
                                            </div>
                                            <div className="card-body">
                                                <table id="bootstrap-data-table-export" className="table table-striped table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th>Name</th>
                                                            <th>Position</th>
                                                            <th>Office</th>
                                                            <th>Salary</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Tiger Nixon</td>
                                                            <td>System Architect</td>
                                                            <td>Edinburgh</td>
                                                            <td>$320,800</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Garrett Winters</td>
                                                            <td>Accountant</td>
                                                            <td>Tokyo</td>
                                                            <td>$170,750</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Ashton Cox</td>
                                                            <td>Junior Technical Author</td>
                                                            <td>San Francisco</td>
                                                            <td>$86,000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Cedric Kelly</td>
                                                            <td>Senior Javascript Developer</td>
                                                            <td>Edinburgh</td>
                                                            <td>$433,060</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Airi Satou</td>
                                                            <td>Accountant</td>
                                                            <td>Tokyo</td>
                                                            <td>$162,700</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Brielle Williamson</td>
                                                            <td>Integration Specialist</td>
                                                            <td>New York</td>
                                                            <td>$372,000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Herrod Chandler</td>
                                                            <td>Sales Assistant</td>
                                                            <td>San Francisco</td>
                                                            <td>$137,500</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Rhona Davidson</td>
                                                            <td>Integration Specialist</td>
                                                            <td>Tokyo</td>
                                                            <td>$327,900</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Colleen Hurst</td>
                                                            <td>Javascript Developer</td>
                                                            <td>San Francisco</td>
                                                            <td>$205,500</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Sonya Frost</td>
                                                            <td>Software Engineer</td>
                                                            <td>Edinburgh</td>
                                                            <td>$103,600</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Jena Gaines</td>
                                                            <td>Office Manager</td>
                                                            <td>London</td>
                                                            <td>$90,560</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Quinn Flynn</td>
                                                            <td>Support Lead</td>
                                                            <td>Edinburgh</td>
                                                            <td>$342,000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Charde Marshall</td>
                                                            <td>Regional Director</td>
                                                            <td>San Francisco</td>
                                                            <td>$470,600</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Haley Kennedy</td>
                                                            <td>Senior Marketing Designer</td>
                                                            <td>London</td>
                                                            <td>$313,500</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Tatyana Fitzpatrick</td>
                                                            <td>Regional Director</td>
                                                            <td>London</td>
                                                            <td>$385,750</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Michael Silva</td>
                                                            <td>Marketing Designer</td>
                                                            <td>London</td>
                                                            <td>$198,500</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Paul Byrd</td>
                                                            <td>Chief Financial Officer (CFO)</td>
                                                            <td>New York</td>
                                                            <td>$725,000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Gloria Little</td>
                                                            <td>Systems Administrator</td>
                                                            <td>New York</td>
                                                            <td>$237,500</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Bradley Greer</td>
                                                            <td>Software Engineer</td>
                                                            <td>London</td>
                                                            <td>$132,000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Dai Rios</td>
                                                            <td>Personnel Lead</td>
                                                            <td>Edinburgh</td>
                                                            <td>$217,500</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Jenette Caldwell</td>
                                                            <td>Development Lead</td>
                                                            <td>New York</td>
                                                            <td>$345,000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Yuri Berry</td>
                                                            <td>Chief Marketing Officer (CMO)</td>
                                                            <td>New York</td>
                                                            <td>$675,000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Caesar Vance</td>
                                                            <td>Pre-Sales Support</td>
                                                            <td>New York</td>
                                                            <td>$106,450</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Doris Wilder</td>
                                                            <td>Sales Assistant</td>
                                                            <td>Sidney</td>
                                                            <td>$85,600</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Angelica Ramos</td>
                                                            <td>Chief Executive Officer (CEO)</td>
                                                            <td>London</td>
                                                            <td>$1,200,000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Gavin Joyce</td>
                                                            <td>Developer</td>
                                                            <td>Edinburgh</td>
                                                            <td>$92,575</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Jennifer Chang</td>
                                                            <td>Regional Director</td>
                                                            <td>Singapore</td>
                                                            <td>$357,650</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Brenden Wagner</td>
                                                            <td>Software Engineer</td>
                                                            <td>San Francisco</td>
                                                            <td>$206,850</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Fiona Green</td>
                                                            <td>Chief Operating Officer (COO)</td>
                                                            <td>San Francisco</td>
                                                            <td>$850,000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Shou Itou</td>
                                                            <td>Regional Marketing</td>
                                                            <td>Tokyo</td>
                                                            <td>$163,000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Michelle House</td>
                                                            <td>Integration Specialist</td>
                                                            <td>Sidney</td>
                                                            <td>$95,400</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Suki Burks</td>
                                                            <td>Developer</td>
                                                            <td>London</td>
                                                            <td>$114,500</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Prescott Bartlett</td>
                                                            <td>Technical Author</td>
                                                            <td>London</td>
                                                            <td>$145,000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Gavin Cortez</td>
                                                            <td>Team Leader</td>
                                                            <td>San Francisco</td>
                                                            <td>$235,500</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Martena Mccray</td>
                                                            <td>Post-Sales support</td>
                                                            <td>Edinburgh</td>
                                                            <td>$324,050</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Unity Butler</td>
                                                            <td>Marketing Designer</td>
                                                            <td>San Francisco</td>
                                                            <td>$85,675</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Howard Hatfield</td>
                                                            <td>Office Manager</td>
                                                            <td>San Francisco</td>
                                                            <td>$164,500</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Hope Fuentes</td>
                                                            <td>Secretary</td>
                                                            <td>San Francisco</td>
                                                            <td>$109,850</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Vivian Harrell</td>
                                                            <td>Financial Controller</td>
                                                            <td>San Francisco</td>
                                                            <td>$452,500</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Timothy Mooney</td>
                                                            <td>Office Manager</td>
                                                            <td>London</td>
                                                            <td>$136,200</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Jackson Bradshaw</td>
                                                            <td>Director</td>
                                                            <td>New York</td>
                                                            <td>$645,750</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Olivia Liang</td>
                                                            <td>Support Engineer</td>
                                                            <td>Singapore</td>
                                                            <td>$234,500</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Bruno Nash</td>
                                                            <td>Software Engineer</td>
                                                            <td>London</td>
                                                            <td>$163,500</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Sakura Yamamoto</td>
                                                            <td>Support Engineer</td>
                                                            <td>Tokyo</td>
                                                            <td>$139,575</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Thor Walton</td>
                                                            <td>Developer</td>
                                                            <td>New York</td>
                                                            <td>$98,540</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Finn Camacho</td>
                                                            <td>Support Engineer</td>
                                                            <td>San Francisco</td>
                                                            <td>$87,500</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Serge Baldwin</td>
                                                            <td>Data Coordinator</td>
                                                            <td>Singapore</td>
                                                            <td>$138,575</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Zenaida Frank</td>
                                                            <td>Software Engineer</td>
                                                            <td>New York</td>
                                                            <td>$125,250</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Zorita Serrano</td>
                                                            <td>Software Engineer</td>
                                                            <td>San Francisco</td>
                                                            <td>$115,000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Jennifer Acosta</td>
                                                            <td>Junior Javascript Developer</td>
                                                            <td>Edinburgh</td>
                                                            <td>$75,650</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Cara Stevens</td>
                                                            <td>Sales Assistant</td>
                                                            <td>New York</td>
                                                            <td>$145,600</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Hermione Butler</td>
                                                            <td>Regional Director</td>
                                                            <td>London</td>
                                                            <td>$356,250</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Lael Greer</td>
                                                            <td>Systems Administrator</td>
                                                            <td>London</td>
                                                            <td>$103,500</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Jonas Alexander</td>
                                                            <td>Developer</td>
                                                            <td>San Francisco</td>
                                                            <td>$86,500</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Shad Decker</td>
                                                            <td>Regional Director</td>
                                                            <td>Edinburgh</td>
                                                            <td>$183,000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Michael Bruce</td>
                                                            <td>Javascript Developer</td>
                                                            <td>Singapore</td>
                                                            <td>$183,000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Donna Snider</td>
                                                            <td>Customer Support</td>
                                                            <td>New York</td>
                                                            <td>$112,000</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
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
}

export default Room;