import { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa"; // Import icons from react-icons

const productsData = [
  {
    id: 1,
    name: "Beef Burger",
    price: "$12.00",
    stockStatus: "In stock",
    image:
      "https://images2.thanhnien.vn/528068263637045248/2024/8/2/h3-1722573253571452686987.jpg",
  },
  {
    id: 2,
    name: "Chicken Burger",
    price: "$10.00",
    stockStatus: "In stock",
    image:
      "https://images2.thanhnien.vn/528068263637045248/2024/8/2/h3-1722573253571452686987.jpg",
  },
  {
    id: 3,
    name: "Veggie Burger",
    price: "$8.00",
    stockStatus: "Out of stock",
    image:
      "https://images2.thanhnien.vn/528068263637045248/2024/8/2/h3-1722573253571452686987.jpg",
  },
];

const FavouritePage = () => {
  const [selectedProducts, setSelectedProducts] = useState(
    new Array(productsData.length).fill(false)
  );
  const [cart, setCart] = useState([]);

  const toggleSelect = (index) => {
    const newSelection = [...selectedProducts];
    newSelection[index] = !newSelection[index];
    setSelectedProducts(newSelection);
  };

  const handleAddToCart = (product) => {
    if (product.stockStatus === "Out of stock") {
      alert("This product is out of stock and cannot be added to the cart.");
      return;
    }
    setCart((prevCart) => [...prevCart, product]);
    alert("Sản phẩm đã thêm vào giỏ hàng: " + product.name);
  };

  const handleRemoveFromCart = (product) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
    alert("Sản phẩm đã được xóa khỏi giỏ hàng: " + product.name);
  };

  const handleAddSelectedToCart = () => {
    const selectedItems = productsData.filter(
      (_, index) =>
        selectedProducts[index] &&
        productsData[index].stockStatus === "In stock"
    );
    setCart((prevCart) => [...prevCart, ...selectedItems]);
    alert("Các mặt hàng đã chọn đã được thêm vào giỏ hàng.");
  };

  const handleAddAllToCart = () => {
    const inStockProducts = productsData.filter(
      (product) => product.stockStatus === "In stock"
    );
    setCart(inStockProducts);
    alert("Tất cả đã được thêm vào giỏ hàng.");
  };

  const handleRemoveAllFromCart = () => {
    setCart([]); // Clear the cart
    alert("Tất cả đã được xóa khỏi giỏ hàng.");
  };

  const handleViewCart = () => {
    console.log("Cart contents:", cart);
    alert(JSON.stringify(cart, null, 2));
  };

  const isInCart = (product) => cart.some((item) => item.id === product.id);

  return (
    <div className="container mx-auto max-w-7xl p-4">
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-black text-white">
          <tr>
            <th className="px-4 py-2">
              <input
                type="checkbox"
                style={{ transform: "scale(1.5)" }}
                onChange={() => {
                  const allSelected = selectedProducts.every(Boolean);
                  setSelectedProducts(
                    new Array(productsData.length).fill(!allSelected)
                  );
                }}
              />
            </th>
            <th className="px-4 py-2">Tên sản phẩm</th>
            <th className="px-4 py-2">Đơn giá</th>
            <th className="px-4 py-2">Tình trạng kho</th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          {productsData.map((product, index) => (
            <tr key={product.id} className="border-b">
              <td className="px-4 py-2">
                <input
                  type="checkbox"
                  checked={selectedProducts[index]}
                  onChange={() => toggleSelect(index)}
                  style={{ transform: "scale(1.5)" }}
                />
              </td>
              <td className="px-4 py-2">
                <div className="flex items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover"
                  />
                  <span className="ml-4">{product.name}</span>
                </div>
              </td>
              <td className="px-4 py-2">{product.price}</td>
              <td
                className={`px-4 py-2 ${
                  product.stockStatus === "In stock"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {product.stockStatus}
              </td>
              <td className="px-4 py-2 flex items-center">
                <button
                  className={`${
                    product.stockStatus === "Out of stock"
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  onClick={() =>
                    isInCart(product)
                      ? handleRemoveFromCart(product)
                      : handleAddToCart(product)
                  }
                  disabled={product.stockStatus === "Out of stock"}
                >
                  <FaCheck
                  size={20} //tăng kích thước icon 
                    className={`mr-2 ${
                      isInCart(product) ? "text-green-500" : "text-gray-500"
                    }`}
                  />
                </button>
                <span className="mx-2" /> {/* Thêm khoảng cách giữa dấu V và dấu X */}
                <button
                  className={`${
                    isInCart(product) ? "" : "opacity-50 cursor-not-allowed"
                  }`}
                  onClick={() => handleRemoveFromCart(product)}
                  disabled={!isInCart(product)}
                >
                  <FaTimes  size={20} //tăng kích thước icon 
                   className="text-red-600" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-4">
        <div className="flex items-center">
          <button
            onClick={handleAddSelectedToCart}
            className="bg-[#000000] text-white px-4 py-2 mr-2 rounded-md"
          >
            Thêm mục đã chọn
          </button>
          <button
            onClick={handleAddAllToCart}
            className="bg-red-600 text-white px-4 py-2 mr-2 rounded-md"
          >
            Thêm tất cả
          </button>
          <button
            onClick={handleRemoveAllFromCart}
            className="bg-red-600 text-white px-4 py-2 rounded-md"
          >
            Xóa tất cả
          </button>
        </div>
        <div>
          <button
            onClick={handleViewCart}
            className="bg-[#000000] text-white px-4 py-2 rounded-md"
          >
            Xem giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavouritePage;
