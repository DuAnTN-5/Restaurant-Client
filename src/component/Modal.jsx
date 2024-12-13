import { useNavigate } from "react-router-dom";
import { api, url } from "../api";
import "../css/Modal.css";
import { toast } from "react-toastify";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const Modal = ({
  isOpen,
  onClose,
  content,
  error,
  setConTent,
  setCartProduct,
}) => {
  // console.log({error})
  if (!isOpen) return null; // Nếu isOpen là false, modal không hiển thị gì

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Khóa cuộn khi modal mở
    } else {
      document.body.style.overflow = "auto"; // Khôi phục cuộn khi modal đóng
    }

    // Cleanup khi component bị hủy
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
  let auth = localStorage.getItem("auth");
  if (auth) {
    auth = JSON.parse(auth);
  }

  let cartID = localStorage.getItem("cartID");
  if (cartID) {
    cartID = JSON.parse(cartID);
    // console.log(cartID)
  }
  let token = localStorage.getItem("token");
  if (token) {
    token = JSON.parse(token);
  }
  // console.log(token)
  let config = {
    headers: {
      Authorization: "Bearer " + token,
      "Content-type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
  };

  const handleDecrease = (id, qty) => {
    // console.log(id, qty)
    if (qty === 1) {
      api
        .post(`/cart/delete/${id}/${cartID}`, {}, config)
        .then((res) => {
          // console.log(res)
          if (res.data.status) {
            toast.success(res.data.message);

            api
              .get("/cart/list-product/" + cartID, config)
              .then((res) => {
                // console.log(res)
                setConTent(res.data.data);
              })
              .catch((error) => console.log(error));

            // gọi api ra để cập nhật lại món ăn hiện tại
            api
              .get("/cart/list/" + auth.id, config)
              .then((res) => {
                // console.log(res);
                if (res.data.status) {
                  setCartProduct(res.data.data);
                }
              })
              .catch((error) => console.log(error));
          }
        })
        .catch((error) => console.log(error));
    } else {
      api
        .post(`/cart/quantity-down/${id}/${cartID}`, {}, config)
        .then((res) => {
          // console.log(res)
          if (res.data.status) {
            toast.success(res.data.message);

            api
              .get("/cart/list-product/" + cartID, config)
              .then((res) => {
                // console.log(res)
                setConTent(res.data.data);
              })
              .catch((error) => console.log(error));
          }
        })
        .catch((error) => console.log(error));
    }
  };
  const handleIncrease = (id) => {
    // console.log(id)
    api
      .post(`/cart/quantity-up/${id}/${cartID}`, {}, config)
      .then((res) => {
        // console.log(res)
        if (res.data.status) {
          toast.success(res.data.message);

          api
            .get("/cart/list-product/" + cartID, config)
            .then((res) => {
              // console.log(res)
              setConTent(res.data.data);
            })
            .catch((error) => console.log(error));
        }
      })
      .catch((error) => console.log(error));
  };
  const handleDelete = (id) => {
    // console.log(id)
    api
      .post(`/cart/delete/${id}/${cartID}`, {}, config)
      .then((res) => {
        // console.log(res)
        if (res.data.status) {
          toast.success(res.data.message);

          api
            .get("/cart/list-product/" + cartID, config)
            .then((res) => {
              // console.log(res)
              setConTent(res.data.data);
            })
            .catch((error) => console.log(error));
            
            // gọi api ra để cập nhật lại món ăn hiện tại
            api
            .get("/cart/list/" + auth.id, config)
            .then((res) => {
              // console.log(res);
              if (res.data.status) {
                setCartProduct(res.data.data);
              }
            })
            .catch((error) => console.log(error));
        }
      })
      .catch((error) => console.log(error));
  };

  const handleOverlayClick = (e) => {
    // Nếu click xảy ra trên overlay (không phải nội dung bên trong modal)
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  // chuyển đổi đơn vị tiền
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount * 1000);
  };
  // chuyển đổi đơn vị tiền
  // const formatCurrency = (amount) => {
  //   return new Intl.NumberFormat("vi-VN", {
  //     style: "currency",
  //     currency: "VND",
  //   }).format(amount * 1000);
  // };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="modal-close-button" onClick={onClose}>
          X
        </button>
        <h2>Tất cả món ăn</h2>

        {error ? (
          <div>
            <table>
              <thead>
                <tr className="row-subtitle-modal">
                  <th className="subtitle-modal">Hình ảnh</th>
                  <th className="subtitle-modal">Món ăn</th>
                  <th className="subtitle-modal">Giá</th>
                  <th className="subtitle-modal">Số lượng</th>
                  <th className="subtitle-modal">Tổng tiền</th>
                </tr>
              </thead>
              <tbody>
                {/* eslint-disable-next-line react/prop-types */}
                {content?.map((item, index) => {
                  let image = JSON.parse(item.product_image);
                  let firstImage = image[0];
                  return (
                    <tr key={index}>
                      <td className="modal-items">
                        <img
                          src={`${url}/${firstImage}`}
                          alt={item.product_name}
                          className="product-image modal-image"
                        />
                      </td>
                      <td className="modal-items">{item.product_name}</td>
                      <td className="modal-items">
                        {formatCurrency(item.price)}
                      </td>
                      <td className="modal-items">
                        <div className="quantity-controls">
                          <button
                            onClick={() => {
                              handleDecrease(item.id, item.quantity);
                            }}
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() => {
                              handleIncrease(item.id);
                            }}

                            // onClick={() => handleIncrease(index)}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      {/* <td>{item.quantity}</td> */}
                      <td className="modal-items">
                        {/* {(item.price * item.quantity).toFixed(2)} VND */}
                        {formatCurrency(item.price * item.quantity)}
                      </td>
                      <td className="modal-items">
                        <button
                          className="remove-product-button"
                          onClick={() => {
                            handleDelete(item.id);
                          }}
                          // onClick={() => handleRemoveProduct(index)}
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div>{content}</div>
        )}

        <div className="modal-footer">
          <button
            className="continue-order-button"
            onClick={() => {
              const tableInfo = JSON.parse(localStorage.getItem("tableID"));
              if (tableInfo) {
                navigate(`/menu?tableId=${tableInfo}`); // Điều hướng sang Menu với tableId
              } else {
                toast.error("Không tìm thấy bàn đã chọn!");
              }
            }}
          >
            Tiếp tục chọn món
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
