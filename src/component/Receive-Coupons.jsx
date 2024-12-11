import '../css/Receive-Coupons.css';
import Slider from 'react-slick';
import { useEffect } from 'react';
import { api } from '../api';
import { useState } from 'react';
import logo from "../assets/logo-hi5-black.png";

const ReceiveCoupons = () => {

  const [coupons, setCoupons] = useState([])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  useEffect(() =>{
    api
    .get("/coupons")
    .then(res=>{
      // console.log(res)
      setCoupons(res.data)
    })
    .catch(error => console.log(error))
  }, [])

  return (
    <div className="receive-coupon container-vphu">
  <div className="receive-coupon-wrapper">
    <div className="receive-coupon-title">
      <h3 className="title-receive-coupon subtitle-vphu">VOUCHER GIẢM GIÁ</h3>
    </div>
    <Slider {...settings}>
      {coupons.map((coupon) => (
        <div className="receive-coupon-item" key={coupon.id}>
          <div className="coupon-content">
            {/* Logo */}
            <div className="coupon-logo">
              <img className="logo-image" src={logo} alt="Logo" />
            </div>

            {/* Thông tin mã giảm giá */}
            <div className="coupon-details">
              <div className="coupon-code">Mã: <strong>{coupon.code}</strong></div>
              <div className="coupon-discount">Giảm: {parseFloat(coupon.value).toFixed(0)}% 
              {/* {coupon.value}% */}
              </div>
              <div className="coupon-expiry">
                HSD: {new Date(coupon.end_date).toLocaleDateString()}
              </div>
            </div>

          </div>
        </div>
      ))}
    </Slider>
  </div>
</div>
  );
}

export default ReceiveCoupons;
