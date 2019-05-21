import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Popup from "./components/popup.jsx";
import Slider from "react-slick";
import StarRatings from "react-star-ratings";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allReviews: [], // all the reviews
      modalToggle: false, // state of modal button popup
      oneStar: 0,
      twoStar: 0,
      threeStar: 0,
      fourStar: 0,
      fiveStar: 0
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.sortReviewsByStar = this.sortReviewsByStar.bind(this);
    this.getAllReviews = this.getAllReviews.bind(this);
    this.numberOfStars = this.numberOfStars.bind(this);
  }

  componentDidMount() {
    this.getAllReviews();
  }

  getAllReviews() {
    // get all the reviews from db
    return axios
      .get("/kontiki/reviews")
      .then(data => {
        this.setState(
          {
            allReviews: data.data
          },
          () => {
            this.numberOfStars();
          }
        );
      })
      .catch(err => {
        console.log(err);
      });
  }

  sortReviewsByStar() {
    // sorts reviews by star when clicked
    let id = document.getElementById("starsRate").value;
    if (id === "MOST RECENT") {
      this.getAllReviews();
    } else {
      return axios
        .get(`/kontiki/stars/${id}`)
        .then(data => {
          this.setState({
            allReviews: data.data
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  numberOfStars() {
    // get reviews based on star numbers
    for (let i = 0; i < this.state.allReviews.length; i++) {
      if (this.state.allReviews[i].star_rating === 1) {
        this.setState({
          oneStar: (this.state.oneStar += 1)
        });
      } else if (this.state.allReviews[i].star_rating === 2) {
        this.setState({
          twoStar: (this.state.twoStar += 1)
        });
      } else if (this.state.allReviews[i].star_rating === 3) {
        this.setState({
          threeStar: (this.state.threeStar += 1)
        });
      } else if (this.state.allReviews[i].star_rating === 4) {
        this.setState({
          fourStar: (this.state.fourStar += 1)
        });
      } else {
        this.setState({
          fiveStar: (this.state.fiveStar += 1)
        });
      }
    }
  }

  toggleModal() {
    // when click on button, change the state
    this.setState({
      modalToggle: !this.state.modalToggle
    });
  }

  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1
    };
    let total =
      this.state.oneStar +
      this.state.twoStar * 2 +
      this.state.threeStar * 3 +
      this.state.fourStar * 4 +
      this.state.fiveStar * 5;
    let average = total / this.state.allReviews.length;
    let round = Math.round(average * 2) / 2;

    return (
      <div>
        <div className="reviewsTitle">REVIEWS</div>
        <div className="tourTitle">for Argentina & Brazil Experience</div>
        <br />
        <div>
          <Slider {...settings}>
            <div>
              <div>
                <div>{average || 0}</div>
                <div>
                  <StarRatings
                    rating={round || 0}
                    starRatedColor="gold"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="5px"
                  />
                </div>
                <div>{this.state.allReviews.length} independent reviews</div>
              </div>
            </div>
            <div>
              <div>
                <div>Filter by traveller’s rating</div>
                <div>
                  <div>★ 5 {this.state.fiveStar}</div>
                  <div>★ 4 {this.state.fourStar}</div>
                  <div>★ 3 {this.state.threeStar}</div>
                  <div>★ 2 {this.state.twoStar}</div>
                  <div>★ 1 {this.state.oneStar}</div>
                </div>
              </div>
            </div>
            {this.state.allReviews.length > 0
              ? this.state.allReviews.slice(0, 20).map((review, index) => {
                  return (
                    <div key={index}>
                      <div style={{ fontWeight: "bold" }}>{review.name}</div>
                      <StarRatings
                        rating={review.star_rating}
                        starRatedColor="gold"
                        numberOfStars={5}
                        starDimension="20px"
                        starSpacing="5px"
                      />
                      <div>Traveled {review.traveled_date}</div>
                      <div style={{ fontWeight: "bold" }}>{review.title}</div>
                      <div>{review.description}</div>
                      <br />
                    </div>
                  );
                })
              : null}
          </Slider>
        </div>
        <Popup
          show={this.state.modalToggle}
          handleClose={this.toggleModal}
          reviews={this.state.allReviews}
          handleSortChange={this.sortReviewsByStar}
          getAllReviews={this.getAllReviews}
          one={this.state.oneStar}
          two={this.state.twoStar}
          three={this.state.threeStar}
          four={this.state.fourStar}
          five={this.state.fiveStar}
        />
        <br />
        <br />
        <div align="center">
          <button className="readAllButton" onClick={this.toggleModal}>
            READ ALL REVIEWS
          </button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
