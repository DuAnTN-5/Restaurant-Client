import "../style/CheckOutPay.css";
import PayMoney from "../assets/pay-money.jpg";
import PayBank from "../assets/pay-bank.png";
import PayMomo from "../assets/pay-momo.jpg";
import PayVnp from "../assets/pay-vnp.jpg";
import { api } from "../api";
import { useEffect, useState } from "react";

const CheckoutPay = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [discountCode, setDiscountCode] = useState("");

  const reservationData = JSON.parse(localStorage.getItem("reservationData"));

  // Hàm định dạng tiền tệ
  const formatCurrency = (amount) =>
    new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      minimumFractionDigits: 3,
      maximumFractionDigits: 3,
    }).format(amount);

  // Lấy giỏ hàng từ localStorage
  const getCartFromLocalStorage = () => {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      try {
        return JSON.parse(cartData);
      } catch {
        console.error("Lỗi parse dữ liệu từ localStorage");
      }
    }
    return {};
  };

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        setLoading(true);
        setError("");

        const cart = getCartFromLocalStorage();
        const productIds = Object.keys(cart).map((id) => parseInt(id, 10));

        if (productIds.length === 0) {
          setCartItems([]);
          return;
        }

        const response = await api.get("/products");
        const products = response.data.data;

        const detailedCart = productIds
          .map((id) => {
            const product = products.find((item) => item.id === id);
            if (!product) return null;
            return {
              ...product,
              quantity: cart[id],
            };
          })
          .filter(Boolean);

        setCartItems(detailedCart);
      } catch (err) {
        console.error("Error fetching cart items:", err);
        setError("Không thể tải dữ liệu giỏ hàng.");
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const calculateDeposit = () => {
    return calculateTotal() * 0.2; // Tiền cọc = 20% tổng tiền
  };

  const handlePayment = () => {
    console.log("Dữ liệu đặt bàn:", reservationData);
    console.log("Dữ liệu giỏ hàng:", cartItems);

    alert("Thanh toán thành công!");

    localStorage.removeItem("reservationData");
    localStorage.removeItem("cart");
  };

  const handleApplyDiscount = () => {
    if (!discountCode) {
      alert("Vui lòng nhập mã giảm giá!");
      return;
    }

    // Ví dụ xử lý mã giảm giá
    if (discountCode === "DISCOUNT10") {
      alert("Áp dụng mã giảm giá thành công: Giảm 10%");
      // Thực hiện giảm giá ở đây (cập nhật tổng tiền, v.v.)
    } else {
      alert("Mã giảm giá không hợp lệ!");
    }
  };

  if (loading) return <div className="loading-message">Đang tải dữ liệu...</div>;
  if (error) return <div className="error-message">{error}</div>;
  if (cartItems.length === 0)
    return <div className="empty-cart-message">Giỏ hàng của bạn đang trống.</div>;

  return (
    <div className="checkout-pay-container">
      <h1 className="checkout-pay-title title-vphu">Đơn Hàng Của Bạn</h1>
      <div className="checkout-oder-container container-vphu">
      <div className="checkout-pay-left">
        {/* Thông tin đặt bàn */}
        <div className="reservation-details-checkout-pay">
  <h3 className="reservation-title subtitle-vphu">Thông Tin Đặt Bàn:</h3>
  <div className="reservation-content">
    <div className="reservation-items">
      <p className="reservation-items-text">Số bàn:</p>
      <p className="reservation-items-text-value">{reservationData.table}</p>
    </div>
    <div className="reservation-items">
      <p className="reservation-items-text">Ngày:</p>
      <p className="reservation-items-text-value">{reservationData.date}</p>
    </div>
    <div className="reservation-items">
      <p className="reservation-items-text">Thời gian:</p>
      <p className="reservation-items-text-value">{reservationData.time}</p>
    </div>
    <div className="reservation-items">
      <p className="reservation-items-text">Số khách:</p>
      <p className="reservation-items-text-value">{reservationData.guests}</p>
    </div>
    <div className="reservation-items">
      <p className="reservation-items-text">Họ & Tên:</p>
      <p className="reservation-items-text-value">{reservationData.name}</p>
    </div>
    <div className="reservation-items">
      <p className="reservation-items-text">Số điện thoại:</p>
      <p className="reservation-items-text-value">{reservationData.phone}</p>
    </div>
    <div className="reservation-items">
      <p className="reservation-items-text">Email:</p>
      <p className="reservation-items-text-value">{reservationData.email || "Không cung cấp"}</p>
    </div>
    <div className="reservation-items">
      <p className="reservation-items-text">Ghi chú:</p>
      <p className="reservation-items-text-value">{reservationData.note || "Không có ghi chú"}</p>
    </div>
  </div>
</div>

        {/* Mã giảm giá */}
        <div className="checkout-pay-discount">
          <h3 className="checkout-pay-discount-title subtitle-vphu">Nhập Mã Giảm Giá:</h3>
          <div className="checkout-pay-discount-input-wrapper">
            <input
              type="text"
              className="checkout-pay-discount-input"
              placeholder="Nhập mã giảm giá tại đây"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
            />
            <button
              className="checkout-pay-discount-button"
              onClick={handleApplyDiscount}
            >
              Áp Dụng
            </button>
          </div>
        </div>

        {/* Phương thức thanh toán */}
        <div className="checkout-pay-payment-methods">
          <h3 className="checkout-pay-payment-methods-title subtitle-vphu">Phương Thức Thanh Toán:</h3>
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
      </div>

      <div className="checkout-pay-right">
        <table className="checkout-pay-table">
          <thead>
            <tr className="subtitle-oder">
              <th className="checkout-pay-header-product subtitle-vphu">Sản Phẩm</th>
              <th className="checkout-pay-header-subtotal subtitle-vphu">Tạm Tính</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td className="checkout-pay-product-info">
                  <img
                    src={`http://127.0.0.1:8000/${item.image_url}`}
                    alt={item.name}
                    className="checkout-pay-product-image"
                  />
                  <div className="checkout-pay-product-details">
                    <p className="checkout-pay-product-name">{item.name}</p>
                    <small className="checkout-pay-product-quantity">× {item.quantity}</small>
                  </div>
                </td>
                <td className="checkout-pay-product-price">
                  {formatCurrency(item.price * item.quantity)}
                </td>
              </tr>
            ))}
            <tr>
              <td className="checkout-pay-header-product checkout-pay-subtotal-title">Tổng Cộng:</td>
              <td className="checkout-pay-header-subtotal checkout-pay-subtotal-amount">
                {formatCurrency(calculateTotal())}
              </td>
            </tr>
            <tr>
              <td className="checkout-pay-header-product checkout-pay-subtotal-title">Tiền Cọc (20%):</td>
              <td className="checkout-pay-header-subtotal checkout-pay-subtotal-amount">
                {formatCurrency(calculateDeposit())}
              </td>
            </tr>
          </tbody>
        </table>
        <button className="checkout-pay-button" onClick={handlePayment}>
          Thanh Toán
        </button>
      </div>
      </div>
    </div>
  );
};

export default CheckoutPay;
