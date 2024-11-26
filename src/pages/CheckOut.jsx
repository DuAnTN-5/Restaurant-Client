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

  // const tables = Array.from({ length: 33 }, (_, index) =>
  //   `T${(index + 1).toString().padStart(2, "0")}`
  // ); mapp như Phú làm
  const tables = [
    "T01",
    "T02",
    "T03",
    "T04",
    "T05",
    "T06",
    "T07",
    "T08",
    "T09",
    "T10",
    "T11",
    "T12",
    "T13",
    "T14",
    "T15",
    "T16",
    "T17",
    "T18",
    "T19",
    "T20",
    "T21",
    "T22",
    "T23",
    "T24",
    "T25",
    "T26",
    "T27",
    "T28",
    "T29",
    "T30",
    "T31",
    "T32",
    "T33",
  ];
  useEffect(() => {
    let auth = localStorage.getItem("auth");
    if (auth) {
      auth = JSON.parse(auth);
      console.log(auth);
      setBookingData((prevData) => ({
        ...prevData,
        name: auth.name,
        email: auth.email,
      }));
  
    }
    let bookingInfo = localStorage.getItem("bookingInfo");
    if (bookingInfo) {
      bookingInfo = JSON.parse(bookingInfo);
      console.log(bookingInfo)
      setBookingData((prevData) => ({
        ...prevData,
        time: bookingInfo.customTime,
        date: `${bookingInfo.selectedDate.day}/${bookingInfo.selectedDate.date}/12`, // Sửa lại nếu có lỗi
      }));
    }
  }, []);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData({ ...bookingData, [name]: value });
  };

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
    // localStorage.setItem("reservationData", JSON.stringify(reservationData));
    // navigate("/checkout-pay");
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
                className={`table-button ${
                  selectedTable === table ? "table-button-active" : ""
                }`}
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
            value={bookingData.date}
              name="date"
              placeholder="Ngày"
              readOnly
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Thời gian</label>
            <input
              className="preinstall-book"
            value={bookingData.time}
              name="time"
              placeholder="Thời gian"
              readOnly
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
