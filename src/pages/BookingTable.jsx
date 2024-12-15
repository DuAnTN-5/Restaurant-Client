import { useState, useEffect } from "react";
import "../css/BookingTable.css";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function BookingTable() {
  const [selectedDate, setSelectedDate] = useState(null); // Ngày được chọn
  const [customTime, setCustomTime] = useState("09:00"); // Lưu giá trị giờ:phút
  const [dates, setDates] = useState([]); // Mảng chứa các ngày sẽ được hiển thị
  // const [bookingTable, setBookingTable] = useState({}) // để lưu thông tin lấy từ local(thứ, ngày, tháng, năm và giờ) ra để gửi qua back
  const navigate = useNavigate();

  let token = localStorage.getItem("token");
  if (token) {
    token = JSON.parse(token);
  }

  // Cấu hình ngày tháng động từ hôm nay đến 14 ngày
  useEffect(() => {
    const currentDate = new Date(); // ngày và giờ hiện tại
    const upcomingDates = [];

    for (let i = 0; i < 14; i++) {
      // Giới hạn chỉ tạo 14 ngày
      const date = {
        day: currentDate.toLocaleString("vi-VN", { weekday: "long" }), //lấy tên thứ là tiếng việt
        date: currentDate.getDate(), // (1-31)
      };
      upcomingDates.push(date); // thêm vào mảng
      currentDate.setDate(currentDate.getDate() + 1);
      //       currentDate.getDate() lấy ngày hiện tại (ví dụ 13).
      // currentDate.setDate(...) đặt lại ngày mới (tăng thêm 1 ngày).
    }
    setDates(upcomingDates);
  }, []);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleCustomTimeChange = (type, value) => {
    const [hour, minute] = customTime.split(":"); // Tách giờ và phút từ customTime
    if (type === "hour") {
      setCustomTime(`${value}:${minute}`); // Cập nhật giờ
    } else if (type === "minute") {
      setCustomTime(`${hour}:${value}`); // Cập nhật phút
    }
    //     Nếu bạn thay đổi giờ: Kết quả sẽ là "giờ mới:phút cũ".
    // Nếu bạn thay đổi phút: Kết quả sẽ là "giờ cũ:phút mới".
  };

  function handleContinue(event) {
    event.preventDefault();
    let flag = true;
    // const regex = /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/;

    if (!token) {
      toast.error("Vui lòng đăng nhập");
      flag = false;
    } else if (!selectedDate) {
      toast.error("Vui lòng chọn ngày");
      flag = false;
    } else {

      // Kiểm tra thời gian nhập lớn hơn hiện tại ít nhất 1 giờ
      const [inputHours, inputMinutes] = customTime.split(":").map(Number);

      const currentDate = new Date(); // thời gian của hiện tại
      const bookingDate = new Date(); // ngày tháng năm hiện tại

      if (selectedDate) {
        bookingDate.setFullYear(currentDate.getFullYear()); // Giữ nguyên năm hiện tại
        bookingDate.setMonth(currentDate.getMonth()); // Giữ nguyên tháng hiện tại
        bookingDate.setDate(selectedDate.date); // Cập nhật ngày được user chọn
        bookingDate.setHours(inputHours, inputMinutes, 0, 0); // giờ hiện tại
        // console.log(bookingDate)
      }
      // console.log(bookingDate.setMonth(currentDate.getMonth()));

      const currentTime = new Date(); // giờ hiện tại
      const oneHourLater = new Date(currentTime.getTime() + 60 * 60 * 1000);// + thêm 1 giờ

      if (inputHours >= 22) {
        toast.error("Không thể đặt bàn sau 10 giờ tối!");
        flag = false;
        return;
      }

      if (bookingDate <= oneHourLater) {
        toast.error("Thời gian đặt bàn phải lớn hơn hiện tại ít nhất 1 tiếng");
        flag = false;
        return;
      }

      // Kiểm tra xem giờ nhập vào có sau 22:00 hay không
    }

    if (flag) {
      const currentDate = new Date();
      const month = currentDate.getMonth() + 1; // Lấy tháng (0 - 11, cộng thêm 1 để thành tháng thực)
      const year = currentDate.getFullYear();

      const bookingData = {
        time: customTime,
        date: `${year}-${month}-${selectedDate.date}`, // Cập nhật đúng định dạng ngày
      };
     

      localStorage.setItem("bookingInfo", JSON.stringify(bookingData));

      navigate("/checkout-table");
    }
  }
  // console.log({ dates });
  // console.log({ customTime });
  // console.log({ selectedDate });
  // console.log(bookingTable);

  // console.log({selectedDate.day} - {selectedDate.date}</strong> và khung giờ <strong>{customTime})
  //
  return (
    <div className="booking-table-page-wrapper">
      <h2 className="booking-title-page title-vphu">Lịch đặt bàn</h2>
      <div className="booking-table-container">
        {/* Phần chọn ngày */}
        <div className="section">
          <h2 className="booking-title subtitle-vphu">Chọn ngày</h2>
          {/* <h2 className="booking-title-label">Tháng 12</h2> */}
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
          <h2 className="booking-title subtitle-vphu">Chọn giờ </h2>
          {selectedDate ? (
            <div className="movie-item">
              {/* Hiển thị ô input nếu người dùng đã chọn ngày */}
              <div className="movie-details">
                <div className="time-list">
                  <div>
                    <div className="time-selector">
                      <select
                        id="hour-select"
                        onChange={(e) =>
                          handleCustomTimeChange("hour", e.target.value)
                        }
                        className="time-select"
                      >
                        {/* {Array.from(
                        { length: 24 - 0 + 1 },  // Độ dài là 25 (từ 0 đến 24)
                          (_, i) => i // Chỉ số mảng bắt đầu từ 0
                          ).map((hour) */}

                        {/* Tạo danh sách giờ từ 9 đến 22 */}
                        {Array.from(
                          { length: 22 - 9 + 1 }, // độ dài là 14
                          (_, i) => i + 9 // i là chỉ số mảng, bđ là 0
                        ).map((hour) => (
                          <option
                            key={hour}
                            value={hour.toString().padStart(2, "0")}
                          >
                            {hour.toString().padStart(2, "0")}
                          </option>
                        ))}
                      </select>
                      <span className="time-separator">:</span>
                      <select
                        id="minute-select"
                        onChange={(e) =>
                          handleCustomTimeChange("minute", e.target.value)
                        }
                        className="time-select"
                      >
                        {Array.from({ length: 60 }, (_, i) => (
                          <option key={i} value={i.toString().padStart(2, "0")}>
                            {i.toString().padStart(2, "0")}
                          </option>
                        ))}
                      </select>
                    </div>
                    {/* Nếu số giờ là 1 chữ số (ví dụ 9), nó sẽ thêm 0 vào đầu để thành "09" */}

                    <p className="time-hint">
                      * Giờ đặt bàn hợp lệ: từ 09:00 đến 22:00 (định dạng 24
                      giờ)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p className="loading-date">Hãy chọn ngày để chọn giờ đặt bàn.</p>
          )}
        </div>

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
