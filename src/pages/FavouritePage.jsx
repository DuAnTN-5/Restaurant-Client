import { useEffect, useState } from "react";
import "../css2/Favourite.css"; // Ensure the path is correct
import { api, url } from "../api";
import { toast } from "react-toastify";

function FavouritePage() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    let favouriteLocal = localStorage.getItem("favourite");
    if (favouriteLocal) {
      favouriteLocal = JSON.parse(favouriteLocal);
    }
    // console.log(favouriteLocal);
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
    //   setProduct(cart);
    api
      .post("/product/cart", JSON.stringify(favouriteLocal), config)
      .then((res) => {
        // console.log(res);
        setProduct(res.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleDelete = (id) => {
    // console.log("id", id);

    setProduct(product.filter((product) => product.id !== id)); // xóa ở
    toast.success("Đã xóa sản phẩm")

    const itemDelete = JSON.parse(localStorage.getItem("favourite"));

    // console.log(itemDelete[id]);
    
    if (itemDelete && itemDelete[id]) {
      delete itemDelete[id];
      // console.log(itemDelete);

      localStorage.setItem("favourite", JSON.stringify(itemDelete));
    }

  };

   // chuyển đổi đơn vị tiền 
   const formatCurrency = (amount) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount * 1000);
  };
  // console.log(product)


  return (
    <>
     <div className="cart-component">
        <h1 className="title-cart-page title-vphu">Món ăn yêu thích</h1>
        <div className="favourite-page container-vphu">
          <div className="cart">
            <div className="cart-container">
              <div className="cart-header">
                <div className="header-item">Món ăn</div>
                <div className="header-item">Giá tiền</div>
                <div className="header-item">Số lượng</div>
                <div className="header-item"> Xóa</div>
              </div>
              {product.length === 0 ?(
                <p className="empty-favourite-message">Món ăn yêu thích của bạn đang trống</p>
  
              ):
  
              product.map((item) => {
                let image = JSON.parse(item.image_url);
          let firstImage = image[0];
                return (
                  <div className="cart-item" key={item.id}>
                    <button className="remove-btn"></button>
                    <div className="product-info">
                      <img
                        src={`${url}/${firstImage}`}
                        alt="Creamy Latte Coffee"
                        className="productCart-image"
                      />
                      <div className="product-details">
                        <h3 className="product-name">{item.name}</h3>
                        {/* <p className="product-description">
                         {item.ingredients}
                         {item.ingredients.slice(0, 4).join(", ")}
                        </p> */}
                      </div>
                    </div>
                    <p className="product-price">{formatCurrency(item.price)}</p>
                    <div className="quantity-control">
                      {/* <button className="quantity-btn">-</button> */}
                      <input
                        type="number"
                        value={item.qty}
                        className="quantity-input"
                        readOnly
                      />
                      {/* <button className="quantity-btn">+</button> */}
                    </div>
                    <p onClick={() =>handleDelete(item.id)} className="product-total product-delete">Xóa</p>
                  </div>
                );
              })}
              
            </div>
          </div>
        </div>
     </div>
    </>
  );
}

export default FavouritePage;
