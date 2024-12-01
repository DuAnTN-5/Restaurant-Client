import "../css/Header2.css";


function Header2() {
  
  
  // console.log(token);
  return (
    <div className="header-2">
      
        {/* {isHeaderInfoVisible && ( */}
        <div className="header-info-bgr">
          <div className="header-info container-vphu">
            <div className="header-contact">
              <div className="header-contact-phone">
                <i className="fas fa-phone icon-contact"></i>
                <span>SĐT: +84 1234 567</span>
              </div>
              <div className="header-contact-email">
                <i className="fas fa-envelope icon-contact"></i>
                <span>Email: Hightfiverestaurant@gmail.com</span>
              </div>
            </div>
            <div className="header-social-network">
              <div className="header-social-network-item">
                <i className="fa-brands fa-facebook-f icon-social"></i>
              </div>
              <div className="header-social-network-item icon-social">
                <i className="fab fa-twitter"></i>
              </div>
              <div className="header-social-network-item icon-social">
                <i className="fab fa-youtube"></i>
              </div>
              <div className="header-social-network-item icon-social">
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
            </div>
          </div>
        </div>
        {/* )} */}

        {/* <div className={`header-navbar ${isHeaderInfoVisible ? "" : "fixed"}`}> */}
      
      
    </div>
  );
}

export default Header2;
