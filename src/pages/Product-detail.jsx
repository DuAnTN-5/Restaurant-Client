import "../css/Product-Detail.css";
import { FaCartShopping } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
function ProductDetail() {
 
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
          <h3 className="product-title">Bbg Fish</h3>
          <h2>SHUSHI</h2>
          <p className="product-children">Giá tiền:$56</p>
          <p className="product-children">Nguyên liệu chính: Tôm, Thịt, Trứng </p>
          <p className="product-children">Thành phần: ABC</p>
          <p className="product-children">Mã món ăn: 002</p>
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
       <div ></div>
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
