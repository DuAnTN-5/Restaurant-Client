import { useContext, useEffect, useState } from "react";
import "../style/CartProduct.css";
import { FaHistory } from "react-icons/fa";
import Modal from "../component/Modal";
import { api } from "../api";
import { toast } from "react-toastify";
import {  useNavigate } from "react-router-dom";
import { CartContext } from "../../CartContext";
// import { toast } from "react-toastify";

const Cart = () => {
  const [cartProduct, setCartProduct] = useState([]);
  // const [cartID, setCartID] = useState();
  // const [cartCount, setCartCount] = useState(0); // State để lưu số lượng bàn
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState([]);
  // const [checkLength, setCheckLength] = useState([]);
  const [error, setError] = useState(false);
  const navigate = useNavigate()

  const { setCartCount } = useContext(CartContext); // useContext


  let auth = localStorage.getItem("auth");
  if (auth) {
    auth = JSON.parse(auth);
    console.log(auth);
  }

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
  useEffect(() => {
    api
      .get("/cart/list/" + auth.id, config)
      .then((res) => {
        console.log(res);
        if(res.data.status){
          setCartProduct(res.data.data);
          setCartCount(res.data.data.length); // Cập nhật số lượng bàn
        }
      })
      .catch((error) => console.log(error));
  }, []);

  // chuyển đổi đơn vị tiền 
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount * 1000);
  };

  // Hiển thị modal khi bấm vào "Xem"
  const handleShowDetails = (id, tableID) => {
    console.log(id);
    // toast.info(id)
    localStorage.setItem("cartID", id);
    localStorage.setItem("tableID", tableID);
    api
      .get("/cart/list-product/" + id, config)
      .then((res) => {
        console.log(res);
        if (res.data.status) {
          // toast.error("")
          setModalContent(res.data.data);

          setError(true);
        } else {
          setError(false);
          setModalContent(res.data.message);
        }
      })
      .catch((error) => console.log(error));

    // setModalContent(products);
    setModalOpen(true);
  };

  const handleRemoveTable =(id) =>{
    console.log(id)
    api
    .post(`/cart/${id}/delete`, {}, config)
    .then(res =>{
      console.log(res)
      if(res.data.status){
        toast.success(res.data.message)
        api
        .get("/cart/list/" + auth.id, config)
        .then((res) => {
          console.log(res);
          if(res.data.status){
            setCartProduct(res.data.data);
          setCartCount(res.data.data.length); // Cập nhật số lượng bàn
          }
        })
        .catch((error) => console.log(error));
      //   api
      //   .get("/cart/list-product/" + cartID, config)
      //   .then(res =>{
      //     console.log(res)
      //     // setConTent(res.data.data)
      //   })
      //   .catch(error => console.log(error))

      }
    })
    .catch(error =>{
      console.log(error)
    })
  }
  const handleCheckout = (id, tableID) =>{
    
    localStorage.setItem("cartID", id);
    localStorage.setItem("tableID", tableID);
    api
    .get("/cart/list-product/" + id, config)
    .then((res) => {
      console.log(res);
      if (res.data && res.data.data && res.data.data.length > 0) {
        // Điều hướng sang trang thanh toán
        navigate("/checkout-pay");
      } else {
        // Hiển thị thông báo lỗi
        toast.error("Không có món ăn nào trong bàn để thanh toán!");
      }
    })
    .catch((error) => console.log(error));
  }

  console.log(cartProduct);

  return (
   <div className="cart-component">
        <h1 className="title-cart-page title-vphu">Giỏ Hàng</h1> 
        <div className="reservation-history">
          <FaHistory />
        <span className="reservation-history-text-sub">Lịch sử đặt bàn</span>
        </div>
      <div className="cart-container container-vphu">
  
        {
          cartProduct.length === 0 ? (
        <p className="empty-cart-message">Giỏ hàng của bạn đang trống</p>
      ) : (
        cartProduct.map((reservation) => (
          <div key={reservation.id} className="reservation-cart-container">
            {/* Thông tin bàn */}
            <div className="reservation-details">
              <p className="reservation-table">
                <strong>Bàn:</strong> {reservation.table_id}
              </p>
              <p className="reservation-guests">
                <strong>Khách:</strong> {reservation.guest_count} người
              </p>
              <p className="reservation-date">
                <strong>Ngày:</strong> 
                {new Date(reservation.date).toLocaleDateString()}
                {/* {reservation.date} */}
                {/* {reservation.date} */}
              </p>
              <p className="reservation-time">
                <strong>Giờ:</strong> {reservation.time}
              </p>
              <button
                className="reservation-toggle-button"
                onClick={() => handleRemoveTable(reservation.id)}
              >
                Xóa bàn
              </button>
            </div>
  
            {/* Danh sách sản phẩm */}
            <div className="cart-items">
              <div className="cart-item-cart-product">
                <div className="cart-item-image">
                  <span className="cart-item-image-text">
                    Món ăn hiện tại: {reservation.count}
                  </span>
                </div>
                <div className="cart-item-info">
                  <div className="cart-item-name">
                    <strong
                      style={{ cursor: "pointer", color: "#d2a679" }}
                      onClick={() =>
                        handleShowDetails(reservation.id, reservation.table_id)
                      }
                    >
                      Xem món
                    </strong>
                  </div>
                </div>
                <div className="cart-item-total">
                  <strong>Tổng: {formatCurrency(reservation.total)}</strong>
                </div>
              </div>
            </div>
            <button
              className="button-checkout-item"
              onClick={() => handleCheckout(reservation.id,  reservation.table_id)}
            >
              Thanh Toán
            </button>
          </div>
        ))
      )
      }
  
        <Modal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          content={modalContent}
          error={error}
          setConTent={setModalContent}
        />
      </div>
   </div>
  );
};

export default Cart;