import "../css2/Favourite.css"; // Ensure the path is correct

function FavouritePage() {
  return (
    <>
      <div className="favourite-page">
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
        </div>
      </div>
    </>
  );
}

export default FavouritePage;
