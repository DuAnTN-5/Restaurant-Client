import '../css/Header.css';
import logo from '../assets/logo-hi-5.png';
import { useState, useRef, useEffect } from 'react';

function Header() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const navbarRef = useRef(null);
  const overlayRef = useRef(null);

  const handleToggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  // Thêm lớp "no-scroll" vào body khi navbar mở, và loại bỏ khi đóng
  useEffect(() => {
    if (isNavbarVisible) {
      document.body.classList.add('no-scroll'); // Vô hiệu hóa cuộn khi navbar mở
    } else {
      document.body.classList.remove('no-scroll'); // Kích hoạt lại cuộn khi navbar đóng
    }

    // Dọn dẹp sự kiện khi component bị unmount
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isNavbarVisible]);

  const handleOverlayClick = () => {
    setIsNavbarVisible(false); // Tắt navbar khi click vào overlay
  };

  const handleExitClick = () => {
    setIsNavbarVisible(false); // Tắt navbar khi nhấn nút exit
  };

  return (
    <div className="header">
      <div className="header-top">
        <div className="reservation">
          <i className="fas fa-phone icon-phone"></i>
          <div className="information">
            <span className="reservation-text">Call for Reservation</span>
            <a className="reservation-link" href="tel:+4733378901">+4733378901</a>
          </div>
        </div>
        <div className="logo">
          <img className="logo-image" src={logo} alt="Hi-5 Logo" />
        </div>
        <div className="location">
          <i className="fas fa-envelope icon-user"></i>
          <div className="login">
            <a className="location-text" href="/Login">Login</a>
            <a className="location-link" href="/Signup">You need to create an account?</a>
          </div>
        </div>
      </div>
      <nav className="navbar" ref={navbarRef}>
        <button type="button" className="navbar-toggle" onClick={handleToggleNavbar}>
          <i className='fa fa-bars'></i>
        </button>

        <div className="logo-toggle">
          <img className="logo-image-toggle" src={logo} alt="Hi-5 Logo" />
        </div>

        <div>
          <ul className="navbar-list">
            <li className="navbar-item"><a className="navbar-link" href="#">Home</a></li>
            <li className="navbar-item"><a className="navbar-link" href="#">Pages</a></li>
            <li className="navbar-item"><a className="navbar-link" href="#">Menu</a></li>
            <li className="navbar-item"><a className="navbar-link" href="#">Blog</a></li>
            <li className="navbar-item"><a className="navbar-link" href="#">Shop</a></li>
            <li className="navbar-item"><a className="navbar-link" href="#">Contact</a></li>
          </ul>
        </div>

        <div
          ref={overlayRef}
          className={`overlay-screen-open ${isNavbarVisible ? 'active' : ''}`}
          onClick={handleOverlayClick}
        >
          <ul className={`navbar-list ${isNavbarVisible ? 'active' : ''}`}>
            <div className='header-navbar-list'>
              <div className="logo-header-navbar-list">
                <img className="logo-image-header-navbar-list" src={logo} alt="Hi-5 Logo" />
              </div>

              <button type="button" className="button-exit" onClick={handleExitClick}>
                <i id="button-exit" className="fa-regular fa-circle-xmark"></i>
              </button>
            </div>
            <li className="navbar-item"><a className="navbar-link" href="#">Home</a></li>
            <li className="navbar-item"><a className="navbar-link" href="#">Pages</a></li>
            <li className="navbar-item"><a className="navbar-link" href="#">Menu</a></li>
            <li className="navbar-item"><a className="navbar-link" href="#">Blog</a></li>
            <li className="navbar-item"><a className="navbar-link" href="#">Shop</a></li>
            <li className="navbar-item"><a className="navbar-link" href="#">Contact</a></li>
          </ul>
        </div>



        <div className="navbar-right">
          <i className="fas fa-search navbar-icon"></i>
          <i className="fas fa-bars navbar-icon"></i>
        </div>
      </nav>
    </div>
  );
}

export default Header;
