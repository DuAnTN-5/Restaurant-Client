import '../css/Footer.css'
import logoHi5 from '../assets/logo-hi-5.png'
export default function Footer() {
  return (
    <div className="footer">
      <div className="header-footer">
        <div className="header-footer-img"></div>
        <div className="footer-container">
          <div className="about-us-footer">
            <h4 className='title-footer'>About Us</h4>
            <p className='passage-footer'>
              Continued at zealously necessary is Surrounded sir motionless she end literature. Gay direction neglected.
            </p>
            <div className="social-media-icons-about-us-footer">
              <div className='icon-ab-footer icon-fb-footer'>
                <i className="fa-brands fa-facebook-f"></i>
              </div>
              <div className='icon-ab-footer'>
                <i className="fa-brands fa-twitter"></i>
              </div>
              <div className='icon-ab-footer'>
                <i className="fa-brands fa-youtube"></i>
              </div>
              <div className='icon-ab-footer'>
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
            </div>
          </div>

          <div className="explore-footer">
            <h4 className='title-footer'>Explore</h4>
            <div className="text-explore-footer">
              About
            </div>
            <div className="text-explore-footer">
              Contact
            </div>
            <div className="text-explore-footer">
              Career
            </div>
            <div className="text-explore-footer">
              Company Profile
            </div>
            <div className="text-explore-footer">
              Help Center
            </div>
          </div>

          <div className="contact-info-footer">
            <h4 className='title-footer'>Contact Info</h4>
            <div className="contact-info-footer-item">
              <div className="icon-contact-info-footer-item icon-location-footer">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="text-footer">
                175 10h Street, Office 375 Berlin, De 21562
              </div>
            </div>
            <div className="contact-info-footer-item">
              <div className="icon-contact-info-footer-item">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="text-footer">
                +84 346732311
              </div>
            </div>
            <div className="contact-info-footer-item">
              <div className="icon-contact-info-footer-item">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="text-footer">
                hi5@restan.com
              </div>
            </div>
          </div>

          <div className="newsletter-footer">
            <h4 className='title-footer'>Newsletter</h4>
            <p className="passage-footer">
              Join our subscribers list to get the latest news and special offers.
            </p>
            <div className="form-newsletter-footer">
              <input type="email" placeholder='Your Email' className='form-email-footer' name='email' />
              <button type='submit' className='button-newsletter-footer'>
                <i className="fa-solid fa-arrow-right icon-arrow-footer"></i>
              </button>
            </div>
          </div>

        </div>
      </div>
      <div className="end-footer-bgr">
        <div className="end-footer">
          <div className="logo-footer">
            <img src={logoHi5} alt="Logo HightFive Group" />
          </div>
          <div className="footer-copyright">
            <p className='text-footer-copyright'>Copyright © 2022 Hight Five Group. All Rights Reserved.</p>
          </div>
        </div>
        <div className="end-footer-bgr-animation"></div>
      </div>
    </div>
  );
}
