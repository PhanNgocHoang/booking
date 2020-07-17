import React, { Component } from 'react';
import Header from '../../components/Header'


class sale extends Component {
    render() {
        return (
            <>
                <div style={{ paddingTop: "80px" }}>
                    <div>
                        <div className="container-fluid" style={{ backgroundColor: '#ffffff', overflow: 'hidden', position: 'fixed', top: 0, zIndex: 10, width: '100%' }}>
                            <div className="row align-items-center">
                                <div className="col-md-6 text-center d-xl-flex align-items-xl-center"><img src="assets/img/1561179296437-Black%20Logo%20Mark.png" style={{ width: '2.5rem' }} />
                                    <div className="form-group text-center align-items-center" style={{ height: 35, margin: 0, padding: 1, marginLeft: 10 }}><label htmlFor="search-field"><i className="fa fa-search" style={{ fontSize: 23 }} /></label><input type="search" id="search-field" className="search-field" name="search" style={{ width: 230 }} /></div>
                                </div>
                                <div className="col-md-6 d-flex justify-content-center">
                                    <nav className="navbar navbar-light navbar-expand-md navigation-clean">
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
                        <div className="container-fluid" style={{ padding: 0 }}>
                            <div className="row no-gutters">
                                <div className="col-md-12"><img className="img-fluid" src="assets/img/banner_4_1592467795.jpg" /></div>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: '2rem', paddingBottom: '5rem' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h4 className="text-center"><br /><strong>Thanh toán với EPAY</strong><br /></h4>
                                    <p className="text-center">Nhận ngay nhà giá tốt!<br /></p>
                                    <p className="d-xl-flex justify-content-xl-center">Nội dung chương trình<br /><br />Đón hè thả ga với ưu đãi đặt nhà giá cực tốt khi thanh toán bằng VNPT EPAY. Chỉ vài thao tác đơn giản, bạn sẽ nhận ngay ưu đãi giảm tới 20% tối đa 100.000đ cho mọi đặt chỗ tại Luxstay. Còn chờ gì nữa mà
            chưa đặt ngay nhà đẹp du lịch thoả thích!<br /><br />Chi tiết chương trình:<br /><br />💝Giảm thêm 20% tối đa 100.000đ khi lựa chọn phương thức thanh toán với VNPT EPAY.<br /><br />💝Thanh toán nhanh gọn, thao tác dễ dàng, bảo mật.<br /><br />💝Ưu
            đãi áp dụng cho mọi loại thẻ (ATM, thẻ quốc tế phát hành trong nước và ngoài nước) qua cổng VNPT EPAY.<br /><br />Lưu ý:<br /><br />Số lượng mã ưu đãi có hạn, ưu đãi sẽ kết thúc khi hết số lượng.<br /><br />Chương trình áp dụng cho các booking
            đặt từ 18/6 đến 18/7 (hoặc đến khi hết số lượng, tuỳ theo điều kiện nào đến trước).<br /><br />Mỗi tài khoản chỉ áp dụng khuyến mại 01 lần trong thời gian chương trình.<br /><br />Hotline: 1800 6586<br /><br /></p>
                                    <p>Trang chủ - Danh sách ưu đãi - Thanh toán với EPAY</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12" style={{ padding: 0, paddingTop: 10 }}>
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

export default sale;