import { useState } from "react";

function UserProfile() {
  // Khởi tạo state để lưu thông tin người dùng
  const [userInfo, setUserInfo] = useState({
    name: "", // Tên người dùng
    email: "", // Email người dùng
    password: "", // Mật khẩu người dùng
    confirmPassword: "", // Xác nhận mật khẩu người dùng
    phone: "", // Số điện thoại người dùng
    avatar: "https://via.placeholder.com/150", // Hình đại diện mẫu
  });

  // Hàm xử lý thay đổi thông tin nhập vào
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  // Hàm xử lý thay đổi hình đại diện
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUserInfo({ ...userInfo, avatar: imageUrl });
    }
  };

  // Hàm xử lý cập nhật thông tin người dùng
  const handleUpdate = () => {
    console.log("Thông tin người dùng đã cập nhật:", userInfo);
  };

  // Hàm xử lý đăng xuất
  const handleLogout = () => {
    console.log("Người dùng đã đăng xuất");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      {/* Container chính */}
      <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-6xl">
        <div className="grid grid-cols-2 gap-6">
          {/* Sidebar tài khoản */}
          <div className="bg-gray-100 p-6 flex flex-col items-center">
            <button
              className="self-start mb-4 text-blue-500 hover:underline"
              onClick={() => window.history.back()}
            >
              ← Trở về
            </button>
            <div className="relative mb-4">
              <img
                src={userInfo.avatar}
                alt="Hình đại diện người dùng"
                className="w-32 h-32 rounded-full"
              />
              {/* Dấu cộng để thay đổi ảnh đại diện */}
              <label htmlFor="avatar-upload" className="absolute bottom-0 right-0 bg-black text-white rounded-full p-2 cursor-pointer">
                +
              </label>
              <input
                type="file"
                id="avatar-upload"
                onChange={handleAvatarChange}
                className="hidden"
              />
            </div>
            <h2 className="text-xl font-semibold">{userInfo.name}</h2>

            <button
              onClick={handleLogout}
              className="mt-32 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Đăng xuất
            </button>
          </div>

          {/* Biểu mẫu cập nhật người dùng */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Cập nhật người dùng</h2>
            <div className="grid grid-cols-2 gap-4">
              {/* Phần 1 bên trái */}
              <div>
                <div className="mb-4">
                  <label className="block text-sm font-medium">Tên</label>
                  <input
                    type="text"
                    name="name"
                    value={userInfo.name}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md"
                    placeholder="Nhập tên của bạn"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={userInfo.email}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md"
                    placeholder="Nhập email của bạn"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium">Mật khẩu</label>
                  <input
                    type="password"
                    name="password"
                    value={userInfo.password}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md"
                    placeholder="Nhập mật khẩu của bạn"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium">Nhập lại mật khẩu</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={userInfo.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md"
                    placeholder="Nhập lại mật khẩu"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium">Điện thoại</label>
                  <input
                    type="text"
                    name="phone"
                    value={userInfo.phone}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md"
                    placeholder="Nhập số điện thoại của bạn"
                  />
                </div>
              </div>

              {/* Phần 2 bên phải */}
              <div className="space-y-4">
                {/* Input cho Facebook và Google */}
                <div className="relative">
                  <input
                    type="text"
                    name="facebook"
                    className="w-full p-2 border rounded-md"
                    placeholder="Facebook URL"
                  />
                  <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                      alt="Facebook logo"
                      className="w-5 h-5"
                    />
                  </span>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    name="google"
                    className="w-full p-2 border rounded-md"
                    placeholder="Google URL"
                  />
                  <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                      alt="Google logo"
                      className="w-5 h-5"
                    />
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                onClick={handleUpdate}
                className="px-6 py-2 bg-black text-white rounded-md"
              >
                Cập Nhật
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
