import "../css/FavoriteFood.css";
import { useEffect, useState } from "react";
import imgFavoriteFood from "../assets/favorite-food.jpg";
import { api } from "../api";

const FoodCategory = () => {
  // Khai báo state để lưu danh sách món ăn
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    api
    .get("/latestProducts")
    .then(res =>{
      console.log(res)
      setFoodItems(res.data.data)
    })
    .catch(error =>{
      console.log(error)
    })
   
          // setFoodItems(sampleFoodItems); 
  }, []);
  console.log(foodItems)

  return (
    <div className="food-category container-vphu text-vphu">
      <h4 className="category-subtitle subtitle-vphu">MÓN ĂN</h4>
      <h2 className="category-title title-vphu">Top Thực Phẩm Nổi Bật</h2>
      <div className="food-items">
        {foodItems.map((item) => (
          <div className="food-card" key={item.id}>
            <img src={`http://127.0.0.1:8000/${item.image_url}`} alt={item.name} className="food-image" />
            <div className="rating-section">
              <span className="rating">
                <i className="fa-solid fa-star icon-star"> </i>
                <p className="number-stars">
                {item.rating}
                </p>
              </span>
              <div className="reviewers">
              <i className="fa-regular fa-heart"></i>
              </div>
            </div>
            <div className="food-info">
              <h3 className="food-name">{item.name}</h3>
              <p className="favorite-food-description"> {JSON.parse(item.ingredients)
                    .map((ing) => ing.value)
                    .join(", ")}</p>
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
