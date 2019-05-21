import React from "react";
import StarRatings from "react-star-ratings";

class Graph extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let total =
      this.props.one +
      this.props.two * 2 +
      this.props.three * 3 +
      this.props.four * 4 +
      this.props.five * 5;
    let average = total / this.props.reviews.length;
    let round = Math.round(average * 2) / 2;

    return (
      <div>
        <div align="center">
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
          <div>{this.props.reviews.length} independent reviews</div>
        </div>
        <br />
        <div>
          <div>Filter by traveller’s rating</div>
          <div onClick={this.props.handleStarChange}>
            <div id="5">
              ★ 5{" "}
              <span className="starBackground" id="5">
                {this.props.one}
              </span>
            </div>
            <div id="4">
              ★ 4{" "}
              <span className="starBackground" id="4">
                {this.props.two}
              </span>
            </div>
            <div id="3">
              ★ 3{" "}
              <span className="starBackground" id="3">
                {this.props.three}
              </span>
            </div>
            <div id="2">
              ★ 2{" "}
              <span className="starBackground" id="2">
                {this.props.four}
              </span>
            </div>
            <div id="1">
              ★ 1{" "}
              <span className="starBackground" id="1">
                {this.props.five}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Graph;
