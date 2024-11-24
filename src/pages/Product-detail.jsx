import "../css/Product-Detail.css";
import { FaCartShopping } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Slider from "react-slick";

import Rate from "./Rate";
import ProductRate from "./Product-rate";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../api";
import { toast } from "react-toastify";
import ProductComment from "./Product-Comment";

function ProductDetail() {
  const [productDetail, setProductDetail] = useState({});
  const [vote, setVote] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  // const [otherDishes, setOtherDishes] = useState([]);

  let token = localStorage.getItem("token");
  if (token) {
    token = JSON.parse(token);
  }

  const params = useParams();
  // console.log(params);
  useEffect(() => {
    api
      .get("products/" + params.slug)
      .then((res) => {
        // console.log(res.data.data);
        setVote(res.data.data);
        setProductDetail(res.data.data.product);
        const data = res.data.data.product;
        if (data.category_id === 1) {
          setCategory("Món khai vị ");
          // api
          // .get("product-categories/1")
          // .then((res) =>
          // console.log(res))
          // .catch(error => console.log(error))
        } else if (data.category_id === 6) {
          setCategory("Món chính");
          // api
          // .get("product-categories/6")
          // .then((res) =>
          // console.log(res))
          // .catch(error => console.log(error))
        } else if (data.category_id === 11) {
          setCategory("Món tráng miệng");
          // api
          // .get("product-categories/11")
          // .then((res) =>
          // console.log(res))
          // .catch(error => console.log(error))
        } else if (data.category_id === 16) {
          setCategory("Rượu & Thức uống");
          // api
          // .get("product-categories/16")
          // .then((res) =>
          // console.log(res))
          // .catch(error => console.log(error))
        } else {
          // 21
          setCategory("Món ăn chay");
          // api
          // .get("product-categories/21")
          // .then((res) =>
          // console.log(res))
          // .catch(error => console.log(error))
        }
      })
      .catch((error) => console.log(error));
  }, []);
  const clickCart = () => {
    if (!token) {
      toast.error("Vui lòng đăng nhập thêm vào giỏ hàng");
    }
  };
  const clickFavouritePage = () => {
    if (!token) {
      toast.error("Vui lòng đăng nhập");
    }
  };
  // console.log(productDetail);
  // console.log(vote)
  // console.log(Object.keys(productDetail).length )

  return (
    <>
      <div className="product-detail-page">
        <div className="navbar-detail">
          <div className="image-detail">
            <div className="navbar-left">
              <img
                src={`http://127.0.0.1:8000/${productDetail.image_url}`}
                alt=""
              />
            </div>
            <div className="list-image-detail">
              <img
                src="https://wp.validthemes.net/restan/wp-content/uploads/2024/06/Salmon-Fry-1.png"
                alt=""
              />
              <img
                src="https://wp.validthemes.net/restan/wp-content/uploads/2024/06/Salmon-Fry-1.png"
                alt=""
              />
              <img
                src="https://wp.validthemes.net/restan/wp-content/uploads/2024/06/Salmon-Fry-1.png"
                alt=""
              />
              {/* <img
                src="https://wp.validthemes.net/restan/wp-content/uploads/2024/06/Salmon-Fry-1.png"
                alt=""
              /> */}
            </div>
          </div>
          <div className="navbar-right">
            <div>
              <h3 className="product-title-size">Danh mục: {category}</h3>
            </div>
            <h2 className="product-name">{productDetail?.name}</h2>
            <div className="rate">
              <span className="rating-text">({vote?.average_rating})</span>
              <Rate vote={vote} />
              {/* <div className="stars">
                <i className="star-icon full-star">★</i>
                <i className="star-icon full-star">★</i>
                <i className="star-icon full-star">★</i>
                <i className="star-icon full-star">★</i>
                <i className="star-icon half-star">★</i>
              </div> */}
              <span className="total-ratings">
                {vote?.total_ratings} đánh giá
              </span>
            </div>
            <p className="product-children">
              Giá tiền: {productDetail?.price} VND
            </p>
            <p className="product-children">
              Nguyên liệu chính:{" "}
              {(() => {
                try {
                  return JSON.parse(productDetail?.ingredients || "[]")
                    .map((ing) => ing.value)
                    .join(", ");
                } catch {
                  return "Không có thông tin nguyên liệu";
                }
              })()}
              {/* {productDetail.ingredients} */}
            </p>
            {/* <p className="product-children">Thành phần: ABC</p> */}
            {/* <p className="product-children">Mã món ăn: 002</p> */}
            {/* <div className="productQuantity">
              <div className="counter">
                <button className="minus">-</button>
                <input className="number" defaultValue={1}></input>
                <button className="plus">+</button>
              </div>
              <button className="add">
                <i>
                  <FaCartShopping />
                </i>
                <span onClick={clickCart} className="">
                  Add To Cart
                </span>
              </button>
              <i className="like" onClick={clickFavouritePage}>
                <CiHeart />
              </i>
            </div> */}
          </div>
          {/* <div className="food-description">
              <h4>Mô tả món ăn</h4>
              <p>
                Đây là món ăn độc đáo, kết hợp giữa hương vị tươi ngon của hải sản
                và sự đậm đà của nước sốt đặc trưng. Món ăn được chế biến từ
                nguyên liệu tươi sống, đảm bảo chất lượng và an toàn.
              </p>
            </div> */}
        </div>
        <div className="food-description">
          <h3 className="product-title">Thông tin chi tiết về món ăn</h3>
          <p>
            {productDetail?.summary
              ? productDetail.summary.replace(/<\/?p>/g, "")
              : "Không có thông tin"}
            {/* .replace(/<\/?p>/g, ""): Thay thế tất cả các thẻ <p> và </p> bằng chuỗi rỗng (xóa chúng đi). */}
          </p>
          <p>
            {" "}
            {productDetail?.description
              ? productDetail.description.replace(/<\/?p>/g, "")
              : "Không có thông tin"}
          </p>
        </div>
        <div className="food-rate">
          <h3 className="product-title">
            Hãy để lại đánh giá của bạn về món ăn
          </h3>
          {/* <ProductRate product={Object.keys(productDetail).length ? productDetail : null} params={params}/> */}
          <ProductRate
            product={productDetail}
            params={params}
            setVote={setVote}
          />
        </div>
        <ProductComment product={productDetail} />

        <div className="tab-content">
          <div>
            <h2 className="other-dishes">Các món ăn khác</h2>
            {/* <div className="vt-product"> */}
            {/* <Swiper
                spaceBetween={20}
                slidesPerView="auto" // Số item hiện trong 1 lần
                className="mySwiper "
                navigation
              >
                <SwiperSlide style={{ width: "auto" }}>
                  <div className="product-content">
                    <img
                      className="product-image"
                      src="https://wp.validthemes.net/restan/wp-content/uploads/2024/05/fried-chicekn.png"
                      alt=""
                    />
                    <div className="product-caption">
                      <span className="product-tags">Chicken, Spicy</span>
                      <h3 className="product-title">Chicken alfredo</h3>
                      <h4 className="product-price">35.000 đ</h4>
                      <button className="add-to-cart">
                        {" "}
                        <i>
                          <FaCartShopping />
                        </i>{" "}
                        Add to cart
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide style={{ width: "auto" }}>
                  <div className="product-content">
                    <img
                      className="product-image"
                      src="https://wp.validthemes.net/restan/wp-content/uploads/2024/05/fried-chicekn.png"
                      alt=""
                    />
                    <div className="product-caption">
                      <span className="product-tags">Chicken, Spicy</span>
                      <h3 className="product-title">Chicken alfredo</h3>
                      <h4 className="product-price">35.000 đ</h4>
                      <button className="add-to-cart">
                        {" "}
                        <i>
                          <FaCartShopping />
                        </i>{" "}
                        Add to cart
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide style={{ width: "auto" }}>
                  <div className="product-content">
                    <img
                      className="product-image"
                      src="https://wp.validthemes.net/restan/wp-content/uploads/2024/05/fried-chicekn.png"
                      alt=""
                    />
                    <div className="product-caption">
                      <span className="product-tags">Chicken, Spicy</span>
                      <h3 className="product-title">Chicken alfredo</h3>
                      <h4 className="product-price">35.000 đ</h4>
                      <button className="add-to-cart">
                        {" "}
                        <i>
                          <FaCartShopping />
                        </i>{" "}
                        Add to cart
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide style={{ width: "auto" }}>
                  <div className="product-content">
                    <img
                      className="product-image"
                      src="https://wp.validthemes.net/restan/wp-content/uploads/2024/05/fried-chicekn.png"
                      alt=""
                    />
                    <div className="product-caption">
                      <span className="product-tags">Chicken, Spicy</span>
                      <h3 className="product-title">Chicken alfredo</h3>
                      <h4 className="product-price">35.000 đ</h4>
                      <button className="add-to-cart">
                        {" "}
                        <i>
                          <FaCartShopping />
                        </i>{" "}
                        Add to cart
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
                
              </Swiper> */}
            <Slider {...settings}>
              <div className="padding">
                <div className="product-content">
                  <img
                    className="product-image"
                    src="https://wp.validthemes.net/restan/wp-content/uploads/2024/05/fried-chicekn.png"
                    alt=""
                  />
                  <div className="product-caption">
                    <span className="product-tags">Chicken, Spicy</span>
                    <h3 className="product-title">Chicken alfredo</h3>
                    <h4 className="product-price">35.000 đ</h4>
                    <button className="add-to-cart">
                      {" "}
                      <i>
                        <FaCartShopping />
                      </i>{" "}
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="padding">
                <div className="product-content">
                  <img
                    className="product-image"
                    src="https://wp.validthemes.net/restan/wp-content/uploads/2024/05/fried-chicekn.png"
                    alt=""
                  />
                  <div className="product-caption">
                    <span className="product-tags">Chicken, Spicy</span>
                    <h3 className="product-title">Chicken alfredo</h3>
                    <h4 className="product-price">35.000 đ</h4>
                    <button className="add-to-cart">
                      {" "}
                      <i>
                        <FaCartShopping />
                      </i>{" "}
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="padding">
                <div className="product-content">
                  <img
                    className="product-image"
                    src="https://wp.validthemes.net/restan/wp-content/uploads/2024/05/fried-chicekn.png"
                    alt=""
                  />
                  <div className="product-caption">
                    <span className="product-tags">Chicken, Spicy</span>
                    <h3 className="product-title">Chicken alfredo</h3>
                    <h4 className="product-price">35.000 đ</h4>
                    <button className="add-to-cart">
                      {" "}
                      <i>
                        <FaCartShopping />
                      </i>{" "}
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="padding">
                <div className="product-content">
                  <img
                    className="product-image"
                    src="https://wp.validthemes.net/restan/wp-content/uploads/2024/05/fried-chicekn.png"
                    alt=""
                  />
                  <div className="product-caption">
                    <span className="product-tags">Chicken, Spicy</span>
                    <h3 className="product-title">Chicken alfredo</h3>
                    <h4 className="product-price">35.000 đ</h4>
                    <button className="add-to-cart">
                      {" "}
                      <i>
                        <FaCartShopping />
                      </i>{" "}
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="padding">
                <div className="product-content">
                  <img
                    className="product-image"
                    src="https://wp.validthemes.net/restan/wp-content/uploads/2024/05/fried-chicekn.png"
                    alt=""
                  />
                  <div className="product-caption">
                    <span className="product-tags">Chicken, Spicy</span>
                    <h3 className="product-title">Chicken alfredo</h3>
                    <h4 className="product-price">35.000 đ</h4>
                    <button className="add-to-cart">
                      {" "}
                      <i>
                        <FaCartShopping />
                      </i>{" "}
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="padding">
                <div className="product-content">
                  <img
                    className="product-image"
                    src="https://wp.validthemes.net/restan/wp-content/uploads/2024/05/fried-chicekn.png"
                    alt=""
                  />
                  <div className="product-caption">
                    <span className="product-tags">Chicken, Spicy</span>
                    <h3 className="product-title">Chicken alfredo</h3>
                    <h4 className="product-price">35.000 đ</h4>
                    <button className="add-to-cart">
                      {" "}
                      <i>
                        <FaCartShopping />
                      </i>{" "}
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              
              
            </Slider>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
