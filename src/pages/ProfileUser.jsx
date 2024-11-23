import { useState } from "react";
import "../css2/ProfileUser.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Avatar } from "../assets";
function ProfileUser() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    username: "",
    members: "",
    phone: "",
    address: "",
    avatar:"",
  });
  const navigate = useNavigate()

  // Hàm xử lý khi người dùng chọn ảnh mới
  const handleChangeAvatar = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      // Cập nhật avatar trong userInfo
      setUserInfo({ ...userInfo, avatar: imageUrl });
    }
  };

  // Hàm xử lý đăng xuất
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("auth");
    toast.success("Đăng xuất thành công")
    navigate("/")
  };

  // Hàm xử lý thay đổi input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  // Hàm lưu thông tin người dùng
  const handleUpdate = () => {
    console.log("Updated user information:", userInfo);
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        {/* Sidebar bên trái */}
        <div className="sidebar">
          <div className="avatar-container">
            <img src={Avatar} alt="User Avatar" className="avatar-user" />
            <h2 className="user-name">Nguyễn Văn Anh</h2>
            {/* Dấu cộng để chọn ảnh mới */}
            <label className="avatar-plus-icon">
              +
              <input
                type="file"
                accept="image/*"
                onChange={handleChangeAvatar}
                className="avatar-input"
              />
            </label>
          </div>
        
          <ul className="menu-list">
            <li className="menu-item active">Thông tin cá nhân</li>
            <li className="menu-item">Đổi mật khẩu</li>
            {/* <li className="menu-item">Thiết lập tài khoản</li>
            <li className="menu-item">Báo cáo</li>
            <li className="menu-item">Thông báo</li> */}
          </ul>
          <button onClick={handleLogout} className="logout-btn">
            Đăng xuất
          </button>
        </div>

        {/* Form thông tin cá nhân */}
        <div className="form-container">
          <h2 className="form-title">Thông tin cá nhân</h2>
          <div className="form-group">
            <label className="form-label">Tên Người Dùng:</label>
            <input
              type="text"
              name="username"
              value={userInfo.username}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Email:</label>
            <input
              type="text"
              name="name"
              value={userInfo.name}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>
          {/* <div className="form-group">
            <label className="form-label">Số lượng thành viên:</label>
            <input
              type="text"
              name="members"
              value={userInfo.members}
              onChange={handleInputChange}
              className="form-input"
            />
          </div> */}
          {/* <div className="form-group">
            <label className="form-label">Mật khẩu:</label>
            <input
              type="text"
              // name="phone"
              value={userInfo.phone}
              onChange={handleInputChange}
              className="form-input"
            />
          </div> */}
          {/* <div className="form-group">
            <label className="form-label">Nhập lại mật khẩu:</label>
            <input
              type="text"
              // name="phone"
              value={userInfo.phone}
              onChange={handleInputChange}
              className="form-input"
            />
          </div> */}
          <div className="form-group">
            <label className="form-label">Số điện thoại:</label>
            <input
              type="text"
              name="phone"
              value={userInfo.phone}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Địa chỉ:</label>
            <input
              type="text"
              name="address"
              value={userInfo.address}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>
          <div className="form-actions">
            <button onClick={handleUpdate} className="btn-save">
              Lưu thay đổi
            </button>
            <button className="btn-cancel">Hủy</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileUser;
