import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api";
import { toast } from "react-toastify";
import "../style/CartProduct.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showMenus, setShowMenus] = useState([]);
  const navigate = useNavigate();

  // Hàm lấy thông tin đặt bàn từ localStorage
  const getReservationsFromLocalStorage = () => {
    const reservations = JSON.parse(localStorage.getItem("reservations")) || [];
    return reservations;
  };

  // Hàm lấy giỏ hàng từ localStorage
  const getCartFromLocalStorage = () => {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      try {
        const parsedCart = JSON.parse(cartData);
        return Object.entries(parsedCart).map(([id, quantity]) => ({
          id: parseInt(id, 10),
          quantity,
        }));
      } catch {
        console.error("Lỗi parse dữ liệu từ localStorage");
        return [];
      }
    }
    return [];
  };

  // Hàm định dạng giá tiền
  const formatCurrency = (amount) =>
    new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      minimumFractionDigits: 3,
      maximumFractionDigits: 3,
    }).format(amount);

  // Lấy thông tin giỏ hàng và sản phẩm từ API
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        setLoading(true);
        setError("");

        const localCart = getCartFromLocalStorage();
        if (localCart.length === 0) {
          setCartItems([]);
          return;
        }

        const productResponse = await api.get("/products");
        const products = productResponse.data.data;

        const mergedCart = localCart
          .map((cartItem) => {
            const product = products.find((p) => p.id === cartItem.id);
            if (!product) return null;
            return {
              ...product,
              quantity: cartItem.quantity,
            };
          })
          .filter(Boolean);

        setCartItems(mergedCart);
      } catch (err) {
        console.error("Error fetching cart items:", err);
        setError("Không thể tải dữ liệu giỏ hàng.");
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  const calculateTotal = (price, quantity) => price * quantity;

  const updateCartInLocalStorage = (updatedCart) => {
    const cart = updatedCart.reduce((acc, item) => {
      acc[item.id] = item.quantity;
      return acc;
    }, {});
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const handleQuantityChange = (id, newQuantity) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCartItems);
    updateCartInLocalStorage(updatedCartItems);
    toast.success("Cập nhật số lượng thành công!");
  };

  const removeFromCart = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
    updateCartInLocalStorage(updatedCartItems);
    toast.success("Xóa món khỏi giỏ hàng thành công!");
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
    toast.success("Đã xóa tất cả các món trong giỏ hàng!");
  };

  const handleCheckout = () => {
    const reservationData = getReservationsFromLocalStorage();

    if (reservationData.length === 0) {
      toast.error("Bạn cần đặt bàn để đặt món", {
        position: "top-center",
      });

      setTimeout(() => {
        navigate("/booking-table");
      }, 2000);
    } else {
      toast.success("Thực hiện thanh toán", {
        position: "top-center",
      });

      const cartData = cartItems.map((item) => ({
        id: item.id,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      }));
      localStorage.setItem("cartData", JSON.stringify(cartData));

      setTimeout(() => {
        navigate("/checkout-pay");
      }, 3000);
    }
  };

  const toggleMenu = (index) => {
    setShowMenus((prevState) => {
      const updatedShowMenus = [...prevState];
      updatedShowMenus[index] = !updatedShowMenus[index];
      return updatedShowMenus;
    });
  };

  if (loading) return <div className="loading-message">Đang tải dữ liệu...</div>;
  if (error) return <div className="error-message">{error}</div>;
  if (cartItems.length === 0)
    return <div className="empty-cart-message">Giỏ hàng của bạn đang trống.</div>;

  const reservationData = getReservationsFromLocalStorage();

  return (
    <div className="cart-container container-vphu">
      <h1 className="title-cart-page title-vphu">Giỏ Hàng</h1>

      {/* Hiển thị tất cả thông tin đặt bàn */}
      {reservationData.length > 0 && (
        <div className="reservation-info-container">
          {reservationData.map((reservation, index) => (
            <div key={index} className="reservation-info">
              <div className="reservation-details">
                <p className="reservation-table"><strong>Bàn:</strong> {reservation.table}</p>
                <p className="reservation-guests"><strong>Khách:</strong> {reservation.guests} người</p>
                <p className="reservation-date"><strong>Ngày:</strong> {reservation.date}</p>
                <p className="reservation-time"><strong>Giờ:</strong> {reservation.time}</p>
              </div>
              <button
                className="toggle-button"
                onClick={() => toggleMenu(index)}
              >
                {showMenus[index] ? "Ẩn" : "Hiện"}
              </button>
              {showMenus[index] && (
                <div className="reservation-additional-info">
                  {/* Bạn có thể thêm các thông tin bổ sung tại đây nếu cần */}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Hiển thị giỏ hàng */}
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item-cart-product">
            <div className="cart-item-image">
              <img
                src={`http://127.0.0.1:8000/${item.image_url}`}
                alt={item.name}
                className="cart-item-image-img"
              />
            </div>
            <div className="cart-item-info">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-price">
                <strong>Giá:</strong> {formatCurrency(item.price)}
              </div>
            </div>
            <div className="quantity-control">
              <button
                className="quantity-btn"
                onClick={() =>
                  item.quantity > 1 && handleQuantityChange(item.id, item.quantity - 1)
                }
              >
                -
              </button>
              <input
                type="number"
                className="quantity-input"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                min="1"
              />
              <button
                className="quantity-btn"
                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>
            <div className="cart-item-total">
              <strong>Tổng :</strong> {formatCurrency(calculateTotal(item.price, item.quantity))}
            </div>
            <button
              className="remove-button"
              onClick={() => removeFromCart(item.id)}
            >
              X
            </button>
          </div>
        ))}
      </div>

      {/* Tổng tiền và các nút điều hướng */}
      <div className="cart-summary-cart-product">
        <div className="summary-title">
          <strong>Tổng tiền:</strong>{" "}
          <span className="summary-total">
            {formatCurrency(
              cartItems.reduce(
                (total, item) => total + calculateTotal(item.price, item.quantity),
                0
              )
            )}
          </span>
        </div>
        <p className="summary-note">Lưu ý: Giá đã bao gồm thuế VAT.</p>
        <div className="cart-buttons">
          <button className="update-cart-btn" onClick={clearCart}>
            XÓA TẤT CẢ
          </button>
          <button className="checkout-btn" onClick={handleCheckout}>
            THANH TOÁN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
