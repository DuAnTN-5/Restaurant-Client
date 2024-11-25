import { useNavigate } from "react-router-dom";
import "../style/CheckOut.css";
import tang1 from "../assets/tang1.png";
import tang2 from "../assets/tang2.png";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReservationForm = () => {
  const navigate = useNavigate();
  const [selectedTable, setSelectedTable] = useState(null);
  const [reservationData, setReservationData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
  });

  useEffect(() => {
    // Lấy dữ liệu từ localStorage
    const data = JSON.parse(localStorage.getItem("reservationData"));
    if (data) {
      setReservationData({
        name: data.name,
        email: data.email,
        date: data.date,
        time: data.time,
      });
      setSelectedTable(data.table);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const reservationData = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      date: e.target.date.value,
      time: e.target.time.value,
      guests: e.target.guests.value,
      note: e.target.note.value,
      table: selectedTable,
    };

    // Kiểm tra
    if (!reservationData.name || !reservationData.phone) {
      toast.error("Vui lòng điền đầy đủ thông tin bắt buộc!");
      return;
    }
    if (!selectedTable) {
      toast.error("Vui lòng chọn bàn!");
      return;
    }

    // Lưu vào Local Storage
    localStorage.setItem("reservationData", JSON.stringify(reservationData));
    navigate("/checkout-pay");
  };

  const handleTableSelection = (table) => {
    setSelectedTable(table);
    toast.success(`Bạn đã chọn bàn ${table}`);
  };

  return (
    <div className="reservation-container container-vphu text-vphu">
      <h1 className="reservation-title-checkout title-vphu">Đặt Bàn</h1>
      <div className="restaurant-content">
        <div className="restaurant-map">
          <h3 className="title-restaurant-map subtitle-vphu">
            Sơ Đồ Tầng 1 & 2
          </h3>
          <div className="restaurant-map-image-wrapper">
            <div className="restaurant-map-item-image">
              <img src={tang1} alt="Tầng 1" />
              <p className="restaurant-map-image-text">Tầng 1</p>
            </div>
            <div className="restaurant-map-item-image">
              <img src={tang2} alt="Tầng 2" />
              <p className="restaurant-map-image-text">Tầng 2</p>
            </div>
          </div>
        </div>

        <div className="choose-table-box">
          <h3 className="choose-table-title subtitle-vphu">Lựa chọn bàn</h3>
          <div className="choose-table-buttons">
            {Array.from({ length: 33 }, (_, index) => (
              <button
                key={index + 1}
                className={`table-button ${
                  selectedTable === `T${index + 1}` ? "table-button-active" : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleTableSelection(`T${index + 1}`);
                }}
              >
                T{index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      <form className="reservation-form" onSubmit={handleSubmit}>
  <h3 className="title-info-book-table subtitle-vphu">
    Thông tin đặt bàn cho đặt bàn{" "}
    {selectedTable ? `T${selectedTable}` : ""}
  </h3>
  <div className="form-group">
    <label htmlFor="selectedTable">Bàn Đã Chọn:</label>
    <input
      className={`preinstall-book ${selectedTable ? "filled-input" : ""}`}
      type="text"
      id="selectedTable"
      name="selectedTable"
      value={selectedTable ? `Bàn ${selectedTable}` : ""}
      placeholder="Chưa chọn bàn"
      readOnly
    />
  </div>

  <div className="form-group">
    <label htmlFor="name">Họ & Tên</label>
    <input
      className={`preinstall-book ${reservationData.name ? "filled-input" : ""}`}
      type="text"
      id="name"
      name="name"
      value={reservationData.name}
      readOnly
    />
  </div>
  <div className="form-group">
    <label htmlFor="phone">Số điện thoại (*)</label>
    <input
      className={`preinstall-book ${reservationData.phone ? "filled-input" : ""}`}
      type="tel"
      id="phone"
      name="phone"
      placeholder="0346732xxx"
    />
  </div>
  <div className="form-group">
    <label htmlFor="email">Email</label>
    <input
      className={`preinstall-book ${reservationData.email ? "filled-input" : ""}`}
      type="email"
      id="email"
      name="email"
      value={reservationData.email}
      readOnly
    />
  </div>
  <div className="form-row">
    <div className="form-group">
      <label htmlFor="date">Ngày</label>
      <input
        className={`preinstall-book ${reservationData.date ? "filled-input" : ""}`}
        id="date"
        name="date"
        value={reservationData.date}
        readOnly
      />
    </div>
    <div className="form-group">
      <label htmlFor="time">Thời gian</label>
      <input
        className={`preinstall-book ${reservationData.time ? "filled-input" : ""}`}
        id="time"
        name="time"
        value={reservationData.time}
        readOnly
      />
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="guests">Số khách </label>
    <input
      className="preinstall-book"
      type="number"
      id="guests"
      name="guests"
      placeholder="Số khách"
      min="1"
      max="99"
      onInput={(e) => {
        e.target.value = e.target.value.replace(/^0+/, "");
      }}
    />
  </div>
  <div className="form-group">
    <label htmlFor="note">Ghi chú</label>
    <textarea
      className="preinstall-book"
      id="note"
      name="note"
      placeholder="Gợi ý: thêm ghế trẻ em, ..."
    ></textarea>
  </div>
  <div className="form-actions">
    <button type="submit" className="btn btn-submit-checkout">
      Đặt bàn
    </button>
    <button type="reset" className="btn btn-reset-checkout">
      Làm lại
    </button>
  </div>
</form>


      <ToastContainer />
    </div>
  );
};

export default ReservationForm;
