// import { useNavigate } from "react-router-dom";
import "../style/CheckOut.css";
import tang1 from "../assets/tang1.png";
import tang2 from "../assets/tang2.png";
import { useEffect, useState } from "react";

const ReservationForm = () => {
  // const navigate = useNavigate();
  const [selectedTable, setSelectedTable] = useState(null);
  const [bookingData, setBookingData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: "",
    note: "",
  })

  const tables = Array.from({ length: 33 }, (_, index) => `T${(index + 1).toString().padStart(2, "0")}`);

  // Example bookingInfo structure:
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
        date: `${bookingInfo.selectedDate.date}-${bookingInfo.selectedDate.day}`, // Định dạng ngày
        time: bookingInfo.customTime,
      }));
    }
  }, []); // Chỉ chạy một lần

  const handleSubmit = (e) => {
    e.preventDefault();

    // const reservationData = {
    //   name: e.target.name.value,
    //   phone: e.target.phone.value,
    //   email: e.target.email.value,
    //   date: e.target.date.value,
    //   time: e.target.time.value,
    //   guests: e.target.guests.value,
    //   note: e.target.note.value,
    //   table: selectedTable,
    // };

    // Kiểm tra
    // if (!reservationData.name || !reservationData.phone) {
    //   alert("Vui lòng điền đầy đủ thông tin bắt buộc!");
    //   return;
    // }
    // if (!selectedTable) {
    //   alert("Vui lòng chọn bàn!");
    //   return;
    // }

    // Lưu vào Local Storage
    localStorage.setItem("reservationData", JSON.stringify(updatedReservationData));

    // Hiển thị thông báo thành công
    toast.success("Đặt bàn thành công!");

    // Reset lại thông tin
    setReservationData({
      name: "",
      phone: "",
      email: "",
      date: "",
      time: "",
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
    // alert(`Bạn đã chọn bàn ${table}`);
  };
  console.log(bookingData)

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
        <h3 className="title-info-book-table subtitle-vphu">
          Thông tin đặt bàn
        </h3>
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
            value={bookingData.name}
            placeholder="Họ & tên"
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Số điện thoại (*)</label>
          <input
            className="preinstall-book"
            type="number"
            name="phone"
            placeholder="Số điện thoại"
            onChange={handleInputChange}

          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            className="preinstall-book"
            value={bookingData.email}
            name="email"
            readOnly
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="date">Ngày</label>
            <input
              className="preinstall-book"
              type="text"
              id="date"
              name="date"
              value={`${bookingInfo.selectedDate.day} - Ngày ${bookingInfo.selectedDate.date}`}
              readOnly
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Thời gian</label>
            <input
              className="preinstall-book"
            value={bookingData.time}
              name="time"
              value={reservationData.time} // Thời gian có thể thay đổi
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
            placeholder="Số khách"
            min="1"
            max="99"
            onChange={handleInputChange}
            onInput={(e) => {
              e.target.value = e.target.value.replace(/^0+/, "");
              // Xóa bỏ các số 0 ở đầu chuỗi.
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="note">Ghi chú</label>
          <textarea
            className="preinstall-book"
            type="text"
            name="note"            
            onChange={handleInputChange}
            placeholder="Gợi ý: thêm ghế trẻ em, ..."
          ></textarea>
        </div>
        <div className="form-actions">
          <button type="submit" className="btn btn-submit-checkout">
            Đặt bàn
          </button>
          {/* <button type="reset" className="btn btn-reset-checkout">
            Làm lại
          </button> */}
        </div>
      </form>
    </div>
  );
};

export default ReservationForm;
