import { useState } from "react";
import "../css/BookingForm-3.css";
import {useNavigate } from "react-router-dom";


function BookingForm3() {
  const [input, setInput] = useState({
    phone: "",
    person: "",
    date: "",
    time: "",
  });
  const navigate = useNavigate("")
  const handleChangeInputs = (event) => {
    const { name, value } = event.target;
    setInput((prevInputs) => ({ ...prevInputs, [name]: value }));
  };
  console.log(input);
  function handleSubmit(){
    localStorage.setItem("user-bookingtable", JSON.stringify(input))
    navigate("/booking-table")
  }
  

  return (
    <div className="bgr-booking3 text-vphu">
      <div className="booking-container container-vphu">
        <div className="hours-section">
          <h2 className="hours-title title-vphu">Giờ Mở Cửa</h2>
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
              <form className="booking-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="phone" className="label-booking">
                    SĐT :
                  </label>
                  <input
                    type="phone"
                    id="phone"
                    name="phone"
                    // value={phone}
                    onChange={handleChangeInputs}
                    className="input-booking"
                    placeholder="+84 346 732311"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="person" className="label-booking">
                    Số Người :
                  </label>
                  <select
                    id="person"
                    name="person"
                    onChange={handleChangeInputs}
                    // value={person}
                    // onChange={(e) => setPerson(e.target.value)}
                    className="select-booking"
                  >
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
                    {/* <option value="Larger Quantity">Số Lượng Lớn Hơn</option> */}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="date" className="label-booking">
                    Ngày Đặt :
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    onChange={handleChangeInputs}
                    // value={date}
                    // onChange={(e) => setDate(e.target.value)}
                    className="input-booking"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="time" className="label-booking">
                    Giờ Đặt :
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    onChange={handleChangeInputs}
                    // onChange={(e) => setTime(e.target.value)}
                    className="input-booking"
                    // value={time}
                  />
                </div>

                <button type="submit" className="button-booking">
                  Chọn bàn
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
