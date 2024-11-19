import { useEffect, useState } from "react";
import { api } from "../api"; // Đường dẫn đến file cấu hình API
import "../css/Menu.css";

function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true); // Trạng thái tải dữ liệu
  const [error, setError] = useState(null); // Trạng thái lỗi

  // Fetch dữ liệu từ API
  useEffect(() => {
    api
      .get("/product-categories/6/products", {
        params: { limit: 9 },
      })
      .then((response) => {
        const items = Array.isArray(response.data.data) ? response.data.data.slice(0, 9) : [];
        setMenuItems(items);
      })
      .catch((error) => {
        console.error("Error fetching menu data:", error);
        setError("Không thể tải dữ liệu món ăn");
      })
      .finally(() => setLoading(false));
  }, []);
  
  console.log(menuItems);
  // Nếu đang tải dữ liệu
  if (loading) {
    return <div>Loading...</div>;
  }

  // Nếu có lỗi khi tải dữ liệu
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="our-menu-content">
      <h2 className="title-our-menu title-vphu">Món Ăn Của Chúng Tôi</h2>
    <div className="menu-grid">
      {menuItems.length === 0 ? (
        <p>Không có món ăn nào trong danh mục này.</p>
      ) : (
        menuItems.map((item) => (
          <div className="menu-item" key={item.id}>
            <img src={item.image} alt={item.name} className="menu-image" />
            <div className="menu-details">
              <h3 className="menu-title">{item.name}</h3>
              <p className="menu-description">{item.description}</p>
              <p className="menu-price">${item.price}</p>
              <button className="order-button">Order now</button>
            </div>
          </div>
        ))
      )}
    </div>
    </div>
  );
}

export default Menu;
