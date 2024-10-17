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
      <h1 className="text-2xl font-bold mb-6 text-center">Sản phẩm yêu thích</h1>
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
        <thead className="bg-black text-white">
          <tr>
            <th className="px-2 py-2 text-left">
              <input
                type="checkbox"
                className="transform scale-150"
                onChange={() => {
                  const allSelected = selectedProducts.every(Boolean);
                  setSelectedProducts(
                    new Array(productsData.length).fill(!allSelected)
                  );
                }}
              />
            </th>
            <th className="px-2 py-2">Tên sản phẩm</th>
            <th className="px-2 py-2">Đơn giá</th>
            <th className="px-2 py-2">Tình trạng kho</th>
            <th className="px-2 py-2 text-center">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {productsData.map((product, index) => (
            <tr key={product.id} className="border-b hover:bg-gray-100">
              <td className="px-2 py-2">
                <input
                  type="checkbox"
                  checked={selectedProducts[index]}
                  onChange={() => toggleSelect(index)}
                  className="transform scale-150"
                />
              </td>
              <td className="px-2 py-2">
                <div className="flex items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded-full"
                  />
                  <span className="ml-4">{product.name}</span>
                </div>
              </td>
              <td className="px-2 py-2">{product.price}</td>
              <td
                className={`px-2 py-2 ${
                  product.stockStatus === "In stock"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {product.stockStatus}
              </td>
              <td className="px-2 py-2 text-center flex justify-center items-center">
                <button
                  className={`${
                    product.stockStatus === "Out of stock"
                      ? "opacity-50 cursor-not-allowed"
                      : "text-green-500"
                  }`}
                  onClick={() =>
                    isInCart(product)
                      ? handleRemoveFromCart(product)
                      : handleAddToCart(product)
                  }
                  disabled={product.stockStatus === "Out of stock"}
                >
                  <FaCheck size={20} />
                </button>
                <span className="mx-2" />
                <button
                  className={`${
                    isInCart(product) ? "text-red-600" : "opacity-50 cursor-not-allowed"
                  }`}
                  onClick={() => handleRemoveFromCart(product)}
                  disabled={!isInCart(product)}
                >
                  <FaTimes size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex flex-col md:flex-row justify-between mt-6">
        <div className="flex items-center flex-wrap mb-4 md:mb-0">
          <button
            onClick={handleAddSelectedToCart}
            className="bg-black text-white px-4 py-2 mr-2 rounded-md hover:bg-gray-800 transition duration-200 w-full md:w-auto"
          >
            Thêm mục đã chọn
          </button>
          <button
            onClick={handleAddAllToCart}
            className="bg-red-600 text-white px-4 py-2 mr-2 rounded-md hover:bg-red-700 transition duration-200 w-full md:w-auto"
          >
            Thêm tất cả
          </button>
          <button
            onClick={handleRemoveAllFromCart}
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-200 w-full md:w-auto"
          >
            Xóa tất cả
          </button>
        </div>
        <div>
          <button
            onClick={handleViewCart}
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition duration-200 w-full md:w-auto"
          >
            Xem giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavouritePage;
