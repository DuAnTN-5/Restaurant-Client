import StarRatings from "react-star-ratings";
import { useState } from "react";
import "../style/Rate.css";

function ProductRate() {
  const [rating, setRating] = useState(0);

  function changeRating(newRating) {
    setRating(newRating);
    // - xu ly logic
    // - xu ly api
  }

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
