import "../style/CartProduct.css";

const Cart = () => {
  return (
    <div className="cart-container container-vphu">
      <h1 className="title-cart-page title-vphu">Giỏ Hàng</h1>

      <div className="reservation-cart-container">
        <div className="reservation-details">
          <p className="reservation-table">
            <strong>Bàn:</strong> T01
          </p>
          <p className="reservation-guests">
            <strong>Khách:</strong> 14 người
          </p>
          <p className="reservation-date">
            <strong>Ngày:</strong> 2024-11-30
          </p>
          <p className="reservation-time">
            <strong>Giờ:</strong> 19:00
          </p>
          <button className="reservation-toggle-button">Xoá bàn</button>
        </div>

        <div className="cart-items">
          <div className="cart-item-cart-product">
            <div className="cart-item-image">
              <span className="cart-item-image-text">Món ăn hiện tại: 2</span>
            </div>
            <div className="cart-item-info">
              <div className="cart-item-name">
                <strong>Xem</strong>
              </div>
            </div>
            <div className="cart-item-total">
              <strong>Tổng:</strong> 300.000 VND
            </div>
            <button className="remove-button">X</button>
          </div>
        </div>
        <div className="button-checkout-item">Thanh Toán</div>
      </div>

      <div className="reservation-cart-container">
        <div className="reservation-details">
          <p className="reservation-table">
            <strong>Bàn:</strong> T05
          </p>
          <p className="reservation-guests">
            <strong>Khách:</strong> 4 người
          </p>
          <p className="reservation-date">
            <strong>Ngày:</strong> 2024-12-08
          </p>
          <p className="reservation-time">
            <strong>Giờ:</strong> 9:00
          </p>
          <button className="reservation-toggle-button">Xoá bàn</button>
        </div>

        <div className="cart-items">
          <div className="cart-item-cart-product">
            <div className="cart-item-image">
              <span className="cart-item-image-text">Món ăn hiện tại: 0</span>
            </div>
            <div className="cart-item-info">
              <div className="cart-item-name">
                <strong>Xem</strong>
              </div>
            </div>
            <div className="cart-item-total">
              <strong>Tổng:</strong> 0 VND
            </div>
            <button className="remove-button">X</button>
          </div>
        </div>
        <div className="button-checkout-item">Thanh Toán</div>
      </div>

      <div className="reservation-cart-container">
        <div className="reservation-details">
          <p className="reservation-table">
            <strong>Bàn:</strong> T02
          </p>
          <p className="reservation-guests">
            <strong>Khách:</strong> 2 người
          </p>
          <p className="reservation-date">
            <strong>Ngày:</strong> 2024-10-22
          </p>
          <p className="reservation-time">
            <strong>Giờ:</strong> 20:00
          </p>
          <button className="reservation-toggle-button">Xoá bàn</button>
        </div>

        <div className="cart-items">
          <div className="cart-item-cart-product">
            <div className="cart-item-image">
              <span className="cart-item-image-text">Món ăn hiện tại: 4</span>
            </div>
            <div className="cart-item-info">
              <div className="cart-item-name">
                <strong>Xem</strong>
              </div>
            </div>
            <div className="cart-item-total">
              <strong>Tổng:</strong> 650.000 VND
            </div>
            <button className="remove-button">X</button>
          </div>
        </div>
        <div className="button-checkout-item">Thanh Toán</div>
      </div>

      {/* Tổng tiền và các nút điều hướng */}
      <div className="cart-summary-cart-product">
        <div className="summary-title-cart-product">
          <strong>Tổng tiền:</strong>{" "}
          <span className="summary-total">950.000 VND</span>
        </div>
        <p className="summary-note">Lưu ý: Giá đã bao gồm thuế VAT.</p>
        <div className="cart-buttons">
          <button className="update-cart-btn">XÓA TẤT CẢ</button>
          <button className="checkout-btn">THANH TOÁN</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
