import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


class Home extends Component {
    render() {
        return (
            <>
                <Header />
                <div>
                    <div>
                        <div className="container" style={{ paddingTop: '100px' }}>
                            <div className="row">
                                <div className="col-md-12"><img className="img-fluid shadow" src="assets/img/slider_1_1593657977.jpg" style={{ width: '70rem', borderRadius: '1rem' }} /></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h1><br />Chào mừng đến với Luxstay!<br /></h1>
                                    <p>Đặt chỗ ở, homestay, cho thuê xe, trải nghiệm và nhiều hơn nữa trên Luxstay<br /><a href="https://www.luxstay.com/vi/auth/sign/in"><span style={{ textDecoration: 'underline' }}>Đăng nhập</span></a>&nbsp;hoặc&nbsp;<a href="https://www.luxstay.com/vi/auth/sign/up"><span style={{ textDecoration: 'underline' }}>Đăng ký</span></a>&nbsp;để
            trải nghiệm !<br /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center d-xl-flex justify-content-xl-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6 col-md-6 col-lg-3">
                                    <div className="shadow" style={{ borderRadius: '1rem', paddingBottom: 3, marginBottom: 10 }}><img className="img-fluid" src="assets/img/location_6_1572858402.png" style={{ width: 250 }} />
                                        <h1 className="text-center d-xl-flex justify-content-center justify-content-xl-center" style={{ fontSize: 24, marginTop: 5 }}>Homestay</h1>
                                        <p className="text-center d-xl-flex justify-content-xl-center" style={{ color: 'rgb(157,157,157)', marginBottom: 5 }}>Căn hộ dịch vụ &amp; Biệt thự</p>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-3">
                                    <div className="shadow" style={{ borderRadius: '1rem', paddingBottom: 3, marginBottom: 10 }}><img className="img-fluid" src="assets/img/entire-houses.jpg" style={{ width: 250, borderRadius: '1rem' }} />
                                        <h1 className="text-center d-xl-flex justify-content-center justify-content-xl-center" style={{ fontSize: 24, marginTop: 5 }}>Vé tham quan<br /></h1>
                                        <p className="text-center d-xl-flex justify-content-xl-center" style={{ color: 'rgb(157,157,157)', marginBottom: 5 }}>Mua vé thật dễ dàng<br /></p>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-3">
                                    <div className="shadow" style={{ borderRadius: '1rem', paddingBottom: 3, marginBottom: 10 }}><img className="img-fluid" src="assets/img/1578020138-ZPi2R4K0yIPp-OF1fSl2CvkJ.png" style={{ width: 250, height: 140, borderRadius: '1rem' }} />
                                        <h1 className="text-center d-xl-flex justify-content-center justify-content-xl-center" style={{ fontSize: 24, marginTop: 5 }}>Thuê xe ô tô<br /></h1>
                                        <p className="text-center d-xl-flex justify-content-xl-center" style={{ color: 'rgb(157,157,157)', marginBottom: 5 }}>Bao gồm tài xế<br /></p>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-3">
                                    <div className="shadow" style={{ borderRadius: '1rem', paddingBottom: 3, marginBottom: 10 }}><img className="img-fluid" src="assets/img/1578020295-UDY2DCtUiCmVfgs94cOmIWUa.png" style={{ width: 250, height: 140, borderRadius: '1rem' }} />
                                        <h1 className="text-center d-xl-flex justify-content-center justify-content-xl-center" style={{ fontSize: 24, marginTop: 5 }}>Đưa đón sân bay<br /></h1>
                                        <p className="text-center d-xl-flex justify-content-xl-center" style={{ color: 'rgb(157,157,157)', marginBottom: 5 }}>xe sang chỉ từ 199.000đ<br /></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h1><br />Địa điểm nổi bật<br /></h1>
                                    <p>Cùng Luxstay bắt đầu chuyến hành trình chinh phục thế giới của bạn<br /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6 col-md-3 text-center" style={{ padding: 0, paddingRight: 10, paddingLeft: 10 }}><img className="rounded img-fluid border shadow" src="assets/img/location_5_1559735011.png" style={{ width: 264, height: 293 }} />
                                    <div style={{ paddingTop: '-33px' }}>
                                        <h5 className="mb-0"><strong>TP. Hồ Chí Minh</strong></h5>
                                        <p style={{ marginBottom: 10 }}>3415 Chỗ ở</p>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-3 text-center" style={{ padding: 0, paddingRight: 10, paddingLeft: 10 }}><img className="rounded img-fluid border shadow" src="assets/img/location_10_1559303118.png" style={{ width: 264, height: 293 }} />
                                    <div style={{ paddingTop: '-33px' }}>
                                        <h5 className="mb-0"><strong>Vũng tàu</strong></h5>
                                        <p style={{ marginBottom: 10 }}>855 Chỗ ở</p>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-3 text-center" style={{ padding: 0, paddingRight: 10, paddingLeft: 10 }}><img className="rounded img-fluid border shadow" src="assets/img/location_16_1559303173.png" style={{ width: 264, height: 293 }} />
                                    <div style={{ paddingTop: '-33px' }}>
                                        <h5 className="mb-0"><strong>Đà Nẵng</strong></h5>
                                        <p style={{ marginBottom: 10 }}>1627 Chỗ ở</p>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-3 text-center" style={{ padding: 0, paddingRight: 10, paddingLeft: 10 }}><img className="rounded img-fluid border shadow" src="assets/img/location_4_1559786177.png" style={{ width: 264, height: 293 }} />
                                    <div style={{ paddingTop: '-33px' }}>
                                        <h5 className="mb-0"><strong>Đà Nẵng</strong></h5>
                                        <p style={{ marginBottom: 10 }}>2139 Chỗ ở</p>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-3 text-center" style={{ padding: 0, paddingRight: 10, paddingLeft: 10 }}><img className="rounded img-fluid border shadow" src="assets/img/location_1_1559734709.png" style={{ width: 264, height: 293 }} />
                                    <div style={{ paddingTop: '-33px' }}>
                                        <h5 className="mb-0"><strong>Hà Nội</strong></h5>
                                        <p style={{ marginBottom: 10 }}>3205 Chỗ ở</p>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-3 text-center" style={{ padding: 0, paddingRight: 10, paddingLeft: 10 }}><img className="rounded img-fluid border shadow" src="assets/img/location_1_1559373089.png" style={{ height: 293, width: 265 }} />
                                    <div style={{ paddingTop: '-33px' }}>
                                        <h5 className="mb-0"><strong>Nha Trang</strong></h5>
                                        <p style={{ marginBottom: 10 }}>947 Chỗ ở</p>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-3 text-center" style={{ padding: 0, paddingRight: 10, paddingLeft: 10 }}><img className="rounded img-fluid border shadow" src="assets/img/location_5_1559786196.png" style={{ width: 265, height: 293 }} />
                                    <div style={{ paddingTop: '-33px' }}>
                                        <h5 className="mb-0"><strong>Quảng Ninh</strong></h5>
                                        <p style={{ marginBottom: 10 }}>433 Chỗ ở</p>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-3 text-center" style={{ padding: 0, paddingRight: 10, paddingLeft: 10 }}><img className="rounded img-fluid border shadow" src="assets/img/location_6_1559786202.png" style={{ width: 265, height: 293 }} />
                                    <div style={{ paddingTop: '-33px' }}>
                                        <h5 className="mb-0"><strong>Hội An</strong></h5>
                                        <p style={{ marginBottom: 10 }}>453 Chỗ ở</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-left">
                                    <h1><br />Ưu đãi độc quyền<br /></h1>
                                    <p style={{ marginBottom: 5 }}>Chỉ có tại Luxstay, hấp dẫn và hữu hạn, book ngay!<br /></p>
                                    <p className="text-right" style={{ color: 'rgb(247,94,57)', marginBottom: 10 }}>xem thêm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="container">
                            <div className="row no-gutters d-xl-flex justify-content-xl-center">
                                <div className="col-sm-6 col-md-6 col-lg-4" style={{ padding: 5 }}><img className="img-fluid border rounded shadow d-xl-flex" src="assets/img/event_1_1593688439.jpg" /></div>
                                <div className="col-sm-6 col-md-6 col-lg-4 text-center d-xl-flex justify-content-xl-center" style={{ padding: 5 }}><img className="img-fluid border rounded shadow d-xl-flex" src="assets/img/event_1_1592386845.jpg" /></div>
                                <div className="col-sm-6 col-md-6 col-lg-4 text-center d-xl-flex justify-content-xl-center" style={{ padding: 5 }}><img className="img-fluid border rounded shadow" src="assets/img/event_4_1593054647.jpg" /></div>
                                <div className="col-sm-6 col-md-6 col-lg-3 col-xl-4 text-center d-xl-flex justify-content-xl-center" style={{ padding: 5 }}><img className="img-fluid border rounded shadow" src="assets/img/event_1_1592534684.jpg" /></div>
                                <div className="col-sm-12 col-md-6 col-lg-4 text-center d-xl-flex justify-content-xl-center" style={{ margin: 0, padding: 5 }}><img className="img-fluid border rounded shadow d-xl-flex" src="assets/img/event_1_1592467757.jpg" /></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-left">
                                    <h4 style={{ fontWeight: 'bold' }}><br />Top 08 homestay nổi bật tháng 07/2020<br /></h4>
                                    <p style={{ marginBottom: 5 }}>Khám phá ngay top 08 homestay nổi bật khắp Việt Nam được bầu chọn bởi tạp trí TravelMag (mục The Trend Report) số 36. Đặt ngay kẻo lỡ!<br /></p>
                                    <p className="text-right" style={{ color: 'rgb(247,94,57)', marginBottom: 10 }}>xem thêm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6 col-md-3"><img className="img-fluid border rounded shadow d-xl-flex" src="assets/img/room_35509_1_1571915445.jpg" />
                                    <div className="text-left" style={{ paddingLeft: 5 }}>
                                        <p style={{ color: 'rgb(141,141,141)', fontStyle: 'normal', fontWeight: 'bold', fontSize: 14 }}>Biệt Thự<br /></p>
                                        <p style={{ fontWeight: 'bold', fontStyle: 'normal', fontSize: 16, marginBottom: 5 }}><i className="fas fa-hotel" style={{ color: 'rgb(248,54,42)', fontSize: 18 }} />&nbsp;Tam Đảo Hideaway Nest<br /></p>
                                        <p className="d-xl-flex" style={{ fontSize: 14, marginBottom: 5 }}>25 khách · 5 Phòng ngủ · 7 phòng tắm<br /></p>
                                        <p style={{ fontWeight: 'bold', fontSize: '0.875rem', marginBottom: 5 }}>3,400,000₫/đêm<br /></p>
                                        <p style={{ fontSize: 14, marginBottom: 5 }}>Vũng Tàu, Bà Rịa Vũng Tàu<br /></p>
                                        <div className="d-xl-flex justify-content-xl-start align-items-xl-center"><i className="fa fa-star" style={{ color: 'rgb(255,176,37)' }} /><i className="fa fa-star" style={{ color: 'rgb(255,176,37)' }} /><i className="fa fa-star" style={{ color: 'rgb(255,176,37)' }} /><i className="fa fa-star" style={{ color: 'rgb(255,176,37)' }} />
                                            <i className="fa fa-star" style={{ color: 'rgb(255,176,37)' }} />
                                            <p style={{ marginBottom: 0, paddingLeft: 5 }}>10</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-3"><img className="img-fluid d-xl-flex" src="assets/img/IMG_7447.jpg" />
                                    <div className="text-left" style={{ paddingLeft: 5 }}>
                                        <p style={{ color: 'rgb(141,141,141)', fontStyle: 'normal', fontWeight: 'bold', fontSize: 14 }}>Biệt Thự<br /></p>
                                        <p style={{ fontWeight: 'bold', fontStyle: 'normal', fontSize: 16, marginBottom: 5 }}><i className="fas fa-hotel" style={{ color: 'rgb(248,54,42)', fontSize: 18 }} />&nbsp;Tam Đảo Hideaway Nest<br /></p>
                                        <p className="d-xl-flex" style={{ fontSize: 14, marginBottom: 5 }}>25 khách · 5 Phòng ngủ · 7 phòng tắm<br /></p>
                                        <p style={{ fontWeight: 'bold', fontSize: '0.875rem', marginBottom: 5 }}>3,400,000₫/đêm<br /></p>
                                        <p style={{ fontSize: 14, marginBottom: 5 }}>Vũng Tàu, Bà Rịa Vũng Tàu<br /></p>
                                        <div className="d-xl-flex justify-content-xl-start align-items-xl-center"><i className="fa fa-star" style={{ color: 'rgb(255,176,37)' }} /><i className="fa fa-star" style={{ color: 'rgb(255,176,37)' }} /><i className="fa fa-star" style={{ color: 'rgb(255,176,37)' }} /><i className="fa fa-star" style={{ color: 'rgb(255,176,37)' }} />
                                            <i className="fa fa-star" style={{ color: 'rgb(255,176,37)' }} />
                                            <p style={{ marginBottom: 0, paddingLeft: 5 }}>10</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-3"><img className="img-fluid" src="assets/img/WOKWWyd3y5hrgWl2KxSRl1_g.png" />
                                    <div className="text-left" style={{ paddingLeft: 5 }}>
                                        <p style={{ color: 'rgb(141,141,141)', fontStyle: 'normal', fontWeight: 'bold', fontSize: 14 }}>Biệt Thự<br /></p>
                                        <p style={{ fontWeight: 'bold', fontStyle: 'normal', fontSize: 16, marginBottom: 5 }}><i className="fas fa-hotel" style={{ color: 'rgb(248,54,42)', fontSize: 18 }} />&nbsp;Tam Đảo Hideaway Nest<br /></p>
                                        <p className="d-xl-flex" style={{ fontSize: 14, marginBottom: 5 }}>25 khách · 5 Phòng ngủ · 7 phòng tắm<br /></p>
                                        <p style={{ fontWeight: 'bold', fontSize: '0.875rem', marginBottom: 5 }}>3,400,000₫/đêm<br /></p>
                                        <p style={{ fontSize: 14, marginBottom: 5 }}>Vũng Tàu, Bà Rịa Vũng Tàu<br /></p>
                                        <div className="d-xl-flex justify-content-xl-start align-items-xl-center"><i className="fa fa-star" style={{ color: 'rgb(255,176,37)' }} /><i className="fa fa-star" style={{ color: 'rgb(255,176,37)' }} /><i className="fa fa-star" style={{ color: 'rgb(255,176,37)' }} /><i className="fa fa-star" style={{ color: 'rgb(255,176,37)' }} />
                                            <i className="fa fa-star" style={{ color: 'rgb(255,176,37)' }} />
                                            <p style={{ marginBottom: 0, paddingLeft: 5 }}>10</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-3"><img className="img-fluid" src="assets/img/room_18664_3_1545841874.jpg" />
                                    <div className="text-left" style={{ paddingLeft: 5 }}>
                                        <p style={{ color: 'rgb(141,141,141)', fontStyle: 'normal', fontWeight: 'bold', fontSize: 14 }}>Biệt Thự<br /></p>
                                        <p style={{ fontWeight: 'bold', fontStyle: 'normal', fontSize: 16, marginBottom: 5 }}><i className="fas fa-hotel" style={{ color: 'rgb(248,54,42)', fontSize: 18 }} />&nbsp;Tam Đảo Hideaway Nest<br /></p>
                                        <p className="d-xl-flex" style={{ fontSize: 14, marginBottom: 5 }}>25 khách · 5 Phòng ngủ · 7 phòng tắm<br /></p>
                                        <p style={{ fontWeight: 'bold', fontSize: '0.875rem', marginBottom: 5 }}>3,400,000₫/đêm<br /></p>
                                        <p style={{ fontSize: 14, marginBottom: 5 }}>Vũng Tàu, Bà Rịa Vũng Tàu<br /></p>
                                        <div className="d-xl-flex justify-content-xl-start align-items-xl-center"><i className="fa fa-star" style={{ color: 'rgb(255,176,37)' }} /><i className="fa fa-star" style={{ color: 'rgb(255,176,37)' }} /><i className="fa fa-star" style={{ color: 'rgb(255,176,37)' }} /><i className="fa fa-star" style={{ color: 'rgb(255,176,37)' }} />
                                            <i className="fa fa-star" style={{ color: 'rgb(255,176,37)' }} />
                                            <p style={{ marginBottom: 0, paddingLeft: 5 }}>10</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-left">
                                    <h4 style={{ fontWeight: 'bold' }}><br />Thiết lập trạng thái "bình thường mới" tại Sài Gòn<br /></h4>
                                    <p style={{ marginBottom: 5 }}>Top chỗ ở sạch đep, giá tốt tại TP.Hồ Chí Minh cho chuyến du lịch và công tác của bạn.<br /></p>
                                    <p className="text-right" style={{ color: 'rgb(247,94,57)', marginBottom: 10 }}>xem thêm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6 col-md-3" style={{ paddingRight: 5 }}><img className="img-fluid border rounded shadow d-xl-flex" src="assets/img/apartment_10_1584602562.jpg" />
                                    <div>
                                        <p className="d-xl-flex" style={{ fontWeight: 'bold', fontSize: 14, color: 'rgb(127,127,127)', marginBottom: 10, marginTop: 5 }}>Gần Trung tâm!<br /></p>
                                        <p className="text-left d-xl-flex">Dễ dàng di chuyển khắp nơi với top chỗ ở khu vực trung tâm thành phố Hồ Chí Minh<br /></p>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-3" style={{ paddingRight: 5 }}><img className="img-fluid border rounded shadow d-xl-flex" src="assets/img/apartment_8_1584602495.jpg" />
                                    <div>
                                        <p className="d-xl-flex" style={{ fontWeight: 'bold', fontSize: 14, color: 'rgb(127,127,127)', marginBottom: 10, marginTop: 5 }}>Gần Trung tâm!<br /></p>
                                        <p className="text-left d-xl-flex">Dễ dàng di chuyển khắp nơi với top chỗ ở khu vực trung tâm thành phố Hồ Chí Minh<br /></p>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-3" style={{ paddingRight: 5 }}><img className="img-fluid border rounded shadow d-xl-flex" src="assets/img/apartment_1_1585280532.jpg" />
                                    <div>
                                        <p className="d-xl-flex" style={{ fontWeight: 'bold', fontSize: 14, color: 'rgb(127,127,127)', marginBottom: 10, marginTop: 5 }}>Gần Trung tâm!<br /></p>
                                        <p className="text-left d-xl-flex">Dễ dàng di chuyển khắp nơi với top chỗ ở khu vực trung tâm thành phố Hồ Chí Minh<br /></p>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-3" style={{ paddingRight: 5 }}><img className="img-fluid border rounded shadow d-xl-flex" src="assets/img/apartment_12_1584602806.jpg" />
                                    <div>
                                        <p className="d-xl-flex" style={{ fontWeight: 'bold', fontSize: 14, color: 'rgb(127,127,127)', marginBottom: 10, marginTop: 5 }}>Gần Trung tâm!<br /></p>
                                        <p className="text-left d-xl-flex">Dễ dàng di chuyển khắp nơi với top chỗ ở khu vực trung tâm thành phố Hồ Chí Minh<br /></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-left">
                                    <h4 style={{ fontWeight: 'bold' }}><br />Thiết lập trạng thái "bình thường mới" tại tại Vũng Tàu<br /></h4>
                                    <p style={{ marginRight: 0, marginBottom: 5 }}>Đổi gió cùng bạn bè hoặc người thân tại thành phố biển Vũng Tàu xinh đẹp<br /></p>
                                    <p className="text-right" style={{ color: 'rgb(247,94,57)', marginBottom: 10 }}>xem thêm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3" style={{ paddingRight: 5 }}><img className="img-fluid border rounded shadow d-xl-flex" src="assets/img/apartment_10_1584602562.jpg" />
                                    <div>
                                        <p className="d-xl-flex" style={{ fontWeight: 'bold', fontSize: 14, color: 'rgb(127,127,127)', marginBottom: 10, marginTop: 5 }}>Gần Trung tâm!<br /></p>
                                        <p className="text-left d-xl-flex">Dễ dàng di chuyển khắp nơi với top chỗ ở khu vực trung tâm thành phố Hồ Chí Minh<br /></p>
                                    </div>
                                </div>
                                <div className="col-md-3" style={{ paddingRight: 5 }}><img className="img-fluid border rounded shadow d-xl-flex" src="assets/img/apartment_8_1584602495.jpg" />
                                    <div>
                                        <p className="d-xl-flex" style={{ fontWeight: 'bold', fontSize: 14, color: 'rgb(127,127,127)', marginBottom: 10, marginTop: 5 }}>Gần Trung tâm!<br /></p>
                                        <p className="text-left d-xl-flex">Dễ dàng di chuyển khắp nơi với top chỗ ở khu vực trung tâm thành phố Hồ Chí Minh<br /></p>
                                    </div>
                                </div>
                                <div className="col-md-3" style={{ paddingRight: 5 }}><img className="img-fluid border rounded shadow d-xl-flex" src="assets/img/apartment_1_1585280532.jpg" />
                                    <div>
                                        <p className="d-xl-flex" style={{ fontWeight: 'bold', fontSize: 14, color: 'rgb(127,127,127)', marginBottom: 10, marginTop: 5 }}>Gần Trung tâm!<br /></p>
                                        <p className="text-left d-xl-flex">Dễ dàng di chuyển khắp nơi với top chỗ ở khu vực trung tâm thành phố Hồ Chí Minh<br /></p>
                                    </div>
                                </div>
                                <div className="col-md-3" style={{ paddingRight: 5 }}><img className="img-fluid border rounded shadow d-xl-flex" src="assets/img/apartment_12_1584602806.jpg" />
                                    <div>
                                        <p className="d-xl-flex" style={{ fontWeight: 'bold', fontSize: 14, color: 'rgb(127,127,127)', marginBottom: 10, marginTop: 5 }}>Gần Trung tâm!<br /></p>
                                        <p className="text-left d-xl-flex">Dễ dàng di chuyển khắp nơi với top chỗ ở khu vực trung tâm thành phố Hồ Chí Minh<br /></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-left">
                                    <h4 style={{ fontWeight: 'bold' }}><br />Thiết lập trạng thái "bình thường mới" tại Hà Nội<br /></h4>
                                    <p style={{ marginBottom: 5 }}>Khám phá từng góc phố Hà Nội cùng Top chỗ ở siêu ưu đãi.<br /></p>
                                    <p className="text-right" style={{ color: 'rgb(247,94,57)', marginBottom: 10 }}>xem thêm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3" style={{ paddingRight: 5 }}><img className="img-fluid border rounded shadow d-xl-flex" src="assets/img/apartment_10_1584602562.jpg" />
                                    <div>
                                        <p className="d-xl-flex" style={{ fontWeight: 'bold', fontSize: 14, color: 'rgb(127,127,127)', marginBottom: 10, marginTop: 5 }}>Gần Trung tâm!<br /></p>
                                        <p className="text-left d-xl-flex">Dễ dàng di chuyển khắp nơi với top chỗ ở khu vực trung tâm thành phố Hồ Chí Minh<br /></p>
                                    </div>
                                </div>
                                <div className="col-md-3" style={{ paddingRight: 5 }}><img className="img-fluid border rounded shadow d-xl-flex" src="assets/img/apartment_8_1584602495.jpg" />
                                    <div>
                                        <p className="d-xl-flex" style={{ fontWeight: 'bold', fontSize: 14, color: 'rgb(127,127,127)', marginBottom: 10, marginTop: 5 }}>Gần Trung tâm!<br /></p>
                                        <p className="text-left d-xl-flex">Dễ dàng di chuyển khắp nơi với top chỗ ở khu vực trung tâm thành phố Hồ Chí Minh<br /></p>
                                    </div>
                                </div>
                                <div className="col-md-3" style={{ paddingRight: 5 }}><img className="img-fluid border rounded shadow d-xl-flex" src="assets/img/apartment_1_1585280532.jpg" />
                                    <div>
                                        <p className="d-xl-flex" style={{ fontWeight: 'bold', fontSize: 14, color: 'rgb(127,127,127)', marginBottom: 10, marginTop: 5 }}>Gần Trung tâm!<br /></p>
                                        <p className="text-left d-xl-flex">Dễ dàng di chuyển khắp nơi với top chỗ ở khu vực trung tâm thành phố Hồ Chí Minh<br /></p>
                                    </div>
                                </div>
                                <div className="col-md-3" style={{ paddingRight: 5 }}><img className="img-fluid border rounded shadow d-xl-flex" src="assets/img/apartment_12_1584602806.jpg" />
                                    <div>
                                        <p className="d-xl-flex" style={{ fontWeight: 'bold', fontSize: 14, color: 'rgb(127,127,127)', marginBottom: 10, marginTop: 5 }}>Gần Trung tâm!<br /></p>
                                        <p className="text-left d-xl-flex">Dễ dàng di chuyển khắp nơi với top chỗ ở khu vực trung tâm thành phố Hồ Chí Minh<br /></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-left">
                                    <h4 style={{ fontWeight: 'bold' }}><br />Thiết lập trạng thái "bình thường mới" tại Đà Lạt<br /></h4>
                                    <p style={{ marginBottom: 10 }}>Khám phá ngay top 08 homestay nổi bật khắp Việt Nam được bầu chọn bởi tạp trí TravelMag (mục The Trend Report) số 36. Đặt ngay kẻo lỡ!<br /></p>
                                    <p className="text-right" style={{ color: 'rgb(247,94,57)', marginBottom: 5 }}>xem thêm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3" style={{ paddingRight: 5 }}><img className="img-fluid border rounded shadow d-xl-flex" src="assets/img/apartment_10_1584602562.jpg" />
                                    <div>
                                        <p className="d-xl-flex" style={{ fontWeight: 'bold', fontSize: 14, color: 'rgb(127,127,127)', marginBottom: 10, marginTop: 5 }}>Gần Trung tâm!<br /></p>
                                        <p className="text-left d-xl-flex">Dễ dàng di chuyển khắp nơi với top chỗ ở khu vực trung tâm thành phố Hồ Chí Minh<br /></p>
                                    </div>
                                </div>
                                <div className="col-md-3" style={{ paddingRight: 5 }}><img className="img-fluid border rounded shadow d-xl-flex" src="assets/img/apartment_8_1584602495.jpg" />
                                    <div>
                                        <p className="d-xl-flex" style={{ fontWeight: 'bold', fontSize: 14, color: 'rgb(127,127,127)', marginBottom: 10, marginTop: 5 }}>Gần Trung tâm!<br /></p>
                                        <p className="text-left d-xl-flex">Dễ dàng di chuyển khắp nơi với top chỗ ở khu vực trung tâm thành phố Hồ Chí Minh<br /></p>
                                    </div>
                                </div>
                                <div className="col-md-3" style={{ paddingRight: 5 }}><img className="img-fluid border rounded shadow d-xl-flex" src="assets/img/apartment_1_1585280532.jpg" />
                                    <div>
                                        <p className="d-xl-flex" style={{ fontWeight: 'bold', fontSize: 14, color: 'rgb(127,127,127)', marginBottom: 10, marginTop: 5 }}>Gần Trung tâm!<br /></p>
                                        <p className="text-left d-xl-flex">Dễ dàng di chuyển khắp nơi với top chỗ ở khu vực trung tâm thành phố Hồ Chí Minh<br /></p>
                                    </div>
                                </div>
                                <div className="col-md-3" style={{ paddingRight: 5 }}><img className="img-fluid border rounded shadow d-xl-flex" src="assets/img/apartment_12_1584602806.jpg" />
                                    <div>
                                        <p className="d-xl-flex" style={{ fontWeight: 'bold', fontSize: 14, color: 'rgb(127,127,127)', marginBottom: 10, marginTop: 5 }}>Gần Trung tâm!<br /></p>
                                        <p className="text-left d-xl-flex">Dễ dàng di chuyển khắp nơi với top chỗ ở khu vực trung tâm thành phố Hồ Chí Minh<br /></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-left">
                                    <h4 style={{ fontWeight: 'bold' }}><br />Thiết lập trạng thái "bình thường mới" dọc miền Trung<br /></h4>
                                    <p style={{ marginBottom: 10 }}>Thiên đường biển miền Trung từ Đà Nẵng - Hội An - Huế đầy nắng và gió đang chờ đón bạn khám phá.<br /></p>
                                    <p className="text-right" style={{ color: 'rgb(247,94,57)', marginBottom: 5 }}>xem thêm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3" style={{ paddingRight: 5 }}><img className="img-fluid border rounded shadow d-xl-flex" src="assets/img/apartment_10_1584602562.jpg" />
                                    <div>
                                        <p className="d-xl-flex" style={{ fontWeight: 'bold', fontSize: 14, color: 'rgb(127,127,127)', marginBottom: 10, marginTop: 5 }}>Gần Trung tâm!<br /></p>
                                        <p className="text-left d-xl-flex">Dễ dàng di chuyển khắp nơi với top chỗ ở khu vực trung tâm thành phố Hồ Chí Minh<br /></p>
                                    </div>
                                </div>
                                <div className="col-md-3" style={{ paddingRight: 5 }}><img className="img-fluid border rounded shadow d-xl-flex" src="assets/img/apartment_8_1584602495.jpg" />
                                    <div>
                                        <p className="d-xl-flex" style={{ fontWeight: 'bold', fontSize: 14, color: 'rgb(127,127,127)', marginBottom: 10, marginTop: 5 }}>Gần Trung tâm!<br /></p>
                                        <p className="text-left d-xl-flex">Dễ dàng di chuyển khắp nơi với top chỗ ở khu vực trung tâm thành phố Hồ Chí Minh<br /></p>
                                    </div>
                                </div>
                                <div className="col-md-3" style={{ paddingRight: 5 }}><img className="img-fluid border rounded shadow d-xl-flex" src="assets/img/apartment_1_1585280532.jpg" />
                                    <div>
                                        <p className="d-xl-flex" style={{ fontWeight: 'bold', fontSize: 14, color: 'rgb(127,127,127)', marginBottom: 10, marginTop: 5 }}>Gần Trung tâm!<br /></p>
                                        <p className="text-left d-xl-flex">Dễ dàng di chuyển khắp nơi với top chỗ ở khu vực trung tâm thành phố Hồ Chí Minh<br /></p>
                                    </div>
                                </div>
                                <div className="col-md-3" style={{ paddingRight: 5 }}><img className="img-fluid border rounded shadow d-xl-flex" src="assets/img/apartment_12_1584602806.jpg" />
                                    <div>
                                        <p className="d-xl-flex" style={{ fontWeight: 'bold', fontSize: 14, color: 'rgb(127,127,127)', marginBottom: 10, marginTop: 5 }}>Gần Trung tâm!<br /></p>
                                        <p className="text-left d-xl-flex">Dễ dàng di chuyển khắp nơi với top chỗ ở khu vực trung tâm thành phố Hồ Chí Minh<br /></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-left">
                                    <h4 style={{ fontWeight: 'bold' }}><br />Vinhomes<br /></h4>
                                    <p style={{ marginBottom: 10 }}>Tận hưởng không gian sống tuyệt vời tại thương hiệu đô thị hàng đầu Việt Nam<br /></p>
                                    <p className="text-right" style={{ color: 'rgb(247,94,57)', marginBottom: 5 }}>xem thêm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3" style={{ paddingRight: 5 }}><img className="img-fluid border rounded shadow d-xl-flex" src="assets/img/apartment_10_1584602562.jpg" />
                                    <div>
                                        <p className="d-xl-flex" style={{ fontWeight: 'bold', fontSize: 14, color: 'rgb(127,127,127)', marginBottom: 10, marginTop: 5 }}>Gần Trung tâm!<br /></p>
                                        <p className="text-left d-xl-flex">Dễ dàng di chuyển khắp nơi với top chỗ ở khu vực trung tâm thành phố Hồ Chí Minh<br /></p>
                                    </div>
                                </div>
                                <div className="col-md-3" style={{ paddingRight: 5 }}><img className="img-fluid border rounded shadow d-xl-flex" src="assets/img/apartment_8_1584602495.jpg" />
                                    <div>
                                        <p className="d-xl-flex" style={{ fontWeight: 'bold', fontSize: 14, color: 'rgb(127,127,127)', marginBottom: 10, marginTop: 5 }}>Gần Trung tâm!<br /></p>
                                        <p className="text-left d-xl-flex">Dễ dàng di chuyển khắp nơi với top chỗ ở khu vực trung tâm thành phố Hồ Chí Minh<br /></p>
                                    </div>
                                </div>
                                <div className="col-md-3" style={{ paddingRight: 5 }}><img className="img-fluid border rounded shadow d-xl-flex" src="assets/img/apartment_1_1585280532.jpg" />
                                    <div>
                                        <p className="d-xl-flex" style={{ fontWeight: 'bold', fontSize: 14, color: 'rgb(127,127,127)', marginBottom: 10, marginTop: 5 }}>Gần Trung tâm!<br /></p>
                                        <p className="text-left d-xl-flex">Dễ dàng di chuyển khắp nơi với top chỗ ở khu vực trung tâm thành phố Hồ Chí Minh<br /></p>
                                    </div>
                                </div>
                                <div className="col-md-3" style={{ paddingRight: 5 }}><img className="img-fluid border rounded shadow d-xl-flex" src="assets/img/apartment_12_1584602806.jpg" />
                                    <div>
                                        <p className="d-xl-flex" style={{ fontWeight: 'bold', fontSize: 14, color: 'rgb(127,127,127)', marginBottom: 10, marginTop: 5 }}>Gần Trung tâm!<br /></p>
                                        <p className="text-left d-xl-flex">Dễ dàng di chuyển khắp nơi với top chỗ ở khu vực trung tâm thành phố Hồ Chí Minh<br /></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-left">
                                    <h4 style={{ fontStyle: 'normal', fontWeight: 'bold' }}><br />Gợi ý khám phá<br /></h4>
                                    <p style={{ marginBottom: 10 }}>Tận hưởng không gian sống tuyệt vời tại thương hiệu đô thị hàng đầu Việt Nam<br /></p>
                                    <p className="text-right" style={{ color: 'rgb(247,94,57)', marginBottom: 5 }}>xem thêm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ padding: 30, margin: 0 }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6"><img src="assets/img/logo.png" style={{ width: 250 }} />
                                    <h1 style={{ fontSize: '2.3rem' }}>TÌM KIẾM CHỖ Ở GIÁ TỐT NHẤT<br /></h1>
                                    <p>Luxstay hiện là nền tảng đặt phòng trực tuyến #1 Việt Nam. Đồng hành cùng chúng tôi, bạn có những chuyến đi mang đầy trải nghiệm. Với Luxstay, việc đặt chỗ ở, biệt thự nghỉ dưỡng, khách sạn, nhà riêng, chung cư... trở nên nhanh chóng,
            thuận tiện và dễ dàng.<br /><br /></p>
                                    <div className="d-xl-flex justify-content-xl-center align-items-xl-center"><img className="img-thumbnail img-fluid" src="assets/img/qr-code.png" style={{ width: 130, padding: 5 }} /><img className="img-fluid" src="assets/img/apple-store.svg" style={{ width: 100 }} /><img className="img-fluid" src="assets/img/huawei.svg" style={{ width: 100 }} />
                                        <img className="img-fluid" src="assets/img/google-play.svg" style={{ width: 100 }} /></div>
                                </div>
                                <div className="col-md-6"><img className="img-fluid" src="assets/img/home-02.png" /></div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </>

        );
    }
}

export default Home