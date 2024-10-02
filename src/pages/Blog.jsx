function Blog() {
  return (
    <div className="container mx-auto p-4">
      {/*Mục tin tức chính */}
      <div className="grid grid-cols-12 gap-4">
        {/* Main Article */}
        <div className="col-span-8">
          <div className="relative">
            <img
              src="https://madamelan.vn/storage/tin-tuc/20211121-mdl-suon-heo-nuong-mac-khen.jpg"
              alt="Main news"
              className="w-full h-80 object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
              <h2 className="text-xl">
                SƯỜN HEO NƯỚNG MẮC KHÉN - TRỌN VỊ NÚI RỪNG TÂY BẮC
              </h2>
            </div>
          </div>

          {/* Bài viết phụ */}
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div>
              <img
                src="https://halotravel.vn/wp-content/uploads/2021/02/nha-hang-sang-trong-o-sai-gon-Parkview-Buffet-1-1024x600.jpg"
                alt="Sub news"
                className="w-full h-40 object-cover rounded-lg"
              />
              <h1 className=" font-semibold text-sm bg-slate-100 w-[auto] mt-[10px] h-[40px] flex justify-center items-center rounded-md">
                THƯỞNG THỨC HƯƠNG VỊ BIỂN CẢ VỚI VẸM XÀO HÚNG DỪA
              </h1>
              <p className="mt-2 text-sm">
                Làm thế nào một hương vị mạnh mẽ như húng quế có thể hoà quyện
                với sự mềm mại, ngậy béo của dừa và tạo nên một hương vị đầy ấn
                tượng? Bạn sẽ có câu trả lời khi thưởng thức món Vẹm xào húng
                dừa của Madame Lân - nhà hàng Đà Nẵng bên bờ sông Hàn.
              </p>
              <div className="flex items-center mt-4 text-blue-500 hover:underline cursor-pointer">
                <span>Chi tiết</span>
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </div>
            </div>

            <div>
              <img
                src="https://halotravel.vn/wp-content/uploads/2021/02/nha-hang-sang-trong-o-sai-gon-Parkview-Buffet-1-1024x600.jpg"
                alt="Sub news"
                className="w-full h-40 object-cover rounded-lg"
              />
              <h1 className="font-semibold text-sm bg-slate-100 w-[auto] mt-[10px] h-[40px] flex justify-center items-center rounded-md">
                THƯỞNG THỨC HƯƠNG VỊ BIỂN CẢ VỚI VẸM XÀO HÚNG DỪA
              </h1>
              <p className="mt-2 text-sm">
                Làm thế nào một hương vị mạnh mẽ như húng quế có thể hoà quyện
                với sự mềm mại, ngậy béo của dừa và tạo nên một hương vị đầy ấn
                tượng? Bạn sẽ có câu trả lời khi thưởng thức món Vẹm xào húng
                dừa của Madame Lân - nhà hàng Đà Nẵng bên bờ sông Hàn.
              </p>
              <div className="flex items-center mt-4 text-blue-500 hover:underline cursor-pointer">
                <span>Chi tiết</span>
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </div>
            </div>

            <div>
              <img
                src="https://halotravel.vn/wp-content/uploads/2021/02/nha-hang-sang-trong-o-sai-gon-Parkview-Buffet-1-1024x600.jpg"
                alt="Sub news"
                className="w-full h-40 object-cover rounded-lg"
              />
              <h1 className="font-semibold text-sm bg-slate-100 w-[auto] mt-[10px] h-[40px] flex justify-center items-center rounded-md">
                THƯỞNG THỨC HƯƠNG VỊ BIỂN CẢ VỚI VẸM XÀO HÚNG DỪA
              </h1>
              <p className="mt-2 text-sm">
                Làm thế nào một hương vị mạnh mẽ như húng quế có thể hoà quyện
                với sự mềm mại, ngậy béo của dừa và tạo nên một hương vị đầy ấn
                tượng? Bạn sẽ có câu trả lời khi thưởng thức món Vẹm xào húng
                dừa của Madame Lân - nhà hàng Đà Nẵng bên bờ sông Hàn.
              </p>
              <div className="flex items-center mt-4 text-blue-500 hover:underline cursor-pointer">
                <span>Chi tiết</span>
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Thanh bên (Phần Slide) */}
        <div className="col-span-4 space-y-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="font-semibold text-lg">Tin nổi bật</h3>
            <ul className="mt-2 space-y-2">
              <li className="border-b pb-2">
                Hoàng Đức sẽ khoác áo CLB Thanh Niên TP.HCM...
              </li>
              <li className="border-b pb-2">
                Jeff Dean - nhà khoa học AI của Google...
              </li>
              <li className="border-b pb-2">
                Bí kíp tiết kiệm nhưng thương hiệu Mỹ tự tổ chức...
              </li>
              <li className="border-b pb-2">
                iPhone 17 Slim sẽ là chiếc iPhone kỳ lạ...
              </li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg ">
            <img
              src="https://halotravel.vn/wp-content/uploads/2021/02/nha-hang-sang-trong-o-sai-gon-Parkview-Buffet-1-1024x600.jpg"
              alt="Small image"
              className="w-20 h-20 object-cover float-left mr-4 rounded-lg"
            />
            <p className="text-sm">
              iPhone 17 Slim sẽ là chiếc iPhone kỳ lạ nhất của Apple
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg ">
            <img
              src="https://halotravel.vn/wp-content/uploads/2021/02/nha-hang-sang-trong-o-sai-gon-Parkview-Buffet-1-1024x600.jpg"
              alt="Small image"
              className="w-20 h-20 object-cover float-left mr-4 rounded-lg "
            />
            <p className="text-sm">
              iPhone 17 Slim sẽ là chiếc iPhone kỳ lạ nhất của Apple
            </p>
          </div>
          <div className="bg-gray-100 p-4">
            <img
              src="https://halotravel.vn/wp-content/uploads/2021/02/nha-hang-sang-trong-o-sai-gon-Parkview-Buffet-1-1024x600.jpg"
              alt="Small image"
              className="w-20 h-20 object-cover float-left mr-4 rounded-lg"
            />
            <p className="text-sm">
              Bí kíp tiết kiệm nhưng thương hiệu Mỹ tự tổ chức
            </p>
          </div>
        </div>
      </div>

      {/* Tin tức hàng tuần */}
      <div className="mt-8">
        <h2 className="text-2xl mb-4 text-gray-700">Tin tức hàng tuần</h2>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <img
              src="https://halotravel.vn/wp-content/uploads/2021/02/nha-hang-sang-trong-o-sai-gon-Parkview-Buffet-1-1024x600.jpg"
              alt="Weekly news"
              className="w-full h-48 object-cover rounded-lg"
            />
            <p className="mt-2 text-sm">Jeff Dean - nhà khoa học AI...</p>
          </div>
          <div>
            <img
              src="https://halotravel.vn/wp-content/uploads/2021/02/nha-hang-sang-trong-o-sai-gon-Parkview-Buffet-1-1024x600.jpg"
              alt="Weekly news"
              className="w-full h-48 object-cover rounded-lg"
            />
            <p className="mt-2 text-sm">iPhone 17 Slim sẽ là chiếc iPhone...</p>
          </div>
          <div>
            <img
              src="https://halotravel.vn/wp-content/uploads/2021/02/nha-hang-sang-trong-o-sai-gon-Parkview-Buffet-1-1024x600.jpg"
              alt="Weekly news"
              className="w-full h-48 object-cover rounded-lg"
            />
            <p className="mt-2 text-sm">Hoàng Đức sẽ khoác áo CLB...</p>
          </div>
        </div>
      </div>

      {/* Mục Tin Tức Mới */}
      <div className="container mx-auto p-6">
        {/* Navigation Tabs */}
        <div className="flex border-b mb-6">
          <button className=" text-2xl pr-[60px] px-4 py-4 text-gray-700 font-bold border-b-2 border-transparent hover:border-red-500 ">
            Mục Tin Tức Mới
          </button>
          <button className="px-4 py-2 text-gray-700 font-semibold border-b-2 border-transparent hover:border-red-500">
            Khoa Học
          </button>
          <button className="px-4 py-2 text-gray-700 font-semibold border-b-2 border-transparent hover:border-red-500">
            Phim Ảnh
          </button>
          <button className="px-4 py-2 text-gray-700 font-semibold border-b-2 border-transparent hover:border-red-500">
            Bóng Đá
          </button>
          <button className="px-4 py-2 text-gray-700 font-semibold border-b-2 border-transparent hover:border-red-500">
            Giải Trí
          </button>
          <button className="px-4 py-2 text-gray-700 font-semibold border-b-2 border-transparent hover:border-red-500">
            Nước Ngoài
          </button>
        </div>

        <div className="flex justify-between">
          {/* Left Column: News Cards */}
          <div className="w-3/4 grid grid-cols-2 gap-6">
            {/* News Card 1 */}
            <div className="bg-white shadow-md rounded-md overflow-hidden">
              <img
                src="https://madamelan.vn/storage/350950366-643849020964476-7010446790931598520-n.jpg"
                alt="Jeff Dean"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <span className="text-red-600 font-bold uppercase text-sm">
                  Khoa Học
                </span>
                <h3 className="text-lg font-semibold mt-2">
                  Jeff Dean - nhà khoa học chuyên về AI của Google sắp đến Việt
                  Nam
                </h3>
              </div>
            </div>

            {/* News Card 2 */}
            <div className="bg-white shadow-md rounded-md overflow-hidden">
              <img
                src="https://madamelan.vn/storage/350950366-643849020964476-7010446790931598520-n.jpg"
                alt="iPhone 17 Slim"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <span className="text-red-600 font-bold uppercase text-sm">
                  Khoa Học
                </span>
                <h3 className="text-lg font-semibold mt-2">
                  iPhone 17 Slim sẽ là chiếc iPhone kỳ lạ nhất của Apple
                </h3>
              </div>
            </div>
          </div>

          {/* Right Column: Social Media & Events */}
          <div className="w-1/4">
            {/* Follow Us Section */}
            <div className="bg-white shadow-md rounded-md p-4 mb-6">
              <h4 className="font-bold text-lg mb-4">Follow Us</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <i className="fab fa-facebook text-blue-600"></i>
                  <span>3,245 Fans</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fab fa-twitter text-blue-400"></i>
                  <span>3,245 Fans</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fab fa-instagram text-pink-600"></i>
                  <span>3,245 Fans</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fab fa-youtube text-red-600"></i>
                  <span>3,245 Fans</span>
                </div>
              </div>
            </div>

            {/* Music Events Advertisement */}
            <div className="bg-white shadow-md rounded-md p-4 text-center">
              <h4 className="font-bold text-lg">Music Events</h4>
              <p className="text-gray-500">Live in Concert</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
