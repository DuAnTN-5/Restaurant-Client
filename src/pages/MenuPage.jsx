import { useState, useEffect } from "react";
import { api, url } from "../api";
import { toast } from "react-toastify"; // Thêm thông báo toast
import { FaHeart } from "react-icons/fa";
import "../style/MenuPage.css";
import { FaThList } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
// import { set } from "lodash";

function normalizeString(str) {
  // Chuẩn hóa chuỗi sang ký tự Latin cơ bản
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function filterFoodItems(categories, searchString) {
  if (!searchString) return []; // Nếu không có chuỗi tìm kiếm, trả về danh sách rỗng
  const normalizeSearchString = normalizeString(searchString);

  // Lọc danh mục với các món ăn phù hợp
  const filteredCategories = categories.map((category) => {
    const filteredFoods = category.foods.filter((food) => {
      const normalizeFoodName = normalizeString(food.name);
      return normalizeFoodName.includes(normalizeSearchString);
    });

    // Trả về danh mục với mảng `foods` rỗng nếu không có món ăn phù hợp
    return {
      ...category,
      foods: filteredFoods,
    };
  });

  // Kiểm tra nếu tất cả `foods` trong danh mục đều rỗng, trả về mảng rỗng
  const hasMatchedItems = filteredCategories.some(
    (category) => category.foods.length > 0
  );
  return hasMatchedItems ? filteredCategories : [];
}

const MenuPage = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [categoriesWithFoods, setCategoriesWithFoods] = useState([]);
  const [filterdCategoriesWithFoods, setFilterdCategoriesWithFoods] = useState(
    []
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeCategory, setActiveCategory] = useState(null);

  const handleSidebarToggle = () => {
    setSidebarVisible(!sidebarVisible);
    setOverlayVisible(!overlayVisible);
  };

  const handleOverlayClick = () => {
    setSidebarVisible(false);
    setOverlayVisible(false);
  };

  let favouriteLocal = localStorage.getItem("favourite");
  if (favouriteLocal) {
    favouriteLocal = JSON.parse(favouriteLocal);
  }
  const [favourite, setFavourite] = useState(favouriteLocal); // lấy local ra để thêm tiếp tục sản phẩm

  // let bookingFoodLocal = localStorage.getItem("bookingFoodLocal");
  // if (bookingFoodLocal) {
  //   bookingFoodLocal = JSON.parse(bookingFoodLocal);
  // }
  // console.log(bookingFoodLocal);

  const location = useLocation();
  // const [bookingFood, setBookingFood] = useState({bookingFoodLocal});
  // const [bookingFood, setBookingFood] = useState({
  //   id: "",
  //   qty: "",
  // });
  const [foodId, setFoodId] = useState("");
  const [foodQty, setFoodQty] = useState("1");
  const [tableId, setTableId] = useState(null);

  // bấm đặt món là chuyển qua trang menu cùng id bàn

  useEffect(() => {
    // Lấy query param từ URL
    const params = new URLSearchParams(location.search);
    // console.log(params)

    const id = params.get("tableId");
    // console.log(id);
    if (id) {
      setTableId(id);
      // const idTable = { idTable: id };
      // localStorage.setItem("bookingFoodLocal", JSON.stringify(idTable));
      toast.info(`Bạn đang đặt món cho bàn số: ${id}`);
    }
  }, [location]);

  // bấm đặt món là chuyển qua trang menu cùng id bàn
  const handleInputChange = (e) => {
    setFoodQty(e.target.value);
  };

  let cartID = localStorage.getItem("cartID") ?? null;
  // console.log(cartID)

  const addToCart = (foodId, foodName) => {
    // console.log(foodId);
    if (!tableId) {
      toast.error("Vui lòng đặt bàn");
      return;
    }
    setFoodId(foodId);
    const formData = new FormData();
    formData.append("cart_id", cartID);
    formData.append("product_id", foodId);
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
        console.log(res);
        if (res.data.status) {
          toast.success(
            `Món ${foodName} đã được thêm vào bàn ${tableId}, số lượng: ${foodQty}`
          );
        } else {
          toast.error(`Thêm món ăn ${foodName} thất bại  `);
        }
      })
      .catch((error) => console.log(error));
  };

  // chuyển đổi đơn vị tiền
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount * 1000);
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

      // console.log(newCart);
      setFavourite(newFavourite);
      // abc(newCart)
      setFavourite(newFavourite);
      // lưu vào local
      localStorage.setItem("favourite", JSON.stringify(newFavourite));
    }
    // if (token) {

    //   token = JSON.parse(token);
    //   const newFavourite = { ...favourite }; // giữ lại dữ liệu trước đó

    //   if (newFavourite[id]) {
    //     // nếu id có rồi, tức là qty > 1 thì +1
    //     // lấy id làm key của newCart
    //     newFavourite[id] += 1;
    //     toast.success("Thêm vào giỏ hàng thành công");
    //   } else {
    //     // nếu id chưa có thì là lấy id đó làm key rồi cho bằng qty là bằng 1
    //     newFavourite[id] = 1;
    //     toast.success("Thêm vào giỏ hàng thành công");
    //   }

    //   // console.log(newCart);
    //   setFavourite(newFavourite);
    //   // abc(newCart)
    //   setFavourite(newFavourite);
    //   // lưu vào local
    //   localStorage.setItem("favourite", JSON.stringify(newFavourite));
    // }
  };

  // console.log(bookingFood);
  // console.log({tableId});
  // console.log({foodQty})
  // console.log({foodId})

  const handleSearchFood = (e) => {
    if (!e.target.value) {
      return setFilterdCategoriesWithFoods(categoriesWithFoods);
    }
    const filteredList = filterFoodItems(categoriesWithFoods, e.target.value);
    setFilterdCategoriesWithFoods(filteredList);
  };

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
              ?
               JSON.parse(food.ingredients)
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
        setFilterdCategoriesWithFoods(categoriesWithFoods);
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

  if (loading) {
    return <div>Đang tải dữ liệu...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="bgr-menu-page">
      <div className="menu-sidebar-change" onClick={handleSidebarToggle}>
        <FaThList />
      </div>

      {overlayVisible && <div className="overlay" onClick={handleOverlayClick}></div>}
  
      {sidebarVisible && (
        <div className="sidebar-content sidebar-content-change">
          <h3 className="title-menu-sidebar subtitle-vphu"> Danh Mục</h3>
          <ul className="menu-sidebar-list menu-sidebar-list-change">
          <li>
                <div className="menu-search-bar-change">
                  <input
                    type="text"
                    placeholder="Tìm kiếm món"
                    className="menu-search-input-change"
                    onChange={handleSearchFood}
                  />
                </div>
              </li>
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
      )}
  
      <div className="menu-page container-vphu text-vphu">
        <div className="menu-header">
          <div className="menu-title">
            <h1 className="menu-main-title title-vphu">Thực Đơn Đặc Biệt</h1>
            {tableId && (
              <p className="text-vphu menu-table-padding">
                Bạn đang đặt món cho bàn số: {tableId}
              </p>
            )}
          </div>
        </div>
        <div className="menu-search-bar">
          <input
            type="text"
            placeholder="Tìm kiếm món ăn..."
            className="menu-search-input"
            onChange={handleSearchFood}
          />
        </div>

        <div className="menu-main-container">
          <div className="menu-sidebar">
            <h3 className="title-menu-sidebar subtitle-vphu"> Danh Mục</h3>
            <ul className="menu-sidebar-list">
              <li>
                <div className="menu-search-bar-change">
                  <input
                    type="text"
                    placeholder="Tìm kiếm món ăn..."
                    className="menu-search-input-change"
                    onChange={handleSearchFood}
                  />
                </div>
              </li>
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
            {filterdCategoriesWithFoods?.length ? (
              <div>
                {filterdCategoriesWithFoods?.map((category) => {
                  return (
                    <div key={category.id} className="menu-category-section">
                      <h2
                        id={`category-title-${category.id}`}
                        className="menu-category-title subtitle-vphu"
                      >
                        {category.name}
                      </h2>
                      {category.foods?.length ? (
                        <div className="menu-items">
                          {category.foods.map((food) => {
                            let image = JSON.parse(food.image_url);
                            console.log(image);
                            let firstImage = image[0];
                            return (
                              <div key={food.id} className="menu-item-page">
                                <Link to={"/product-detail/" + food.slug}>
                                  <img
                                    className="menu-item-page-img"
                                    src={`${url}/${firstImage}`}
                                    alt={food.name}
                                  />
                                </Link>
                                <Link to={"/product-detail/" + food.slug}>
                                  <h3 className="menu-item-page-title">
                                    {food.name}
                                  </h3>
                                </Link>
                                <p className="menu-item-page-ingredients">
                                  {food.ingredientsList.length > 0
                                    ? food.ingredientsList.join(", ")
                                    : "Không có thông tin nguyên liệu"}
                                </p>
                                <span className="menu-item-page-price">
                                  {formatCurrency(food.price)}
                                  {/* {formatCurrency(food.total)} */}
                                </span>
                                <div className="order-controls">
                                  <input
                                    type="number"
                                    className="menu-item-page-quantity"
                                    defaultValue="1"
                                    min="1"
                                    onChange={handleInputChange}
                                    max="10"
                                  />
                                  <button
                                    className="menu-item-page-order-btn"
                                    onClick={() =>
                                      addToCart(food.id, food.name)
                                    }
                                  >
                                    Đặt Món
                                  </button>
                                </div>
                                {/* <button
                            className="menu-item-page-order-btn"
                            onClick={() => addToCart(food.id)}
                          >
                            Đặt Món
                          </button> */}
                                <div
                                  className="heart-icon-menu-page"
                                  onClick={() => addToFavourite(food.id)}
                                  style={{
                                    position: "absolute",
                                    top: "10px",
                                    left: "10px",
                                  }}
                                >
                                  <FaHeart color="red" size={20} />
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <div>
                          <p>Không tìm thấy món ăn phù hợp</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div>
                <p>Không tìm thấy món ăn phù hợp.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
