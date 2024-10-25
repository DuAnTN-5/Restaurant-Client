function MenuPage() {
  return (
    <div>
      <div className="bg-zinc-800 text-white py-8 px-4">
        {/* Phần tiêu đề và Food Menu */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-4">
            <img
              className="w-[100px] h-auto"
              src="https://wp.validthemes.net/restan/wp-content/uploads/2024/05/Subtittle-shape-1.png"
              alt=""
            />
            <h1 className="text-[20px] text-[#826a45] font-semibold">
              MASTER CHEFS
            </h1>
            <img
              className="w-[100px] h-auto"
              src="https://wp.validthemes.net/restan/wp-content/uploads/2024/04/18.png"
              alt=""
            />
          </div>
          <h2 className="text-red-500 text-sm font-bold mb-2">FOOD MENU</h2>
          <h1 className="text-4xl font-bold mb-4">Thực Đơn Đặc Biệt</h1>
          <div className="border-t-2 border-red-500 w-24 mx-auto"></div>
        </div>

        {/* Các danh mục món ăn với biểu tượng */}
        <div className="flex justify-center mb-8">
          {/* Món chính */}
          <div className="text-center mx-4 relative group">
            <img
              src="https://cdn-icons-png.flaticon.com/512/557/557809.png"
              alt="Món chính"
              className="w-16 h-16 mx-auto transition duration-300 group-hover:scale-110"
            />
            <p className="mt-2 text-white font-semibold transition duration-300 group-hover:text-red-500">
              Món chính
            </p>

            {/* Menu hiện ra khi hover */}
            <div className="absolute top-[152px] left-[200px] transform -translate-x-1/2 bg-gray-800 text-white p-4 rounded-lg shadow-lg w-[850px] hidden group-hover:grid grid-cols-2 gap-4">
              {/* Column 1 */}
              {/* Nút mũi tên */}
              <div className="arrow-button opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-0 left-1/2 transform -translate-x-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <ul className="space-y-4">
                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://your-image-source.com/salmon.jpg"
                      alt="Salmon Fry"
                      className="w-12 h-12 object-cover rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">Salmon Fry</h3>
                      <p className="text-gray-400 text-sm">
                        Ricotta / Goat Cheese / Beetroot
                      </p>
                    </div>
                  </div>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-lg">
                    $40.00
                  </span>
                </li>

                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://your-image-source.com/pangasius.jpg"
                      alt="Pangasius or Basa"
                      className="w-12 h-12 object-cover rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">Pangasius or Basa</h3>
                      <p className="text-gray-400 text-sm">
                        Atlantic / Chips / Salad / Tartare
                      </p>
                    </div>
                  </div>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-lg">
                    $15.00
                  </span>
                </li>

                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://your-image-source.com/clams.jpg"
                      alt="Clams"
                      className="w-12 h-12 object-cover rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">Clams</h3>
                      <p className="text-gray-400 text-sm">
                        Truffle Mash / Pepper Sauce
                      </p>
                    </div>
                  </div>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-lg">
                    $45.00
                  </span>
                </li>

                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://your-image-source.com/red-crab.jpg"
                      alt="Red Crab"
                      className="w-12 h-12 object-cover rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">Red Crab</h3>
                      <p className="text-gray-400 text-sm">
                        Ricotta / Goat Cheese / Beetroot
                      </p>
                    </div>
                  </div>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-lg">
                    $20.00
                  </span>
                </li>
              </ul>

              {/* Column 2 */}
              <ul className="space-y-4">
                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://your-image-source.com/red-crab2.jpg"
                      alt="Red Crab"
                      className="w-12 h-12 object-cover rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">Red Crab</h3>
                      <p className="text-gray-400 text-sm">
                        Ricotta / Goat Cheese / Beetroot
                      </p>
                    </div>
                  </div>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-lg">
                    $74.00
                  </span>
                </li>

                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://your-image-source.com/clams2.jpg"
                      alt="Clams"
                      className="w-12 h-12 object-cover rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">Clams</h3>
                      <p className="text-gray-400 text-sm">
                        Truffle Mash / Pepper Sauce
                      </p>
                    </div>
                  </div>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-lg">
                    $52.00
                  </span>
                </li>

                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://your-image-source.com/salmon2.jpg"
                      alt="Salmon Fry"
                      className="w-12 h-12 object-cover rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">Salmon Fry</h3>
                      <p className="text-gray-400 text-sm">
                        Ricotta / Goat Cheese / Beetroot
                      </p>
                    </div>
                  </div>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-lg">
                    $50.00
                  </span>
                </li>

                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://your-image-source.com/pangasius2.jpg"
                      alt="Pangasius or Basa"
                      className="w-12 h-12 object-cover rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">Pangasius or Basa</h3>
                      <p className="text-gray-400 text-sm">
                        Atlantic / Chips / Salad / Tartare
                      </p>
                    </div>
                  </div>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-lg">
                    $44.00
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Tráng miệng */}
          <div className="text-center mx-4 relative group">
            <img
              src="https://png.pngtree.com/png-vector/20240526/ourmid/pngtree-dessert-icon-on-a-plate-and-flat-design-menu-vector-png-image_6938479.png"
              alt="Tráng miệng"
              className="w-16 h-16 mx-auto transition duration-300 group-hover:scale-110"
            />
            <p className="mt-2 text-white font-semibold transition duration-300 group-hover:text-red-500">
              Tráng miệng
            </p>

            {/* Menu hiện ra khi hover */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-4 rounded-lg shadow-lg w-[850px] hidden group-hover:grid grid-cols-2 gap-4">
              {/* Column 1 */}
              <ul className="space-y-4">
                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://your-image-source.com/salmon.jpg"
                      alt="Salmon Fry"
                      className="w-12 h-12 object-cover rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">Salmon Fry</h3>
                      <p className="text-gray-400 text-sm">
                        Ricotta / Goat Cheese / Beetroot
                      </p>
                    </div>
                  </div>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-lg">
                    $40.00
                  </span>
                </li>

                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://your-image-source.com/pangasius.jpg"
                      alt="Pangasius or Basa"
                      className="w-12 h-12 object-cover rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">Pangasius or Basa</h3>
                      <p className="text-gray-400 text-sm">
                        Atlantic / Chips / Salad / Tartare
                      </p>
                    </div>
                  </div>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-lg">
                    $15.00
                  </span>
                </li>

                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://your-image-source.com/clams.jpg"
                      alt="Clams"
                      className="w-12 h-12 object-cover rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">Clams</h3>
                      <p className="text-gray-400 text-sm">
                        Truffle Mash / Pepper Sauce
                      </p>
                    </div>
                  </div>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-lg">
                    $45.00
                  </span>
                </li>

                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://your-image-source.com/red-crab.jpg"
                      alt="Red Crab"
                      className="w-12 h-12 object-cover rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">Red Crab</h3>
                      <p className="text-gray-400 text-sm">
                        Ricotta / Goat Cheese / Beetroot
                      </p>
                    </div>
                  </div>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-lg">
                    $20.00
                  </span>
                </li>
              </ul>

              {/* Column 2 */}
              <ul className="space-y-4">
                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://your-image-source.com/red-crab2.jpg"
                      alt="Red Crab"
                      className="w-12 h-12 object-cover rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">Red Crab</h3>
                      <p className="text-gray-400 text-sm">
                        Ricotta / Goat Cheese / Beetroot
                      </p>
                    </div>
                  </div>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-lg">
                    $74.00
                  </span>
                </li>

                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://your-image-source.com/clams2.jpg"
                      alt="Clams"
                      className="w-12 h-12 object-cover rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">Clams</h3>
                      <p className="text-gray-400 text-sm">
                        Truffle Mash / Pepper Sauce
                      </p>
                    </div>
                  </div>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-lg">
                    $52.00
                  </span>
                </li>

                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://your-image-source.com/salmon2.jpg"
                      alt="Salmon Fry"
                      className="w-12 h-12 object-cover rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">Salmon Fry</h3>
                      <p className="text-gray-400 text-sm">
                        Ricotta / Goat Cheese / Beetroot
                      </p>
                    </div>
                  </div>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-lg">
                    $50.00
                  </span>
                </li>

                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://your-image-source.com/pangasius2.jpg"
                      alt="Pangasius or Basa"
                      className="w-12 h-12 object-cover rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">Pangasius or Basa</h3>
                      <p className="text-gray-400 text-sm">
                        Atlantic / Chips / Salad / Tartare
                      </p>
                    </div>
                  </div>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-lg">
                    $44.00
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Hải sản */}
          <div className="text-center mx-4 relative group">
            <img
              src="https://img.pikbest.com/origin/09/09/16/24mpIkbEsTJb4.png!sw800"
              alt="Hải sản"
              className="w-16 h-16 mx-auto transition duration-300 group-hover:scale-110"
            />
            <p className="mt-2 text-white font-semibold transition duration-300 group-hover:text-red-500">
              Hải sản
            </p>

            {/* Menu hiện ra khi hover */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-4 rounded-lg shadow-lg w-[850px] hidden group-hover:grid grid-cols-2 gap-4">
              {/* Column 1 */}
              <ul className="space-y-4">
                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://your-image-source.com/salmon.jpg"
                      alt="Salmon Fry"
                      className="w-12 h-12 object-cover rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">Salmon Fry</h3>
                      <p className="text-gray-400 text-sm">
                        Ricotta / Goat Cheese / Beetroot
                      </p>
                    </div>
                  </div>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-lg">
                    $40.00
                  </span>
                </li>

                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://your-image-source.com/pangasius.jpg"
                      alt="Pangasius or Basa"
                      className="w-12 h-12 object-cover rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">Pangasius or Basa</h3>
                      <p className="text-gray-400 text-sm">
                        Atlantic / Chips / Salad / Tartare
                      </p>
                    </div>
                  </div>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-lg">
                    $15.00
                  </span>
                </li>

                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://your-image-source.com/clams.jpg"
                      alt="Clams"
                      className="w-12 h-12 object-cover rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">Clams</h3>
                      <p className="text-gray-400 text-sm">
                        Truffle Mash / Pepper Sauce
                      </p>
                    </div>
                  </div>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-lg">
                    $45.00
                  </span>
                </li>

                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://your-image-source.com/red-crab.jpg"
                      alt="Red Crab"
                      className="w-12 h-12 object-cover rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">Red Crab</h3>
                      <p className="text-gray-400 text-sm">
                        Ricotta / Goat Cheese / Beetroot
                      </p>
                    </div>
                  </div>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-lg">
                    $20.00
                  </span>
                </li>
              </ul>

              {/* Column 2 */}
              <ul className="space-y-4">
                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://your-image-source.com/red-crab2.jpg"
                      alt="Red Crab"
                      className="w-12 h-12 object-cover rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">Red Crab</h3>
                      <p className="text-gray-400 text-sm">
                        Ricotta / Goat Cheese / Beetroot
                      </p>
                    </div>
                  </div>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-lg">
                    $74.00
                  </span>
                </li>

                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://your-image-source.com/clams2.jpg"
                      alt="Clams"
                      className="w-12 h-12 object-cover rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">Clams</h3>
                      <p className="text-gray-400 text-sm">
                        Truffle Mash / Pepper Sauce
                      </p>
                    </div>
                  </div>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-lg">
                    $52.00
                  </span>
                </li>

                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://your-image-source.com/salmon2.jpg"
                      alt="Salmon Fry"
                      className="w-12 h-12 object-cover rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">Salmon Fry</h3>
                      <p className="text-gray-400 text-sm">
                        Ricotta / Goat Cheese / Beetroot
                      </p>
                    </div>
                  </div>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-lg">
                    $50.00
                  </span>
                </li>

                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://your-image-source.com/pangasius2.jpg"
                      alt="Pangasius or Basa"
                      className="w-12 h-12 object-cover rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">Pangasius or Basa</h3>
                      <p className="text-gray-400 text-sm">
                        Atlantic / Chips / Salad / Tartare
                      </p>
                    </div>
                  </div>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-lg">
                    $44.00
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Đồ uống */}
          <div className="text-center mx-4 relative group">
            <img
              src="https://cdn.icon-icons.com/icons2/1465/PNG/512/572tropicaldrink_100418.png"
              alt="Đồ uống"
              className="w-16 h-16 mx-auto transition duration-300 group-hover:scale-110"
            />
            <p className="mt-2 text-white font-semibold transition duration-300 group-hover:text-red-500">
              Đồ uống
            </p>

            {/* Menu hiện ra khi hover */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-4 rounded-lg shadow-lg w-[850px] hidden group-hover:grid grid-cols-2 gap-4">
              {/* Column 1 */}
              <ul className="space-y-4">
                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://your-image-source.com/salmon.jpg"
                      alt="Salmon Fry"
                      className="w-12 h-12 object-cover rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">Salmon Fry</h3>
                      <p className="text-gray-400 text-sm">
                        Ricotta / Goat Cheese / Beetroot
                      </p>
                    </div>
                  </div>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-lg">
                    $40.00
                  </span>
                </li>

                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://your-image-source.com/pangasius.jpg"
                      alt="Pangasius or Basa"
                      className="w-12 h-12 object-cover rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">Pangasius or Basa</h3>
                      <p className="text-gray-400 text-sm">
                        Atlantic / Chips / Salad / Tartare
                      </p>
                    </div>
                  </div>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-lg">
                    $15.00
                  </span>
                </li>

                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://your-image-source.com/clams.jpg"
                      alt="Clams"
                      className="w-12 h-12 object-cover rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">Clams</h3>
                      <p className="text-gray-400 text-sm">
                        Truffle Mash / Pepper Sauce
                      </p>
                    </div>
                  </div>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-lg">
                    $45.00
                  </span>
                </li>

                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://your-image-source.com/red-crab.jpg"
                      alt="Red Crab"
                      className="w-12 h-12 object-cover rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">Red Crab</h3>
                      <p className="text-gray-400 text-sm">
                        Ricotta / Goat Cheese / Beetroot
                      </p>
                    </div>
                  </div>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-lg">
                    $20.00
                  </span>
                </li>
              </ul>

              {/* Column 2 */}
              <ul className="space-y-4">
                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://your-image-source.com/red-crab2.jpg"
                      alt="Red Crab"
                      className="w-12 h-12 object-cover rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">Red Crab</h3>
                      <p className="text-gray-400 text-sm">
                        Ricotta / Goat Cheese / Beetroot
                      </p>
                    </div>
                  </div>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-lg">
                    $74.00
                  </span>
                </li>

                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://your-image-source.com/clams2.jpg"
                      alt="Clams"
                      className="w-12 h-12 object-cover rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">Clams</h3>
                      <p className="text-gray-400 text-sm">
                        Truffle Mash / Pepper Sauce
                      </p>
                    </div>
                  </div>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-lg">
                    $52.00
                  </span>
                </li>

                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://your-image-source.com/salmon2.jpg"
                      alt="Salmon Fry"
                      className="w-12 h-12 object-cover rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">Salmon Fry</h3>
                      <p className="text-gray-400 text-sm">
                        Ricotta / Goat Cheese / Beetroot
                      </p>
                    </div>
                  </div>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-lg">
                    $50.00
                  </span>
                </li>

                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://your-image-source.com/pangasius2.jpg"
                      alt="Pangasius or Basa"
                      className="w-12 h-12 object-cover rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">Pangasius or Basa</h3>
                      <p className="text-gray-400 text-sm">
                        Atlantic / Chips / Salad / Tartare
                      </p>
                    </div>
                  </div>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-lg">
                    $44.00
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuPage;
