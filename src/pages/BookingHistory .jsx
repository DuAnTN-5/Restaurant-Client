// import { useState, useEffect } from "react";
import "../css2/UniqueBookingHistory.css"; // Đường dẫn tới CSS

const BookingHistory = () => {
//   const [bookings, setBookings] = useState([]);
 


  return (
    // <div classNameNameName="unique-booking-history-container">
    //   <h2 classNameNameName="unique-booking-title">Lịch Sử Đặt Bàn</h2>
    //   <div classNameNameName="unique-booking-list">
    //     {bookings.length > 0 ? (
    //       bookings.map((booking) => (
    //         <div classNameNameName="unique-booking-item" key={booking.id}>
    //           <div classNameNameName="unique-booking-row">
    //             <p classNameNameName="unique-booking-label">Bàn:</p>
    //             <p classNameNameName="unique-booking-value">{booking.tableNumber}</p>
    //           </div>
    //           <div classNameNameName="unique-booking-row">
    //             <p classNameNameName="unique-booking-label">Ngày giờ:</p>
    //             <p classNameNameName="unique-booking-value">
    //               {new Date(booking.dateTime).toLocaleString()}
    //             </p>
    //           </div>
    //           <div classNameNameName="unique-booking-row">
    //             <p classNameNameName="unique-booking-label">Số khách:</p>
    //             <p classNameNameName="unique-booking-value">{booking.numberOfGuests}</p>
    //           </div>
    //           <div classNameNameName="unique-booking-row">
    //             <p classNameNameName="unique-booking-label">Món ăn:</p>
    //             <p classNameNameName="unique-booking-value">{booking.dishes.join(", ")}</p>
    //           </div>
    //           <div classNameNameName="unique-booking-row">
    //             <p classNameNameName="unique-booking-label">Trạng thái:</p>
    //             <p classNameNameName="unique-booking-value">{booking.status}</p>
    //           </div>
    //           <div classNameNameName="unique-booking-row">
    //             <p classNameNameName="unique-booking-label">Tổng tiền:</p>
    //             <p classNameNameName="unique-booking-value">
    //               {parseFloat(booking.totalPrice).toLocaleString()} VND
    //             </p>
    //           </div>
    //           <div classNameNameName="unique-booking-row">
    //             <p classNameNameName="unique-booking-label">Tiền cọc:</p>
    //             <p classNameNameName="unique-booking-value">
    //               {parseFloat(booking.deposit).toLocaleString()} VND
    //             </p>
    //           </div>
    //         </div>
    //       ))
    //     ) : (
    //       <p classNameNameName="unique-booking-no-data">Không có lịch sử đặt bàn</p>
    //     )}
    //   </div>
    // </div>
    <div className="history-container">
    <h2 className="history-title">Lịch Sử Đặt Bàn</h2>
    <div className="history-list">
      <div className="history-item">
        <div className="history-header">
          <p className="history-table">Bàn: <strong>Bàn 1</strong></p>
          <p className="history-status history-paid">Đã thanh toán</p>
        </div>
        <div className="history-content">
          <p><span>Ngày giờ:</span> 03/12/2024 - 18:30</p>
          <p><span>Số khách:</span> 4</p>
          <p><span>Món ăn:</span> Cá hồi nướng, Salad trộn, Nước ép cam</p>
          <p><span>Tổng tiền:</span> 1,200,000 VND</p>
          <p><span>Tiền cọc:</span> 300,000 VND</p>
        </div>
      </div>

      <div className="history-item">
        <div className="history-header">
          <p className="history-table">Bàn: <strong>Bàn 3</strong></p>
          <p className="history-status history-unpaid">Chưa thanh toán</p>
        </div>
        <div className="history-content">
          <p><span>Ngày giờ:</span> 01/12/2024 - 12:00</p>
          <p><span>Số khách:</span> 2</p>
          <p><span>Món ăn:</span> Bò bít tết, Khoai tây chiên</p>
          <p><span>Tổng tiền:</span> 800,000 VND</p>
          <p><span>Tiền cọc:</span> 200,000 VND</p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default BookingHistory;
