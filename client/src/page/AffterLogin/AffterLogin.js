import React, { Component } from 'react'

export default class AffterLogin extends Component {
    render() {
        return (
            <>
                <div style={{ backgroundColor: "rgb(248,248,248)" }}>
                    <div style={{ backgroundColor: '#ffffff' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6"><img src="assets/img/logo.png" style={{ width: '10.5rem', paddingTop: 15 }} /></div>
                                <div className="col-md-6 text-center d-xl-flex justify-content-xl-end">
                                    <div style={{ paddingRight: 25, paddingTop: 10 }}>
                                        <p className="text-center" style={{ color: '#a4a4a4' }}>HÔM NAY<br /></p>
                                        <p><strong>12/07/2020</strong><br /></p>
                                    </div>
                                    <div style={{ paddingTop: 10 }}>
                                        <p style={{ color: 'rgb(164,164,164)' }}>TÀI KHOẢN CỦA TÔI<br /></p>
                                        <p className="text-center"><strong>Ngô Quân</strong><br /></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container" style={{ paddingTop: 30 }}>
                        <div>
                            <ul className="nav nav-tabs">
                                <li className="nav-item"><a className="nav-link active" role="tab" data-toggle="tab" href="#tab-1" style={{ color: 'rgb(73,80,87)' }}>Đặt chỗ của tôi<br /></a></li>
                                <li className="nav-item"><a className="nav-link" role="tab" data-toggle="tab" href="#tab-2" style={{ color: 'rgb(73,80,87)' }}>Tin nhắn</a></li>
                                <li className="nav-item"><a className="nav-link" role="tab" data-toggle="tab" href="#tab-3" style={{ color: 'rgb(73,80,87)' }}>Cài đặt tài khoản<br /></a></li>
                                <li className="nav-item"><a className="nav-link" role="tab" data-toggle="tab" href="#tab-4" style={{ color: 'rgb(73,80,87)' }}>Yêu thích</a></li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane" role="tabpanel" id="tab-2">
                                    <h2><strong>Tin nhắn</strong><br /></h2>
                                    <p>Hộp thư<br /></p>
                                    <div className="d-xl-flex justify-content-xl-center">
                                        <div className="col-md-8" style={{ backgroundColor: '#ffffff' }}>
                                            <p className="text-center">Không có dữ liệu.<br /></p>
                                        </div>
                                        <div className="col-md-4 text-center" style={{ backgroundColor: '#ffffff' }}><img className="rounded-circle" src="assets/img/anh-naruto-be-bong-dep_104804081.jpg" style={{ width: 60 }} />
                                            <p>Name</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" role="tabpanel" id="tab-3">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="d-xl-flex justify-content-xl-start align-items-xl-center"><img className="rounded-circle" src="assets/img/anh-naruto-be-bong-dep_104804081.jpg" style={{ width: 60 }} />
                                                <h4 style={{ color: 'rgb(255,77,0)' }}><strong>Ngô Quân</strong><br /></h4>
                                                <p style={{ margin: 0 }}><strong>. Thông tin tài khoản</strong><br /></p>
                                            </div>
                                            <p>Cá nhân hóa tài khoản bằng việc cập nhật thông tin của bạn<br /></p>
                                        </div>
                                        <div className="col-md-6 d-xl-flex justify-content-xl-end align-items-xl-center"><button className="btn btn-primary" type="button" style={{ backgroundColor: 'rgb(255,255,255)', color: 'rgb(255,77,0)' }}><strong>Trở thành chủ nhà</strong></button></div>
                                    </div>
                                    <div className="d-xl-flex justify-content-xl-start">
                                        <ul className="nav nav-tabs flex-column" style={{ color: 'rgb(35,40,44)', width: 300, backgroundColor: '#ffffff' }}>
                                            <li className="nav-item"><a className="nav-link" role="tab" data-toggle="tab" href="#tab-5">Thồng tin tài khoản</a></li>
                                            <li className="nav-item"><a className="nav-link" role="tab" data-toggle="tab" href="#tab-6" style={{ color: 'rgb(22,23,24)' }}>Mã giảm giá</a></li>
                                            <li className="nav-item"><a className="nav-link" role="tab" data-toggle="tab" href="#tab-7" style={{ color: 'rgb(17,18,18)' }}>Thay đổi mật khẩu</a></li>
                                            <li className="nav-item"><a className="nav-link active" role="tab" data-toggle="tab" href="#tab-8" style={{ color: 'rgb(17,18,18)' }}>Thanh toán</a></li>
                                            <li className="nav-item"><a className="nav-link" role="tab" data-toggle="tab" href="#tab-9" style={{ color: 'rgb(17,18,18)' }}>Liên kết tài khoản</a></li>
                                        </ul>
                                        <div className="tab-content" style={{ margin: 10, marginLeft: 20 }}>
                                            <div className="tab-pane" role="tabpanel" id="tab-5">
                                                <p><img className="border rounded-circle" src="assets/img/anh-naruto-be-bong-dep_104804081.jpg" style={{ width: 60 }} /><button className="btn btn-primary" type="button" style={{ backgroundColor: 'rgb(255,77,0)', marginLeft: 16 }}>Đổi ảnh đại diện</button>.</p>
                                                <p style={{ marginBottom: 10, marginTop: 10 }}><strong>Tên</strong></p><input className="form-control-lg" type="text" />
                                                <p style={{ marginBottom: 10, marginTop: 10 }}><strong>Họ và tên</strong></p><input className="form-control-lg" type="text" />
                                                <p style={{ marginBottom: 10, marginTop: 10 }}><strong>Email</strong></p><input className="form-control-lg" type="text" />
                                                <p style={{ marginBottom: 10, marginTop: 10 }}><strong>Số điện thoại</strong></p><input className="form-control-lg" type="text" />
                                                <p style={{ marginBottom: 10, marginTop: 10 }}><strong>Địa chỉ</strong></p><input className="form-control-lg" type="text" />
                                                <p style={{ marginBottom: 10, marginTop: 10 }}><strong>Ngày sinh</strong></p><input className="form-control-lg" type="text" />
                                                <p style={{ marginTop: 10, marginBottom: 10 }}><strong>Giới tính</strong></p>
                                                <div className="d-xl-flex justify-content-around align-items-xl-center"><input type="radio" />
                                                    <p style={{ marginBottom: 0 }}>Nam</p><input type="radio" />
                                                    <p style={{ marginBottom: 0 }}>Nữ</p><input type="radio" />
                                                    <p style={{ marginBottom: 0 }}>Khác</p>
                                                </div>
                                                <p style={{ marginBottom: 10, marginTop: 10 }}><strong>Giời tính bản thân</strong></p><textarea className="form-control-lg" defaultValue={""} /></div>
                                            <div className="tab-pane" role="tabpanel" id="tab-6">
                                                <p>Không có dữ liệu</p>
                                            </div>
                                            <div className="tab-pane" role="tabpanel" id="tab-7">
                                                <p style={{ marginBottom: 10, marginTop: 10 }}><strong>Mật khẩu hiện tại</strong><br /></p><input className="form-control-lg" type="text" />
                                                <p style={{ marginBottom: 10, marginTop: 10 }}><strong>Mật khẩu mới</strong><br /></p><input className="form-control-lg" type="text" />
                                                <p style={{ marginBottom: 10, marginTop: 10 }}><strong>Xác nhận mật khẩu mới</strong><br /></p><input className="form-control-lg" type="text" />
                                                <p /><button className="btn btn-primary" type="button" style={{ backgroundColor: 'rgb(255,77,0)' }}>Cập nhật</button></div>
                                            <div className="tab-pane active" role="tabpanel" id="tab-8">
                                                <h3 className="d-block" style={{ marginBottom: 30 }}>Stripe Card</h3><button className="btn btn-primary" type="button" style={{ backgroundColor: 'rgb(255,77,0)' }}>Thêm thẻ mới</button></div>
                                            <div className="tab-pane" role="tabpanel" id="tab-9">
                                                <p><strong>Facebook</strong></p><button className="btn btn-primary" type="button" style={{ backgroundColor: 'rgb(10,111,183)', width: 278 }}><i className="fa fa-facebook-square" style={{ fontSize: 18, marginRight: 10 }} />&nbsp;Kết nối với Facebook</button>
                                                <p><br />Lưu ý: Luxstay chỉ liên kết với tài khoản facebook sử dụng email khớp với thông tin cá nhân của bạn.<br /></p>
                                                <p><strong>Google</strong></p><button className="btn btn-primary" type="button" style={{ backgroundColor: 'rgb(173,176,179)', width: 278 }}><i className="fa fa-google" style={{ fontSize: 18, marginRight: 10 }} />Kết nối với Google</button>
                                                <p><br />Đã kết nối với Google<br /></p>
                                                <p><strong>Số điện thoại</strong></p><button className="btn btn-primary" type="button" style={{ backgroundColor: 'rgb(173,176,179)', width: 278 }}>Kết nối số điện thoại</button>
                                                <p><br />Đăng nhập nhanh chóng hơn, thuận tiện hơn&nbsp;<br /></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" role="tabpanel" id="tab-4" />
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
