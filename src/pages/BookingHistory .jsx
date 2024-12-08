// import { useState, useEffect } from "react";
import { useEffect, useState } from "react";
import "../css2/UniqueBookingHistory.css"; // Đường dẫn tới CSS
import { api } from "../api";

const BookingHistory = () => {
  const [bookings, setBookings] = useState([]);

useEffect(() =>{
  let auth = localStorage.getItem("auth");
  if (auth) {
    auth = JSON.parse(auth);
  }
  let token = localStorage.getItem("token");
  if (token) {
    token = JSON.parse(token);
  }
  
  let config = {
    headers: {
      Authorization: "Bearer " + token,
      "Content-type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
  };
api
.get("/paid-carts/" + auth.id, config)
.then(res =>{
  console.log(res)
  setBookings(res.data.data)
})
.catch(error =>{
  console.log(error)
})
}, [])
console.log(bookings)

  return (
    <div className="history-container">
    <h2 className="history-title">Lịch Sử Đặt Bàn</h2>
    <div className="history-list">
    {/* {bookings.map((item) =>{
      return(

      <div className="history-item" key={item.id}>
        <div className="history-header">
          <p className="history-table">Bàn: <strong>{item.table_id}</strong></p>
          <p className="history-status history-paid">Đã thanh toán</p>
        </div>
        <div className="history-content">
          <p><span>Ngày: </span>{new Date(item.date).toLocaleDateString()}</p>
          <p><span>Giờ: </span>{item.time}</p>
          <p><span>Số khách: </span>{item.guest_count}</p>
         
        </div>
      </div>
      )
    })} */}
    {bookings.length > 0 ? (
          bookings.map((item) => (
            <div className="history-item" key={item.id}>
              <div className="history-header">
                <p className="history-table">
                  Bàn: <strong>{item.table_id}</strong>
                </p>
                <p className="history-status history-paid">Đã thanh toán</p>
              </div>
              <div className="history-content">
                <p>
                  <span>Ngày: </span>
                  {new Date(item.date).toLocaleDateString()}
                </p>
                <p>
                  <span>Giờ: </span>
                  {item.time}
                </p>
                <p>
                  <span>Số khách: </span>
                  {item.guest_count}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="history-empty">Lịch sử không có bàn nào.</p>
        )}

      {/* <div className="history-item">
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
      </div> */}
    </div>
  </div>
  );
};

export default BookingHistory;
