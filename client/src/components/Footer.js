import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3" style={{ paddingTop: 10 }}><img src="assets/img/logo.png" style={{ width: '10rem' }} />
                                <p style={{ paddingTop: 20 }}><i className="fas fa-mail-bulk" style={{ fontSize: 46, color: 'rgb(250,151,34)', padding: 0, paddingRight: 10 }} />Messenger http://m.me/luxstay<br /></p>
                                <p><i className="fas fa-phone-alt" style={{ fontSize: 45, paddingTop: 10, color: 'rgb(250,151,34)', paddingRight: 10 }} />Call center<br />18006586 (Việt Nam)<br />0889866666<br /></p>
                            </div>
                            <div className="col-md-3">
                                <h1 style={{ fontSize: 14 }}><br />TOP HOMESTAY ĐƯỢC YÊU THÍCH<br /><br /></h1>
                                <p>Homestay Đà Lạt<br /></p>
                                <p>Homestay Hà Nội<br /></p>
                                <p>Homestay Hồ Chí Minh<br /></p>
                                <p>Homestay Sapa<br /></p>
                                <p>Homestay Vũng Tàu<br /></p>
                                <p>Homestay Tam Đảo<br /></p>
                                <p>Homestay Hội An<br /></p>
                                <p>Homestay Đà Nẵng<br /></p>
                                <p>Homestay Hạ Long<br /></p>
                                <p>Homestay Phan Thiết<br /></p>
                            </div>
                            <div className="col-md-3">
                                <h1 style={{ fontSize: 14 }}><br />KHÔNG GIAN ƯA THÍCH<br /><br /></h1>
                                <p>Căn hộ dịch vụ<br /></p>
                                <p>Biệt thự<br /></p>
                                <p>Homestay Hồ Chí Minh<br /></p>
                                <p>Homestay Sapa<br /></p>
                                <p>Nhà riêng<br /></p>
                                <p>Studio<br /></p>
                            </div>
                            <div className="col-md-3">
                                <h1 style={{ fontSize: 14 }}><br />VỀ CHÚNG TÔI<br /><br /></h1>
                                <p>Blog<br /></p>
                                <p>Điều khoản hoạt động<br /></p>
                                <p>1800 6586<br /></p>
                                <p>+84 8898 66666<br /></p>
                                <p>info@luxstay.com<br /></p>
                                <p>Trang thông tin dành cho chủ nhà<br /></p>
                                <p>Cơ hội nghề nghiệp<br /></p>
                                <p>Tạp chí du lịch<br /></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-md-4">
                                <h1 style={{ fontSize: 14 }}><br />TẢI ỨNG DỤNG LUXSTAY<br /><br /></h1><img src="assets/img/qr-code.png" style={{ width: '6rem' }} /><img src="assets/img/apple-store.svg" style={{ width: '10rem' }} /><img src="assets/img/google-play.svg" style={{ width: '10rem' }} /><img src="assets/img/huawei.svg" style={{ width: '10rem' }} /></div>
                            <div className="col-md-4">
                                <p><br />SECURE YOUR TRANSACTION<br /><img className="img-fluid" src="assets/img/visa.svg" /><img className="img-fluid" src="assets/img/mastercard.svg" /><img className="img-fluid" src="assets/img/maestro.svg" /></p>
                            </div>
                            <div className="col-md-4">
                                <p><br />CERTIFICATION<br /></p><img className="img-fluid" src="assets/img/bct.png" style={{ width: 190 }} /><img className="img-fluid" src="assets/img/dmca.png" style={{ width: 200, margin: 15, marginTop: 0 }} /></div>
                        </div>
                    </div>
                </div>
                <div className="social-icons" style={{ height: 100, padding: 20, paddingTop: 20, paddingRight: 0, paddingLeft: 0 }}><a href="#"><i className="icon ion-social-twitter" /></a><a href="#"><i className="icon ion-social-facebook" /></a><a href="#"><i className="icon ion-social-snapchat" /></a><a href="#"><i className="icon ion-social-youtube" /></a></div>
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <p className="text-center" style={{ fontSize: 14, color: 'rgb(136,136,136)' }}><br />© 2019 Luxstay. Bản quyền thuộc về Công ty TNHH Luxstay Việt Nam. Mọi hành vi sao chép đều là phạm pháp nếu không có sự cho phép bằng văn bản của chúng tôi.<br /><br /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
