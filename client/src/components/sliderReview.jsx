import React from "react";
import StarRatings from "react-star-ratings";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

const SliderReview = ({ review, directPopup }) => (
  <div className="sliderReview">
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
    <div className="sliderReviewDescription">
      {review.description.length < 270
        ? review.description
        : review.description.slice(0, 270) + "..."}
    </div>
    <div className="sliderReviewReadMore">
      {review.description.length >= 270 ? (
        <Link
          activeClass="active"
          to={review.id.toString()}
          onClick={directPopup}
        >
          READ MORE
        </Link>
      ) : null}
    </div>
  </div>
);

export default SliderReview;
