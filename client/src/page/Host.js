import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Host extends Component {
    render() {
        return (
            <>
                <div style={{ paddingTop: "60px" }}>
                    <div>
                        <div className="container-fluid">
                            <div className="row">
                                <Link to="/">
                                    <div className="col-md-12 d-xl-flex align-items-xl-center" style={{ height: 60, backgroundColor: '#ffffff', overflow: 'hidden', position: 'fixed', top: 0, zIndex: 10, width: '100%' }}><img src="assets/img/logo.png" style={{ width: '10.5rem' }} /></div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div style={{ padding: 25 }}>
                        <div className="container border rounded shadow">
                            <div className="row no-gutters" style={{ marginRight: 0, marginLeft: 0 }}>
                                <div className="col-md-6">
                                    <form className="text-center border rounded shadow" style={{ margin: 10, padding: 10, paddingLeft: 10, marginLeft: 0 }}>
                                        <div className="text-center border rounded border-dark d-xl-flex align-items-center align-content-center justify-content-xl-center" style={{ marginBottom: 16 }}>
                                            <p style={{ margin: 0 }}>Đăng nhập bằng Facebook</p><i className="icon ion-social-facebook" style={{ fontSize: 30, width: 30 }} /></div>
                                        <div className="text-center border rounded border-dark d-xl-flex align-items-center align-content-center justify-content-xl-center">
                                            <p style={{ margin: 0 }}>Đăng nhập bằng Facebook</p><i className="icon ion-social-googleplus" style={{ fontSize: 30, width: 30, paddingLeft: 7 }} /></div>
                                        <h3>Đăng nhập<br /></h3>
                                        <p style={{ marginTop: 16, marginBottom: 10, fontSize: 16 }}>Địa chỉ email</p><input className="border rounded border-dark form-control" type="text" style={{ opacity: 1 }} required />
                                        <p style={{ marginTop: 16, marginBottom: 10, fontSize: 16 }}>Mật Khẩu</p><input className="border rounded border-dark form-control" type="text" style={{ opacity: 1 }} required /><button className="btn btn-primary btn-block border rounded" type="button" style={{ backgroundColor: 'rgb(246,134,57)', marginTop: 30 }}>Đăng nhập</button>
                                        <p className="text-center"><br />Quên mật khẩu? Nhấn vào đây<br /><br />Bạn chưa có tài khoản Luxstay? Đăng ký<br /><br /></p>
                                    </form>
                                </div>
                                <div className="col-md-6" style={{ padding: 20 }}>
                                    <p>Chưa đăng ký? Nhấn vào đây để đăng kí<br /><br />Chúng tôi không thu phí khi bạn đăng chỗ nghỉ. Nếu chỗ nghỉ của bạn đạt tiêu chuẩn được kiểm duyệt đăng tải trên Luxstay, chúng tôi chỉ thu phí khi có booking<br /><br />Hotline: 18006586 (Nhánh
            1 phím 2)<br /><br />Tải ứng dụng Luxstay giúp bạn quản lý chỗ nghỉ dễ dàng</p>
                                    <div className="d-xl-flex justify-content-xl-center align-items-xl-center"><img src="assets/img/apple-store.svg" style={{ width: '10rem' }} /><img src="assets/img/google-play.svg" style={{ width: '10rem' }} /><img src="assets/img/qr-code.png" style={{ width: '6rem' }} /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ padding: 24 }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3">
                                    <p>Luxstay<br /></p>
                                    <p style={{ margin: 0 }}>Tuyển dụng<br /></p>
                                    <p style={{ margin: 0 }}>Tin tức<br /></p>
                                    <p style={{ margin: 0 }}>Chính sách</p>
                                    <p style={{ margin: 0 }}>Về chúng tôi<br /></p>
                                    <p style={{ margin: 0 }}>Liên hệ hợp tác<br /></p>
                                </div>
                                <div className="col-md-3">
                                    <p>Trải nghiệm<br /></p>
                                    <p style={{ margin: 0 }}>Ưu đãi từ Luxstay<br /></p>
                                </div>
                                <div className="col-md-3">
                                    <p>Chủ nhà</p>
                                    <p style={{ margin: 0 }}>Tại sao nên trở thành chủ nhà?<br /></p>
                                    <p style={{ margin: 0 }}>Điều khoản sử dụng dịch vụ<br /></p>
                                    <p style={{ margin: 0 }}>Kinh nghiệm Chủ nhà<br /></p>
                                </div>
                                <div className="col-md-3">
                                    <p>Đăng ký nhận tin<br /></p>
                                    <p style={{ margin: 0 }}>Đăng ký và nhận email cung cấp các thông tin mới nhất của Luxstay dành cho chủ nhà!<br /><br /></p>
                                    <div className="d-flex d-xl-flex justify-content-center align-items-xl-center"><input type="text" placeholder="Địa chỉ email ..." /><i className="fa fa-arrow-circle-right" style={{ fontSize: 30 }} /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ height: 61 }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-9 d-flex justify-content-center">
                                    <p className="d-xl-flex justify-content-xl-center">© 2019 Luxstay All Rights Reserved<br /></p>
                                </div>
                                <div className="col-md-3 d-flex d-xl-flex justify-content-center justify-content-xl-start"><button className="btn btn-primary border rounded border-dark d-xl-flex align-items-xl-center" type="button" style={{ backgroundColor: 'rgb(255,255,255)', color: 'rgb(0,0,0)' }}><i className="fa fa-flag" style={{ color: 'rgb(255,5,5)' }} />&nbsp; Tiếng việt</button></div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
