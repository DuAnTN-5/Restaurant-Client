import { useState } from "react";
import "../css/BookingForm-3.css";
import axios from "axios";

function BookingForm3() {
  const [phone, setPhone] = useState("");
  const [person, setPerson] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Kiểm tra dữ liệu
    if (!phone || !time) {
      setErrorMessage("Phone and time are required.");
      return;
    }

    const data = {
      phone,
      person,
      date,
      time,
    };

    try {
      // Gửi yêu cầu đến API để đặt bàn
      const response = await axios.post("API/bookings", data);
      
      // Kiểm tra phản hồi từ API
      if (response.status === 201) {
        console.log("Booking successful:", response.data);
        // Reset form
        setPhone("");
        setPerson("");
        setDate("");
        setTime("");
        setErrorMessage("");
      }
    } catch (error) {
      // Xử lý lỗi từ API
      if (error.response) {
        setErrorMessage(error.response.data.message || "An error occurred. Please try again.");
      } else {
        setErrorMessage("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="bgr-booking3">
      <div className="booking-container container-vphu">
        <div className="hours-section">
          <h2 className="hours-title">Giờ Mở Cửa</h2>
          <ul className="hours-list">
          <li className="hours-item">
              <span className="day">Thứ 2</span>
              <span className="time">6:00 am - 12:00 pm</span>
            </li>
            <li className="hours-item">
              <span className="day">Thứ 3:</span>
              <span className="time">8:30 am - 11:00 pm</span>
            </li>
            <li className="hours-item">
              <span className="day">Thứ 4:</span>
              <span className="time">9:00 am - 10:30 pm</span>
            </li>
            <li className="hours-item">
              <span className="day">Thứ 5:</span>
              <span className="time">8:00 am - 12:00 pm</span>
            </li>
            <li className="hours-item">
              <span className="day">Thứ 6:</span>
              <span className="time">9:45 am - 10:00 pm</span>
            </li>
            <li className="hours-item">
              <span className="day">Thứ 7:</span>
              <span className="time">8:15 am - 12:00 pm</span>
            </li>
            <li className="hours-item-closed">
              <span className="day">Chủ Nhật:</span>
              <div className="closed-day">
                <span className="time">Đóng cửa</span>
              </div>
            </li>
          </ul>
          <div className="bgr-booking-2">
            <div className="animation-background"></div>
          </div>
        </div>
        <div className="booking-anchor-point">
          <div className="wrapper-booking">
            <div className="booking-section">
              {errorMessage && <p className="error">{errorMessage}</p>}
              <form onSubmit={handleSubmit} className="booking-form">
                <div className="form-group">
                  <label htmlFor="phone" className="label-booking">
                    SĐT :
                  </label>
                  <input
                    type="text"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="input-booking"
                    placeholder="+84 346 732311"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="person" className="label-booking">
                    Số Người :
                  </label>
                  <select id="person" value={person}
                    onChange={(e) => setPerson(e.target.value)}
                    className="select-booking">
                    <option value="1">1 Người</option>
                    <option value="2">2 Người</option>
                    <option value="3">3 Người</option>
                    <option value="4">4 Người</option>
                    <option value="5">5 Người</option>
                    <option value="6">6 Người</option>
                    <option value="7">7 Người</option>
                    <option value="8">8 Người</option>
                    <option value="9">9 Người</option>
                    <option value="10">10 Người</option>
                    <option value="Larger Quantity">Số Lượng Lớn Hơn</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="date" className="label-booking">
                    Ngày Đặt :
                  </label>
                  <input type="date" id="date" value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="input-booking" />
                </div>

                <div className="form-group">
                  <label htmlFor="time" className="label-booking">
                    Giờ Đặt :
                  </label>
                  <input
                    type="time"
                    id="time"
                    onChange={(e) => setTime(e.target.value)}
                    className="input-booking"
                    value={time}
                  />
                </div>

                <button type="submit" className="button-booking">
                  Đặt Bàn
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingForm3;
