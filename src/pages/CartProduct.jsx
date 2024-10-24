import "../css/CartProduct.css";
import { BiSolidBank } from "react-icons/bi";
import { BsFillPiggyBankFill } from "react-icons/bs";
import { MdPayment } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
function CartProduct() {
  return (
    <>
      <div className="cart-header">
        <ul className="cart-page-header">
          {/* <li className="cart-page-logo">
            <img src={Logo2} alt="" />
            <h3>HightFive</h3>
          </li> */}
          <li className="cart-page-cart">Shopping Cart</li>
        </ul>
      </div>
      <div className="cart">
        <div className="cart-container">
          <div className="cart-items">
            <table className="cart-table">
              <thead className="cart-menus">
                <tr className="cart_menu">
                  <td className="cart-checkbox">
                    <input type="checkbox" />
                  </td>
                  <td className="cart-product">Sản phẩm</td>
                  <td className="cart-price">Đơn giá</td>
                  <td className="cart-quantity">Số lượng</td>
                  <td className="cart-money">Thành tiền</td>
                  <td className="cart-manipulate">Thao tác</td>
                </tr>
              </thead>
              <tbody className="cart-contents">
                <tr className="cart-content">
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td className="cart-image">
                    <img
                      className="image"
                      src="https://chuphinhmenu.com/wp-content/uploads/2018/03/chup-hinh-mon-an-menu-nha-trang-khanh-hoa-0008.jpg"
                      alt=""
                    />
                    <p>tên sản phẩm món ăn nó dài dài dài</p>
                  </td>
                  <td>200.000</td>
                  <td>
                    <div className="counters">
                      <button className="minus">-</button>
                      <input className="numbers" defaultValue={1}></input>
                      <button className="plus">+</button>
                    </div>
                  </td>
                  <td>400.000</td>
                  <td className="cart-manipulates">Xóa</td>
                </tr>
                <tr className="cart-content">
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td className="cart-image">
                    <img
                      className="image"
                      src="https://chuphinhmenu.com/wp-content/uploads/2018/03/chup-hinh-mon-an-menu-nha-trang-khanh-hoa-0008.jpg"
                      alt=""
                    />
                    <p>tên sản phẩm món ăn nó dài dài dài</p>
                  </td>
                  <td>200.000</td>
                  <td>
                    <div className="counters">
                      <button className="minus">-</button>
                      <input className="numbers" defaultValue={1}></input>
                      <button className="plus">+</button>
                    </div>
                  </td>
                  <td>400.000</td>
                  <td className="cart-manipulates">Xóa</td>
                </tr>
                <tr className="cart-content">
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td className="cart-image">
                    <img
                      className="image"
                      src="https://chuphinhmenu.com/wp-content/uploads/2018/03/chup-hinh-mon-an-menu-nha-trang-khanh-hoa-0008.jpg"
                      alt=""
                    />
                    <p>tên sản phẩm món ăn nó dài dài dài</p>
                  </td>
                  <td>200.000</td>
                  <td>
                    <div className="counters">
                      <button className="minus">-</button>
                      <input className="numbers" defaultValue={1}></input>
                      <button className="plus">+</button>
                    </div>
                  </td>
                  <td>400.000</td>
                  <td className="cart-manipulates">Xóa</td>
                </tr>
                <tr className="cart-content">
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td className="cart-image">
                    <img
                      className="image"
                      src="https://chuphinhmenu.com/wp-content/uploads/2018/03/chup-hinh-mon-an-menu-nha-trang-khanh-hoa-0008.jpg"
                      alt=""
                    />
                    <p>tên sản phẩm món ăn nó dài dài dài</p>
                  </td>
                  <td>200.000</td>
                  <td>
                    <div className="counters">
                      <button className="minus">-</button>
                      <input className="numbers" defaultValue={1}></input>
                      <button className="plus">+</button>
                    </div>
                  </td>
                  <td>400.000</td>
                  <td className="cart-manipulates">Xóa</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="cart-summary">
            <p className="total-title"> Cart totals</p>
            <ul className="cart-sub-total">
              <li className="">
                <p> Số bàn:</p>
                <h5>10</h5>
                {/* <div className="custom-borders"></div> */}
              </li>
              <li>
                <p>Subtotal:</p>
                <h5>300.000 VND</h5>
              </li>
              <li className="coupon-item">
                <p>
                  Coupon: 
                  {/* <span>abcxyz</span> */}
                </p>
                <h5>-20.000 VND</h5>
                <div>
                  <input
                    className="coupon"
                    type="text"
                    name="coupon"
                    id=""
                    placeholder="Coupon code"
                  />
                  <p>Chọn mã giảm giá:</p>
                  <select name="" id="" className="discount-code">
                    <option value="">Voucher</option>
                    <option value="">Giảm giá -25.000 VND</option>
                    <option value="">Giảm giá -20.000 VND </option>
                  </select>
                </div>
                <div className="custom-border"></div>
              </li>

              <li>
                <p className="total">Total:</p>
                <h5 className="total">300.000 VND</h5>
              </li>
            </ul>

            <div className="cart-abate">
              <input type="radio" className="radio" />
              <i className="cart-icon">
                <RiMoneyDollarCircleFill className=""/>
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
    </>
  );
}

export default CartProduct;
