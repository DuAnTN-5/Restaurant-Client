import { useState, useEffect } from "react";
import { api } from "../api";
import "../style/MenuPage.css";

const MenuPage = () => {
  const [categoriesWithFoods, setCategoriesWithFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Lấy danh mục món ăn và món ăn theo từng danh mục
    const fetchCategoriesAndFoods = async () => {
      try {
        const categoryResponse = await api.get("/product-categories");
        const categories = categoryResponse.data.data;

        const categoriesWithFoodsPromises = categories.map(async (category) => {
          const foodResponse = await api.get(`/product-categories/${category.id}/products`);
          const foods = foodResponse.data.data;

          // Phân tích ingredients nếu có
          const updatedFoods = foods.map(food => {
            const parsedIngredients = food.ingredients ? JSON.parse(food.ingredients) : [];
            food.ingredientsList = parsedIngredients.map(item => item.value);
            return food;
          });

          return {
            ...category,
            foods: updatedFoods, // Lưu món ăn đã được cập nhật với ingredientsList
          };
        });

        const categoriesWithFoods = await Promise.all(categoriesWithFoodsPromises);
        setCategoriesWithFoods(categoriesWithFoods);
      } catch (err) {
        console.error("Error fetching categories or foods:", err);
        setError("Không thể tải dữ liệu danh mục và món ăn");
      } finally {
        setLoading(false);
      }
    };

    fetchCategoriesAndFoods();
  }, []);

  if (loading) {
    return <div>Đang tải dữ liệu...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
  <div className="menu-page container-vphu">
    <div className="menu-header">
      <div className="menu-title">
        <h2 className="menu-subtitle">FOOD MENU</h2>
        <h1 className="menu-main-title">Thực Đơn Đặc Biệt</h1>
      </div>
    </div>

    <div className="menu-main-container">
      {/* Sidebar: Danh mục */}
      <div className="menu-sidebar">
  <h3 className="menu-sidebar-title">Danh Mục Sản Phẩm</h3>
  <ul className="menu-sidebar-list">
    {categoriesWithFoods.map((category) => (
      <li
        key={category.id}
        className="menu-sidebar-item"
        onClick={() => {
          const categoryTitleElement = document.getElementById(`category-title-${category.id}`);
          if (categoryTitleElement) {
            categoryTitleElement.scrollIntoView({
              behavior: "smooth", // Cuộn mượt
              block: "center", // Hiển thị ở giữa màn hình
            });
          }
        }}
      >
        {category.name}
      </li>
    ))}
  </ul>
</div>


      {/* Danh mục và món ăn */}
      <div className="menu-categories-foods">
        {categoriesWithFoods.map((category) => (
          <div key={category.id} className="menu-category-section">
            {/* Thêm id vào tiêu đề danh mục */}
            <h2 id={`category-title-${category.id}`} className="menu-category-title">
              {category.name}
            </h2>
            <div className="menu-items">
              {category.foods.map((food) => (
                <div key={food.id} className="menu-item">
                  <img className="menu-item-img" src={food.imageUrl} alt={food.name} />
                  <h3 className="menu-item-title">{food.name}</h3>
                  <ul className="menu-item-ingredients">
                    {food.ingredientsList && food.ingredientsList.length > 0 ? (
                      food.ingredientsList.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                      ))
                    ) : (
                      <li>Không có thông tin nguyên liệu</li>
                    )}
                  </ul>
                  <span className="menu-item-price">{food.price}</span>
                  <button
                    className="menu-item-order-btn"
                    onClick={() => alert(`Đặt món ${food.name} thành công`)}
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
);

};

export default MenuPage;
