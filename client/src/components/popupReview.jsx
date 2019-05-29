import React from "react";
import StarRatings from "react-star-ratings";

import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

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
      
      <div className="popupReview" id={this.props.review.id.toString()}>
        <Element name="findMe">
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
        
        {this.props.review.description.length < 270 
          ? <div>
              <div className="popupReviewDescription">{this.props.review.description}</div>
              <div className="popupReviewDate">
                <span className="popupReviewBook">Booked From {this.props.review.booked_from}</span> Traveled {this.props.review.traveled_date} 
              </div>
              <br />
            </div>
          : <div> 
              {this.state.readMore 
                ? <div>
                    <div className="popupReviewDescription">{this.props.review.description}</div>
                    <div className="popupReviewDate">
                      <span className="popupReviewBook">Booked From {this.props.review.booked_from}</span> Traveled {this.props.review.traveled_date} 
                    </div>
                    <div className="popupReviewReadMore" onClick={this.onClickReadMore}>CLOSE</div>
                  </div>
                : <div>
                    <div className="popupReviewDescription">{this.props.review.description.slice(0,270)}...</div>
                    <div className="popupReviewReadMore" onClick={this.onClickReadMore}>READ MORE</div>
                  </div>
              }
              <br />
            </div>
        }
        </Element>
      </div>
    )
  }
}

export default PopupReview;
