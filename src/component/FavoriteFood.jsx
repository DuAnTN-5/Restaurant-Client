import "../css/FavoriteFood.css";
import { useEffect, useState } from "react";
import { api } from "../api";

const FoodCategory = () => {
  // Khai báo state để lưu danh sách món ăn và trạng thái đánh dấu cho icon reviewer
  const [foodItems, setFoodItems] = useState([]);
  const [clickedReviewer, setClickedReviewer] = useState(
    JSON.parse(localStorage.getItem("likedItems")) || [] // Lấy dữ liệu đã lưu trong localStorage (nếu có)
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

  const handleReviewerClick = (itemId, itemData) => {
    // Kiểm tra món ăn đã được yêu thích chưa
    const newClickedReviewer = [...clickedReviewer];
    const index = newClickedReviewer.findIndex((item) => item.id === itemId);

    if (index !== -1) {
      // Nếu đã có trong danh sách, xóa khỏi danh sách
      newClickedReviewer.splice(index, 1);
      // Cập nhật localStorage
      localStorage.setItem("likedItems", JSON.stringify(newClickedReviewer));
    } else {
      // Nếu chưa có, thêm vào danh sách
      newClickedReviewer.push(itemData);
      // Cập nhật localStorage
      localStorage.setItem("likedItems", JSON.stringify(newClickedReviewer));
    }

    setClickedReviewer(newClickedReviewer);
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
                  <p className="order-now">Đặt Ngay</p>
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
