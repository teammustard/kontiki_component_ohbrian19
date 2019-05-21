import React from "react";
import StarRatings from "react-star-ratings";
import SliderReview from "./sliderReview.jsx";
import Slider from "react-slick";

const SliderComponent = ({
  reviews,
  one,
  two,
  three,
  four,
  five,
  displayReviews,
  handleStarChange
}) => {
  let total = one + two * 2 + three * 3 + four * 4 + five * 5;
  let average = total / reviews.length;
  let round = Math.round(average * 2) / 2;
  let settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true
  };
  return (
    <div>
      <Slider {...settings}>
        <div align="center">
          <div>
            <div className="averageRating">{average}</div>
            <div>
              <StarRatings
                rating={round || 0}
                starRatedColor="gold"
                numberOfStars={5}
                starDimension="20px"
                starSpacing="5px"
              />
            </div>
            <br />
            <div>{reviews.length} independent reviews</div>
          </div>
        </div>
        <div>
          <div>
            <div>Filter by traveller’s rating</div>
            <div onClick={handleStarChange}>
              <div id="5">
                ★ 5 <span className="starBackground" id="5">{one}</span>
              </div>
              <div id="4">
                ★ 4 <span className="starBackground" id="4">{two}</span>
              </div>
              <div id="3">
                ★ 3 <span className="starBackground" id="3">{three}</span>
              </div>
              <div id="2">
                ★ 2 <span className="starBackground" id="2">{four}</span>
              </div>
              <div id="1">
                ★ 1 <span className="starBackground" id="1">{five}</span>
              </div>
            </div>
          </div>
        </div>
        {displayReviews.slice(0, 20).map((review, index) => {
          return <SliderReview key={index} review={review} />;
        })}
      </Slider>
    </div>
  );
};

export default SliderComponent;
