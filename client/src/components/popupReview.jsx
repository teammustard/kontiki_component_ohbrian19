import React from "react";
import StarRatings from "react-star-ratings";

const PopupReview = ({ review }) => {
  return (
    <div className="popupReview">
      <div className="popupReviewName">{review.name}</div>
      <StarRatings
        rating={review.star_rating}
        starRatedColor="#FFC432"
        numberOfStars={5}
        starDimension="18px"
        starSpacing="1px"
      />
      <div className="popupReviewTitleOuter">
        <div className="popupReviewTitle">{review.title}</div>
      </div>
      <div className="popupReviewDescription">{review.description}</div>
      <div className="popupReviewDate">
        <span className="popupReviewBook">Booked From {review.booked_from}</span> Traveled {review.traveled_date}{" "}
      </div>
      <br />
    </div>
  );
};

export default PopupReview;
