import { useEffect, useState } from "react";
import "../css/CartProduct.css";
import { api } from "../api";
import { toast } from "react-toastify";
// import { Link } from "react-router-dom";

function CartProduct() {
  const [products, setProducts] = useState([]);

  let cart = localStorage.getItem("cart");
  if (cart) {
    cart = JSON.parse(cart);
  }
  console.log(cart);

  useEffect(() => {
    api
      .post("/product/cart", cart)
      .then((res) => {
        console.log(res);
        setProducts(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleDelete = (id) => {
    // console.log("id", id);

    setProducts(products.filter((product) => product.id !== id));
    toast.success("Đã xóa sản phẩm");

    const itemDelete = JSON.parse(localStorage.getItem("cart"));
    console.log(itemDelete);
    if (itemDelete && itemDelete[id]) {
      delete itemDelete[id];
      console.log(itemDelete);

      localStorage.setItem("cart", JSON.stringify(itemDelete));
    }
    // setCartProduct(itemDelete) // setCartProduct ở useContext, nó ở đây để cập nhật lại số lượng icon cart khi mik xóa
  };
  const handleDecreaseQty = (id, qty) => {
    console.log(id);
    console.log(qty);
    if (qty <= 1) {
      // toast.warning("qty dang nho hon 1")
      setProducts(products.filter((product) => product.id !== id)); // xóa

      const itemDelete = JSON.parse(localStorage.getItem("cart"));

      console.log("id", itemDelete[id]);

      if (itemDelete && itemDelete[id]) {
        //         itemDelete là giỏ hàng từ localStorage. Kiểm tra xem giỏ hàng có tồn tại và sản phẩm với id tương ứng có trong giỏ hay không.
        // Nếu cả hai điều kiện đều đúng, sản phẩm sẽ bị xóa khỏi giỏ hàng trong localStorage
        delete itemDelete[id];
        console.log("item", itemDelete);

        localStorage.setItem("cart", JSON.stringify(itemDelete));
      }

      // setCartProduct(itemDelete) // setCartProduct ở useContext, nó ở đây để cập nhật lại số lượng icon cart khi mik xóa
    } else {
      // toast.warning("qty lon hon 1")
      const updateQtyCart = products.map((item) =>
        item.id === id ? { ...item, qty: qty - 1 } : item
      );
      console.log(updateQtyCart);
      setProducts(updateQtyCart);

      const saveCart = {};

      updateQtyCart.forEach((item) => {
        saveCart[item.id] = item.qty;
      });

      localStorage.setItem("cart", JSON.stringify(saveCart));
      // setCartProduct(saveCart)
    }
  };
  const handleIncreaseQty = (id, qty) => {
    const updateQtyCart = products.map((item) =>
      item.id === id ? { ...item, qty: qty + 1 } : item
    );
    console.log(updateQtyCart);

    setProducts(updateQtyCart);
    // lưu lại vào local

    const saveCart = {};

    updateQtyCart.forEach((item) => {
      saveCart[item.id] = item.qty;
    });
    console.log("savecart", saveCart);

    localStorage.setItem("cart", JSON.stringify(saveCart));

    // setCartProduct(saveCart)
  };

  return (
    <>
      <div className="cart-product-page">
        <div className="cart">
          <div className="cart-container">
            <div className="cart-header">
              <div className="header-item">Product</div>
              <div className="header-item">Price</div>
              <div className="header-item">Quantity</div>
              <div className="header-item">Total</div>
            </div>

            {products.map((item) => {
              const totalPrice = item.price * item.qty;

              return (
                <div className="cart-item" key={item.id}>
                  <button
                    className="remove-btn"
                    onClick={() => handleDelete(item.id)}
                  >
                    ×
                  </button>
                  <div className="product-info">
                    <img
                      src={`http://127.0.0.1:8000/${item.image_url}`}
                      alt="Creamy Latte Coffee"
                      className="productCart-image"
                    />
                    <div className="product-details">
                      <h3 className="product-name">{item.name}</h3>
                      <p className="product-description">
                        {/* {item.summary} */}
                        {item?.summary
                          ? item.summary.replace(/<\/?p>/g, "")
                          : "Không có thông tin"}
                      </p>
                    </div>
                  </div>
                  <p className="product-price">{item.price} VND</p>
                  <div className="quantity-control">
                    <button
                      className="quantity-btn"
                      onClick={() => handleDecreaseQty(item.id, item.qty)}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={item.qty}
                      className="quantity-input"
                      readOnly
                    />
                    <button
                      className="quantity-btn"
                      onClick={() => handleIncreaseQty(item.id, item.qty)}
                    >
                      +
                    </button>
                  </div>
                  <p className="product-total"> {totalPrice} VND</p>
                </div>
              );
            })}

            {/* 
            <div className="cart-item">
              <button className="remove-btn">×</button>
              <div className="product-info">
                <img
                  src="https://chuphinhmenu.com/wp-content/uploads/2018/03/chup-hinh-mon-an-menu-nha-trang-khanh-hoa-0008.jpg"
                  alt="Creamy Latte Coffee"
                  className="productCart-image"
                />
                <div className="product-details">
                  <h3 className="product-name">CREAMY LATTE COFFEE</h3>
                  <p className="product-description">
                    Far far away, behind the word mountains, far from the
                    countries
                  </p>
                </div>
              </div>
              <p className="product-price">$4.90</p>
              <div className="quantity-control">
                <button className="quantity-btn">-</button>
                <input
                  type="number"
                  value="1"
                  className="quantity-input"
                  readOnly
                />
                <button className="quantity-btn">+</button>
              </div>
              <p className="product-total">$4.90</p>
            </div>
            <div className="cart-item">
              <button className="remove-btn">×</button>
              <div className="product-info">
                <img
                  src="https://chuphinhmenu.com/wp-content/uploads/2018/03/chup-hinh-mon-an-menu-nha-trang-khanh-hoa-0008.jpg"
                  alt="Creamy Latte Coffee"
                  className="productCart-image"
                />
                <div className="product-details">
                  <h3 className="product-name">CREAMY LATTE COFFEE</h3>
                  <p className="product-description">
                    Far far away, behind the word mountains, far from the
                    countries
                  </p>
                </div>
              </div>
              <p className="product-price">$4.90</p>
              <div className="quantity-control">
                <button className="quantity-btn">-</button>
                <input
                  type="number"
                  value="1"
                  className="quantity-input"
                  readOnly
                />
                <button className="quantity-btn">+</button>
              </div>
              <p className="product-total">$4.90</p>
            </div> */}
          </div>
        </div>
        <div className="cart-button-oder">
          <button>Đặt món</button>
        </div>
      </div>
    </>
  );
}

export default CartProduct;
