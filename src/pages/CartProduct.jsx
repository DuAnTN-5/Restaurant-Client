import "../css/CartProduct.css";
import { MdDelete } from "react-icons/md";
function CartProduct() {
  return (
    <>
      <div className="cart">
        {/* <div className="container"> */}
          <div className="cart-product">
            <div className="cart-header">
              <h3>Giỏ hàng của bạn</h3>
              <h4>3 items</h4>
            </div>
            <div className="cart-container">
              <table className="cart-items">
                <thead>
                  <tr className="cart_menu">
                    <td className="image">Hình ảnh</td>
                    <td className="description">Món ăn của bạn</td>
                    <td className="price">Giá</td>
                    <td className="quantity">Số lượng</td>
                    <td className="total">Tổng tiền</td>
                    <td></td>
                  </tr>
                </thead>
                <tbody>
                  <tr className="cart-content">
                    <td className="cart-image">
                      <img
                        src="https://chuphinhmenu.com/wp-content/uploads/2018/03/chup-hinh-mon-an-menu-nha-trang-khanh-hoa-0008.jpg"
                        alt=""
                      />
                    </td>
                    <td className="cart-title">
                      <p>Combo nướng cao cấp ngon nhức nách</p>
                    </td>
                    <td className="cart-price"> 500.000</td>
                    <td className="cart-quantity">
                      <div className="quantitycart-quantity-button">
                        <button className="up">-</button>
                        <input
                          className="quantity-input"
                          defaultValue={1}
                        ></input>
                        <button className="dow">+</button>
                      </div>
                    </td>
                    <td className="cart-total">500.000</td>
                    <td className="cart-icon">
                      <i>
                        <MdDelete />
                      </i>
                    </td>
                  </tr>
                  <tr className="cart-content">
                    <td className="cart-image">
                      <img
                        src="https://chuphinhmenu.com/wp-content/uploads/2018/03/chup-hinh-mon-an-menu-nha-trang-khanh-hoa-0008.jpg"
                        alt=""
                      />
                    </td>
                    <td className="cart-title">
                      <p>Combo nướng cao cấp ngon nhức nách</p>
                    </td>
                    <td className="cart-price"> 500.000</td>
                    <td className="cart-quantity">
                      <div className="quantitycart-quantity-button">
                        <button className="up">-</button>
                        <input
                          className="quantity-input"
                          defaultValue={1}
                        ></input>
                        <button className="dow">+</button>
                      </div>
                    </td>
                    <td className="cart-total">500.000</td>
                    <td className="cart-icon">
                      <i>
                        <MdDelete />
                      </i>
                    </td>
                  </tr>
                  <tr className="cart-content">
                    <td className="cart-image">
                      <img
                        src="https://chuphinhmenu.com/wp-content/uploads/2018/03/chup-hinh-mon-an-menu-nha-trang-khanh-hoa-0008.jpg"
                        alt=""
                      />
                    </td>
                    <td className="cart-title">
                      <p>Combo nướng cao cấp ngon nhức nách</p>
                    </td>
                    <td className="cart-price"> 500.000</td>
                    <td className="cart-quantity">
                      <div className="quantitycart-quantity-button">
                        <button className="up">-</button>
                        <input
                          className="quantity-input"
                          defaultValue={1}
                        ></input>
                        <button className="dow">+</button>
                      </div>
                    </td>
                    <td className="cart-total">500.000</td>
                    <td className="cart-icon">
                      <i>
                        <MdDelete />
                      </i>
                    </td>
                  </tr>
                  <tr className="cart-content">
                    <td className="cart-image">
                      <img
                        src="https://chuphinhmenu.com/wp-content/uploads/2018/03/chup-hinh-mon-an-menu-nha-trang-khanh-hoa-0008.jpg"
                        alt=""
                      />
                    </td>
                    <td className="cart-title">
                      <p>Combo nướng cao cấp ngon nhức nách</p>
                    </td>
                    <td className="cart-price"> 500.000</td>
                    <td className="cart-quantity">
                      <div className="quantitycart-quantity-button">
                        <button className="up">-</button>
                        <input
                          className="quantity-input"
                          defaultValue={1}
                        ></input>
                        <button className="dow">+</button>
                      </div>
                    </td>
                    <td className="cart-total">500.000</td>
                    <td className="cart-icon">
                      <i>
                        <MdDelete />
                      </i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="cart-totalll">
            <p>tổng côngh</p>
          </div>
        </div>
      {/* </div> */}
    </>
  );
}

export default CartProduct;
