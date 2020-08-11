import React, { Component } from 'react';

class CategorySale extends Component {
    render() {
        return (
            <>
                <div style={{ paddingTop: "80px" }}>
                    <div>
                        <div className="container-fluid" style={{ backgroundColor: '#ffffff', overflow: 'hidden', position: 'fixed', top: 0, zIndex: 10, width: '100%' }}>
                            <div className="row align-items-center">
                                <div className="col-md-6 text-center d-xl-flex align-items-xl-center"><img className="img-fluid border rounded-circle" src="assets/img/1561179296437-Black%20Logo%20Mark.png" style={{ fontSize: 16, width: '3rem' }} />
                                    <div className="form-group text-center align-items-center" style={{ height: 35, margin: 0, padding: 1, marginLeft: 10 }}><label htmlFor="search-field"><i className="fa fa-search" style={{ fontSize: 23 }} /></label><input type="search" id="search-field" className="search-field" name="search" style={{ width: 230 }} /></div>
                                </div>
                                <div className="col-md-6 d-flex justify-content-center justify-content-xl-end">
                                    <nav className="navbar navbar-light navbar-expand-md text-center navigation-clean">
                                        <div className="container"><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
                                            <div className="collapse navbar-collapse" id="navcol-1">
                                                <ul className="nav navbar-nav ml-auto">
                                                    <li className="nav-item" role="presentation"><a className="nav-link active" href="#" style={{ color: 'rgb(0,0,0)' }}>Host</a></li>
                                                    <li className="nav-item" role="presentation"><a className="nav-link" href="#">Đăng ký</a></li>
                                                    <li className="nav-item" role="presentation"><a className="nav-link" href="#">Đăng nhập</a></li>
                                                    <li className="nav-item dropdown"><a className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#">VN</a>
                                                        <div className="dropdown-menu" role="menu"><a className="dropdown-item" role="presentation" href="#">First Item</a><a className="dropdown-item" role="presentation" href="#">Second Item</a><a className="dropdown-item" role="presentation" href="#">Third Item</a></div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <ol className="breadcrumb" style={{ backgroundColor: 'rgb(255,255,255)' }}>
                                        <li className="breadcrumb-item"><a href="#"><span>Luxstay&nbsp;<br /></span></a></li>
                                        <li className="breadcrumb-item"><a href="#"><span>Danh sách ưu đãi<br /></span></a></li>
                                    </ol>
                                    <h2>Ưu đãi độc quyền🔥🔥<br /></h2>
                                    <p>Chỉ có tại Luxstay, hấp dẫn và hữu hạn, book ngay!<br /></p>
                                </div>
                                <div className="col-md-6 text-right d-xl-flex justify-content-xl-end align-items-xl-center"><select className="border rounded form-control-lg"><option value={12} selected>Ưu đãi:  Tất cả</option><option value={13}>Từ luxstay</option><option value={14}>Từ đối tác luxstay</option></select></div>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginBottom: '8rem' }}>
                        <div className="container">
                            <div className="row no-gutters">
                                <div className="col-md-4" style={{ padding: 5 }}>
                                    <div className="border rounded shadow"><img className="img-fluid" src="assets/img/event_1_1593688439.jpg" />
                                        <div style={{ padding: 20 }}>
                                            <p>TING TING! LƯƠNG VỀ<br /></p>
                                            <p className="border rounded border-dark" style={{ padding: 10, backgroundColor: 'rgb(246,246,246)' }}><strong>Thời gian lưu trú: Không giới hạn</strong><br /></p><button className="btn btn-outline-dark btn-block" type="button" style={{ backgroundColor: '#f68839', color: 'rgb(255,255,255)', marginTop: 50, marginBottom: 10 }}>Xem chi tiết</button></div>
                                    </div>
                                </div>
                                <div className="col-md-4" style={{ padding: 5 }}>
                                    <div className="border rounded shadow"><img className="img-fluid" src="assets/img/event_1_1592534684.jpg" />
                                        <div style={{ padding: 20 }}>
                                            <p>HAPPY FRIYAY!<br /></p>
                                            <p className="border rounded border-dark" style={{ padding: 10, backgroundColor: 'rgb(246,246,246)' }}><strong>Thời gian lưu trú: Không giới hạn</strong><br /></p><button className="btn btn-outline-dark btn-block" type="button" style={{ backgroundColor: '#f68839', color: 'rgb(255,255,255)', marginTop: 50, marginBottom: 10 }}>Xem chi tiết<br /></button></div>
                                    </div>
                                </div>
                                <div className="col-md-4" style={{ padding: 5 }}>
                                    <div className="border rounded shadow"><img className="img-fluid" src="assets/img/event_4_1593054647.jpg" />
                                        <div style={{ padding: 20 }}>
                                            <p>THANH TOÁN VNPAY GIẢM NGAY 150K<br /></p>
                                            <p className="border rounded border-dark" style={{ padding: 10, backgroundColor: 'rgb(246,246,246)' }}><strong>Thời gian lưu trú: Không giới hạn</strong><br /></p><button className="btn btn-outline-dark btn-block" type="button" style={{ backgroundColor: '#f68839', color: 'rgb(255,255,255)', marginTop: 50, marginBottom: 10 }}>Xem chi tiết</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row no-gutters">
                                <div className="col-md-4" style={{ padding: 5 }}>
                                    <div className="border rounded shadow"><img className="img-fluid" src="assets/img/event_1_1592467757.jpg" />
                                        <div style={{ padding: 20 }}>
                                            <p>Thanh toán với EPAY<br /></p>
                                            <p className="border rounded border-dark" style={{ padding: 10, backgroundColor: 'rgb(246,246,246)' }}><strong>Thời gian lưu trú: Không giới hạn</strong><br /></p><button className="btn btn-outline-dark btn-block" type="button" style={{ backgroundColor: '#f68839', color: 'rgb(255,255,255)', marginTop: 50, marginBottom: 10 }}>Xem chi tiết</button></div>
                                    </div>
                                </div>
                                <div className="col-md-4" style={{ padding: 5 }}>
                                    <div className="border rounded shadow"><img className="img-fluid" src="assets/img/event_1_1592386845.jpg" />
                                        <div style={{ padding: 20 }}>
                                            <p>WOW 10<br /></p>
                                            <p className="border rounded border-dark" style={{ padding: 10, backgroundColor: 'rgb(246,246,246)' }}><strong>Thời gian lưu trú: Không giới hạn</strong><br /></p><button className="btn btn-outline-dark btn-block" type="button" style={{ backgroundColor: '#f68839', color: 'rgb(255,255,255)', marginTop: 50, marginBottom: 10 }}>Xem chi tiết<br /></button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <p className="text-center" style={{ fontSize: 14 }}><br />© 2019 Luxstay. Bản quyền thuộc về Công ty TNHH Luxstay Việt Nam. Mọi hành vi sao chép đều là phạm pháp nếu không có sự cho phép bằng văn bản của chúng tôi.<br /><br /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

export default CategorySale;