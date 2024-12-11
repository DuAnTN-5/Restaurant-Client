import { useState, useEffect } from "react";
import { api, url } from "../api"; // Đường dẫn đến file cấu hình API
import "../css/Menu.css";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { FaHeart } from "react-icons/fa";

function Menu() {
  // let cartLocal = localStorage.getItem("cart");
  // if (cartLocal) {
  //   cartLocal = JSON.parse(cartLocal);
  // }
  // let token = localStorage.getItem("token");
  // if (token) {
  //   token = JSON.parse(token);
  // }

  const [menuItem, setMenuItem] = useState([]);
  const [tableId, setTableId] = useState(null);
  const [foodQty, setFoodQty] = useState("1");

  let favouriteLocal = localStorage.getItem("favourite");
  if (favouriteLocal) {
    favouriteLocal = JSON.parse(favouriteLocal);
  }
  const [favourite, setFavourite] = useState(favouriteLocal); // lấy local ra để thêm tiếp tục sản phẩm
  const location = useLocation();

  useEffect(() => {
    api
      .get("/product-categories/6")
      .then((res) => {
        // console.log(res);
        setMenuItem(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  

  // chuyển đổi đơn vị tiền
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount * 1000);
  };
  useEffect(() => {
    const idFromLocalStorage = localStorage.getItem("tableID");

    setTableId(idFromLocalStorage);
     
  }, [location]);
  
  const addToCart = (foodID, foodName) => {
    if (!tableId) {
      toast.error("Vui lòng đặt bàn");
      return;
    }else{
        // toast.info(`Bạn đang đặt món cho bàn số: ${tableId}`);
        let cartID = localStorage.getItem("cartID") ?? null;
        // toast.info(`${cartID}`);
        // toast.info(`${foodQty}`);
        // toast.info(`${foodID}`);
        // toast.info(`Đang ở ngoài home`);

        const formData = new FormData();
        formData.append("cart_id", cartID);
        formData.append("product_id", foodID);
        formData.append("quantity", foodQty);

        let token = localStorage.getItem("token");
    if (token) {
      token = JSON.parse(token);
    }
    let config = {
      headers: {
        Authorization: "Bearer " + token,
        "Content-type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
    };


    api
      .post("/cart/add-product", formData, config)
      .then((res) => {
        // console.log(res);
        if (res.data.status) {
          toast.success(
            `Món ${foodName} đã được thêm vào bàn ${tableId}, số lượng: ${foodQty}`
          );
        } else {
          toast.error(`Thêm món ăn ${foodName} thất bại  `);
        }
      })
      .catch((error) => console.log(error));

    }
  };
  const addToFavourite = (id) => {
    let token = localStorage.getItem("token");

    if (!token) {
      toast.error("Vui lòng đăng nhập");
    } else {
      token = JSON.parse(token);
      const newFavourite = { ...favourite }; // giữ lại dữ liệu trước đó

      if (newFavourite[id]) {
        // nếu id có rồi, tức là qty > 1 thì +1
        // lấy id làm key của newCart
        newFavourite[id] += 1;
        toast.success("Thêm vào yêu thích thành công");
      } else {
        // nếu id chưa có thì là lấy id đó làm key rồi cho bằng qty là bằng 1
        newFavourite[id] = 1;
        toast.success("Thêm vào yêu thích thành công");
      }

      setFavourite(newFavourite);
      setFavourite(newFavourite);
      // lưu vào local
      localStorage.setItem("favourite", JSON.stringify(newFavourite));
    }
   
  };

  return (
    <div className="our-menu-content container-vphu text-vphu">
      <h2 className="title-our-menu title-vphu">Món Ăn Của Chúng Tôi</h2>
      <div className="menu-grid">
        {menuItem.length === 0 ? (
          <p>Không có món ăn nào trong danh mục này.</p>
        ) : (
          menuItem.map((item, index) => {
            const image = JSON.parse(item.image_url);
            const firstImage = image[0];
            return (
              <div className="menu-item-home" key={item.id}>
                <Link
                  className="menu-image"
                  to={"/product-detail/" + item.slug}
                >
                  <img src={`${url}/${firstImage}`} alt={item.name} />
                </Link>
                <div className="menu-details">
                  <Link to={"product-detail/" + item.slug}>
                    <h3 className="menu-title">{item.name}</h3>
                  </Link>
                  <p className="menu-description">
                    {item.ingredients.slice(0, 4).join(", ")}
                  </p>
                  <p className="menu-price">{formatCurrency(item.price)}</p>
                  <button className="order-button" onClick={() => addToCart(item.id, item.name)}>
                    Order now
                  </button>

                  <div
                    className={`heart-icon ${
                      index === 2 ||
                      index === 3 ||
                      index === 6 ||
                      index === 7 ||
                      index === 10 ||
                      index === 11
                        ? "right"
                        : "left"
                    }`}
                    onClick={() => addToFavourite(item.id)}
                    style={{
                      position: "absolute",
                      top: "10px",
                      [index === 2 ||
                      index === 3 ||
                      index === 6 ||
                      index === 7 ||
                      index === 10 ||
                      index === 11
                        ? "right"
                        : "left"]: "10px",
                    }}
                  >
                    {/* <FaRegHeart color="white" size={25} /> */}

                    <FaHeart color="red" size={25} />
                  </div>
                  {/* <div
            className={`heart-icon ${index === 2 || index === 3 || index === 6 || index === 7 || index === 10 || index === 11 ? "right" : "left"}`}
            // onClick={() => toggleFavourite(item)}
            style={{ position: "absolute", top: "10px", [index === 2 || index === 3 || index === 6 || index === 7 || index === 10 || index === 11 ? "right" : "left"]: "10px" }}
          >
            {favourites.some(fav => fav.id === item.id) ? (
              <FaHeart color="red" size={25} />
            ) : (
              <FaRegHeart color="white" size={25} />
            )}
          </div> */}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Menu;
