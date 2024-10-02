import "../css/Product-Detail.css";
import { FaCartShopping } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { useState } from "react";

function ProductDetail() {
  const [activeTab, setActiveTab] = useState("description"); // State lưu trữ tab nào đang được chọn

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <div className="navbar-detail">
        <div className="navbar-left">
          <img
            src="https://wp.validthemes.net/restan/wp-content/uploads/2024/06/Shushi.png"
            alt=""
          />
        </div>
        <div className="navbar-right">
          <h3>Bbg Fish</h3>
          <h2>SHUSHI</h2>
          <p>Giá tiền:$56</p>
          <p>Nguyên liệu chính: Tôm, Thịt, Trứng </p>
          <p>Thành phần: ABC</p>
          <p>Mã món ăn: 002</p>
          <div className="productQuantity">
            <div className="counter">
              <button className="minus">-</button>
              <input className="number" defaultValue={1}></input>
              <button className="plus">+</button>
            </div>
            <div className="addTocart">
              <button className="add">
                <i>
                  <FaCartShopping />
                </i>
                Add To Cart
              </button>
            </div>
            <i className="like">
              <CiHeart />
            </i>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="tab-menu">
          <div
            className={`tab-item ${
              activeTab === "description" ? "active" : ""
            }`}
            onClick={() => handleTabClick("description")}
          >
            Description
          </div>
          <div
            className={`tab-item ${activeTab === "review" ? "active" : ""}`}
            onClick={() => handleTabClick("review")}
          >
            Review
          </div>
        </div>

        <div className="tab-content">
          {activeTab === "description" && (
            <div className="tab-pane">
              <p>
                Welcome to The Gourmet Haven, where culinary excellence meets a
                warm, inviting atmosphere. Our menu is crafted with the finest
                locally sourced ingredients, ensuring a fresh and flavorful
                dining experience. Our signature dishes include the exquisite
                truffle pasta, succulent gourmet burgers, and a variety of
                seafood platters that tantalize the taste buds. Each dish is a
                harmonious blend of traditional recipes and modern culinary
                techniques.
              </p>
                <p>
                   In addition to our main menu, we offer a seasonal
                  selection that highlights the best of what each season has to
                  offer. Our craft cocktails are expertly mixed, complementing our
                  extensive wine list, which features both local and international
                  selections.
                </p>
            </div>
          )}
          {activeTab === "review" && (
            <div className="tab-pane">
              <p>This is the review section.</p>
            </div>
          )}
        </div>
        <div>
          <h2>Các món ăn khác</h2>
          <div className="vt-product">
            <div className="product-content">
              <img className="product-image" src="https://wp.validthemes.net/restan/wp-content/uploads/2024/05/fried-chicekn.png" alt="" />
              <div className="product-caption">
                <span className="product-tags">Chicken, Spicyy</span>
                <h3 className="product-title">Chicken alfredo</h3>
                <h4 className="product-price">35.000 đ</h4>
                <button className="add-to-cart"> <i><FaCartShopping/></i> Add to cart</button>
              </div>
              
            </div>
            <div className="product-content">
              <img className="product-image" src="https://wp.validthemes.net/restan/wp-content/uploads/2024/05/fried-chicekn.png" alt="" />
              <div className="product-caption">
                <span className="product-tags">Chicken, Spicyy</span>
                <h3 className="product-title">Chicken alfredo</h3>
                <h4 className="product-price">35.000 đ</h4>
                <button className="add-to-cart"> <i><FaCartShopping/></i> Add to cart</button>
              </div>
              
            </div>
            <div className="product-content">
              <img className="product-image" src="https://wp.validthemes.net/restan/wp-content/uploads/2024/05/fried-chicekn.png" alt="" />
              <div className="product-caption">
                <span className="product-tags">Chicken, Spicyy</span>
                <h3 className="product-title">Chicken alfredo</h3>
                <h4 className="product-price">35.000 đ</h4>
                <button className="add-to-cart"> <i><FaCartShopping/></i> Add to cart</button>
              </div>
              
            </div>
            <div className="product-content">
              <img className="product-image" src="https://wp.validthemes.net/restan/wp-content/uploads/2024/05/fried-chicekn.png" alt="" />
              <div className="product-caption">
                <span className="product-tags">Chicken, Spicyy</span>
                <h3 className="product-title">Chicken alfredo</h3>
                <h4 className="product-price">35.000 đ</h4>
                <button className="add-to-cart"> <i><FaCartShopping/></i> Add to cart</button>
              </div>
              
            </div>
            <div className="product-content">
              <img className="product-image" src="https://wp.validthemes.net/restan/wp-content/uploads/2024/05/fried-chicekn.png" alt="" />
              <div className="product-caption">
                <span className="product-tags">Chicken, Spicyy</span>
                <h3 className="product-title">Chicken alfredo</h3>
                <h4 className="product-price">35.000 đ</h4>
                <button className="add-to-cart"> <i><FaCartShopping/></i> Add to cart</button>
              </div>
              
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
