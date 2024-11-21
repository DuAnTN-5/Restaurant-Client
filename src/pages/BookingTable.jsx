import { useState } from "react";
import "../css/BookingTable.css";
import { FaArrowAltCircleRight } from "react-icons/fa";
function BookingTable() {
  const [selectedDate, setSelectedDate] = useState(null); // ngày (được chọn)
  const [selectedTime, setSelectedTime] = useState(null); // giờ (được chọn)

  const dates = [
    { day: "Thứ 2", date: "10" },
    { day: "Thứ 3", date: "11" },
    { day: "Thứ 4", date: "12" },
    { day: "Thứ 5", date: "13" },
    { day: "Thứ 5", date: "14" },
    { day: "Thứ 6", date: "15" },
    { day: "Thứ 7", date: "16" },
    { day: "Chủ nhật", date: "17" },
    { day: "Thứ 2", date: "18" },
    { day: "Thứ 3", date: "19" },
    { day: "Thứ 4", date: "20" },
    { day: "Thứ 5", date: "21" },
    { day: "Thứ 5", date: "22" },
    { day: "Thứ 6", date: "23" },
    { day: "Thứ 7", date: "24" },
    { day: "Chủ nhật", date: "25" },
  ];

  const schedule = {
    10: [
      { time: "09:00-11:00" },
      { time: "11:00-13:00" },
      { time: "13:00-15:00" },
      { time: "15:00-17:00" },
      { time: "17:00-19:00" },
      { time: "19:00-21:00" },
    ],
    11: [
      { time: "09:00-11:00" },
      { time: "11:00-13:00" },
      { time: "13:00-15:00" },
      { time: "15:00-17:00" },
      { time: "17:00-19:00" },
      { time: "19:00-21:00" },
    ],
    12: [
      { time: "09:00-11:00" },
      { time: "11:00-13:00" },
      { time: "13:00-15:00" },
      { time: "15:00-17:00" },
      { time: "17:00-19:00" },
      { time: "19:00-21:00" },
    ],
    13: [
      { time: "09:00-11:00" },
      { time: "11:00-13:00" },
      { time: "13:00-15:00" },
      { time: "15:00-17:00" },
      { time: "17:00-19:00" },
      { time: "19:00-21:00" },
    ],
    14: [
      { time: "09:00-11:00" },
      { time: "11:00-13:00" },
      { time: "13:00-15:00" },
      { time: "15:00-17:00" },
      { time: "17:00-19:00" },
      { time: "19:00-21:00" },
    ],
    15: [
      { time: "09:00-11:00" },
      { time: "11:00-13:00" },
      { time: "13:00-15:00" },
      { time: "15:00-17:00" },
      { time: "17:00-19:00" },
      { time: "19:00-21:00" },
    ],
    16: [
      { time: "09:00-11:00" },
      { time: "11:00-13:00" },
      { time: "13:00-15:00" },
      { time: "15:00-17:00" },
      { time: "17:00-19:00" },
      { time: "19:00-21:00" },
    ],
    17: [
      { time: "09:00-11:00" },
      { time: "11:00-13:00" },
      { time: "13:00-15:00" },
      { time: "15:00-17:00" },
      { time: "17:00-19:00" },
      { time: "19:00-21:00" },
    ],
    18: [
      { time: "09:00-11:00" },
      { time: "11:00-13:00" },
      { time: "13:00-15:00" },
      { time: "15:00-17:00" },
      { time: "17:00-19:00" },
      { time: "19:00-21:00" },
    ],
    19: [
      { time: "09:00-11:00" },
      { time: "11:00-13:00" },
      { time: "13:00-15:00" },
      { time: "15:00-17:00" },
      { time: "17:00-19:00" },
      { time: "19:00-21:00" },
    ],
    20: [
      { time: "09:00-11:00" },
      { time: "11:00-13:00" },
      { time: "13:00-15:00" },
      { time: "15:00-17:00" },
      { time: "17:00-19:00" },
      { time: "19:00-21:00" },
    ],
    21: [
      { time: "09:00-11:00" },
      { time: "11:00-13:00" },
      { time: "13:00-15:00" },
      { time: "15:00-17:00" },
      { time: "17:00-19:00" },
      { time: "19:00-21:00" },
    ],
    22: [
      { time: "09:00-11:00" },
      { time: "11:00-13:00" },
      { time: "13:00-15:00" },
      { time: "15:00-17:00" },
      { time: "17:00-19:00" },
      { time: "19:00-21:00" },
    ],
    23: [
      { time: "09:00-11:00" },
      { time: "11:00-13:00" },
      { time: "13:00-15:00" },
      { time: "15:00-17:00" },
      { time: "17:00-19:00" },
      { time: "19:00-21:00" },
    ],
    24: [
      { time: "09:00-11:00" },
      { time: "11:00-13:00" },
      { time: "13:00-15:00" },
      { time: "15:00-17:00" },
      { time: "17:00-19:00" },
      { time: "19:00-21:00" },
    ],
    25: [
      { time: "09:00-11:00" },
      { time: "11:00-13:00" },
      { time: "13:00-15:00" },
      { time: "15:00-17:00" },
      { time: "17:00-19:00" },
      { time: "19:00-21:00" },
    ],
  };
  const disabledTimes = {
    10: ["09:00-11:00", "17:00-19:00"], // Ngày 10 khóa giờ này
    11: ["11:00-13:00"], // Ngày 11 khóa giờ này
    12: ["13:00-15:00", "19:00-21:00"], // Ngày 12 khóa giờ này
  };

  // const disabledDates = ["21"]; // Ngày bị khóa
  // const disabledTimes = ["11:40-13:35", "17:55-19:50"]; // Giờ bị khóa

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setSelectedTime(null); // Reset giờ khi đổi ngày
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
    const date = selectedDate.date;
    if (!disabledTimes[date]) {
      disabledTimes[date] = [];
    }
    if (!disabledTimes[date].includes(time.time)) {
      disabledTimes[date].push(time.time);
    }
  };
  // console.log(selectedDate.day)
  // console.log(selectedDate.date)
  // console.log(selectedTime.time)

  return (
    <div className="booking-table-page">
      <div className="booking-table-container">
        <h2 className="booking-title-page">Lịch đặt bàn</h2>

        {/* Phần chọn ngày */}
        <div className="section">
          <h2 className="booking-title ">Chọn ngày</h2>
          <h2 className="booking-title-label ">Tháng 12</h2>
          <div className="date-list">
            {dates.map((date, index) => {
              return (
                <div
                  key={index}
                  // className="date-item"
                  className={`date-item ${
                    selectedDate?.date === date.date ? "active" : ""
                  }`}
                  onClick={() => handleDateClick(date)}
                >
                  <span>{date.day}</span>
                  <span>{date.date}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Phần chọn lịch chiếu */}
        <div className="section">
          <h2 className="booking-title">Chọn giờ </h2>
          {selectedDate ? (
            <div className="movie-item">
              <h3>
                Lịch của ngày {selectedDate.day} - {selectedDate.date}
              </h3>
              <div className="movie-details">
                <div className="time-list">
                  {schedule[selectedDate.date]?.map((time, index) => {
                    //Lấy danh sách các khung giờ cho ngày được chọn (selectedDate.date).
                    {
                      /* const isDisabled = disabledTimes?.includes(time.time) || false; */
                    }
                    const isDisabled =
                      disabledTimes[selectedDate.date]?.includes(time.time) ||
                      false;

                    const isBooked =
                      isDisabled && selectedTime?.time === time.time;
                    return (
                      <div
                        key={index}
                        // className={`time-item ${isDisabled ? "disabled" : ""} ${
                        //   selectedTime === time && !isDisabled ? "active" : ""
                        // }`}
                        className={`time-item 
  ${isDisabled ? "disabled" : ""} 
  ${selectedTime?.time === time.time && !isDisabled ? "active" : ""} 
  ${isBooked ? "booked" : ""}`}
                        onClick={
                          !isDisabled ? () => handleTimeClick(time) : null
                        }
                      >
                        {time.time}
                        <span>{time.room}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            <p className="loading-date">
              Hãy chọn ngày để hiển thị lịch chiếu.
            </p>
          )}
        </div>
        <div className="session">
          <button className="booking-table-continue">
            {" "}
            Tiếp tục{" "}
            <i className="icon-continue">
              <FaArrowAltCircleRight />
            </i>
          </button>
        </div>

        {/* Phần hiển thị thông tin đã chọn */}
        <div className="section">
          <h2>Thông tin đặt vé</h2>
          {selectedDate && selectedTime ? (
            <p>
              Bạn đã chọn ngày{" "}
              <strong>
                {selectedDate.day} - {selectedDate.date}
              </strong>{" "}
              và khung giờ <strong>{selectedTime.time}</strong>.
            </p>
          ) : (
            <p>Hãy chọn ngày và giờ chiếu.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookingTable;
