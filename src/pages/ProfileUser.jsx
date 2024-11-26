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

  const [activeTab, setActiveTab] = useState("info"); // Mặc định là 'info'

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Hàm xử lý khi người dùng chọn ảnh mới
  // const handleChangeAvatar = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const imageUrl = URL.createObjectURL(file);
  //     // Cập nhật avatar trong userInfo
  //     setUserInfo({ ...userInfo, avatar: imageUrl });
  //   }
  // };

  // Hàm xử lý đăng xuất
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("auth");
    toast.success("Đăng xuất thành công")
    navigate("/")
  };

  // Hàm xử lý thay đổi input
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setUserInfo({ ...userInfo, [name]: value });
  // };

  // Hàm lưu thông tin người dùng
  // const handleUpdate = () => {
  //   console.log("Updated user information:", userInfo);
  // };

  return (
      <div className="profile-container">
        <div className="profile-card">
          {/* Sidebar bên trái */}
          <div className="sidebar">
            <div className="avatar-container">
              <img src={userInfo.avatar || Avatar} alt="User Avatar" className="avatar-user" />
              <h2 className="user-name">Nguyễn Văn Anh</h2>
              {/* Dấu cộng để chọn ảnh mới */}
              <label className="avatar-plus-icon">
                +
                <input
                  type="file"
                  accept="image/*"
                  // onChange={handleChangeAvatar}
                  className="avatar-input"
                />
              </label>
            </div>
    
            <ul className="menu-list">
              <li
                className={`menu-item ${activeTab === "info" ? "active" : ""}`}
                onClick={() => handleTabChange("info")}
              >
                Thông tin cá nhân
              </li>
              <li
                className={`menu-item ${activeTab === "password" ? "active" : ""}`}
                onClick={() => handleTabChange("password")}
              >
                Đổi mật khẩu
              </li>
            </ul>
            <button onClick={handleLogout} className="logout-btn">
              Đăng xuất
            </button>
          </div>
    
          {/* Form */}
          <div className="form-container">
            {activeTab === "info" && (
              <>
                <h2 className="form-title">Thông tin cá nhân</h2>
                <div className="form-group">
                  <label className="form-label">Tên Người Dùng:</label>
                  <input
                    type="text"
                    name="username"
                    // value={userInfo.username}
                    // onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email:</label>
                  <input
                    type="text"
                    name="name"
                    // value={userInfo.name}
                    // onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Số điện thoại:</label>
                  <input
                    type="text"
                    name="phone"
                    // value={userInfo.phone}
                    // onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Địa chỉ:</label>
                  <input
                    type="text"
                    name="address"
                    // value={userInfo.address}
                    // onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
                <div className="form-actions">
                  <button 
                  // onClick={handleUpdate} 
                  className="btn-save">
                    Lưu thay đổi
                  </button>
                  <button className="btn-cancel">Hủy</button>
                </div>
              </>
            )}
    
            {activeTab === "password" && (
              <>
                <h2 className="form-title">Đổi mật khẩu</h2>
                <div className="form-group">
                  <label className="form-label">Mật khẩu hiện tại:</label>
                  <input type="password" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Mật khẩu mới:</label>
                  <input type="password" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Nhập lại mật khẩu mới:</label>
                  <input type="password" className="form-input" />
                </div>
                <div className="form-actions">
                  <button className="btn-save">Đổi mật khẩu</button>
                  <button className="btn-cancel">Hủy</button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
    
}

export default ProfileUser;
