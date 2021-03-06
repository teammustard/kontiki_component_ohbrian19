import React from "react";
import StarRatings from "react-star-ratings";
import { Element } from "react-scroll";

class PopupReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      readMore: false
    };

    this.onClickReadMore = this.onClickReadMore.bind(this);
  }

  onClickReadMore() {
    this.setState({
      readMore: !this.state.readMore
    });
  }

  render() {
    return (
      <Element name={this.props.review.id.toString()}>
        <div className="popupReview">
          <div className="popupReviewName">{this.props.review.name}</div>
          <StarRatings
            rating={this.props.review.star_rating}
            starRatedColor="#FFC432"
            numberOfStars={5}
            starDimension="18px"
            starSpacing="1px"
          />
          <div className="popupReviewTitleOuter">
            <div className="popupReviewTitle">{this.props.review.title}</div>
          </div>

          {this.props.review.description.length < 270 ? (
            <div>
              <div className="popupReviewDescription">
                {this.props.review.description}
              </div>
              <div className="popupReviewDate">
                <span className="popupReviewBook">
                  Booked From {this.props.review.booked_from}
                </span>{" "}
                Traveled {this.props.review.traveled_date}
              </div>
              <br />
            </div>
          ) : (
            <div>
              {this.state.readMore ? (
                <div>
                  <div className="popupReviewDescription">
                    {this.props.review.description}
                  </div>
                  <div className="popupReviewDate">
                    <span className="popupReviewBook">
                      Booked From {this.props.review.booked_from}
                    </span>{" "}
                    Traveled {this.props.review.traveled_date}
                  </div>
                  <div
                    className="popupReviewReadMore"
                    onClick={this.onClickReadMore}
                  >
                    CLOSE
                  </div>
                </div>
              ) : (
                <div>
                  <div className="popupReviewDescription">
                    {this.props.review.description.slice(0, 270)}...
                  </div>
                  <div
                    className="popupReviewReadMore"
                    onClick={this.onClickReadMore}
                  >
                    READ MORE
                  </div>
                </div>
              )}
              <br />
            </div>
          )}
        </div>
      </Element>
    );
  }
}

export default PopupReview;
