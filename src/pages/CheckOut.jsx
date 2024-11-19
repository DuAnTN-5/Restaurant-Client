import { useNavigate } from "react-router-dom";
import "../style/CheckOut.css";

const ReservationForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Lấy giá trị từ input
    const reservationData = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      date: e.target.date.value,
      time: e.target.time.value,
      guests: e.target.guests.value,
      note: e.target.note.value,
    };

    // Kiểm tra thông tin
    if (!reservationData.name || !reservationData.phone) {
      alert("Vui lòng điền đầy đủ thông tin bắt buộc!");
      return;
    }

    // Lưu vào Local Storage
    localStorage.setItem("reservationData", JSON.stringify(reservationData));

    // Chuyển trang
    navigate("/checkout-pay");
  };

  return (
    <div className="reservation-container text-vphu">
      <h1 className="reservation-title title-vphu">Đặt Bàn</h1>
      <div className="reservation-header">
        <p className="reservation-header-text">
          <strong className="phone-checkout">19002311</strong> - VUI LÒNG ĐIỀN ĐẦY ĐỦ THÔNG TIN TRƯỚC KHI CHỌN THỜI GIAN
        </p>
      </div>
      <form className="reservation-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Họ & Tên (*)</label>
          <input className="preinstall-book" type="text" id="name" name="name" placeholder="Họ & tên" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Số điện thoại (*)</label>
          <input className="preinstall-book" type="tel" id="phone" name="phone" placeholder="Số điện thoại" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input className="preinstall-book" type="email" id="email" name="email" placeholder="Email" />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="date">Ngày</label>
            <input className="preinstall-book" type="date" id="date" name="date" />
          </div>
          <div className="form-group">
            <label htmlFor="time">Thời gian</label>
            <select className="preinstall-book" id="time" name="time">
              <option value="">Chọn thời gian</option>
              <option value="10:00">10:00</option>
              <option value="12:00">12:00</option>
              <option value="18:00">18:00</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="guests">Số khách</label>
          <input className="preinstall-book" type="number" id="guests" name="guests" placeholder="Số khách" min="1" max="99" 
            onInput={(e) => {
            e.target.value = e.target.value.replace(/^0+/, "");
    }}/>
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
          <button type="submit" className="btn btn-submit">
            Đặt bàn
          </button>
          <button type="reset" className="btn btn-reset">
            Làm lại
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReservationForm;
