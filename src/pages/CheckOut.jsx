// import { useNavigate } from "react-router-dom";
import "../style/CheckOut.css";
import tang1 from "../assets/tang1.png";
import tang2 from "../assets/tang2.png";
import { useEffect, useState } from "react";

const ReservationForm = () => {
  // const navigate = useNavigate();
  const [selectedTable, setSelectedTable] = useState(null);
  const [reservationData, setReservationData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: "",
    note: "",
  });

  const tables = Array.from({ length: 33 }, (_, index) => `T${(index + 1).toString().padStart(2, "0")}`);

  // Example bookingInfo structure
  const bookingInfo = {
    customTime: "23:11",
    selectedDate: { day: "Thứ Tư", date: 27 },
  };

  useEffect(() => {
    // Lấy dữ liệu từ localStorage
    const data = JSON.parse(localStorage.getItem("reservationData"));
    if (data) {
      setReservationData(data);
      setSelectedTable(data.table);
    } else {
      // Set default date and time từ bookingInfo
      setReservationData((prevData) => ({
        ...prevData,
        date: `${bookingInfo.selectedDate.day} - Ngày ${bookingInfo.selectedDate.date}`,
        time: bookingInfo.customTime,
      }));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Kiểm tra thông tin hợp lệ
    if (!reservationData.name || !reservationData.phone) {
      alert("Vui lòng điền đầy đủ thông tin bắt buộc!");
      return;
    }
    if (!selectedTable) {
      alert("Vui lòng chọn bàn!");
      return;
    }

    // Lưu vào Local Storage
    const updatedReservationData = {
      ...reservationData,
      table: selectedTable,
    };
    localStorage.setItem("reservationData", JSON.stringify(updatedReservationData));

    // Hiển thị thông báo thành công
    alert("Đặt bàn thành công!");

    // Reset lại thông tin
    setReservationData({
      name: "",
      phone: "",
      email: "",
      date: `${bookingInfo.selectedDate.day} - Ngày ${bookingInfo.selectedDate.date}`,
      time: bookingInfo.customTime,
      guests: "",
      note: "",
    });
    setSelectedTable(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReservationData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleTableSelection = (table) => {
    setSelectedTable(table);
  };

  return (
    <div className="reservation-container container-vphu text-vphu">
      <h1 className="reservation-title-checkout title-vphu">Đặt Bàn</h1>
      <div className="restaurant-content">
        <div className="restaurant-map">
          <h3 className="title-restaurant-map subtitle-vphu">Sơ Đồ Tầng 1 & 2</h3>
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
            {tables.map((table) => (
              <button
                key={table}
                className={`table-button ${selectedTable === table ? "table-button-active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleTableSelection(table);
                }}
              >
                {table}
              </button>
            ))}
          </div>
        </div>
      </div>

      <form className="reservation-form" onSubmit={handleSubmit}>
        <h3 className="title-info-book-table subtitle-vphu">Thông tin đặt bàn</h3>
        <div className="form-group">
          <label htmlFor="selectedTable">Bàn Đã Chọn:</label>
          <input
            className="preinstall-book"
            type="text"
            name="selectedTable"
            value={selectedTable ? `Bàn ${selectedTable}` : ""}
            placeholder="Chưa chọn bàn"
            readOnly
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">Họ & Tên</label>
          <input
            className="preinstall-book"
            type="text"
            name="name"
            value={reservationData.name}
            onChange={handleInputChange}
            placeholder="Họ & tên"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Số điện thoại (*)</label>
          <input
            className="preinstall-book"
            type="number"
            name="phone"
            value={reservationData.phone}
            onChange={handleInputChange}
            placeholder="Số điện thoại"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            className="preinstall-book"
            type="email"
            name="email"
            value={reservationData.email}
            onChange={handleInputChange}
            placeholder="Email"
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="date">Ngày</label>
            <input
              className="preinstall-book"
              type="text"
              name="date"
              value={reservationData.date}
              readOnly
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Thời gian</label>
            <input
              className="preinstall-book"
              type="time"
              name="time"
              value={reservationData.time}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="guests">Số khách</label>
          <input
            className="preinstall-book"
            type="number"
            name="guests"
            value={reservationData.guests}
            onChange={handleInputChange}
            placeholder="Số khách"
            min="1"
            max="99"
          />
        </div>
        <div className="form-group">
          <label htmlFor="note">Ghi chú</label>
          <textarea
            className="preinstall-book"
            name="note"
            value={reservationData.note}
            onChange={handleInputChange}
            placeholder="Gợi ý: thêm ghế trẻ em, ..."
          ></textarea>
        </div>
        <div className="form-actions">
          <button type="submit" className="btn btn-submit-checkout">
            Đặt bàn
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReservationForm;
