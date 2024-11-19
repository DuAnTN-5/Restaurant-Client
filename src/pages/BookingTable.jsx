import "../css/BookingTable.css";
function BookingTable() {
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
            <h3>Thông Tin Người Dùng</h3>
            <p>
              <span className="label">Tên người dùng:</span> Nguyễn Văn A
            </p>
            <p>
              <span className="label">Email:</span> nguyenvana@example.com
            </p>
            <p>
              <span className="label">Số điện thoại:</span> 0901234567
            </p>
            <p>
              <span className="label">Địa chỉ:</span> 123 Đường ABC, Phường 1,
              Quận X
            </p>
            <p>
              <span className="label">Ngày đặt bàn:</span> 13/11/2024
            </p>
            <p>
              <span className="label">Giờ đặt bàn:</span> 18:00 - 20:00
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingTable;
