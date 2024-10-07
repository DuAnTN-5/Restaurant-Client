import "../css/AboutUs.css"
import myChef from '../assets/mychef.png'
import signature from '../assets/signeture-ceo.png'

const AboutUs = () => {
  return (
      <div className="container">
    <div className="about-us">
      <div className="about-content">
        <h3 className="about-title">ABOUT US</h3>
        <h1 className="main-heading">
          Come for our fresh, delicious food you won’t forget.
        </h1>
        <p className="description">
          A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. 
          The Patio Time Bar opens in the center of Florence. The only bar inspired by the 1960s, 
          it will give you an experience that you’ll have a hard time forgetting.
        </p>
        <div className="ceo">
        <button className="discover-more-btn">Discover More</button>
        <div className="ceo-signature">
          <img src={signature} alt="CEO Signature" />
          <p className="ceo-signature-text">CEO, of Restan Restaurant</p>
        </div>
        </div>
      </div>

      <div className="chef-image-container">
        <div className="bgr-chef-image">
        </div>
        <img src={myChef} alt="Chef" className="chef-image" />
        <div className="award-badge">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" version="1.1">
            <path id="textPath" d="M 0,75 a 75,75 0 1,1 0,1 z"></path>
            <text>
              <textPath href="#textPath">Award Winning Restaurant</textPath>
            </text>
            {/* <span className="award-text">AWARD WINNING RESTAURANT</span> */}
          </svg>
          <div className="thumb">
            <img decoding="async" src="https://wp.validthemes.net/restan/wp-content/uploads/2024/01/8.png" alt="Restan"></img>
          </div>
        </div>
      </div>
    </div>
      </div>
  );
};

export default AboutUs;