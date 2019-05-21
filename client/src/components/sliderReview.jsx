import React from "react";
import StarRatings from "react-star-ratings";

const SliderReview = ({ review }) => (
  <div>
    <div style={{ fontWeight: "bold" }}>{review.name}</div>
    <StarRatings
      rating={review.star_rating}
      starRatedColor="gold"
      numberOfStars={5}
      starDimension="20px"
      starSpacing="5px"
    />
    <div>Traveled {review.traveled_date}</div>
    <div style={{ fontWeight: "bold" }}>{review.title}</div>
    <div>{review.description}</div>
    <br />
  </div>
);

export default SliderReview;
