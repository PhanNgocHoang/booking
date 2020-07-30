import React, { Component } from 'react';
import Headers from '../components/Header'


class sale extends Component {
    render() {
        return (
            <>
                <Headers />
                <div style={{ paddingTop: "80px" }}>
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