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
        <div className="cart-header">
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
            <div className="cart-items">
              <div className="cart-table">
                <div className="cart-menus">
                  <div className="cart_menu">
                    <p className="cart-product">Sản phẩm</p>
                    <p className="cart-price">Đơn giá</p>
                    <p className="cart-quantity">Số lượng</p>
                    <p className="cart-money">Thành tiền</p>
                    <p className="cart-manipulate">Thao tác</p>
                  </div>
                </div>
                <div className="cart-contents">
                  <div className="cart-content">
                    <div className="cart-image">
                      <img
                        className="image"
                        src="https://chuphinhmenu.com/wp-content/uploads/2018/03/chup-hinh-mon-an-menu-nha-trang-khanh-hoa-0008.jpg"
                        alt=""
                      />
                      <p>tên sản phẩm món ăn nó dài dài dài</p>
                    </div>
                    <span>200.000</span>
                    <div className="counters">
                      <button className="minus">-</button>
                      <input className="numbers" defaultValue={1}></input>
                      <button className="plus">+</button>
                    </div>
                    <span>400.000</span>
                    <span className="cart-manipulates">Xóa</span>
                  </div>
                  {/* Thêm nhiều sản phẩm khác nếu cần */}
                </div>
              </div>
            </div>
            <div className="cart-summary">
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
                <li className="coupon-item">
                  <p>Coupon:</p>
                  <span>-20.000 VND</span>
                  <div>
                    <input
                      className="coupon"
                      type="text"
                      name="coupon"
                      placeholder="Coupon code"
                    />
                    <p>Chọn mã giảm giá:</p>
                    <select name="" className="discount-code">
                      <option value="">Voucher</option>
                      <option value="">Giảm giá -25.000 VND</option>
                      <option value="">Giảm giá -20.000 VND</option>
                    </select>
                  </div>
                  <div className="custom-border"></div>
                </li>
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
