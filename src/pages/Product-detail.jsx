import "../css/Product-Detail.css";
// import { FaCartShopping } from "react-icons/fa6";
import "swiper/css";
import Slider from "react-slick";

import Rate from "./Rate";
import ProductRate from "./Product-rate";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api, url } from "../api";
import ProductComment from "./Product-Comment";
// import { toast } from "react-toastify";

function ProductDetail() {
  const [productDetail, setProductDetail] = useState({});
  const [image, setImage] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");
  const [vote, setVote] = useState("");
  const [category, setCategory] = useState("");
  // const navigate = useNavigate();

  // chuyển đổi đơn vị tiền
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount * 1000);
  };
  const [otherDishes, setOtherDishes] = useState([]);

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

  let token = localStorage.getItem("token");
  if (token) {
    token = JSON.parse(token);
  }

  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  const params = useParams();
  // console.log(params);
  useEffect(() => {
    api
      .get("products/" + params.slug)
      .then((res) => {
        setVote(res.data.data);
        let productData = res.data.data.product;
        if (productData.image_url) {
          productData.image_url = JSON.parse(res.data.data.product.image_url);
          setImage(productData.image_url);
          setSelectedImage(productData.image_url[0]);
        }
        setProductDetail(res.data.data.product);

        const data = res.data.data.product;
        if (data.category_id === 1) {
          setCategory("Món khai vị ");
          api
            .get("product-categories/1")
            .then((res) => {
              // console.log(res);
              setOtherDishes(res.data.data);
            })
            .catch((error) => console.log(error));
        } else if (data.category_id === 6) {
          setCategory("Món chính");
          api
            .get("product-categories/6")
            .then((res) => {
              // console.log(res);
              setOtherDishes(res.data.data);
            })

            .catch((error) => console.log(error));
        } else if (data.category_id === 11) {
          setCategory("Món tráng miệng");
          api
            .get("product-categories/11")
            .then((res) => {
              // console.log(res);
              setOtherDishes(res.data.data);
            })
            .catch((error) => console.log(error));
        } else if (data.category_id === 16) {
          setCategory("Rượu & Thức uống");
          api
            .get("product-categories/16")
            .then((res) => {
              // console.log(res);
              setOtherDishes(res.data.data);
            })
            .catch((error) => console.log(error));
        } else {
          // 21
          setCategory("Món ăn chay");
          api
            .get("product-categories/21")
            .then((res) => {
              setOtherDishes(res.data.data);
            })
            .catch((error) => console.log(error));
        }
      })
      .catch((error) => console.log(error));
  }, [params.slug]);
  // console.log(otherDishes);
  // console.log(image);
  // console.log(selectedImage);
  // console.log(imgGotherDishes);

  return (
    <>
      <div className="product-detail-page">
        <div className="navbar-detail">
          <div className="image-detail">
            <div className="navbar-left">
              <img src={`${url}/${selectedImage}`} alt="" />
            </div>
            <div className="list-image-detail">
              {image &&
                image.map((img, index) => (
                  <img
                    key={index}
                    src={`${url}/${img}`}
                    alt=""
                    onClick={() => handleImageClick(img)}
                  />
                ))}
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
              <span className="total-ratings">
                {vote?.total_ratings} đánh giá
              </span>
            </div>
            <p className="product-children">
              Giá tiền: {formatCurrency(productDetail?.price)}
              {/* {productDetail?.price} VND */}
            </p>
            <p className="product-children">
              Nguyên liệu chính: {(productDetail?.ingredients || []).join(", ")}
            </p>
          </div>
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
            <Slider {...settings}>
              {otherDishes.map((item) => {
                let image = JSON.parse(item.image_url);
                let firstImage = image[0];
                return (
                  <div className="padding" key={item.id}>
                    <div className="product-content">
                      <Link to={"/product-detail/" + item.slug}>
                        <img
                          className="product-image-detail-page"
                          src={`${url}/${firstImage}`}
                          alt=""
                        />
                      </Link>
                      <div className="product-caption">
                        <Link to={"/product-detail/" + item.slug}>
                          <h3 className="product-detail-item-title">
                            {item.name}
                          </h3>
                        </Link>
                        <span className="product-tags">
                          {item?.summary
                            ? (() => {
                                const text = item.summary.replace(
                                  /<\/?p>/g,
                                  ""
                                );
                                const words = text.split(/\s+/);
                                if (words.length > 20) {
                                  return words.slice(0, 20).join(" ") + " ...";
                                }
                                return text; 
                              })()
                            : "Không có thông tin"}
                        </span>

                        <h4 className="product-price-detail">
                          {formatCurrency(item?.price)}
                          {/* {item.price} VND */}
                        </h4>
                        {/* <button className="add-to-cart">
                      {" "}
                      <i>
                        <FaCartShopping />
                      </i>{" "}
                      Add to cart
                    </button> */}
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
