import "../style/CheckOutPay.css";
// import PayMoney from "../assets/pay-money.jpg";
// import PayBank from "../assets/pay-bank.png";
// import PayMomo from "../assets/pay-momo.jpg";
import PayVnp from "../assets/pay-vnp.jpg";
import { api, url } from "../api";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
// import { kebabCase } from "lodash";

const CheckoutPay = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [info, setInfo] = useState({
    table: "",
    guest: "",
    time: "",
    date: "",
    name: "",
    email: "",
    note: "",
    id: "",
  });
  const [coupon, setCoupon] = useState({});
  const [couponTotal, setCouponTotal] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // State kiểm soát modal
  const [isModalFailureOpen, setIsModalFailureOpen] = useState(false);
  const [food, setFood] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState("");
  // const [discountCode, setDiscountCode] = useState("");
  const navigate = useNavigate();
  // const reservationData = JSON.parse(localStorage.getItem("reservationData"));

  // Hàm định dạng tiền tệ
  const formatCurrency = (amount) =>
    new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      minimumFractionDigits: 3,
      maximumFractionDigits: 3,
    }).format(amount);

  useEffect(() => {
    let tableID = localStorage.getItem("tableID");

    let bookingInfo = localStorage.getItem("bookingInfo");
    if (bookingInfo) {
      bookingInfo = JSON.parse(bookingInfo);
    }
    let auth = localStorage.getItem("auth");
    if (auth) {
      auth = JSON.parse(auth);
    }
    // console.log(bookingInfo);
    // console.log(auth);

    setInfo((prevData) => ({
      ...prevData,
      table: tableID,
      guest: bookingInfo.guests,
      time: bookingInfo.time,
      date: bookingInfo.date,
      note: bookingInfo.note,
      email: auth.email,
      name: auth.name,
      id: auth.id,
    }));
  }, []);

  useEffect(() => {
    let cartID = localStorage.getItem("cartID");
    // console.log(cartID);
    let token = localStorage.getItem("token");
    if (token) {
      token = JSON.parse(token);
    }
    let config = {
      headers: {
        Authorization: "Bearer " + token,
        "Content-type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
    };

    api
      .get(`/cart/list-product/${cartID}`, config)
      .then((res) => {
        // console.log(res)
        setFood(res.data.data);
      })

      .catch((error) => console.log(error));
  }, []);

  // Hàm tính tổng tiền
  const calculateTotal = () => {
    return food.reduce((total, item) => total + item.price * item.quantity, 0);
    // 
  };

  // Hàm tính tổng tiền sau khi áp mã giảm giá
  const calculateTotalCoupon = () => {
    const discountPercentage = parseFloat(couponTotal.value) || 0; // API trả về giá trị mã giảm giá, ví dụ 25%
    const total = calculateTotal(); // Tổng tiền ban đầu
    const discountAmount = (total * discountPercentage) / 100; // Số tiền giảm
    return total - discountAmount; // Tổng tiền sau khi giảm
  };

  // Hàm tính tiền cọc (20% của tổng tiền)
  const calculateDeposit = () => {
    if (couponTotal) {
      return calculateTotalCoupon() * 0.2;
    } else {
      return calculateTotal() * 0.2;
    }
  };

  let amount = formatCurrency(calculateDeposit());
  const handlePayment = () => {
    if (!paymentMethod) {
      toast.error("Vui lòng chọn phương thức thanh toán!");
      return;
    } else {
      let tableID = localStorage.getItem("tableID");
      let cartID = localStorage.getItem("cartID");
      let token = localStorage.getItem("token");
      if (token) {
        token = JSON.parse(token);
      }
      let config = {
        headers: {
          Authorization: "Bearer " + token,
          "Content-type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
      };
      const depositAmount = calculateDeposit();
      const depositAmountTotal = calculateTotal();
     

      const formData = new FormData();
      formData.append("table_id", tableID);
      formData.append("amount", depositAmount.toFixed(0));
      formData.append("total_amount", depositAmountTotal.toFixed(0));
      formData.append("cart_id", cartID);
      formData.append("user_id", info.id);
      if (couponTotal && couponTotal.id) {
        formData.append("coupon_id", couponTotal.id);
      }
      // else {
      //   formData.append("coupon_id", null);
      // }
      // formData.append("coupon_id", couponTotal.id);
      // console.log("amount", depositAmount.toFixed(2));
      api
        .post("/vnpay/payment", formData, config)
        .then((res) => {
          setPaymentMethod("");
          // console.log(res);
          if (res.data.status) {
            const checkoutVnPay = res.data.payment_url;
            // toast.success("nhảy trang");
            window.location.href = checkoutVnPay;
            // console.log(checkoutVnPay);

            // setIsModalOpen(true);
          }
        })
        .catch((error) => console.log(error));
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    navigate("/"); // Điều hướng về trang chính sau khi đóng modal (tùy chọn)
  };

  const closeFailureModal = () => {
    setIsModalFailureOpen(false);
    navigate("/cart"); // Điều hướng về trang chính sau khi đóng modal (tùy chọn)
  };

  const handleChangeCoupon = (e) => {
    setCoupon(e.target.value);
  };
  const handleApplyDiscount = () => {
    if (!coupon) {
      toast.error("Bạn chưa nhập mã giảm giá");
    } else {
      let token = localStorage.getItem("token");
      if (token) {
        token = JSON.parse(token);
      }
      let config = {
        headers: {
          Authorization: "Bearer " + token,
          "Content-type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
      };

      const formData = new FormData();
      formData.append("user_id", info.id);
      formData.append("coupon_code", coupon);
      // console.log(info.id)

      api
        .post("/check-coupon", formData, config)
        .then((res) => {
          // console.log(res);
          if (res.status === 200) {
            setCouponTotal(res.data.coupon);
            toast.success("Sử dụng mã giảm giá thành công");
          }
        })
        .catch((error) => {
          if (error.status === 400) {
            toast.error(error.response.data.message);
          }
        });
    }
  };

  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const responseCode = queryParams.get("vnp_ResponseCode");
    // lấy phần truy vấn (query string) của URL
    //Lấy giá trị của tham số vnp_ResponseCode từ query string
    // const secureHash = queryParams.get("vnp_SecureHash");
    // const txnRef = queryParams.get("vnp_TxnRef"); // Lấy vnp_TxnRef từ URL

    let token = localStorage.getItem("token");
    if (token) {
      token = JSON.parse(token);
    }
    let config = {
      headers: {
        Authorization: "Bearer " + token,
        "Content-type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
    };

    if (responseCode) {
      // Thực hiện gọi API với các tham số từ URL
      api
        .get(`/vnpay/callback?` + queryParams.toString(), config)
        .then((res) => {
          // console.log("API Response: ", res);
          if (!res.data.status) {
            setIsModalFailureOpen(true); // Hiển thị modal thất bại
            
            // toast.error(res.data.message);
          } else {
            setIsModalOpen(true); // Hiển thị modal thành công
            localStorage.removeItem("cartID");
            localStorage.removeItem("tableID");
          }
        })
        .catch((error) => console.error("API Error: ", error));
    } 
  }, [location.search]);

  return (
    <div className="checkout-pay-container">
      <h1 className="checkout-pay-title title-vphu">Đơn Hàng Của Bạn</h1>
      <div className="checkout-oder-container container-vphu">
        <div className="checkout-pay-left">
          {/* Thông tin đặt bàn */}
          <div className="reservation-details-checkout-pay">
            <h3 className="reservation-title subtitle-vphu">
              Thông Tin Đặt Bàn:
            </h3>
            <div className="reservation-content">
              <div className="reservation-first-items">
                <div className="reservation-items elm-first-co">
                  <p className="reservation-items-text">Số bàn:</p>
                  <input
                    type="text"
                    name="table"
                    className="reservation-items-text-value input-first-co"
                    value={info.table}
                    readOnly
                    disabled
                  />
                </div>

                <div className="reservation-items elm-first-co">
                  <p className="reservation-items-text">Số khách:</p>
                  <input
                    type="text"
                    name="guest"
                    className="reservation-items-text-value input-first-co"
                    value={info.guest}
                    // value={reservationData.guests}
                    readOnly
                    disabled
                  />
                </div>
                <div className="reservation-items elm-first-co">
                  <p className="reservation-items-text">Thời gian:</p>
                  <input
                    type="text"
                    name="time"
                    className="reservation-items-text-value input-first-co"
                    value={info.time}
                    // value={reservationData.time}
                    readOnly
                    disabled
                  />
                </div>
              </div>

              <div className="reservation-second-items">
                <div className="reservation-items">
                  <p className="reservation-items-text">Ngày:</p>
                  <input
                    type="text"
                    name="date"
                    className="reservation-items-text-value input-end-co"
                    value={info.date}
                    // value={reservationData.date}
                    readOnly
                    disabled
                  />
                </div>

                <div className="reservation-items">
                  <p className="reservation-items-text">Họ & Tên:</p>
                  <input
                    type="text"
                    name="name"
                    className="reservation-items-text-value input-end-co"
                    value={info.name}
                    // value={reservationData.name}
                    readOnly
                    disabled
                  />
                </div>
              </div>

              <div className="reservation-end-items">
                {/* <div className="reservation-items">
        <p className="reservation-items-text">Số điện thoại:</p>
        <input
          type="text"
          className="reservation-items-text-value input-end-co"
          // value={reservationData.phone}
          readOnly
          disabled
        />
      </div> */}
                <div className="reservation-items">
                  <p className="reservation-items-text">Email:</p>
                  <input
                    type="text"
                    name="email"
                    className="reservation-items-text-value input-end-co"
                    value={info.email}
                    // value={reservationData.email || "Không cung cấp"}
                    readOnly
                    disabled
                  />
                </div>
              </div>

              <div className="reservation-items elm-end-co">
                <p className="reservation-items-text">Ghi chú:</p>
                <input
                  type="text"
                  className="reservation-items-text-value input-end-co"
                  name="note"
                  value={info.note}
                  // value={reservationData.note || "Không có ghi chú"}
                  readOnly
                  disabled
                />
              </div>
            </div>
          </div>

          {/* Mã giảm giá */}
          <div className="checkout-pay-discount">
            <h3 className="checkout-pay-discount-title subtitle-vphu">
              Nhập Mã Giảm Giá:
            </h3>
            <div className="checkout-pay-discount-input-wrapper">
              <input
                type="text"
                className="checkout-pay-discount-input"
                placeholder="Nhập mã giảm giá tại đây"
                onChange={handleChangeCoupon}

                // value={discountCode}
                // onChange={(e) => setDiscountCode(e.target.value)}
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
            <h3 className="checkout-pay-payment-methods-title subtitle-vphu">
              Phương Thức Thanh Toán:
            </h3>
            {/* <label className="checkout-pay-payment-option">
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
          </label> */}
            <label className="checkout-pay-payment-option">
              <input
                type="radio"
                name="payment"
                onChange={(e) => setPaymentMethod(e.target.value)}
                value="vnPay"
              />
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
                <th className="checkout-pay-header-product subtitle-vphu">
                  Sản Phẩm
                </th>
                <th className="checkout-pay-header-subtotal subtitle-vphu">
                  Tạm Tính
                </th>
              </tr>
            </thead>
            <tbody>
              {food.map((item) => {
                let image = JSON.parse(item.product_image);
                let firstImage = image[0];
                return (
                  <tr key={item.id}>
                    <td className="checkout-pay-product-info">
                      <img
                        src={`${url}/${firstImage}`}
                        alt="error"
                        className="checkout-pay-product-image"
                      />
                      <div className="checkout-pay-product-details">
                        <p className="checkout-pay-product-name">
                          {item.product_name}
                        </p>
                        <small className="checkout-pay-product-quantity">
                          ×{item.quantity}
                        </small>
                      </div>
                    </td>
                    <td className="checkout-pay-product-price">
                      {formatCurrency(item.price * item.quantity)}
                    </td>
                  </tr>
                );
              })}
              {/* {cartItems.map((item) => ( */}
              {/* ))} */}
              <tr>
                <td className="checkout-pay-header-product checkout-pay-subtotal-title">
                  Tổng Cộng:
                </td>
                <td className="checkout-pay-header-subtotal checkout-pay-subtotal-amount">
                  {formatCurrency(calculateTotal())}
                </td>
              </tr>
              {couponTotal.value && (
                <>
                  <tr>
                    <td className="checkout-pay-header-product checkout-pay-subtotal-title">
                      Mã giảm giá:
                    </td>
                    <td className="checkout-pay-product-price">
                      {parseFloat(couponTotal.value).toFixed(0)}%
                      {/* -{formatCurrency(calculateTotal() * (parseFloat(coupon.value) / 100))} */}
                    </td>
                  </tr>
                  <tr>
                    <td className="checkout-pay-header-product checkout-pay-subtotal-title">
                      Tổng Cộng (sau giảm giá):
                    </td>
                    <td className="checkout-pay-header-subtotal checkout-pay-subtotal-amount">
                      {formatCurrency(calculateTotalCoupon())}
                      {/* {calculateDiscountedTotal()} */}
                    </td>
                  </tr>
                </>
              )}
              {/* <tr>
                <td className="checkout-pay-header-product checkout-pay-subtotal-title">
                  Mã giảm giá:
                </td>
                <td className="checkout-pay-product-price">
                  {parseFloat(couponTotal.value).toFixed(0)}%
                </td>
              </tr>
              <tr>
                <td className="checkout-pay-header-product checkout-pay-subtotal-title">
                  Tổng Cộng (sau giảm giá):
                </td>
                <td className="checkout-pay-header-subtotal checkout-pay-subtotal-amount">
                  {formatCurrency(calculateTotalCoupon())}
                </td>
              </tr> */}
              <tr>
                <td className="checkout-pay-header-product checkout-pay-subtotal-title">
                  Tiền Cọc (20%):
                </td>
                <td className="checkout-pay-header-subtotal checkout-pay-subtotal-amount">
                  {amount}
                </td>
              </tr>
            </tbody>
          </table>
          <button
            className="checkout-pay-button"
            //  onClick={handlePayment}
            onClick={handlePayment}
          >
            Thanh Toán
          </button>
        </div>
        {/* Modal thanh toán thành công */}
        {/* Modal thanh toán thành công */}
        {isModalOpen && (
          <div className="success-modal-overlay" onClick={closeModal}>
            <div className="success-modal" onClick={(e) => e.stopPropagation()}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/5290/5290058.png"
                alt="Success"
                className="success-modal-icon"
              />
              <h2 className="success-modal-title">Thanh Toán Thành Công!</h2>
              <p className="success-modal-message">
                Cảm ơn bạn đã đặt bàn. Hẹn gặp lại bạn tại nhà hàng!
              </p>
              <button className="success-modal-button" onClick={closeModal}>
                OK
              </button>
            </div>
          </div>
        )}

        {/* Modal thanh toán thất bại */}
        {isModalFailureOpen && (
          <div className="failure-modal-overlay">
            <div className="failure-modal">
              <img
                src="https://cdn-icons-png.flaticon.com/512/190/190406.png" // Icon dấu chéo đỏ
                alt="Failure"
                className="failure-modal-icon"
              />
              <h2 className="failure-modal-title">Thanh Toán Thất Bại!</h2>
              <p className="failure-modal-message">Vui lòng thử lại.</p>
              <button
                className="failure-modal-button"
                onClick={closeFailureModal}
              >
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutPay;
