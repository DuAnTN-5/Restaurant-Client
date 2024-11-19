import "../css/BookingTable.css";
function BookingTable() {

  // let 
  return (
    <>
      <div className="booking-table-page">
        <div className="table-container">
          {/* <!-- Layout nhà hàng gồm cửa ra vào và quầy bar --> */}
          <div className="restaurant-layout">
            <div className="screen">SƠ ĐỒ BÀN</div>
            {/* <!-- <div className="entrance">CỬA RA VÀO</div> --> */}

            {/* <!-- Sơ đồ bàn --> */}
            <div className="table-map">
              <div className="entrance">CỬA RA VÀO</div>
              {/* <!-- Tạo các hàng bàn --> */}
              <div className="row">
                <div className="table regular">A1</div>
                <div className="table regular">A2</div>
                <div className="table regular">A3</div>
                <div className="table regular">A4</div>
                <div className="table regular">A5</div>
              </div>
              <div className="row">
                <div className="table vip">B1</div>
                <div className="table vip">B2</div>
                <div className="table vip">B3</div>
                <div className="table vip">B4</div>
                <div className="table vip">B5</div>
              </div>
              <div className="row">
                <div className="table premium">C1</div>
                <div className="table premium">C2</div>
                <div className="table premium">C3</div>
                <div className="table premium">C4</div>
                <div className="table premium">C5</div>
              </div>
              <div className="row">
                <div className="table couple">H1</div>
                <div className="table couple">H2</div>
                <div className="table couple">H3</div>
                <div className="table couple">H4</div>
                <div className="table couple">H5</div>
              </div>
            </div>

            <div className="bar">QUẦY BAR</div>
          </div>

          {/* <!-- Thông tin người dùng --> */}
          <div className="user-info">
            <h3 className="user-info-title">Thông Tin Người Dùng</h3>
            <p className="user-info-item">
              <span className="user-info-label">Tên người dùng</span>
              <span className="user-info-value">: Nguyễn Văn A</span>
            </p>
            <p className="user-info-item">
              <span className="user-info-label">Email</span>
              <span className="user-info-value">: nguyenvana@example.com</span>
            </p>
            <p className="user-info-item">
              <span className="user-info-label">Số điện thoại</span>
              <span className="user-info-value">: 0901234567</span>
            </p>
            <p className="user-info-item">
              <span className="user-info-label">Địa chỉ</span>
              <span className="user-info-value">
                : 123 Đường ABC, Phường 1, Quận X
              </span>
            </p>
            <p className="user-info-item">
              <span className="user-info-label">Ngày đặt bàn</span>
              <span className="user-info-value">: 13/11/2024</span>
            </p>
            <p className="user-info-item">
              <span className="user-info-label">Giờ đặt bàn</span>
              <span className="user-info-value">: 18:00 - 20:00</span>
            </p>
            <div className="bar oder">Đặt bàn</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingTable;
