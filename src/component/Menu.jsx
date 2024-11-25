import { useState, useEffect } from "react";
import { api } from "../api"; // Đường dẫn đến file cấu hình API
import "../css/Menu.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FaHeart, FaRegHeart } from 'react-icons/fa';

function Menu() {
  let cartLocal = localStorage.getItem("cart");
  if (cartLocal) {
    cartLocal = JSON.parse(cartLocal);
  }
  let token = localStorage.getItem("token");
  if (token) {
    token = JSON.parse(token);
  } 

  const [menuItem, setMenuItem] = useState([]);
  const [cart, setCart] = useState(cartLocal);
  const [favourites, setFavourites] = useState(
    JSON.parse(localStorage.getItem("favourites")) || []
  ); // Lấy món ăn yêu thích từ localStorage

  let quantity = 1;

  useEffect(() => {
    api
      .get("/product-categories/6")
      .then((res) => {
        setMenuItem(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const addToCart = (id) => {
    if (!token) {
      toast.error("Vui lòng đăng nhập");
      return;
    }

    const newCart = { ...cart };

    if (newCart[id]) {
      newCart[id] += quantity;
      toast.success("Thêm vào giỏ hàng thành công");
    } else {
      newCart[id] = quantity;
      toast.success("Thêm vào giỏ hàng thành công");
    }

    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const toggleFavourite = (item) => {
    if (!token) {
      toast.error("Vui lòng đăng nhập");
      return;
    }
    const updatedFavourites = favourites.some(fav => fav.id === item.id)
      ? favourites.filter(fav => fav.id !== item.id)
      : [...favourites, item];
    
    setFavourites(updatedFavourites);
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
  };

  return (
    <div className="our-menu-content container-vphu text-vphu">
      <h2 className="title-our-menu title-vphu">Món Ăn Của Chúng Tôi</h2>
      <div className="menu-grid">
  {menuItem.length === 0 ? (
    <p>Không có món ăn nào trong danh mục này.</p>
  ) : (
    menuItem.map((item, index) => (
      <div className="menu-item-home" key={item.id}>
        <Link className="menu-image" to={"product-detail/" + item.slug}>
          <img
            src={`http://127.0.0.1:8000/${item.image_url}`}
            alt={item.name}
          />
        </Link>
        <div className="menu-details">
          <Link to={"product-detail/" + item.slug}>
            <h3 className="menu-title">{item.name}</h3>
          </Link>
          <p className="menu-description">
            {JSON.parse(item.ingredients)
              .map((ing) => ing.value)
              .join(", ")}
          </p>
          <p className="menu-price">${item.price}</p>
          <button className="order-button" onClick={() => addToCart(item.id)}>Order now</button>

          <div
            className={`heart-icon ${index === 2 || index === 3 || index === 6 || index === 7 || index === 10 || index === 11 ? "right" : "left"}`}
            onClick={() => toggleFavourite(item)}
            style={{ position: "absolute", top: "10px", [index === 2 || index === 3 || index === 6 || index === 7 || index === 10 || index === 11 ? "right" : "left"]: "10px" }}
          >
            {favourites.some(fav => fav.id === item.id) ? (
              <FaHeart color="red" size={25} />
            ) : (
              <FaRegHeart color="white" size={25} />
            )}
          </div>
        </div>
      </div>
    ))
  )}
</div>

    </div>
  );
}

export default Menu;
