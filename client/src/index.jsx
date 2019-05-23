import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Popup from "./components/popup.jsx";
import SliderComponent from "./components/sliderComponent.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allReviews: [], // all the reviews
      displayReviews: [], // display based on stars
      modalToggle: false, // state of modal button popup
      selected: 0, // selected option value
      oneStar: 0,
      twoStar: 0,
      threeStar: 0,
      fourStar: 0,
      fiveStar: 0
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.getAllReviews = this.getAllReviews.bind(this);
    this.numberOfStars = this.numberOfStars.bind(this);
    this.handleStarChange = this.handleStarChange.bind(this);
    this.backgroundColor = this.backgroundColor.bind(this);
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
            allReviews: data.data,
            displayReviews: data.data,
            selected: 0
          },
          () => {
            if (this.state.oneStar === 0 && this.state.fiveStar === 0) {
              this.numberOfStars();
            }
          }
        );
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleStarChange(e) {
    // sorts reviews by star onchange or onclick
    let id = e.target.id;
    if (!Number(id)) {
      id = document.getElementById("starsRate").value;
    }

    return axios
      .get(`/kontiki/stars/${id}`)
      .then(data => {
        if (this.state.selected === id || id === "0") {
          this.getAllReviews();
        } else {
          this.setState({
            displayReviews: data.data,
            selected: id
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  backgroundColor(selected) {
    // change background when clicked on stars
    if (this.state.selected === selected) {
      return { background: "#FFC432" };
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
    return (
      <div>
        <div className="outerBackground" />
        <div className="mainBox">
          <div className="title">
            <div className="reviewsTitle">REVIEWS</div>
            <div className="tourTitle">for Argentina & Brazil Experience</div>
          </div>
          {this.state.allReviews.length > 0 ? (
            <SliderComponent
              reviews={this.state.allReviews}
              displayReviews={this.state.displayReviews}
              one={this.state.oneStar}
              two={this.state.twoStar}
              three={this.state.threeStar}
              four={this.state.fourStar}
              five={this.state.fiveStar}
              handleStarChange={this.handleStarChange}
              backgroundColor={this.backgroundColor}
            />
          ) : null}
          <br />
          <div align="center">
            <button className="readAllButton" onClick={this.toggleModal}>
              READ ALL REVIEWS
            </button>
          </div>
          <Popup
            show={this.state.modalToggle}
            handleClose={this.toggleModal}
            reviews={this.state.allReviews}
            displayReviews={this.state.displayReviews}
            getAllReviews={this.getAllReviews}
            one={this.state.oneStar}
            two={this.state.twoStar}
            three={this.state.threeStar}
            four={this.state.fourStar}
            five={this.state.fiveStar}
            handleStarChange={this.handleStarChange}
            selected={this.state.selected}
            backgroundColor={this.backgroundColor}
          />
        </div>
        <div className="outerBackground" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
