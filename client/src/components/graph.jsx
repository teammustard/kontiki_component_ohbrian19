import React from "react";
import StarRatings from "react-star-ratings";

const Graph = ({ one, two, three, four, five, reviews, handleStarChange, backgroundColor }) => {
  const total = one + two * 2 + three * 3 + four * 4 + five * 5;
  const average = total / reviews.length;
  const round = Math.round(average * 2) / 2;
  const style = stars => {
    const rate = `${stars / reviews.length * 200}px`;
    return {
      width: rate
    };
  };

  return reviews.length > 0 ? (
    <div>
      <div align="center">
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
      <br />
      <div>
        <div className="travelerRating">Filter by traveller’s rating</div>
        <br />
        <div className="starBoxOuter" onClick={handleStarChange}>
          <div className="starBox" id="5">
            ★&ensp;5&emsp;<span style={backgroundColor("5")} className="starBackground" id="5">{five}</span><span style={Object.assign(style(five), backgroundColor("5"))} className="emptyBox" id="5" />
          </div>
          <div className="starBox" id="4">
            ★&ensp;4&emsp;<span style={backgroundColor("4")} className="starBackground" id="4">{four}</span><span style={Object.assign(style(four), backgroundColor("4"))} className="emptyBox" id="4" />
          </div>
          <div className="starBox" id="3">
            ★&ensp;3&emsp;<span style={backgroundColor("3")} className="starBackground" id="3">{three}</span><span style={Object.assign(style(three), backgroundColor("3"))} className="emptyBox" id="3" />
          </div>
          <div className="starBox" id="2">
            ★&ensp;2&emsp;<span style={backgroundColor("2")} className="starBackground" id="2">{two}</span><span style={Object.assign(style(two), backgroundColor("2"))} className="emptyBox" id="2" />
          </div>
          <div className="starBox" id="1">
            ★&ensp;1&emsp;<span style={backgroundColor("1")} className="starBackground" id="1">{one}</span><span style={Object.assign(style(one), backgroundColor("1"))} className="emptyBox" id="1" />
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Graph;
