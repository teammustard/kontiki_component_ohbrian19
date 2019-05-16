import React from 'react';
import StarRatings from 'react-star-ratings';

class Review extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h4>{this.props.review.name}</h4>
        <StarRatings
          rating={this.props.review.star_rating}
          starRatedColor="gold"
          numberOfStars={5}
          starDimension="20px"
          starSpacing="5px"
        />
        <div>{this.props.review.title}</div>
        <div>{this.props.review.description}</div>
        <div>Booked From {this.props.review.booked_from} Traveled {this.props.review.traveled_date} </div>
      </div>
    )
  }
};

export default Review;