import "../css/FavoriteFood.css";
import { useEffect, useState } from "react";
import { api } from "../api";
import imgFavoriteFood from "../assets/favorite-food.jpg";

const FoodCategory = () => {
  // Khai báo state để lưu danh sách món ăn
  const [foodItems, setFoodItems] = useState([]);

  // Dữ liệu mẫu
  const sampleFoodItems = [
    {
      id: 1,
      name: "Pizza",
      description: "Phô mai, giăm bông & dứa",
      rating: 5.0,
      image: imgFavoriteFood,
      orderLink: "#",
    },
    {
      id: 2,
      name: "HamBurger",
      description: "Thịt bò, phô mai & rau củ",
      rating: 4.8,
      image: imgFavoriteFood,
      orderLink: "#",
    },
    {
      id: 3,
      name: "Gà Nướng",
      description: "Gà & sốt đặc biệt",
      rating: 4.5,
      image: imgFavoriteFood,
      orderLink: "#",
    },
    {
      id: 4,
      name: "Shawarma",
      description: "Thịt cừu & sốt bơ tỏi",
      rating: 5.0,
      image: imgFavoriteFood,
      orderLink: "#",
    },
  ];

  useEffect(() => {
    // Gọi API để lấy danh sách món ăn
    api
      .get("/products") // Đường dẫn đến API
      .then((res) => {
        console.log(res);
        if (res && res.data && res.data.products) {
          const items = res.data.products.map(item => ({
            id: item.id,
            name: item.name,
            description: item.description,
            rating: item.rating,
            image: item.image || imgFavoriteFood,
            orderLink: item.orderLink || "#",
          }));
          setFoodItems(items); // Cập nhật danh sách món ăn từ API
          console.log("Đã lấy được danh sách món ăn thành công");
        }
      })
      .catch((error) => {
        console.error("Có lỗi xảy ra khi lấy danh sách món ăn:", error);
        // Sử dụng dữ liệu mẫu nếu có lỗi
        setFoodItems(sampleFoodItems); 
      });
  }, []);

  return (
    <div className="food-category container-vphu">
      <h2 className="category-title">Top Thực Phẩm Nổi Bật</h2>
      <div className="food-items">
        {foodItems.map((item) => (
          <div className="food-card" key={item.id}>
            <img src={item.image} alt={item.name} className="food-image" />
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
              <p className="food-description">{item.description}</p>
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
