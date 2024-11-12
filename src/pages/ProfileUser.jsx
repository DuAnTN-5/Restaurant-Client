import { useState } from 'react';
import "../css2/ProfileUser.css";

function ProfileUser() {
  const [userInfo, setUserInfo] = useState({
    name: '',
    username: '',
    members: '',
    phone: '',
    address: '',
    avatar: 'https://via.placeholder.com/150',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleUpdate = () => {
    console.log('Updated user information:', userInfo);
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        {/* Sidebar bên trái */}
        <div className="sidebar">
          <div className="avatar-container">
            <img
              src={userInfo.avatar}
              alt="User Avatar"
              className="avatar"
            />
            <h2 className="user-name">Nguyễn Văn Anh</h2>
          </div>
          <ul className="menu-list">
            <li className="menu-item active">Thông tin cá nhân</li>
            <li className="menu-item">Lịch sử mua hàng</li>
            <li className="menu-item">Thiết lập tài khoản</li>
            <li className="menu-item">Báo cáo</li>
            <li className="menu-item">Thông báo</li>
          </ul>
        </div>

        {/* Form thông tin cá nhân */}
        <div className="form-container">
          <h2 className="form-title">Thông tin cá nhân</h2>
          <div className="form-group">
            <label className="form-label">Tên tài khoản:</label>
            <input
              type="text"
              name="username"
              value={userInfo.username}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Tên chủ hộ:</label>
            <input
              type="text"
              name="name"
              value={userInfo.name}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Số lượng thành viên:</label>
            <input
              type="text"
              name="members"
              value={userInfo.members}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>
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
            <button
              onClick={handleUpdate}
              className="btn-save"
            >
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
