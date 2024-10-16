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
          <h2 className="hours-title">Opening Hours</h2>
          <ul className="hours-list">
          <li className="hours-item">
              <span className="day">Saturday:</span>
              <span className="time">6:00 am - 12:00 pm</span>
            </li>
            <li className="hours-item">
              <span className="day">Sunday:</span>
              <span className="time">8:30 am - 11:00 pm</span>
            </li>
            <li className="hours-item">
              <span className="day">Monday:</span>
              <span className="time">9:00 am - 10:30 pm</span>
            </li>
            <li className="hours-item">
              <span className="day">Tuesday:</span>
              <span className="time">8:00 am - 12:00 pm</span>
            </li>
            <li className="hours-item">
              <span className="day">Wednesday:</span>
              <span className="time">9:45 am - 10:00 pm</span>
            </li>
            <li className="hours-item">
              <span className="day">Thursday:</span>
              <span className="time">8:15 am - 12:00 pm</span>
            </li>
            <li className="hours-item-closed">
              <span className="day">Friday:</span>
              <div className="closed-day">
                <span className="time">Closed</span>
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
                    Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="input-booking"
                    placeholder="+4733378901"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="person" className="label-booking">
                    Person
                  </label>
                  <select id="person" value={person}
                    onChange={(e) => setPerson(e.target.value)}
                    className="select-booking">
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5">5 People</option>
                    <option value="6">6 People</option>
                    <option value="7">7 People</option>
                    <option value="8">8 People</option>
                    <option value="9">9 People</option>
                    <option value="10">10 People</option>
                    <option value="Larger Quantity">Larger Quantity</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="date" className="label-booking">
                    Date
                  </label>
                  <input type="date" id="date" value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="input-booking" />
                </div>

                <div className="form-group">
                  <label htmlFor="time" className="label-booking">
                    Time
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
                  Book A Table
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
