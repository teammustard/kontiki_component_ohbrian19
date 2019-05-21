import React from "react";
import StarRatings from "react-star-ratings";

const Review = ({ review }) => {
  return (
    <div>
      <div style={{ fontWeight: "bold" }}>{review.name}</div>
      <StarRatings
        rating={review.star_rating}
        starRatedColor="gold"
        numberOfStars={5}
        starDimension="20px"
        starSpacing="5px"
      />
      <div style={{ fontWeight: "bold" }}>{review.title}</div>
      <div>{review.description}</div>
      <div>
        Booked From {review.booked_from} Traveled {review.traveled_date}{" "}
      </div>
      <br />
    </div>
  );
};

export default Review;

