import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api";
import { toast } from "react-toastify";
import "../style/CartProduct.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [coupon, setCoupon] = useState(""); // Để lưu trữ mã giảm giá
  const [discount, setDiscount] = useState(0); // Số tiền giảm giá

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

  const formatCurrency = (amount) =>
    new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);

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

  const handleCouponChange = (e) => {
    setCoupon(e.target.value);
  };

  const applyCoupon = () => {
    // Giả sử bạn có logic kiểm tra mã giảm giá
    if (coupon === "DISCOUNT10") {
      setDiscount(10); // Giảm 10%
      toast.success("Mã giảm giá áp dụng thành công!");
    } else {
      setDiscount(0);
      toast.error("Mã giảm giá không hợp lệ.");
    }
  };

  const clearCart = () => {
    setCartItems([]); // Xóa tất cả các món trong giỏ hàng
    localStorage.removeItem("cart"); // Xóa dữ liệu giỏ hàng trong localStorage
    toast.success("Đã xóa tất cả các món trong giỏ hàng!");
  };

  const handleCheckout = () => {
    // Kiểm tra thông tin đặt bàn trong localStorage
    const reservationData = JSON.parse(localStorage.getItem("reservationData"));

    if (!reservationData || !reservationData.time || !reservationData.table) {
      // Nếu chưa có thông tin đặt bàn
      toast.error("Bạn cần đặt bàn để đặt món", {
        position: "top-center",
      });

      setTimeout(() => {
        navigate("/booking-table");
      }, 2000);
    } else {
      // Nếu đã có thông tin đặt bàn
      toast.success("Thực hiện thanh toán", {
        position: "top-center",
      });

      // Lưu thông tin giỏ hàng vào Local Storage
      const cartData = cartItems.map((item) => ({
        id: item.id,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      }));
      localStorage.setItem("cartData", JSON.stringify(cartData));

      setTimeout(() => {
        navigate("/checkout-pay");
      }, 4000); // Chuyển hướng đến thanh toán sau 5 giây
    }
  };

  if (loading) return <div className="loading-message">Đang tải dữ liệu...</div>;
  if (error) return <div className="error-message">{error}</div>;
  if (cartItems.length === 0)
    return <div className="empty-cart-message">Giỏ hàng của bạn đang trống.</div>;

  return (
    <div className="cart-container container-vphu">
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
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

      <div className="coupon-section">
        <label htmlFor="coupon-code">
          <strong>Nhập mã giảm giá:</strong>
        </label>
        <input
          type="text"
          id="coupon-code"
          value={coupon}
          onChange={handleCouponChange}
          placeholder="Nhập mã giảm giá"
        />
        <button className="apply-coupon-btn" onClick={applyCoupon}>
          Áp dụng
        </button>
      </div>

      <div className="cart-summary">
        <div className="summary-title">
          <strong>Tổng tiền:</strong>{" "}
          <span className="summary-total">
            {formatCurrency(
              cartItems.reduce(
                (total, item) => total + calculateTotal(item.price, item.quantity),
                0
              ) * (1 - discount / 100)
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
