import "../css/Header2.css";
import logo from "../assets/logo-hi5-black.png";
import { useState, useRef, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api, url } from "../api";
import { CartContext } from "../../CartContext";


function Nav() {

    const [avatarUser, setAvatarUser] = useState();
    const [isNavbarVisible, setIsNavbarVisible] = useState(false);
    // const [isHeaderInfoVisible, setIsHeaderInfoVisible] = useState(true);
    // const location = useLocation();
    const navigate = useNavigate();
    const navbarRef = useRef(null);
    const overlayRef = useRef(null);
    // console.log(location)

    const { cartCount } = useContext(CartContext);
  
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
  
    const handleToggleNavbar = () => {
      setIsNavbarVisible(!isNavbarVisible);
    };
  
    useEffect(() => {
      api
        .get("/user", config)
        .then((res) => {
          console.log(res);
          setAvatarUser(res.data.image);
          let Auth = res.data;
          let auth = JSON.stringify(Auth);
          localStorage.setItem("auth", auth);
        })
        .catch((error) => {
          console.log(error);
        });
  
      //   if (isNavbarVisible) {
      //     document.body.classList.add("no-scroll");
      //   } else {
      //     document.body.classList.remove("no-scroll");
      //   }
  
      //   return () => {
      //     document.body.classList.remove("no-scroll");
      //   };
      // }, [location.pathname]);
    //   // // console.log(avatarUser)
  
    //   // useEffect(() => {
    //   //   const handleScroll = () => {
    //   //     if (window.scrollY > 50) {
    //   //       setIsHeaderInfoVisible(false);
    //   //     } else {
    //   //       setIsHeaderInfoVisible(true);
    //   //     }
    //   //   };
  
    //   //   window.addEventListener("scroll", handleScroll);
    //   //   return () => {
    //   //     window.removeEventListener("scroll", handleScroll);
    //   //   };
    }, []);
  
    const handleOverlayClick = () => {
      setIsNavbarVisible(false);
    };
  
    const handleExitClick = () => {
      setIsNavbarVisible(false);
    };
    const clickCart = () => {
      if (!token) {
        toast.error("Vui lòng đăng nhập");
      } else {
        navigate("/cart");
      }
    };
    const clickFavouritePage = () => {
      if (!token) {
        toast.error("Vui lòng đăng nhập");
      } else {
        navigate("/favourite-page");
      }
    };
    const handleBooking = () => {
      if (!token) {
        toast.error("Vui lòng đăng nhập");
      } else {
        navigate("/booking-table");
      }
    };

    return (
    <div className="header-navbar ">
            <div className="navbar container-vphu" ref={navbarRef}>
              <button
                type="button"
                className="navbar-toggle"
                onClick={handleToggleNavbar}
              >
                <i className="fa fa-bars"></i>
              </button>
    
              <div className="logo-toggle">
                <img className="logo-image-toggle" src={logo} alt="Hi-5 Logo" />
              </div>
    
              <Link to="/">
                <div className="header-navbar-left">
                  <img className="logo-hi5" src={logo} alt="Logo Hight Five" />
                </div>
              </Link>
    
              <div className="header-navbar-right">
                <div className="change-page">
                  <ul className="navbar-list">
                    <li className="navbar-item">
                      <Link className="navbar-link" to="/">
                        Trang Chủ
                      </Link>
                    </li>
                    <li className="navbar-item">
                      <Link className="navbar-link" to="/about">
                        Giới Thiệu
                      </Link>
                    </li>
                    <li className="navbar-item">
                      <Link className="navbar-link" to="/menu">
                        Thực Đơn
                      </Link>
                    </li>
                    <li className="navbar-item">
                      <Link className="navbar-link" to="/blog">
                        Tin Tức
                      </Link>
                    </li>
                    <li className="navbar-item">
                      <Link className="navbar-link" to="/contact">
                        Liên Hệ
                      </Link>
                    </li>
                    <li className="navbar-item">
                      <p className="navbar-link" onClick={handleBooking}>
                        Đặt Bàn
                      </p>
                    </li>
                  </ul>
                </div>
    
                <div
                  ref={overlayRef}
                  className={`overlay-screen-open ${
                    isNavbarVisible ? "active" : ""
                  }`}
                  onClick={handleOverlayClick}
                >
                  <ul className={`navbar-list ${isNavbarVisible ? "active" : ""}`}>
                    <div className="header-navbar-list">
                      <div className="logo-header-navbar-list">
                        <img
                          className="logo-image-header-navbar-list"
                          src={logo}
                          alt="Hi-5 Logo"
                        />
                      </div>
    
                      <button
                        type="button"
                        className="button-exit"
                        onClick={handleExitClick}
                      >
                        <i
                          id="button-exit"
                          className="fa-regular fa-circle-xmark"
                        ></i>
                      </button>
                    </div>
                    <li className="button-user-change">
                    <div className="cart-interaction-change">
                  {token ? (
                    <Link to="/profile-user">
                      {/* <div className="cart-interaction-item-avatar" setAvatarUser={setAvatarUser}> */}
                      <div className="cart-interaction-item-avatar">
                        {avatarUser ? (
                          <img
                            className="avatarUser"
                            src={`${url}/${avatarUser}`}
                            alt=""
                          />
                        ) : (
                          <i className="fa-regular fa-user navbar-icon"></i>
                        )}
                      </div>
                    </Link>
                  ) : (
                    <Link to="/login">
                      <div className="cart-interaction-item">
                        <i className="fa-regular fa-user navbar-icon"></i>
                      </div>
                    </Link>
                  )}
                  {/* (<img className="avatarUser" src={`${url}+${avatarUser}`}alt="" /> */}
                  {/* <Link to="/login">
                    <div className="cart-interaction-item">
                      <i className="fa-regular fa-user navbar-icon"></i>
                    </div>
                  </Link> */}
                  {/* <Link to="/favourite-page" onClick={clickFavouritePage}> */}
                  <div
                    className="cart-interaction-item"
                    onClick={clickFavouritePage}
                  >
                    <i className=" fa-regular fa-heart navbar-icon"></i>
                  </div>
                  {/* </Link> */}
                  {/* <Link to="/cart" onClick={clickCart}>  */}
                  <div
                    className="cart-interaction-item icon-end"
                    onClick={clickCart}
                  >

                    <i className="fa-solid fa-cart-shopping navbar-icon"></i>
                    {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                  </div>
                  {/* </Link> */}
                </div>
                    </li>
                    <li className="navbar-item">
                      <Link className="navbar-link" to="/menu">
                        Thực Đơn
                      </Link>
                    </li>
                    <li className="navbar-item">
                      <Link className="navbar-link" to="/">
                        Trang Chủ
                      </Link>
                    </li>
                    <li className="navbar-item">
                      <Link className="navbar-link" to="/about">
                        Giới Thiệu
                      </Link>
                    </li>
                    <li className="navbar-item">
                      <Link className="navbar-link" to="/blog">
                        Tin Tức
                      </Link>
                    </li>
                    <li className="navbar-item">
                      <Link className="navbar-link" to="/contact">
                        Liên Hệ
                      </Link>
                    </li>
                    <li className="navbar-item">
                      <Link className="navbar-link" to="/checkout">
                        Đặt Bàn
                      </Link>
                    </li>
                    
                  </ul>
                  
                </div>
                <div className="cart-interaction">
                  {token ? (
                    <Link to="/profile-user">
                      {/* <div className="cart-interaction-item-avatar" setAvatarUser={setAvatarUser}> */}
                      <div className="cart-interaction-item-avatar">
                        {avatarUser ? (
                          <img
                            className="avatarUser"
                            src={`${url}/${avatarUser}`}
                            alt=""
                          />
                        ) : (
                          <i className="fa-regular fa-user navbar-icon"></i>
                        )}
                      </div>
                    </Link>
                  ) : (
                    <Link to="/login">
                      <div className="cart-interaction-item">
                        <i className="fa-regular fa-user navbar-icon"></i>
                      </div>
                    </Link>
                  )}
                  {/* (<img className="avatarUser" src={`${url}+${avatarUser}`}alt="" /> */}
                  {/* <Link to="/login">
                    <div className="cart-interaction-item">
                      <i className="fa-regular fa-user navbar-icon"></i>
                    </div>
                  </Link> */}
                  {/* <Link to="/favourite-page" onClick={clickFavouritePage}> */}
                  <div
                    className="cart-interaction-item"
                    onClick={clickFavouritePage}
                  >
                    <i className=" fa-regular fa-heart navbar-icon"></i>
                  </div>
                  {/* </Link> */}
                  {/* <Link to="/cart" onClick={clickCart}>  */}
                  <div
                    className="cart-interaction-item icon-end"
                    onClick={clickCart}
                  >

                    <i className="fa-solid fa-cart-shopping navbar-icon"></i>
                    {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                  </div>
                  {/* </Link> */}
                </div>
              </div>
            </div>
          </div>
    );
}
export default Nav;