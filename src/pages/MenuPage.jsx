import { useState, useEffect } from "react";
import { api } from "../api";
import { toast } from "react-toastify"; // Thêm thông báo toast
import "../style/MenuPage.css";
import { Link } from "react-router-dom";

const MenuPage = () => {
  const [categoriesWithFoods, setCategoriesWithFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeCategory, setActiveCategory] = useState(null);

    

  useEffect(() => {
    const fetchCategoriesAndFoods = async () => {
      try {
        setLoading(true);
        setError("");

        // Lấy danh mục sản phẩm
        const categoryResponse = await api.get("/product-categories");
        const categories = categoryResponse.data.data;

        // Lấy món ăn theo từng danh mục
        const categoriesWithFoodsPromises = categories.map(async (category) => {
          const foodResponse = await api.get(
            `/product-categories/${category.id}`
          );
          const foods = foodResponse.data.data;

          // Xử lý danh sách nguyên liệu nếu có
          const updatedFoods = foods.map((food) => {
            const parsedIngredients = food.ingredients
              ? JSON.parse(food.ingredients)
              : [];
            return {
              ...food,
              ingredientsList: parsedIngredients
                .slice(0, 4) // Giới hạn 4 nguyên liệu
                .map((item) => item.value),
            };
          });

          return {
            ...category,
            foods: updatedFoods,
          };
        });

        const categoriesWithFoods = await Promise.all(
          categoriesWithFoodsPromises
        );
        setCategoriesWithFoods(categoriesWithFoods);
        setActiveCategory(categories[0]?.id || null); // Đặt danh mục đầu tiên làm active
      } catch (err) {
        console.error("Error fetching categories or foods:", err);
        setError("Không thể tải dữ liệu danh mục và món ăn");
      } finally {
        setLoading(false);
      }
    };

    fetchCategoriesAndFoods();
  }, []);

  // Hàm xử lý đặt món vào giỏ hàng
  const addToCart = (food) => {

    const token = localStorage.getItem("token");
  
  // Check login
    if (!token) {
    toast.error("Vui lòng đăng nhập để đặt món.");
    return;
  }

    const cart = JSON.parse(localStorage.getItem("cart")) || {};
    const quantity = cart[food.id] ? cart[food.id] + 1 : 1; // Tăng số lượng nếu món đã có trong giỏ hàng
    cart[food.id] = quantity;

    localStorage.setItem("cart", JSON.stringify(cart)); // Lưu giỏ hàng vào localStorage

    toast.success(`Đặt món ${food.name} thành công! Số lượng: ${quantity}`);
  };

  if (loading) {
    return <div>Đang tải dữ liệu...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="bgr-menu-page">
      <div className="menu-page container-vphu text-vphu">
        <div className="menu-header">
          <div className="menu-title">
            <h1 className="menu-main-title title-vphu">Thực Đơn Đặc Biệt</h1>
          </div>
        </div>

        <div className="menu-main-container">
          <div className="menu-sidebar">
            <h3 className="title-menu-sidebar subtitle-vphu"> Danh Mục</h3>
            <ul className="menu-sidebar-list">
              {categoriesWithFoods.map((category) => (
                <li
                  key={category.id}
                  className={`menu-sidebar-item ${
                    activeCategory === category.id ? "active" : ""
                  }`}
                  onClick={() => {
                    setActiveCategory(category.id);
                    const categoryTitleElement = document.getElementById(
                      `category-title-${category.id}`
                    );
                    if (categoryTitleElement) {
                      categoryTitleElement.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      });
                    }
                  }}
                >
                  {category.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="menu-categories-foods">
            {categoriesWithFoods.map((category) => (
              <div key={category.id} className="menu-category-section">
                <h2
                  id={`category-title-${category.id}`}
                  className="menu-category-title subtitle-vphu"
                >
                  {category.name}
                </h2>
                <div className="menu-items">
                  {category.foods.map((food) => (
                    <div key={food.id} className="menu-item-page">
                    <Link to={"/product-detail/" + food.slug}>
                        <img
                          className="menu-item-page-img"
                          src={`http://127.0.0.1:8000/${food.image_url}`}
                          alt={food.name}
                        />
                     </Link>
                      <h3 className="menu-item-page-title">{food.name}</h3>
                      <p className="menu-item-page-ingredients">
                        {food.ingredientsList.length > 0
                          ? food.ingredientsList.join(", ")
                          : "Không có thông tin nguyên liệu"}
                      </p>
                      <span className="menu-item-page-price">
                        {food.price} VNĐ
                      </span>
                      <button
                        className="menu-item-page-order-btn"
                        onClick={() => addToCart(food)}
                      >
                        Đặt Món
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
