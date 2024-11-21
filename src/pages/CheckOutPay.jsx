import "../style/CheckOutPay.css";
import PayMoney from "../assets/pay-money.jpg";
import PayBank from "../assets/pay-bank.png";
import PayMomo from "../assets/pay-momo.jpg";
import PayVnp from "../assets/pay-vnp.jpg";

const CheckoutPay = () => {
  // Lấy dữ liệu đặt bàn từ Local Storage
  const reservationData = JSON.parse(localStorage.getItem("reservationData"));

  const handlePayment = () => {
    // Giả lập gửi dữ liệu lên API
    console.log("Dữ liệu đặt bàn:", reservationData);
    alert("Thanh toán thành công!");

    // Xóa dữ liệu khỏi Local Storage sau khi hoàn tất
    localStorage.removeItem("reservationData");
  };

  return (
    <div className="checkout-pay-container text-vphu">
      {/* Tiêu đề */}
      <h1 className="checkout-pay-title title-vphu">Đơn Hàng Của Bạn</h1>

      {/* Thông tin đặt bàn */}
      {reservationData && (
        <div className="reservation-details">
          <h3 className="reservation-title subtitle-vphu">Thông Tin Đặt Bàn:</h3>
          <p className="reservation-items">Họ & Tên: {reservationData.name}</p>
          <p className="reservation-items">Số điện thoại: {reservationData.phone}</p>
          <p className="reservation-items">Email: {reservationData.email || "Không cung cấp"}</p>
          <p className="reservation-items">Ngày: {reservationData.date}</p>
          <p className="reservation-items">Thời gian: {reservationData.time}</p>
          <p className="reservation-items">Số bàn: {reservationData.table}</p>
          <p className="reservation-items">Số khách: {reservationData.guests}</p>
          <p className="reservation-items">Ghi chú: {reservationData.note || "Không có ghi chú"}</p>
        </div>
      )}

      {/* Bảng sản phẩm */}
      <table className="checkout-pay-table">
        <thead>
          <tr>
            <th className="checkout-pay-header-product">Sản Phẩm</th>
            <th className="checkout-pay-header-subtotal">Tạm Tính</th>
          </tr>
        </thead>
        <tbody>
          {/* Sản phẩm mẫu */}
          <tr>
            <td className="checkout-pay-product-info">
              <img
                src="https://example.com/soup.jpg"
                alt="Súp Hải Sản"
                className="checkout-pay-product-image"
              />
              <div className="checkout-pay-product-details">
                <p className="checkout-pay-product-name">Súp Hải Sản</p>
                <small className="checkout-pay-product-quantity">× 2</small>
              </div>
            </td>
            <td className="checkout-pay-product-price">360.000₫</td>
          </tr>
          {/* Tổng cộng */}
          <tr>
            <td className="checkout-pay-header-product checkout-pay-subtotal-title">
              Tổng Cộng:
            </td>
            <td className="checkout-pay-header-subtotal checkout-pay-subtotal-amount">
              360.000₫
            </td>
          </tr>
        </tbody>
      </table>

      {/* Phương thức thanh toán */}
      <div className="checkout-pay-payment-methods">
        <h3 className="checkout-pay-payment-methods-title">Phương Thức Thanh Toán:</h3>
        <label className="checkout-pay-payment-option">
          <input type="radio" name="payment" value="cash" defaultChecked />
          <img
            src={PayMoney}
            alt="Trả tiền mặt khi vào bàn"
            className="checkout-pay-payment-icon"
          />
          Trả tiền mặt khi vào bàn
        </label>
        <label className="checkout-pay-payment-option">
          <input type="radio" name="payment" value="bank" />
          <img
            src={PayBank}
            alt="Thanh toán ngân hàng"
            className="checkout-pay-payment-icon"
          />
          Thanh toán ngân hàng
        </label>
        <label className="checkout-pay-payment-option">
          <input type="radio" name="payment" value="credit" />
          <img
            src={PayMomo}
            alt="Thanh toán bằng Momo"
            className="checkout-pay-payment-icon"
          />
          Thanh toán bằng Momo
        </label>
        <label className="checkout-pay-payment-option">
          <input type="radio" name="payment" value="vnPay" />
          <img
            src={PayVnp}
            alt="Thanh toán VNPay"
            className="checkout-pay-payment-icon"
          />
          Thanh toán VNPay
        </label>
      </div>

      {/* Hành động */}
      <div className="checkout-pay-action">
        <button className="checkout-pay-button" onClick={handlePayment}>
          Thanh Toán
        </button>
      </div>
    </div>
  );
};

export default CheckoutPay;

