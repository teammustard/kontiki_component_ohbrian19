import React from "react";
import StarRatings from "react-star-ratings";

const PopupGraph = ({
  one,
  two,
  three,
  four,
  five,
  reviews,
  handleStarChange,
  backgroundColor
}) => {
  const total = one + two * 2 + three * 3 + four * 4 + five * 5;
  const average = total / reviews.length;
  const averageFixed = average.toFixed(1);
  const round = Math.round(average * 2) / 2;
  const style = stars => {
    const rate = `${(stars / reviews.length) * 200}px`;
    return {
      width: rate
    };
  };

  return reviews.length > 0 ? (
    <div>
      <div className="popupGraphTopBox">
        <div className="popupGraphAverageRating">{averageFixed}</div>
        <div>
          <StarRatings
            rating={round}
            starRatedColor="#FFC432"
            numberOfStars={5}
            starDimension="20px"
            starSpacing="2px"
          />
        </div>
        <div className="popupGraphTotalReviews">
          {reviews.length} independent reviews
        </div>
        <div className="feefoLogoBox">
          <div className="feefoLogo">
            {" "}
            Powered by
            <div>
              <img src="http://52.15.160.112:3001/img/feefo_logo.svg" className="feefoLogo-img" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="popupStar">
          <div className="popupStarTitle">Filter by traveller’s rating</div>
          <br />
          <div className="popupStarOuterBox" onClick={handleStarChange}>
            <div className="popupStarInnerBox" id="5">
              <span className="popupStarBar">★&ensp;5&emsp;</span>
              <span
                style={backgroundColor("5")}
                className={five !== 0 ? "popupStarBarOne" : "popupStarBarNone"}
                id="5"
              >
                {five}
              </span>
              <span
                style={Object.assign(style(five), backgroundColor("5"))}
                className="popupStarBarTwo"
                id="5"
              />
            </div>
            <div className="popupStarInnerBox" id="4">
              <span className="popupStarBar">★&ensp;4&emsp;</span>
              <span
                style={backgroundColor("4")}
                className={four !== 0 ? "popupStarBarOne" : "popupStarBarNone"}
                id="4"
              >
                {four}
              </span>
              <span
                style={Object.assign(style(four), backgroundColor("4"))}
                className="popupStarBarTwo"
                id="4"
              />
            </div>
            <div className="popupStarInnerBox" id="3">
              <span className="popupStarBar">★&ensp;3&emsp;</span>
              <span
                style={backgroundColor("3")}
                className={three !== 0 ? "popupStarBarOne" : "popupStarBarNone"}
                id="3"
              >
                {three}
              </span>
              <span
                style={Object.assign(style(three), backgroundColor("3"))}
                className="popupStarBarTwo"
                id="3"
              />
            </div>
            <div className="popupStarInnerBox" id="2">
              <span className="popupStarBar">★&ensp;2&emsp;</span>
              <span
                style={backgroundColor("2")}
                className={two !== 0 ? "popupStarBarOne" : "popupStarBarNone"}
                id="2"
              >
                {two}
              </span>
              <span
                style={Object.assign(style(two), backgroundColor("2"))}
                className="popupStarBarTwo"
                id="2"
              />
            </div>
            <div className="popupStarInnerBox" id="1">
              <span className="popupStarBar">★&ensp;1&emsp;</span>
              <span
                style={backgroundColor("1")}
                className={one !== 0 ? "popupStarBarOne" : "popupStarBarNone"}
                id="1"
              >
                {one}
              </span>
              <span
                style={Object.assign(style(one), backgroundColor("1"))}
                className="popupStarBarTwo"
                id="1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default PopupGraph;