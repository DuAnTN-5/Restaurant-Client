import "../css/FavoriteFood.css";
import { useEffect, useState } from "react";
import { api } from "../api";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const FoodCategory = () => {
  let cartLocal = localStorage.getItem("cart");
  if (cartLocal) {
    cartLocal = JSON.parse(cartLocal);
  }
  let token = localStorage.getItem("token");
  if (token) {
    token = JSON.parse(token);
  } 
  let quantity = 1;
  // Khai báo state để lưu danh sách món ăn
  const [foodItems, setFoodItems] = useState([]);
  const [cart, setCart] = useState(cartLocal); 

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
  const addToCart = (id) => {
    // alert(id)
    if (!token) {
      toast.error("Vui lòng đăng nhập");
      return;
    }
    
    const newCart = { ...cart }; // giữ lại dữ liệu trước đó
    
    if (newCart[id]) { // nếu id có rồi, tức là qty > 1 thì +1
      // lấy id làm key của newCart
      newCart[id] += quantity;
      toast.success("Thêm vào giỏ hàng thành công");
    } else { // nếu id chưa có thì là lấy id đó làm key rồi cho bằng qty là bằng 1
      newCart[id] = quantity;
      toast.success("Thêm vào giỏ hàng thành công");
    }
    
    // console.log(newCart);
    // console.log(menuItem);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };
  +
  console.log(foodItems)

  return (
    <div className="food-category container-vphu text-vphu">
      <h4 className="category-subtitle subtitle-vphu">MÓN ĂN</h4>
      <h2 className="category-title title-vphu">Top Thực Phẩm Nổi Bật</h2>
      <div className="food-items">
        {foodItems.map((item) => (
          <div className="food-card" key={item.id}>
          <Link to={"product-detail/" + item.slug}>  <img src={`http://127.0.0.1:8000/${item.image_url}`} alt={item.name} className="food-image" /></Link>
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
            <Link to={"product-detail/" + item.slug}>
              <h3 className="food-name">{item.name}</h3>
            </Link>
              <p className="favorite-food-description"> {JSON.parse(item.ingredients)
                    .map((ing) => ing.value)
                    .join(", ")}</p>
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
