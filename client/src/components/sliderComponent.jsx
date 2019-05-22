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
  handleStarChange,
  backgroundColor
}) => {
  const total = one + two * 2 + three * 3 + four * 4 + five * 5;
  const average = total / reviews.length;
  const round = Math.round(average * 2) / 2;
  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true
  };

  const style = stars => {
    const rate = `${(stars / reviews.length) * 200}px`;
    return {
      width: rate
    };
  };

  return (
    <div>
      <Slider {...settings}>
        <div align="center">
          <div>
            <div className="averageRating">{average}</div>
            <div>
              <StarRatings
                rating={round}
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
              <div className="starBox" id="5">
                ★ 5<span style={backgroundColor("5")} className="starBackground" id="5">{five}</span><span style={Object.assign(style(five), backgroundColor("5"))} className="emptyBox" id="5" />
              </div>
              <div className="starBox" id="4">
                ★ 4<span style={backgroundColor("4")} className="starBackground" id="4">{four}</span><span style={Object.assign(style(four), backgroundColor("4"))} className="emptyBox" id="4" />
              </div>
              <div className="starBox" id="3">
                ★ 3<span style={backgroundColor("3")} className="starBackground" id="3">{three}</span><span style={Object.assign(style(three), backgroundColor("3"))} className="emptyBox" id="3" />
              </div>
              <div className="starBox" id="2">
                ★ 2<span style={backgroundColor("2")} className="starBackground" id="2">{two}</span><span style={Object.assign(style(two), backgroundColor("2"))} className="emptyBox" id="2" />
              </div>
              <div className="starBox" id="1">
                ★ 1<span style={backgroundColor("1")} className="starBackground" id="1">{one}</span><span style={Object.assign(style(one), backgroundColor("1"))} className="emptyBox" id="1" />
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
