import "../css/CartProduct.css";
import { BiSolidBank } from "react-icons/bi";
import { BsFillPiggyBankFill } from "react-icons/bs";
import { MdPayment } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";

function CartProduct() {
  return (
    <>
      <div className="cart-product-page">
        <div className="cart-headers">
          <ul className="cart-page-header">
            <Link to="/">
              <li className="cart-page-logo">
                <h3>Trang chủ</h3>
              </li>
            </Link>
            <li className="cart-page-cart">Giỏ hàng</li>
          </ul>
        </div>
        <div className="cart">
          <div className="cart-container">
            <div className="cart-header">
              <div className="header-item">Product</div>
              <div className="header-item">Price</div>
              <div className="header-item">Quantity</div>
              <div className="header-item">Total</div>
            </div>

            <div className="cart-item">
              <button className="remove-btn">×</button>
              <div className="product-info">
                <img
                  src="https://chuphinhmenu.com/wp-content/uploads/2018/03/chup-hinh-mon-an-menu-nha-trang-khanh-hoa-0008.jpg"
                  alt="Creamy Latte Coffee"
                  className="productCart-image"
                />
                <div className="product-details">
                  <h3 className="product-name">CREAMY LATTE COFFEE</h3>
                  <p className="product-description">
                    Far far away, behind the word mountains, far from the
                    countries
                  </p>
                </div>
              </div>
              <p className="product-price">$4.90</p>
              <div className="quantity-control">
                <button className="quantity-btn">-</button>
                <input
                  type="number"
                  value="1"
                  className="quantity-input"
                  readOnly
                />
                <button className="quantity-btn">+</button>
              </div>
              <p className="product-total">$4.90</p>
            </div>
            <div className="cart-item">
              <button className="remove-btn">×</button>
              <div className="product-info">
                <img
                  src="https://chuphinhmenu.com/wp-content/uploads/2018/03/chup-hinh-mon-an-menu-nha-trang-khanh-hoa-0008.jpg"
                  alt="Creamy Latte Coffee"
                  className="productCart-image"
                />
                <div className="product-details">
                  <h3 className="product-name">CREAMY LATTE COFFEE</h3>
                  <p className="product-description">
                    Far far away, behind the word mountains, far from the
                    countries
                  </p>
                </div>
              </div>
              <p className="product-price">$4.90</p>
              <div className="quantity-control">
                <button className="quantity-btn">-</button>
                <input
                  type="number"
                  value="1"
                  className="quantity-input"
                  readOnly
                />
                <button className="quantity-btn">+</button>
              </div>
              <p className="product-total">$4.90</p>
            </div>
            <div className="cart-item">
              <button className="remove-btn">×</button>
              <div className="product-info">
                <img
                  src="https://chuphinhmenu.com/wp-content/uploads/2018/03/chup-hinh-mon-an-menu-nha-trang-khanh-hoa-0008.jpg"
                  alt="Creamy Latte Coffee"
                  className="productCart-image"
                />
                <div className="product-details">
                  <h3 className="product-name">CREAMY LATTE COFFEE</h3>
                  <p className="product-description">
                    Far far away, behind the word mountains, far from the
                    countries
                  </p>
                </div>
              </div>
              <p className="product-price">$4.90</p>
              <div className="quantity-control">
                <button className="quantity-btn">-</button>
                <input
                  type="number"
                  value="1"
                  className="quantity-input"
                  readOnly
                />
                <button className="quantity-btn">+</button>
              </div>
              <p className="product-total">$4.90</p>
            </div>

          </div>

          <div className="cart-summary">
           <div className="cart-total">
              <p className="total-title">Cart totals</p>
              <ul className="cart-sub-total">
                <li>
                  <p>Số bàn:</p>
                  <span>10</span>
                </li>
                <li>
                  <p>Subtotal:</p>
                  <span>300.000 VND</span>
                </li>
                {/* <li className="coupon-item">
                  <p>Coupon:</p>
                  <span>-20.000 VND</span>
                  <div>
                    <input
                      className="coupon"
                      type="text"
                      name="coupon"
                      placeholder="Coupon code"
                    /> */}
                   <li>
                      <div>
                        <p>Chọn mã giảm giá:</p>
                        <select name="" className="discount-code">
                          <option value="">Voucher</option>
                          <option value="">Giảm giá -25.000 VND</option>
                          <option value="">Giảm giá -20.000 VND</option>
                        </select>
                      </div>
                   </li>
                  {/* </div> */}
                  <div className="custom-border"></div>
                {/* </li> */}
                <li>
                  <p className="total">Total:</p>
                  <span className="total">300.000 VND</span>
                </li>
              </ul>
              <div className="cart-abate">
                <input type="radio" className="radio" />
                <i className="cart-icon">
                  <RiMoneyDollarCircleFill />
                </i>
                <p>Trả tiền mặt khi vào bàn</p>
              </div>
              <div className="cart-abate">
                <input type="radio" className="radio" />
                <i className="cart-icon">
                  <BiSolidBank />
                </i>
                <p>Thanh toán ngân hàng</p>
              </div>
              <div className="cart-abate">
                <input type="radio" className="radio" />
                <i className="cart-icon">
                  <BsFillPiggyBankFill />
                </i>
                <p>Thanh toán momo</p>
              </div>
              <div className="cart-abate">
                <input type="radio" className="radio" />
                <i className="cart-icon">
                  <MdPayment />
                </i>
                <p>Thanh toán VNPay</p>
              </div>
              <div className="button-container">
                <button className="send">Proceed to checkout</button>
              </div>
           </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartProduct;
