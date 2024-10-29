function Blog() {
  return (
    <div className="container mx-auto max-w-7xl p-4">
      {/* Mục tin tức chính */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Main Article */}
        <div className="md:col-span-8">
          <div className="relative">
            <img
              src="https://madamelan.vn/storage/tin-tuc/20211121-mdl-suon-heo-nuong-mac-khen.jpg"
              alt="Main news"
              className="w-full h-80 object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4 w-full flex justify-center items-center rounded-b-lg">
              <h2 className="text-xl text-center">
                SƯỜN HEO NƯỚNG MẮC KHÉN - TRỌN VỊ NÚI RỪNG TÂY BẮC
              </h2>
            </div>
          </div>

          {/* Bài viết phụ */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {Array(3).fill("").map((_, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <img
                  src="https://halotravel.vn/wp-content/uploads/2021/02/nha-hang-sang-trong-o-sai-gon-Parkview-Buffet-1-1024x600.jpg"
                  alt="Sub news"
                  className="w-full h-40 object-cover rounded-lg"
                />
                <h1 className="font-semibold text-sm bg-slate-100 w-full mt-[10px] h-[40px] flex justify-center items-center rounded-md">
                  THƯỞNG THỨC HƯƠNG VỊ BIỂN CẢ VỚI VẸM XÀO HÚNG DỪA
                </h1>
                <p className="mt-2 text-sm text-justify">
                  Làm thế nào một hương vị mạnh mẽ như húng quế có thể hoà quyện
                  với sự mềm mại, ngậy béo của dừa và tạo nên một hương vị đầy ấn
                  tượng? Bạn sẽ có câu trả lời khi thưởng thức món Vẹm xào húng
                  dừa của Madame Lân - nhà hàng Đà Nẵng bên bờ sông Hàn.
                </p>
                <div className="flex items-center justify-center mt-4 text-blue-500 hover:underline cursor-pointer">
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
            ))}
          </div>
        </div>

        {/* Thanh bên (Phần Slide) */}
        <div className="md:col-span-4 space-y-4">
          {/* Tin nổi bật */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
            <h3 className="font-semibold text-lg text-center">Tin nổi bật</h3>
            <ul className="mt-2 space-y-2 text-center">
              {["Hoàng Đức sẽ khoác áo CLB Thanh Niên TP.HCM...", 
                "Jeff Dean - nhà khoa học AI của Google...", 
                "Bí kíp tiết kiệm nhưng thương hiệu Mỹ tự tổ chức...", 
                "iPhone 17 Slim sẽ là chiếc iPhone kỳ lạ..."].map((item, index) => (
                <li key={index} className="border-b pb-2 text-gray-700 hover:text-red-500 transition-colors duration-200 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Quảng cáo */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-lg text-center">
            <img
              src="https://halotravel.vn/wp-content/uploads/2021/02/nha-hang-sang-trong-o-sai-gon-Parkview-Buffet-1-1024x600.jpg"
              alt="Small image"
              className="w-20 h-20 object-cover mx-auto rounded-lg"
            />
            <p className="text-sm mt-2 text-gray-800 font-semibold">
              iPhone 17 Slim sẽ là chiếc iPhone kỳ lạ nhất của Apple
            </p>
          </div>
        </div>
      </div>

      {/* Tin tức hàng tuần */}
      <div className="mt-8">
        <h2 className="text-2xl mb-4 text-gray-700 text-center">Tin tức hàng tuần</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Array(3).fill("").map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src="https://halotravel.vn/wp-content/uploads/2021/02/nha-hang-sang-trong-o-sai-gon-Parkview-Buffet-1-1024x600.jpg"
                alt="Weekly news"
                className="w-full h-48 object-cover rounded-lg"
              />
              <p className="mt-2 text-sm text-center">Jeff Dean - nhà khoa học AI...</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mục Tin Tức Mới */}
      <div className="mt-8">
        <div className="flex justify-center border-b mb-6">
          {["Mục Tin Tức Mới", "Khoa Học", "Phim Ảnh", "Bóng Đá", "Giải Trí", "Nước Ngoài"].map(
            (tab, i) => (
              <button
                key={i}
                className={`px-4 py-2 text-gray-700 font-semibold ${
                  i === 0 ? "text-2xl pr-[60px] font-bold" : ""
                } border-b-2 border-transparent hover:border-red-500`}
              >
                {tab}
              </button>
            )
          )}
        </div>

        <div className="flex flex-col md:flex-row justify-between">
          {/* Left Column: News Cards */}
          <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array(2).fill("").map((_, i) => (
              <div key={i} className="bg-white shadow-md rounded-md overflow-hidden">
                <img
                  src="https://madamelan.vn/storage/350950366-643849020964476-7010446790931598520-n.jpg"
                  alt="News"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 text-center">
                  <span className="text-red-600 font-bold uppercase text-sm">
                    Khoa Học
                  </span>
                  <h3 className="text-lg font-semibold mt-2">
                    iPhone 17 Slim sẽ là chiếc iPhone kỳ lạ nhất của Apple
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Social Media & Events */}
          <div className="w-full md:w-1/4 space-y-6 mt-4 md:mt-0">
            <div className="bg-white shadow-md rounded-md p-4 text-center ml-[10px]">
              <h4 className="font-bold text-lg mb-4">Follow Us</h4>
              <div className="space-y-4">
                {["Facebook", "Twitter", "Instagram", "YouTube"].map((social, i) => (
                  <div key={i} className="flex items-center justify-center space-x-2">
                    <i className={`fab fa-${social.toLowerCase()} text-blue-${i * 100 + 600}`}></i>
                    <span>3,245 Fans</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white shadow-md rounded-md p-4 text-center ml-[10px]">
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
