import React, { Component } from 'react';
import Headers from '../../components/Header'


class Register extends Component {
    render() {
        return (
            <>
                <Headers />
                <div style={{ paddingTop: "80px" }}>
                    <div>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col" style={{ backgroundColor: '#F68839' }}>
                                    <p className="d-flex justify-content-center" style={{ color: 'rgb(255,255,255)', fontSize: 17 }}><br />Đăng ký thành viên Luxstay - Tích điểm thưởng và nhận ưu đãi<br />Nhanh chóng, tiện lợi và an toàn. Đăng ký liền tay, rinh ngay quyền lợi.<br /><br /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ paddingTop: 40 }}>
                        <div className="container">
                            <div className="row text-center"><div className="col-auto col-sm-12 col-md-8 col-xs-12">
                                <div className="row">
                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                        <img src="assets/img/coins@2x.png" alt width="70rem" />
                                        <h3>Tích điểm nhanh chóng</h3>
                                        <p>Tích điểm đối với mỗi lượt đặt chỗ thành công. Quy đổi thành Lux Credit để du lịch nhiều hơn nữa.
              </p>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                        <img src="assets/img/top-sales@2x.png" alt width="70rem" />
                                        <h3>Tiện ích thông minh</h3>
                                        <p>Check-in và kiểm tra hóa đơn thanh toán kể cả khi không có kết nối mạng. Hoàn tiền nhanh gọn. Đổi lịch dễ dàng.
              </p>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                        <img src="assets/img/wallet@2x.png" alt width="70rem" />
                                        <h3>Thanh toán đơn giản</h3>
                                        <p>Phương thức thanh toán tiện lợi, an toàn. Tích hợp chức năng lưu thẻ để đặt phòng lần sau.
              </p>
                                    </div>
                                    <div className="col-auto col-md-6 col-sm-6 col-xs-12">
                                        <img src="assets/img/backpack@2x.png" alt width="70rem" />
                                        <h3>Ưu đãi mỗi ngày</h3>
                                        <p>Nhận thông báo ưu đãi từ Luxstay khi có kế hoạch du lịch để lựa chọn và đặt ngay cho mình một chỗ ở phù hợp, tiện nghi với giá tốt nhất.
              </p>
                                    </div>
                                </div>
                            </div>
                                <div className="col-auto col-sm-12 col-md-4 text-center">
                                    <form>
                                        <h3>Đăng ký thành viên<br /></h3>
                                        <p style={{ marginTop: 16, marginBottom: 10, fontSize: 16 }}>Địa chỉ email</p>
                                    </form><input className="form-control-lg" type="text" style={{ opacity: 1, width: '22rem', paddingRight: 0, paddingLeft: 0 }} required />
                                    <p style={{ marginTop: 16, marginBottom: 10, fontSize: 16 }}>Số điện thoại</p><input className="form-control-lg" type="text" style={{ opacity: 1, width: '22rem' }} required />
                                    <p style={{ marginTop: 16, marginBottom: 10, fontSize: 16 }}>Họ và Tên</p><input className="form-control-lg" type="text" style={{ opacity: 1, width: '22rem' }} required />
                                    <p style={{ marginTop: 16, marginBottom: 10, fontSize: 16 }}>Mật Khẩu</p><input className="form-control-lg" type="text" style={{ opacity: 1, width: '22rem' }} required />
                                    <p style={{ marginTop: 16, marginBottom: 10, fontSize: 16 }}>Xác nhận mật khẩu mới</p><input className="form-control-lg" type="text" style={{ opacity: 1, width: '22rem' }} required /><button className="btn btn-primary border rounded" type="button" style={{ backgroundColor: 'rgb(246,134,57)', width: '20rem', paddingTop: 6, marginTop: 20 }}>Đăng ký</button>
                                    <p className="text-center"><br />Bạn đã có tài khoản Luxstay? Đăng nhập<br /><br />Tôi đồng ý với Bảo mật và Điều khoản hoạt động của Luxstay.</p>
                                    <div className="text-center border rounded border-dark d-xl-flex align-items-center align-content-center justify-content-xl-center" style={{ marginBottom: 16 }}>
                                        <p style={{ margin: 0 }}>Đăng nhập bằng Facebook</p><i className="icon ion-social-facebook" style={{ fontSize: 30, width: 30 }} /></div>
                                    <div className="text-center border rounded border-dark d-xl-flex align-items-center align-content-center justify-content-xl-center">
                                        <p style={{ margin: 0 }}>Đăng nhập bằng Facebook</p><i className="icon ion-social-googleplus" style={{ fontSize: 30, width: 30, paddingLeft: 7 }} /></div>
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

export default Register;