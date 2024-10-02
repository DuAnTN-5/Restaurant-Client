import  { useState } from "react";

// Dữ liệu sản phẩm: Danh sách các sản phẩm với thông tin như ID, tên, giá, tình trạng hàng hóa và hình ảnh
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

// Component chính FavoritePage
const FavoritePage = () => {
  // Trạng thái của sản phẩm đã chọn (mảng boolean) và giỏ hàng
  const [selectedProducts, setSelectedProducts] = useState(
    new Array(productsData.length).fill(false) // Khởi tạo mảng các sản phẩm đã chọn là false
  );
  const [cart, setCart] = useState([]); // Khởi tạo giỏ hàng là mảng rỗng

  // Hàm để chuyển đổi trạng thái đã chọn của sản phẩm
  const toggleSelect = (index) => {
    const newSelection = [...selectedProducts]; // Tạo bản sao của mảng selectedProducts
    newSelection[index] = !newSelection[index]; // Đảo ngược trạng thái của sản phẩm tại vị trí index
    setSelectedProducts(newSelection); // Cập nhật trạng thái đã chọn
  };

  // Hàm để thêm sản phẩm vào giỏ hàng
  const handleAddToCart = (product) => {
    if (product.stockStatus === "Out of stock") {
      alert("This product is out of stock and cannot be added to the cart."); // Thông báo nếu sản phẩm hết hàng
      return; // Thoát hàm nếu sản phẩm hết hàng
    }
    setCart((prevCart) => [...prevCart, product]); // Thêm sản phẩm vào giỏ hàng
    alert("Product added to cart: " + product.name); // Thông báo khi sản phẩm được thêm
  };

  // Hàm để thêm tất cả các sản phẩm đã chọn vào giỏ hàng
  const handleAddSelectedToCart = () => {
    const selectedItems = productsData.filter(
      (_, index) =>
        selectedProducts[index] &&
        productsData[index].stockStatus === "In stock"
    );
    setCart((prevCart) => [...prevCart, ...selectedItems]); // Cập nhật giỏ hàng với các sản phẩm đã chọn
    alert("Các mặt hàng đã chọn đã được thêm vào giỏ hàng."); // Thông báo khi thêm các sản phẩm đã chọn
  };

  // Hàm để thêm tất cả các sản phẩm có sẵn vào giỏ hàng
  const handleAddAllToCart = () => {
    const inStockProducts = productsData.filter(
      (product) => product.stockStatus === "In stock"
    );
    setCart(inStockProducts); // Cập nhật giỏ hàng với tất cả sản phẩm có sẵn
    alert("Tất cả các mặt hàng có sẵn đã được thêm vào giỏ hàng."); // Thông báo khi thêm tất cả sản phẩm có sẵn
  };

  // Hàm để xóa một sản phẩm khỏi giỏ hàng
  // const handleRemoveFromCart = (product) => {
  //   setCart((prevCart) => prevCart.filter((item) => item.id !== product.id)); // Loại bỏ sản phẩm khỏi giỏ hàng
  //   alert("Product removed from cart: " + product.name); // Thông báo khi xóa sản phẩm
  // };

  // Hàm để xem nội dung giỏ hàng
  const handleViewCart = () => {
    console.log("Cart contents:", cart); // In nội dung giỏ hàng ra console
    alert(JSON.stringify(cart, null, 2)); // Hiển thị nội dung giỏ hàng dưới dạng chuỗi JSON
  };

  // Giao diện chính của component
  return (
    <div className="container mx-auto p-4">
     
      {/* Container chính */}
      <table className="min-w-full bg-white border border-gray-200">
       
        {/* Bảng sản phẩm */}
        <thead className="bg-black text-white">
         
          {/* Tiêu đề bảng */}
          <tr>
            <th className="px-4 py-2">
             
              {/* Ô checkbox cho tất cả sản phẩm */}
              <input
                type="checkbox"
                style={{ transform: "scale(1.5)" }} // Tăng kích thước checkbox
                onChange={() => {
                  const allSelected = selectedProducts.every(Boolean); // Kiểm tra xem tất cả sản phẩm đã được chọn chưa
                  setSelectedProducts(
                    new Array(productsData.length).fill(!allSelected)
                  ); // Cập nhật trạng thái chọn cho tất cả sản phẩm
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
          {productsData.map(
            (
              product,
              index // Duyệt qua từng sản phẩm để tạo các hàng trong bảng
            ) => (
              <tr key={product.id} className="border-b">
               
                {/* Hàng sản phẩm */}
                <td className="px-4 py-2">
                 
                  {/* Ô checkbox cho sản phẩm */}
                  <input
                    type="checkbox"
                    checked={selectedProducts[index]} // Kiểm tra trạng thái đã chọn
                    onChange={() => toggleSelect(index)} // Thay đổi trạng thái khi checkbox được click
                    style={{ transform: "scale(1.5)" }} // Tăng kích thước checkbox
                  />
                </td>
                <td className="px-4 py-2">
                 
                  {/* Tên sản phẩm */}
                  <img
                    src={product.image} // Hình ảnh sản phẩm
                    alt={product.name} // Mô tả hình ảnh
                    className="w-16 h-16 object-cover" // Kích thước và kiểu hiển thị hình ảnh
                  />
                  <span className="ml-2">{product.name}</span>{" "}
                  {/* Tên sản phẩm */}
                </td>
                <td className="px-4 py-2">{product.price}</td>{" "}
                {/* Giá sản phẩm */}
                <td
                  className={`px-4 py-2 ${
                    product.stockStatus === "In stock"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                 
                  {/* Tình trạng hàng hóa */}
                  {product.stockStatus}
                </td>
                <td className="px-4 py-2">
                 
                  {/* Nút thêm vào giỏ hàng */}
                  <button
                    className={`bg-yellow-700 text-white px-4 py-2 rounded-md ${
                      product.stockStatus === "Out of stock"
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`} // Thiết lập màu và kiểu cho nút
                    onClick={() => handleAddToCart(product)} // Gọi hàm thêm vào giỏ hàng khi nhấn nút
                    disabled={product.stockStatus === "Out of stock"} // Vô hiệu hóa nút nếu sản phẩm hết hàng
                  >
                   Thêm vào giỏ hàng
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
      <div className="flex justify-between mt-4">
       
        {/* Phần dưới bảng để thực hiện hành động với giỏ hàng */}
        <div className="flex items-center">
         
          {/* Phần chọn hành động */}
          <select className="border border-gray-300 rounded-md px-3 py-2 mr-2">
           
            {/* Dropdown chọn hành động */}
            <option>Thêm vào giỏ hàng</option>
            <option>Xóa khỏi giỏ hàng</option>
          </select>
          <button
            className="bg-yellow-700 text-white px-4 py-2 rounded-md"
            onClick={handleAddSelectedToCart}
          >
            Apply Action
          </button>
        </div>
        <div>
         
          {/* Các nút để thêm sản phẩm vào giỏ hàng */}
          <button
            onClick={handleAddSelectedToCart} // Gọi hàm thêm sản phẩm đã chọn vào giỏ hàng
            className="bg-yellow-700 text-white px-4 py-2 mr-2 rounded-md"
          >
          Thêm mục đã chọn vào giỏ hàng
          </button>
          <button
            onClick={handleAddAllToCart} // Gọi hàm thêm tất cả sản phẩm có sẵn vào giỏ hàng
            className="bg-yellow-700 text-white px-4 py-2 mr-2 rounded-md"
          >
           Thêm tất cả vào giỏ hàng
          </button>
          <button
            onClick={handleViewCart} // Gọi hàm xem nội dung giỏ hàng
            className="bg-blue-700 text-white px-4 py-2 rounded-md"
          >
           Xem giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavoritePage;
