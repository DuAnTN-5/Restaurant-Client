import "../css/FavoriteFood.css";
import { useEffect, useState } from "react";
import { api } from "../api";
import { toast } from "react-toastify";

const FoodCategory = () => {
  // Lấy giỏ hàng và token từ localStorage
  let cartLocal = localStorage.getItem("cart");
  if (cartLocal) {
    cartLocal = JSON.parse(cartLocal);
  }
  let token = localStorage.getItem("token");
  if (token) {
    token = JSON.parse(token);
  }

  const quantity = 1; // Khởi tạo số lượng mặc định

  // Khai báo state để lưu danh sách món ăn, giỏ hàng, và trạng thái yêu thích
  const [foodItems, setFoodItems] = useState([]);
  const [cart, setCart] = useState(cartLocal); 
  const [clickedReviewer, setClickedReviewer] = useState(
    JSON.parse(localStorage.getItem("likedItems")) || [] // Lấy dữ liệu yêu thích từ localStorage
  );

  useEffect(() => {
    api
      .get("/latestProducts")
      .then((res) => {
        setFoodItems(res.data.data);
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

    const newCart = { ...cart }; // Giữ lại dữ liệu giỏ hàng trước đó

    if (newCart[id]) {
      newCart[id] += quantity; // Nếu món đã có, tăng số lượng
      toast.success("Thêm vào giỏ hàng thành công");
    } else {
      newCart[id] = quantity; // Nếu món chưa có, thêm vào giỏ hàng
      toast.success("Thêm vào giỏ hàng thành công");
    }

    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart)); // Cập nhật giỏ hàng vào localStorage
  };

  const handleReviewerClick = (itemId, itemData) => {
  // Check login
    if (!token) {
    toast.error("Vui lòng đăng nhập");
    return;
  }
    const newClickedReviewer = [...clickedReviewer];
    const index = newClickedReviewer.findIndex((item) => item.id === itemId);

    if (index !== -1) {
      newClickedReviewer.splice(index, 1);
      toast.info("Đã bỏ yêu thích món này");
    } else {
      newClickedReviewer.push(itemData);
      toast.success("Đã yêu thích món này");
    }

    setClickedReviewer(newClickedReviewer);
    localStorage.setItem("likedItems", JSON.stringify(newClickedReviewer)); // Cập nhật vào localStorage
  };

  return (
    <div className="food-category container-vphu text-vphu">
      <h4 className="category-subtitle subtitle-vphu">MÓN ĂN</h4>
      <h2 className="category-title title-vphu">Top Thực Phẩm Nổi Bật</h2>
      <div className="food-items">
        {foodItems.map((item) => (
          <div className="food-card" key={item.id}>
            <img
              src={`http://127.0.0.1:8000/${item.image_url}`}
              alt={item.name}
              className="food-image"
            />
            <div className="rating-section">
              <span className="rating">
                <i className="fa-solid fa-star icon-star"></i>
                <p className="number-stars">{item.rating}</p>
              </span>
              <div
                className={`reviewers ${clickedReviewer.some((i) => i.id === item.id) ? "clicked" : ""}`}
                onClick={() => handleReviewerClick(item.id, item)}
              >
                <i className={`fa-regular fa-heart ${clickedReviewer.some((i) => i.id === item.id) ? "clicked-icon" : ""}`}></i>
              </div>
            </div>
            <div className="food-info">
              <h3 className="food-name">{item.name}</h3>
              <p className="favorite-food-description">
                {JSON.parse(item.ingredients)
                  .map((ing) => ing.value)
                  .join(", ")}
              </p>
              <div className="btn-oder">
                <a href={item.orderLink} className="order-link">
                  <p className="order-now" onClick={() => addToCart(item.id)}>Đặt Ngay</p>
                  <div className="icon-arrow">
                    <i className="fa-solid fa-arrow-right fa-rotate-by"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodCategory;
