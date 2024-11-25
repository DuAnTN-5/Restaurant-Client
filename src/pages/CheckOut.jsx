import { useNavigate } from "react-router-dom";
import "../style/CheckOut.css";
import tang1 from "../assets/tang1.png";
import tang2 from "../assets/tang2.png";
import { useState } from "react";

const ReservationForm = () => {
  const navigate = useNavigate();
  const [selectedTable, setSelectedTable] = useState(null);

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
          {/* <div className="choose-table-buttons">
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
          </div> */}
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
            className="preinstall-book"
            type="text"
            id="selectedTable"
            name="selectedTable"
            value={selectedTable ? `Bàn ${selectedTable}` : ""}
            placeholder="Chưa chọn bàn"
            readOnly
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">Họ & Tên (*)</label>
          <input
            className="preinstall-book"
            type="text"
            id="name"
            name="name"
            placeholder="Họ & tên"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Số điện thoại (*)</label>
          <input
            className="preinstall-book"
            type="tel"
            id="phone"
            name="phone"
            placeholder="Số điện thoại"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            className="preinstall-book"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="date">Ngày</label>
            <input
              className="preinstall-book"
              id="date"
              name="date"
              placeholder="Ngày"
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Thời gian</label>
            <input
              className="preinstall-book"
              id="time"
              name="time"
              placeholder="Thời gian"
            ></input>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="guests">Số khách</label>
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
    </div>
  );
};

export default ReservationForm;
