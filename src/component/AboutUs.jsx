import "../css/AboutUs.css";
import myChef from '../assets/mychef.png';
import signature from '../assets/signeture-ceo.png';

const AboutUs = () => {
  return (
    <div className="container-vphu">
      <div className="about-us">
        <div className="about-content">
          <h3 className="about-title">VỀ CHÚNG TÔI</h3>
          <h1 className="main-heading">
            Hãy đến và thưởng thức món ăn tươi ngon của chúng tôi mà bạn sẽ không bao giờ quên.
          </h1>
          <p className="description">
            Một bầu không khí thư giãn và dễ chịu, nhạc jazz hay, bữa tối và cocktail.
            The Patio Time Bar mở cửa ngay tại trung tâm Florence. Đây là quán bar duy nhất
            lấy cảm hứng từ những năm 1960, sẽ mang đến cho bạn một trải nghiệm khó quên.
          </p>
          <div className="ceo">
            <button className="discover-more-btn">Khám Phá Thêm</button>
            <div className="ceo-signature">
              <img src={signature} alt="Chữ ký của CEO" />
              <p className="ceo-signature-text">CEO, nhà hàng Restan</p>
            </div>
          </div>
        </div>

        <div className="chef-image-container">
          <div className="bgr-chef-image"></div>
          <img src={myChef} alt="Đầu bếp" className="chef-image" />
          <div className="award-badge">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" version="1.1">
              <path id="textPath" d="M 0,75 a 75,75 0 1,1 0,1 z"></path>
              <text>
                <textPath href="#textPath">Nhà Hàng Đoạt Giải Thưởng</textPath>
              </text>
            </svg>
            <div className="thumb">
              <img decoding="async" src="https://wp.validthemes.net/restan/wp-content/uploads/2024/01/8.png" alt="Restan" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
