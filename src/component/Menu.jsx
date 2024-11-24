import { useEffect, useState } from "react";
import { api } from "../api"; // Đường dẫn đến file cấu hình API
import "../css/Menu.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Menu() {
  // const [menuItems, setMenuItems] = useState([]);
  // const [loading, setLoading] = useState(true); // Trạng thái tải dữ liệu
  // const [error, setError] = useState(null); // Trạng thái lỗi

  // // Fetch dữ liệu từ API
  // useEffect(() => {
  //   api
  //     .get("/product-categories/6/products", {
  //       params: { limit: 9 },
  //     })
  //     .then((response) => {
  //       const items = Array.isArray(response.data.data) ? response.data.data.slice(0, 9) : [];
  //       setMenuItems(items);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching menu data:", error);
  //       setError("Không thể tải dữ liệu món ăn");
  //     })
  //     .finally(() => setLoading(false));
  // }, []);

  // console.log(menuItems);
  // // Nếu đang tải dữ liệu
  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // // Nếu có lỗi khi tải dữ liệu
  // if (error) {
  //   return <div>{error}</div>;
  // }
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

  let quantity = 1;
  
  useEffect(() => {
    api
      .get("/product-categories/6")
      .then((res) => {
        console.log(res);
        setMenuItem(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
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

  return (
    <div className="our-menu-content container-vphu text-vphu">
      <h2 className="title-our-menu title-vphu">Món Ăn Của Chúng Tôi</h2>
      {/* <div className="menu-grid">
      {menuItems.length === 0 ? (
        <p>Không có món ăn nào trong danh mục này.</p>
      ) : (
        menuItems.map((item) => ( 
           <div className="menu-item-home" key={item.id}>
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
    </div> */}
      <div className="menu-grid">
        {menuItem.length === 0 ? (
          <p>Không có món ăn nào trong danh mục này.</p>
        ) : (
          menuItem.map((item) => (
            <div className="menu-item-home" key={item.id}>
             {/* <Link to={"product-detail/" + item.slug} > */}
                <img
                  src={`http://127.0.0.1:8000/${item.image_url}`}
                  alt={item.name}
                  className="menu-image"
                />
             {/* </Link> */}
              <div className="menu-details">
             <Link to={"product-detail/" + item.slug} >
                <h3 className="menu-title">{item.name}</h3>
             </Link>
                <p className="menu-description">
                  {JSON.parse(item.ingredients)
                    .map((ing) => ing.value)
                    .join(", ")}
                </p>

                <p className="menu-price">${item.price}</p>
                <button className="order-button" onClick={() => addToCart(item.id)}>Order now</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Menu;
