import React from "react";
import StarRatings from "react-star-ratings";

const SliderReview = ({ review }) => (
  <div>
    <div className="sliderReviewName">{review.name}</div>
    <StarRatings
      rating={review.star_rating}
      starRatedColor="#FFC432"
      numberOfStars={5}
      starDimension="18px"
      starSpacing="1px"
    />
    <div className="sliderReviewDate">Traveled {review.traveled_date}</div>
    <div className="sliderReviewTitleOuter">
      <div className="sliderReviewTitle">{review.title}</div>
    </div>
    <div className="sliderReviewDescription">{review.description}</div>
  </div>
);

export default SliderReview;
