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
  const averageFixed = average.toFixed(1); 
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
    const rate = `${(stars / reviews.length) * 100}px`;
    return {
      width: rate
    };
  };

  return (
    <div>
      <Slider {...settings}>
        <div align="center">
          <div>
            <div className="averageRating">{averageFixed}</div>
            <div>
              <StarRatings
                rating={round}
                starRatedColor="#FFC432"
                numberOfStars={5}
                starDimension="20px"
                starSpacing="2px"
              />
            </div>
            <div className="totalReviews">{reviews.length} independent reviews</div>
          </div>
        </div>
        <div>
          <div className="sliderStar">
            <div className="sliderStarTitle">Filter by traveller’s rating</div>
            <br />
            <div className="sliderStarOuterBox" onClick={handleStarChange}>
              <div className="sliderStarInnerBox" id="5">
                <span className="sliderStarBar">★&ensp;5&emsp;</span><span style={backgroundColor("5")} className="sliderStarBarOne" id="5">{five}</span><span style={Object.assign(style(five), backgroundColor("5"))} className="sliderStarBarTwo" id="5" />
              </div>
              <div className="sliderStarInnerBox" id="4">
                <span className="sliderStarBar">★&ensp;4&emsp;</span><span style={backgroundColor("4")} className="sliderStarBarOne" id="4">{four}</span><span style={Object.assign(style(four), backgroundColor("4"))} className="sliderStarBarTwo" id="4" />
              </div>
              <div className="sliderStarInnerBox" id="3">
                <span className="sliderStarBar">★&ensp;3&emsp;</span><span style={backgroundColor("3")} className="sliderStarBarOne" id="3">{three}</span><span style={Object.assign(style(three), backgroundColor("3"))} className="sliderStarBarTwo" id="3" />
              </div>
              <div className="sliderStarInnerBox" id="2">
                <span className="sliderStarBar">★&ensp;2&emsp;</span><span style={backgroundColor("2")} className="sliderStarBarOne" id="2">{two}</span><span style={Object.assign(style(two), backgroundColor("2"))} className="sliderStarBarTwo" id="2" />
              </div>
              <div className="sliderStarInnerBox" id="1">
                <span className="sliderStarBar">★&ensp;1&emsp;</span><span style={backgroundColor("1")} className="sliderStarBarOne" id="1">{one}</span><span style={Object.assign(style(one), backgroundColor("1"))} className="sliderStarBarTwo" id="1" />
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
