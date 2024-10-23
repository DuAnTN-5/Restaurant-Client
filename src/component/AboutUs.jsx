import "../css/AboutUs.css";
import myChef from '../assets/mychef.png';
import signature from '../assets/signeture-ceo.png';

const AboutUs = () => {
  return (
    <div className="container-vphu">
      <div className="about-us">
        <div className="about-content">
          <h3 className="about-title">GIỚI THIỆU</h3>
          <h1 className="main-heading">
            Hãy đến để thưởng thức những món ăn tươi ngon của chúng tôi mà bạn sẽ không thể nào quên.
          </h1>
          <p className="description-about">
          Nhà hàng mang đến không gian hoài niệm năm 1960, âm nhạc du dương cùng những món ăn tinh tế và cocktail sáng tạo,
           hứa hẹn mang lại trải nghiệm ẩm thực độc đáo, đầy cảm xúc và khó quên cho thực khách.
          </p>  
          <div className="ceo">
            <button className="discover-more-btn">Xem Thêm</button>
            <div className="ceo-signature">
              <img src={signature} alt="CEO Signature" />
              <p className="ceo-signature-text">CEO, HightFive Restaurant</p>
            </div>
          </div>
        </div>

        <div className="chef-image-container">
          <div className="bgr-chef-image"></div>
          <img src={myChef} alt="Chef" className="chef-image" />
          <div className="award-badge">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" version="1.1">
              <path id="textPath" d="M 0,75 a 75,75 0 1,1 0,1 z"></path>
              <text>
                <textPath href="#textPath">Award Winning Restaurant</textPath>
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
