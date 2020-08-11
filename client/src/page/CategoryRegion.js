import React, { Component } from 'react'
import Headers from '../components/Header'

export default class CategoryRegion extends Component {
    render() {
        return (
            <>
                <Headers />
                <div style={{ paddingTop: "100px" }}>
                    <div>
                        <div>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-12" style={{ padding: 15 }}>
                                        <div className="btn-group" role="group"><button className="btn btn-primary border rounded border-dark" type="button" style={{ backgroundColor: 'rgb(255,255,255)', color: 'rgb(136,136,136)', marginRight: 5, marginLeft: 5 }}><i className="la la-map-marker" style={{ paddingRight: 3, fontWeight: 'bold', fontSize: 18 }} />Khu vực</button>
                                            <button className="btn btn-primary border rounded border-dark" type="button" style={{ backgroundColor: 'rgb(255,255,255)', color: 'rgb(136,136,136)', marginRight: 5, marginLeft: 5 }}><i className="la la-building" style={{ paddingRight: 3, fontWeight: 'bold', fontSize: 18 }} />Loại chỗ ở</button><button className="btn btn-primary border rounded border-dark" type="button" style={{ backgroundColor: 'rgb(255,255,255)', color: 'rgb(136,136,136)', marginRight: 5, marginLeft: 5 }}><i className="la la-lightbulb-o" style={{ paddingRight: 3, fontWeight: 'bold', fontSize: 18 }} />Đặt phòng nhanh</button>
                                            <button className="btn btn-primary border rounded border-dark" type="button" style={{ backgroundColor: 'rgb(255,255,255)', color: 'rgb(136,136,136)', marginRight: 5, marginLeft: 5 }}><i className="fas fa-percent" style={{ paddingRight: 5, fontWeight: 'bold', fontSize: 18 }} />Giá ưu đãi</button><button className="btn btn-primary border rounded border-dark" type="button" style={{ backgroundColor: 'rgb(255,255,255)', color: 'rgb(136,136,136)', marginRight: 5, marginLeft: 5 }}><i className="icon ion-ios-pricetag" style={{ paddingRight: 5, fontWeight: 'bold', fontSize: 18 }} />Giá chỗ ở</button>
                                            <button className="btn btn-primary border rounded border-dark" type="button" style={{ backgroundColor: 'rgb(255,255,255)', color: 'rgb(136,136,136)', marginRight: 5, marginLeft: 5 }}><i className="icon ion-ios-briefcase" style={{ paddingRight: 5, fontWeight: 'bold', fontSize: 18 }} />Trải nghiệm chuyến đi</button><button className="btn btn-primary border rounded border-dark" type="button" style={{ backgroundColor: 'rgb(255,255,255)', color: 'rgb(136,136,136)', marginRight: 5, marginLeft: 5 }}><i className="fa fa-bed" style={{ paddingRight: 5, fontWeight: 'bold', fontSize: 18 }} />Phòng ngủ</button>
                                            <button className="btn btn-primary border rounded border-dark" type="button" style={{ backgroundColor: 'rgb(255,255,255)', color: 'rgb(136,136,136)', marginRight: 5, marginLeft: 5 }}>Thêm bộ lọc</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h4 style={{ fontWeight: 'bold', paddingBottom: 24 }}>2117 homestay tại Quận1, Hồ Chi Minh<br /></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="container-fluid">
                                <div className="row d-xl-flex justify-content-xl-center">
                                    <div className="col-sm-6 col-md-3 col-xl-2"><img className="img-fluid border rounded shadow d-xl-flex" src="assets/img/room_35509_1_1571915445.jpg" />
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
                                    <div className="col-sm-6 col-md-3 col-xl-2"><img className="img-fluid d-xl-flex" src="assets/img/IMG_7447.jpg" />
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
                                    <div className="col-sm-6 col-md-3 col-xl-2"><img className="img-fluid" src="assets/img/WOKWWyd3y5hrgWl2KxSRl1_g.png" />
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
                                    <div className="col-sm-6 col-md-3 col-xl-2"><img className="img-fluid" src="assets/img/room_18664_3_1545841874.jpg" />
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
                                    <div className="col-sm-6 col-md-2"><img className="img-fluid" src="assets/img/room_18664_3_1545841874.jpg" />
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
                                <div className="row d-xl-flex justify-content-xl-center">
                                    <div className="col-sm-6 col-md-3 col-xl-2"><img className="img-fluid border rounded shadow d-xl-flex" src="assets/img/room_35509_1_1571915445.jpg" />
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
                                    <div className="col-sm-6 col-md-3 col-xl-2"><img className="img-fluid d-xl-flex" src="assets/img/IMG_7447.jpg" />
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
                                    <div className="col-sm-6 col-md-3 col-xl-2"><img className="img-fluid" src="assets/img/WOKWWyd3y5hrgWl2KxSRl1_g.png" />
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
                                    <div className="col-sm-6 col-md-3 col-xl-2"><img className="img-fluid" src="assets/img/room_18664_3_1545841874.jpg" />
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
                                    <div className="col-sm-6 col-md-2"><img className="img-fluid" src="assets/img/room_18664_3_1545841874.jpg" />
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
                                <div className="row d-xl-flex justify-content-xl-center">
                                    <div className="col-sm-6 col-md-3 col-xl-2"><img className="img-fluid border rounded shadow d-xl-flex" src="assets/img/room_35509_1_1571915445.jpg" />
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
                                    <div className="col-sm-6 col-md-3 col-xl-2"><img className="img-fluid d-xl-flex" src="assets/img/IMG_7447.jpg" />
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
                                    <div className="col-sm-6 col-md-3 col-xl-2"><img className="img-fluid" src="assets/img/WOKWWyd3y5hrgWl2KxSRl1_g.png" />
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
                                    <div className="col-sm-6 col-md-3 col-xl-2"><img className="img-fluid" src="assets/img/room_18664_3_1545841874.jpg" />
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
                                    <div className="col-sm-6 col-md-2"><img className="img-fluid" src="assets/img/room_18664_3_1545841874.jpg" />
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
                                <div className="row d-xl-flex justify-content-xl-center">
                                    <div className="col-sm-6 col-md-3 col-xl-2"><img className="img-fluid border rounded shadow d-xl-flex" src="assets/img/room_35509_1_1571915445.jpg" />
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
                                    <div className="col-sm-6 col-md-3 col-xl-2"><img className="img-fluid d-xl-flex" src="assets/img/IMG_7447.jpg" />
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
                                    <div className="col-sm-6 col-md-3 col-xl-2"><img className="img-fluid" src="assets/img/WOKWWyd3y5hrgWl2KxSRl1_g.png" />
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
                                    <div className="col-sm-6 col-md-3 col-xl-2"><img className="img-fluid" src="assets/img/room_18664_3_1545841874.jpg" />
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
                                    <div className="col-sm-6 col-md-2"><img className="img-fluid" src="assets/img/room_18664_3_1545841874.jpg" />
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
                                <div className="row d-xl-flex justify-content-xl-center">
                                    <div className="col-sm-6 col-md-3 col-xl-2"><img className="img-fluid border rounded shadow d-xl-flex" src="assets/img/room_35509_1_1571915445.jpg" />
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
                                    <div className="col-sm-6 col-md-3 col-xl-2"><img className="img-fluid d-xl-flex" src="assets/img/IMG_7447.jpg" />
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
                                    <div className="col-sm-6 col-md-3 col-xl-2"><img className="img-fluid" src="assets/img/WOKWWyd3y5hrgWl2KxSRl1_g.png" />
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
                                    <div className="col-sm-6 col-md-3 col-xl-2"><img className="img-fluid" src="assets/img/room_18664_3_1545841874.jpg" />
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
                                    <div className="col-sm-6 col-md-2"><img className="img-fluid" src="assets/img/room_18664_3_1545841874.jpg" />
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
                        <div style={{ paddingBottom: 40 }}>
                            <nav className="d-xl-flex justify-content-xl-center" style={{ padding: 40, paddingBottom: 0 }}>
                                <ul className="pagination">
                                    <li className="page-item"><a className="page-link" href="#" aria-label="Previous"><span aria-hidden="true">«</span></a></li>
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">4</a></li>
                                    <li className="page-item"><a className="page-link" href="#">5</a></li>
                                    <li className="page-item"><a className="page-link" href="#" aria-label="Next"><span aria-hidden="true">»</span></a></li>
                                </ul>
                            </nav>
                            <p className="text-center">1 - 20 trong số 2117 chỗ ở<br /></p>
                        </div>
                        <div>
                            <div className="container-fluid border rounded-0 border-dark">
                                <div className="row">
                                    <div className="col-md-12">
                                        <p className="text-center" style={{ fontSize: 14, color: 'rgb(136,136,136)' }}><br />© 2019 Luxstay. Bản quyền thuộc về Công ty TNHH Luxstay Việt Nam. Mọi hành vi sao chép đều là phạm pháp nếu không có sự cho phép bằng văn bản của chúng tôi.<br /><br /></p>
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
