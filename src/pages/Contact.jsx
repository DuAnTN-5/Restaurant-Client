import "../css/Contact.css";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdPhonePortrait } from "react-icons/io";
import { IoMailOpen } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AiFillTikTok } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";


function Contact() {
  return (
    <>
      <div className="contact">
        <div className="form-container">
          <h3 className="form-title">Liên hệ với chúng tôi</h3>
          <h4 className="form-description">
            <strong>Bạn cần hỗ trợ?</strong> Nhà hàng HighFive rất hân hạnh
            được hỗ trợ bạn, hãy để lại thông tin cho chúng tôi nhé. Yêu cầu của
            bạn sẽ được xử lý và phản hồi trong thời gian sớm nhất!
          </h4>
          <div className="contact-form">
            <div className="form-input">
              <div>
                <label htmlFor="name">Họ và tên</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Nhập tên của bạn"
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  placeholder="Nhập email của bạn"
                />
              </div>
            </div>
            <div className="form-textarea">
              <div>
                <label htmlFor="text">Tin nhắn</label>
                <textarea
                  name="text"
                  id="text"
                  placeholder="Đừng ngại, hãy cho chúng tôi biết phản hồi của bạn"
                ></textarea>
              </div>
            </div>
            <div className="button-container">
              <button className="send">Gửi</button>
            </div>
          </div>
        </div>

        <div className="contact__header">
          <div className="contact-info">
            <i className="contact-icon">
              <FaLocationDot />
            </i>
            <span className="contact-text">Cao đẳng FPT Polytechnic</span>
          </div>
          <a className="contact-text-item">Rosemead, CA 91770</a>

          <div className="contact-info">
            <i className="contact-icon">
              <IoMdPhonePortrait />
            </i>
            <span className="contact-text">079 79 79 79</span>
          </div>
          <a className="contact-text-item">Thứ 2 đến Thứ 6 từ 9:00 - 18:00</a>

          <div className="contact-info">
            <i className="contact-icon">
              <IoMailOpen />
            </i>
            <span className="contact-text">
              HighFiverestaurant@gmail.com
            </span>
          </div>
          <a className="contact-text-item">Gửi câu hỏi của bạn bất cứ lúc nào!</a>

          <div className="contact-icon-website">
            <i><FaSquareInstagram /></i>
            <i><FaFacebook /></i>
            <i><FcGoogle /></i>
            <i><AiFillTikTok /></i>
            <i><FaTelegram /></i>
          </div>
        </div>
      </div>

      <div className="contact-item">
        <div className="contact-map">
          <iframe
            id="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.918237254525!2d105.81494031536003!3d21.028511393148378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abb5c03bc50f%3A0x4cb490e3b6e6dd7b!2zSOG7kyBIw6AgSMOgIFjhuq1uZyBIw6A!5e0!3m2!1svi!2s!4v1614854344721!5m2!1svi!2s"
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
}

export default Contact;
