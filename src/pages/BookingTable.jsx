import { useState, useEffect } from "react";
import "../css/BookingTable.css";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function BookingTable() {
  const [selectedDate, setSelectedDate] = useState(null); // Ngày được chọn
  const [customTime, setCustomTime] = useState(""); // Giờ nhập tay từ người dùng

  const [dates, setDates] = useState([]); // Mảng chứa các ngày sẽ được hiển thị
  const navigate = useNavigate();

  let token = localStorage.getItem("token");
  if (token) {
    token = JSON.parse(token);
  }

  // Cấu hình ngày tháng động từ hôm nay đến 14 ngày
  useEffect(() => {
    const currentDate = new Date();
    const upcomingDates = [];

    for (let i = 0; i < 14; i++) {
      // Giới hạn chỉ tạo 14 ngày
      currentDate.setDate(currentDate.getDate() + 1);
      const date = {
        day: currentDate.toLocaleString("vi-VN", { weekday: "long" }),
        date: currentDate.getDate(),
      };
      upcomingDates.push(date);
    }
    setDates(upcomingDates);
  }, []);

  const handleDateClick = (date) => {
    console.log(date);
    setSelectedDate(date);
    // setCustomTime(""); // Reset giờ nhập tay khi chọn ngày mới
  };

  // Kiểm tra tính hợp lệ của giờ nhập (theo định dạng __:__)
  const handleCustomTimeChange = (e) => {
    setCustomTime(e.target.value);
  };

  function handleContinue(event) {
    event.preventDefault();
    let flag = true;
    const regex = /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/;

    if (!token) {
      toast.error("Vui lòng đăng nhập");
      flag = false;
    } else if (!selectedDate) {
      toast.error("Vui lòng chọn ngày");
      flag = false;
    } else if (!customTime) {
      toast.error("Vui lòng chọn giờ");
      flag = false;
    } else if (!regex.test(customTime)) {
      toast.error("Vui nhập nhập giờ và phút cho hợp lệ");
      flag = false;
    }
    if (flag) {
      const bookingData = {
        customTime,
        selectedDate,
      };
      localStorage.setItem("bookingInfo", JSON.stringify(bookingData));
      navigate("/checkout-table");

      //   localStorage.setItem("customTime", customTime);
      // localStorage.setItem("selectedDate", JSON.stringify(selectedDate));
      // toast.success("Hãy chọn chỗ ngồi của bạn");
    }
  }
  console.log({ dates });
  console.log({ customTime });
  console.log({ selectedDate });
  // console.log({selectedDate.day} - {selectedDate.date}</strong> và khung giờ <strong>{customTime})
  //
  return (
    <div className="booking-table-page">
      <div className="booking-table-container">
        <h2 className="booking-title-page">Lịch đặt bàn</h2>

        {/* Phần chọn ngày */}
        <div className="section">
          <h2 className="booking-title">Chọn ngày</h2>
          <h2 className="booking-title-label">Tháng 12</h2>
          <div className="date-list">
            {dates.map((date, index) => (
              <div
                key={index}
                className={`date-item ${
                  selectedDate?.date === date.date ? "active" : ""
                }`}
                onClick={() => handleDateClick(date)}
              >
                <span>{date.day}</span>
                <span>{date.date}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Phần chọn giờ */}
        <div className="section">
          <h2 className="booking-title">Chọn giờ</h2>
          {selectedDate ? (
            <div className="movie-item">
              {/* Hiển thị ô input nếu người dùng đã chọn ngày */}
              <div className="movie-details">
                <div className="time-list">
                  <div>
                    <input
                      type="text"
                      placeholder="Nhập giờ (ví dụ: 09:30)"
                      // value={customTime}
                      // name="customTime"
                      onChange={handleCustomTimeChange}
                      className="time-input"
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p className="loading-date">Hãy chọn ngày để chọn giờ đặt bàn.</p>
          )}
        </div>

        {/* Phần hiển thị thông tin đã chọn */}
        {/* <div className="section">
          <h2>Thông tin đặt vé</h2>
          {selectedDate && customTime ? (
            <p>
              Bạn đã chọn ngày <strong>{selectedDate.day} - {selectedDate.date}</strong> và khung giờ <strong>{customTime}</strong>.
            </p>
          ) : (
            <p>Hãy chọn ngày và giờ chiếu.</p>
          )}
        </div> */}

        {/* Tiến hành thanh toán */}
        <div className="session">
          {/* <Link to="/checkout-table"> */}
          <button className="booking-table-continue" onClick={handleContinue}>
            Tiếp tục{" "}
            <i className="icon-continue">
              <FaArrowAltCircleRight />
            </i>
          </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}

export default BookingTable;
