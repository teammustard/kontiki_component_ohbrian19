import React from "react";
import StarRatings from "react-star-ratings";

class Graph extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let total = this.props.one + this.props.two * 2 + this.props.three * 3 + this.props.four * 4 + this.props.five * 5;
    let average = total / this.props.reviews.length;
    let round = Math.round(average * 2) / 2;

    return (
      <div>
        <div>
          <div>{average}</div>
          <div>
            <StarRatings
              rating={round || 0}
              starRatedColor="gold"
              numberOfStars={5}
              starDimension="20px"
              starSpacing="5px"
            />
          </div>
          <div>{this.props.reviews.length} independent reviews</div>
        </div>
        <br />
        <div>
          <div>Filter by traveller’s rating</div>
          <div>
            <div>★ 5 {this.props.five}</div>
            <div>★ 4 {this.props.four}</div>
            <div>★ 3 {this.props.three}</div>
            <div>★ 2 {this.props.two}</div>
            <div>★ 1 {this.props.one}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Graph;
