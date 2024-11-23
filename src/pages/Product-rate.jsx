import StarRatings from "react-star-ratings";
import { useState } from "react";
import "../style/Rate.css";
import { toast } from "react-toastify";
import { api } from "../api";

function ProductRate(props) {
  console.log(props);
  // eslint-disable-next-line react/prop-types
  const product = props.product;
  console.log(product);
  // eslint-disable-next-line react/prop-types
  console.log(product.id);
  // console.log(product.id)
  const [rating, setRating] = useState(0);

  let token = localStorage.getItem("token");
  if (!token) {
    toast.error("Vui lòng đăng nhập");
  } else {
    token = JSON.parse(token);
  }

  let auth = localStorage.getItem("auth");
  if (auth) {
    auth = JSON.parse(auth);
  }
  console.log(auth);
  function changeRating(newRating) {
    console.log(newRating)
    setRating(newRating);

    const formData = new FormData();
    formData.append("user_id", auth.id);
    // eslint-disable-next-line react/prop-types
    formData.append("product_id", product.id);
    formData.append("rating", rating);

    // console.log(formData)
    api
      .post("/ratings", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  console.log(rating);

  return (
    <StarRatings
      className="star-rate"
      rating={rating}
      starRatedColor="yellow"
      changeRating={changeRating}
      numberOfStars={5}
      name="rating"
    />
  );
}
export default ProductRate;
